'use client';

import React, { useEffect, useState } from 'react';
import { useTerminal } from '../context/TerminalContext';

interface AppWorkspaceShellProps {
  children: React.ReactNode;
}

export default function AppWorkspaceShell({ children }: AppWorkspaceShellProps) {
  const { isOpen, dock, dockWidth, dockHeight, isDragging } = useTerminal();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const shouldReflowSide = isOpen && isDesktop && (dock === 'left' || dock === 'right');
  const shouldReflowBottom = isOpen && dock === 'bottom';
  const shouldReflowTop = isOpen && dock === 'top';

  const shellStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: shouldReflowSide ? `calc(100vw - ${dockWidth}px)` : '100%',
    marginLeft: shouldReflowSide && dock === 'left' ? `${dockWidth}px` : 0,
    marginRight: shouldReflowSide && dock === 'right' ? `${dockWidth}px` : 0,
    paddingBottom: shouldReflowBottom ? `${dockHeight}px` : 0,
    paddingTop: shouldReflowTop ? `${dockHeight}px` : 0,
    transition: isDragging
      ? 'none'
      : 'width 280ms cubic-bezier(0.22, 1, 0.36, 1), margin 280ms cubic-bezier(0.22, 1, 0.36, 1), padding 280ms cubic-bezier(0.22, 1, 0.36, 1)',
    boxSizing: 'border-box',
  };

  return (
    <div
      className={`app-workspace-shell ${isOpen ? `terminal-dock-${dock}` : ''}`}
      style={shellStyle}
    >
      {children}
    </div>
  );
}
