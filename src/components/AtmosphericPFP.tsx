'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function AtmosphericPFP() {
  const { theme } = useTheme();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number | null>(null);

  const isLight = theme === 'light';
  const imageSrc = isLight ? '/images/light_pfp.jpg' : '/images/inverted_pfp(1).jpeg';

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Subtle 6-12px parallax range relative to viewport center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const factorX = (e.clientX - centerX) / centerX;
      const factorY = (e.clientY - centerY) / centerY;

      targetOffset.current = {
        x: factorX * 9, // ~9px subtle horizontal shift
        y: factorY * 7, // ~7px subtle vertical shift
      };
    };

    const updateParallax = () => {
      // Smooth interpolation (lerp)
      currentX += (targetOffset.current.x - currentX) * 0.08;
      currentY += (targetOffset.current.y - currentY) * 0.08;

      setOffset({ x: currentX, y: currentY });
      animFrame.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrame.current = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <div
      className="atmospheric-pfp-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(1rem, 4vw, 4.5rem)',
        // Positioned toward center: center of artwork sits around 65-70% of viewport width
        right: 'clamp(6%, 11vw, 15%)',
        width: 'clamp(440px, 46vw, 720px)',
        height: 'clamp(460px, 46vw, 760px)',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        overflow: 'hidden',
        transform: `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maskImage:
            'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 36%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 80%, transparent 96%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 68% 68% at 50% 50%, rgba(0,0,0,1) 36%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 80%, transparent 96%)',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 90vw, 48vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center center',
            mixBlendMode: isLight ? 'multiply' : 'screen',
            opacity: isLight ? 0.32 : 0.38,
            filter: isLight ? 'contrast(1.16) brightness(0.98)' : 'contrast(1.22) brightness(1.08)',
            transition: 'opacity 0.3s ease, filter 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
