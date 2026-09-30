'use client';

import { useEffect } from 'react';

export default function CardPointerLighting() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.('.card') as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      target.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return null;
}
