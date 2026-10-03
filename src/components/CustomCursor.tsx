'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);
  const isVisible = useRef(false);
  const rafId = useRef<number | null>(null);
  const isRafRunning = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    if (!dotEl || !ringEl) return;

    const updateRing = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.24;
      currentPos.current.y += dy * 0.24;

      ringEl.style.transform = `translate3d(${currentPos.current.x.toFixed(2)}px, ${currentPos.current.y.toFixed(2)}px, 0) translate(-50%, -50%)`;

      // Only continue loop if distance is perceptible (> 0.1px)
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId.current = requestAnimationFrame(updateRing);
      } else {
        isRafRunning.current = false;
        rafId.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        currentPos.current.x = e.clientX;
        currentPos.current.y = e.clientY;
        dotEl.style.opacity = '1';
        ringEl.style.opacity = '1';
      }

      // Direct GPU transform update for the inner dot - zero layout reflow
      dotEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

      // Wake up the trailing ring if it had gone to sleep
      if (!isRafRunning.current) {
        isRafRunning.current = true;
        rafId.current = requestAnimationFrame(updateRing);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.id === 'custom-cursor-dot' || target.id === 'custom-cursor-ring') return;

      const shouldHover = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.card') ||
        target.closest('.pill') ||
        target.closest('[role="button"]') ||
        target.closest('.project-action-btn')
      );

      if (shouldHover !== isHovered.current) {
        isHovered.current = shouldHover;
        if (shouldHover) {
          ringEl.classList.add('is-hovered');
        } else {
          ringEl.classList.remove('is-hovered');
        }
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      dotEl.style.opacity = '0';
      ringEl.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Inner Dot: GPU accelerated, zero reflow */}
      <div
        id="custom-cursor-dot"
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: isLight ? '#111111' : '#FFFFFF',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 99999,
          opacity: 0,
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Outer Ring: Smooth lag follower with auto-sleep RAF */}
      <div
        id="custom-cursor-ring"
        ref={ringRef}
        aria-hidden="true"
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: isLight
            ? '1px solid rgba(0, 0, 0, 0.35)'
            : '1px solid rgba(255, 255, 255, 0.35)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 99998,
          opacity: 0,
          willChange: 'transform, width, height, background-color, border-color',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
          transition: 'width 0.22s cubic-bezier(0.22, 1, 0.36, 1), height 0.22s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.22s ease, border-color 0.22s ease, opacity 0.2s ease',
        }}
      />
    </>
  );
}
