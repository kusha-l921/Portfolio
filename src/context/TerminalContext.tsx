'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type DockPosition = 'floating' | 'left' | 'right' | 'bottom' | 'top';

export interface FloatingPosState {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TerminalContextType {
  isOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
  dock: DockPosition;
  setDock: (dock: DockPosition) => void;
  dockWidth: number;
  setDockWidth: (w: number) => void;
  dockHeight: number;
  setDockHeight: (h: number) => void;
  floatingPos: FloatingPosState;
  setFloatingPos: React.Dispatch<React.SetStateAction<FloatingPosState>>;
  isDragging: boolean;
  setIsDragging: (d: boolean) => void;
}

const TerminalContext = createContext<TerminalContextType>({
  isOpen: false,
  openTerminal: () => {},
  closeTerminal: () => {},
  toggleTerminal: () => {},
  dock: 'bottom',
  setDock: () => {},
  dockWidth: 500,
  setDockWidth: () => {},
  dockHeight: 320,
  setDockHeight: () => {},
  floatingPos: { x: 80, y: 100, width: 720, height: 420 },
  setFloatingPos: () => {},
  isDragging: false,
  setIsDragging: () => {},
});

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dock, setDock] = useState<DockPosition>('bottom');
  const [dockWidth, setDockWidth] = useState(500);
  const [dockHeight, setDockHeight] = useState(320);
  const [isDragging, setIsDragging] = useState(false);
  const [floatingPos, setFloatingPos] = useState<FloatingPosState>({
    x: 80,
    y: 100,
    width: 720,
    height: 420,
  });

  // Load persisted geometry on client mount if available
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const saved = localStorage.getItem('kushal_terminal_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.dock) setDock(parsed.dock);
        if (parsed.dockWidth) setDockWidth(parsed.dockWidth);
        if (parsed.dockHeight) setDockHeight(parsed.dockHeight);
        if (parsed.floatingPos) {
          // Constrain within viewport bounds
          const maxX = Math.max(20, window.innerWidth - 300);
          const maxY = Math.max(20, window.innerHeight - 200);
          setFloatingPos({
            x: Math.min(Math.max(20, parsed.floatingPos.x), maxX),
            y: Math.min(Math.max(20, parsed.floatingPos.y), maxY),
            width: Math.min(parsed.floatingPos.width || 720, window.innerWidth - 40),
            height: Math.min(parsed.floatingPos.height || 420, window.innerHeight - 60),
          });
        }
      } else {
        // Initial responsive centering for floating
        setFloatingPos({
          x: Math.max(20, Math.round((window.innerWidth - 720) / 2)),
          y: Math.max(40, Math.round((window.innerHeight - 440) / 2)),
          width: Math.min(720, window.innerWidth - 40),
          height: Math.min(420, window.innerHeight - 80),
        });
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Persist geometry changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(
        'kushal_terminal_state',
        JSON.stringify({ dock, dockWidth, dockHeight, floatingPos })
      );
    } catch {
      // Ignore
    }
  }, [dock, dockWidth, dockHeight, floatingPos]);

  const openTerminal = useCallback(() => setIsOpen(true), []);
  const closeTerminal = useCallback(() => setIsOpen(false), []);
  const toggleTerminal = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl + ` or Cmd + `
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Check for 't' or 'T' quick shortcut when not typing in form/editable inputs
      if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeEl = document.activeElement;
        const tagName = activeEl?.tagName.toLowerCase();
        const isEditable =
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          activeEl?.getAttribute('contenteditable') === 'true';

        if (!isEditable) {
          e.preventDefault();
          setIsOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TerminalContext.Provider
      value={{
        isOpen,
        openTerminal,
        closeTerminal,
        toggleTerminal,
        dock,
        setDock,
        dockWidth,
        setDockWidth,
        dockHeight,
        setDockHeight,
        floatingPos,
        setFloatingPos,
        isDragging,
        setIsDragging,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  return useContext(TerminalContext);
}
