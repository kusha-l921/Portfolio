'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
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
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.pill') ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
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

  return (
    <>
      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '5px',
          height: '5px',
          backgroundColor: '#FFFFFF',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
      {/* Outer Ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-all duration-200"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovered ? '36px' : '20px',
          height: isHovered ? '36px' : '20px',
          border: '1px solid rgba(255, 255, 255, 0.35)',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
        }}
      />
    </>
  );
}
