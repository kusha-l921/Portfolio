'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'normal' | 'hover' | 'view' | 'open'>('normal');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!finePointer || reducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"], [data-cursor]'
      ) as HTMLElement | null;

      if (closestInteractive) {
        const customType = closestInteractive.getAttribute('data-cursor');
        if (customType === 'view') {
          setCursorType('view');
        } else if (customType === 'open') {
          setCursorType('open');
        } else {
          setCursorType('hover');
        }
      } else if (target.closest('canvas')) {
        setCursorType('view');
      } else {
        setCursorType('normal');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {cursorType === 'normal' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-electric-blue shadow-[0_0_8px_#1687FF]" />
      )}

      {cursorType === 'hover' && (
        <div className="-translate-x-1/2 -translate-y-1/2 w-7 h-7 border border-bright-blue/80 rounded-sm bg-electric-blue/10 backdrop-blur-[1px] flex items-center justify-center transition-all duration-150">
          <div className="w-1 h-1 bg-electric-blue rounded-full" />
        </div>
      )}

      {cursorType === 'view' && (
        <div className="-translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-sm bg-panel-elevated/90 border border-electric-blue/70 text-[9px] font-mono text-bright-blue font-bold tracking-wider shadow-[0_0_12px_rgba(22,135,255,0.4)] whitespace-nowrap flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-electric-blue animate-ping" />
          VIEW
        </div>
      )}

      {cursorType === 'open' && (
        <div className="-translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-sm bg-panel-elevated/90 border border-success/70 text-[9px] font-mono text-success font-bold tracking-wider shadow-[0_0_12px_rgba(50,213,131,0.4)] whitespace-nowrap flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-success animate-ping" />
          OPEN
        </div>
      )}
    </div>
  );
}
