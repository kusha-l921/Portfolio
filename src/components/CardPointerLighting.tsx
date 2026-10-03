'use client';

import { useEffect } from 'react';

export default function CardPointerLighting() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    let lastX = 0;
    let lastY = 0;
    let currentTarget: HTMLElement | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      currentTarget = (e.target as HTMLElement | null)?.closest?.('.card') as HTMLElement | null;

      if (!ticking && currentTarget) {
        ticking = true;
        requestAnimationFrame(() => {
          if (currentTarget) {
            const rect = currentTarget.getBoundingClientRect();
            const x = lastX - rect.left;
            const y = lastY - rect.top;

            currentTarget.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
            currentTarget.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return null;
}
