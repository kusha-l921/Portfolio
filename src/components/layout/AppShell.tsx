'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import CustomCursor from '@/components/navigation/CustomCursor';
import ScrollProgress from '@/components/navigation/ScrollProgress';
import TerminalDrawer from '@/components/terminal/TerminalDrawer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Keyboard shortcut for developer terminal: Backquote (`) or Ctrl+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) ||
        (e.ctrlKey && e.key === 'k')
      ) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary-text font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-white">
      {/* Very subtle minimal grid background (almost invisible - Requirement 11) */}
      <div className="fixed inset-0 bg-minimal-grid pointer-events-none z-0" />

      {/* Tiny precision cursor */}
      <CustomCursor />

      {/* Top scroll progress line */}
      <ScrollProgress />

      {/* Clean Navbar (Requirement 7) */}
      <Navbar
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Content Area */}
      <main className="relative z-10">{children}</main>

      {/* Minimal Footer (Requirement 27 & 48) */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive Developer Terminal (Requirement 27) */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
