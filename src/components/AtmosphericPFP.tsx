'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function AtmosphericPFP() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number | null>(null);
  const isRunning = useRef(false);

  const isLight = theme === 'light';
  const imageSrc = isLight ? '/images/light_pfp.jpg' : '/images/inverted_pfp(1).jpeg';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const updateParallax = () => {
      const diffX = targetOffset.current.x - currentOffset.current.x;
      const diffY = targetOffset.current.y - currentOffset.current.y;

      currentOffset.current.x += diffX * 0.08;
      currentOffset.current.y += diffY * 0.08;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${currentOffset.current.x.toFixed(2)}px, ${currentOffset.current.y.toFixed(2)}px, 0)`;
      }

      // Keep running while there is perceptible motion (> 0.02px)
      if (Math.abs(diffX) > 0.02 || Math.abs(diffY) > 0.02) {
        animFrame.current = requestAnimationFrame(updateParallax);
      } else {
        isRunning.current = false;
        animFrame.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const factorX = (e.clientX - centerX) / centerX;
      const factorY = (e.clientY - centerY) / centerY;

      targetOffset.current = {
        x: factorX * 9,
        y: factorY * 7,
      };

      if (!isRunning.current) {
        isRunning.current = true;
        animFrame.current = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrame.current) {
        cancelAnimationFrame(animFrame.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="atmospheric-pfp-container"
        aria-hidden="true"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        <div
          className="atmospheric-pfp-inner"
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
            sizes="(max-width: 900px) 75vw, 48vw"
            className="atmospheric-pfp-image"
            style={{
              objectFit: 'contain',
              objectPosition: 'center center',
              mixBlendMode: isLight ? 'multiply' : 'screen',
              filter: isLight ? 'contrast(1.16) brightness(0.98)' : 'contrast(1.22) brightness(1.08)',
              transition: 'opacity 0.3s ease, filter 0.3s ease',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        /* Desktop Default (Preserved Exactly) */
        .atmospheric-pfp-container {
          top: clamp(1rem, 4vw, 4.5rem);
          right: clamp(6%, 11vw, 15%);
          width: clamp(440px, 46vw, 720px);
          height: clamp(460px, 46vw, 760px);
        }
        :global(.atmospheric-pfp-image) {
          opacity: ${isLight ? 0.32 : 0.38} !important;
        }

        /* Tablet Responsive (<= 860px) */
        @media (max-width: 860px) {
          .atmospheric-pfp-container {
            top: 1rem !important;
            right: 0 !important;
            width: min(72vw, 360px) !important;
            height: min(72vw, 360px) !important;
          }
          :global(.atmospheric-pfp-image) {
            opacity: ${isLight ? 0.18 : 0.22} !important;
          }
        }

        /* Compact & Small Mobile (<= 480px) */
        @media (max-width: 480px) {
          .atmospheric-pfp-container {
            top: 1.5rem !important;
            right: 0 !important;
            width: min(68vw, 280px) !important;
            height: min(68vw, 280px) !important;
          }
          :global(.atmospheric-pfp-image) {
            opacity: ${isLight ? 0.12 : 0.15} !important;
          }
        }
      `}</style>
    </>
  );
}
