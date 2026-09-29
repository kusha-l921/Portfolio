'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function AtmosphericPFP() {
  const { theme } = useTheme();

  const isLight = theme === 'light';
  const imageSrc = isLight ? '/images/pfp.jpeg' : '/images/inverted_pfp(1).jpeg';

  return (
    <div
      className="atmospheric-pfp-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(1rem, 4vw, 4rem)',
        right: 'clamp(-4vw, 2vw, 6vw)',
        width: 'clamp(480px, 48vw, 800px)',
        height: 'clamp(460px, 46vw, 760px)',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maskImage:
            'radial-gradient(ellipse at 54% 48%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 80%, transparent 92%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 54% 48%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 80%, transparent 92%)',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 90vw, 50vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center right',
            mixBlendMode: isLight ? 'multiply' : 'screen',
            opacity: isLight ? 0.09 : 0.13,
            filter: isLight ? 'contrast(1.1)' : 'contrast(1.15) brightness(1.0)',
            transition: 'opacity 0.3s ease, filter 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
