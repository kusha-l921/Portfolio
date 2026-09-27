'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import CustomCursor from '@/components/navigation/CustomCursor';
import ScrollProgress from '@/components/navigation/ScrollProgress';
import TerminalDrawer from '@/components/terminal/TerminalDrawer';
import SystemInitLoader from '@/components/loading/SystemInitLoader';

const GlobalBackgroundCanvas = dynamic(
  () => import('@/components/three/GlobalBackgroundCanvas'),
  { ssr: false }
);

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen loader in session
    const hasSeen = sessionStorage.getItem('kushal_portfolio_initialized');
    if (hasSeen === 'true') {
      setIsLoaded(true);
    }

    // Keyboard shortcut for terminal: Backquote (`) or Ctrl+K
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

  const handleInitComplete = () => {
    sessionStorage.setItem('kushal_portfolio_initialized', 'true');
    setIsLoaded(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-primary-text selection:bg-electric-blue/30 selection:text-white overflow-x-hidden">
      {/* System Initialization on first session visit */}
      {!isLoaded && <SystemInitLoader onComplete={handleInitComplete} />}

      {/* Subtle Global Background Grid & Constellation 3D Canvas */}
      <div className="fixed inset-0 bg-tech-grid opacity-25 pointer-events-none z-0" />
      <GlobalBackgroundCanvas />

      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Right Edge Scroll Progress */}
      <ScrollProgress />

      {/* Floating Navigation */}
      <Navbar
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Content Area */}
      <main className="relative z-10">{children}</main>

      {/* Minimal Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Secondary Interactive Terminal HUD */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
