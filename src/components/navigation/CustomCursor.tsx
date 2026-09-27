'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<'dot' | 'hover' | 'view'>('dot');
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointer devices without reduced motion
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="open"]') || target.closest('.light-sweep-card')) {
        setMode('view');
      } else if (target.closest('button, a, input, textarea, [role="button"]')) {
        setMode('hover');
      } else {
        setMode('dot');
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out select-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Tiny Blue Dot (Requirement 32) */}
      {mode === 'dot' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_#2F9BFF]" />
      )}

      {/* Slightly Expanded Interactive Reticle */}
      {mode === 'hover' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-accent/60 bg-accent/10 transition-all duration-150 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-accent" />
        </div>
      )}

      {/* Project Card Tiny VIEW → Indicator (Requirement 32) */}
      {mode === 'view' && (
        <div className="-translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-[#161D26] border border-accent/70 text-[9px] font-mono text-accent font-semibold tracking-wider shadow-sm flex items-center gap-1">
          <span>VIEW →</span>
        </div>
      )}
    </div>
  );
}
