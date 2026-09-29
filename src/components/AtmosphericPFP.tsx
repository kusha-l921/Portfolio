'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function AtmosphericPFP() {
  const { theme } = useTheme();

  const isLight = theme === 'light';
  const imageSrc = isLight ? '/images/light_pfp.jpg' : '/images/inverted_pfp(1).jpeg';

  return (
    <div
      className="atmospheric-pfp-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 'clamp(0.5rem, 3vw, 3.5rem)',
        right: 'clamp(-2vw, 2vw, 6vw)',
        width: 'clamp(460px, 42vw, 750px)',
        height: 'clamp(440px, 40vw, 720px)',
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
            'radial-gradient(ellipse at 55% 48%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0.3) 85%, transparent 96%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 55% 48%, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0.3) 85%, transparent 96%)',
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 90vw, 45vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center right',
            mixBlendMode: isLight ? 'multiply' : 'screen',
            opacity: isLight ? 0.20 : 0.24,
            filter: isLight ? 'contrast(1.15)' : 'contrast(1.2) brightness(1.05)',
            transition: 'opacity 0.3s ease, filter 0.3s ease',
          }}
        />
      </div>
    </div>
  );
}
