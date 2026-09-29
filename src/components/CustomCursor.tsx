'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop without reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.id === 'custom-cursor-dot' || target.id === 'custom-cursor-ring') return;

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.pill') ||
        target.closest('[role="button"]') ||
        target.closest('.project-action-btn')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;

    const followCursor = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  const isLight = theme === 'light';

  return (
    <>
      {/* Inner Dot */}
      <div
        id="custom-cursor-dot"
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: isLight ? '#111111' : '#FFFFFF',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 9999,
          transition: 'transform 0.05s ease',
        }}
      />
      {/* Outer Ring */}
      <div
        id="custom-cursor-ring"
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '36px' : '20px',
          height: isHovered ? '36px' : '20px',
          borderRadius: '50%',
          border: isLight
            ? '1px solid rgba(0, 0, 0, 0.35)'
            : '1px solid rgba(255, 255, 255, 0.35)',
          backgroundColor: isHovered
            ? (isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.05)')
            : 'transparent',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 9998,
          transition: 'width 0.18s ease, height 0.18s ease, background-color 0.18s ease, border-color 0.18s ease',
        }}
      />
    </>
  );
}

