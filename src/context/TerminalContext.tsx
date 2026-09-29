'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface TerminalContextType {
  isOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType>({
  isOpen: false,
  openTerminal: () => {},
  closeTerminal: () => {},
  toggleTerminal: () => {},
});

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <TerminalContext.Provider value={{ isOpen, openTerminal, closeTerminal, toggleTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  return useContext(TerminalContext);
}
