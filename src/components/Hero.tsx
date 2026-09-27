'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="me"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '640px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Left Hero Content: ~42-45% width on desktop */}
        <div className="hero-content" style={{ maxWidth: '580px', width: '100%' }}>
          {/* Terminal prompt label */}
          <div className="terminal-label" style={{ marginBottom: '1rem' }}>
            <span>{PERSONAL_DATA.terminalPrompt}</span>
          </div>

          {/* Main Name Heading with terminal cursor */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                lineHeight: 1.08,
              }}
            >
              {PERSONAL_DATA.fullName}
              <span className="cursor-blink" aria-hidden="true" />
            </h1>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#8A8A8A',
                marginTop: '0.45rem',
                fontWeight: 400,
                letterSpacing: '-0.01em',
              }}
            >
              {PERSONAL_DATA.subtitles}
            </p>
          </div>

          {/* Strong statement */}
          <h2
            style={{
              fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
              fontWeight: 600,
              color: '#EEEEEE',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              marginTop: '1.25rem',
              maxWidth: '560px',
            }}
          >
            Building{' '}
            <span
              style={{
                color: '#FFFFFF',
                textDecoration: 'underline',
                textDecorationColor: '#3A3A3A',
                textUnderlineOffset: '5px',
              }}
            >
              intelligent systems
            </span>{' '}
            for a better tomorrow.
          </h2>

          {/* Supporting paragraph */}
          <p
            style={{
              fontSize: '0.98rem',
              color: '#969696',
              lineHeight: 1.7,
              marginTop: '1rem',
              maxWidth: '520px',
            }}
          >
            {PERSONAL_DATA.supportingParagraph}
          </p>

          {/* Metadata pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.15rem',
            }}
          >
            <div className="pill">
              <span style={{ color: '#666666' }}>loc:</span>
              <span>{PERSONAL_DATA.location}</span>
            </div>
            <div className="pill">
              <span style={{ color: '#666666' }}>edu:</span>
              <span>{PERSONAL_DATA.college}</span>
            </div>
            <div className="pill">
              <span style={{ color: '#666666' }}>deg:</span>
              <span>{PERSONAL_DATA.degree}</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginTop: '1.5rem',
            }}
          >
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <span style={{ fontSize: '1rem', lineHeight: 1 }}>↓</span>
            </a>
            <a
              href={PERSONAL_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Download Resume</span>
              <span style={{ fontSize: '0.95rem', lineHeight: 1 }}>↗</span>
            </a>
          </div>

          {/* Terminal mini-widget: Currently Working On */}
          <div
            style={{
              marginTop: '1.25rem',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              backgroundColor: '#0D0D0D',
              border: '1px solid #1C1C1C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: '460px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '22px',
                  height: '22px',
                  borderRadius: '4px',
                  backgroundColor: '#171717',
                  color: '#A5A5A5',
                  fontSize: '0.75rem',
                }}
              >
                ⚙
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="font-mono" style={{ fontSize: '0.68rem', color: '#666666' }}>
                  &gt; currently_working_on
                </span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: '#EEEEEE',
                  }}
                >
                  {PERSONAL_DATA.currentlyBuilding}
                </span>
              </div>
            </div>

            {/* Minimal SVG Sparkline */}
            <div style={{ opacity: 0.75 }}>
              <svg width="74" height="24" viewBox="0 0 74 24" fill="none">
                <path
                  d="M1 16L12 16L18 8L24 19L30 5L36 17L44 11L50 15L58 7L64 16L73 16"
                  stroke="#8A8A8A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.8rem',
              color: '#666666',
              marginTop: '1rem',
            }}
          >
            <a
              href={PERSONAL_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              github ↗
            </a>
            <span style={{ color: '#252525' }}>·</span>
            <a
              href={PERSONAL_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              linkedin ↗
            </a>
            <span style={{ color: '#252525' }}>·</span>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              email ↗
            </a>
          </div>

          {/* Personal Meta Data (Cleanly separated from card container) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.25rem',
              marginTop: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid #161616',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
            }}
          >
            <div>
              <span style={{ color: '#555555', display: 'block', marginBottom: '0.2rem' }}>
                &gt; specialization
              </span>
              <span style={{ color: '#B5B5B5', fontWeight: 500 }}>
                {PERSONAL_DATA.specialization}
              </span>
            </div>

            <div>
              <span style={{ color: '#555555', display: 'block', marginBottom: '0.2rem' }}>
                &gt; dev_loop()
              </span>
              <span style={{ color: '#8A8A8A' }}>
                {PERSONAL_DATA.devLoop}
              </span>
            </div>

            <div>
              <span style={{ color: '#555555', display: 'block', marginBottom: '0.2rem' }}>
                &gt; daily_focus
              </span>
              <span style={{ color: '#8A8A8A' }}>
                learn() → build() [78%]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Integrated Editorial Anime Artwork (No Card, No Border, Fades Into Background) */}
      <div className="hero-artwork-wrapper" aria-hidden="true">
        <div className="hero-artwork-inner">
          <Image
            src={PERSONAL_DATA.animeArtwork}
            alt="Kushal Patel Editorial Illustration"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className="hero-artwork-image"
          />
          <div className="hero-artwork-quote">
            &ldquo;{PERSONAL_DATA.quote}&rdquo;
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Desktop Hero: Artwork occupies remaining 48-55% width, absolutely positioned, edge-feathered */
        .hero-artwork-wrapper {
          position: absolute;
          right: clamp(2%, 5vw, 8%);
          top: 50%;
          transform: translateY(-50%);
          width: clamp(480px, 46vw, 720px);
          height: clamp(460px, 44vw, 660px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-artwork-inner {
          position: relative;
          width: 100%;
          height: 100%;
          /* Feather edges into deep dark background - zero rectangular boundary */
          mask-image: radial-gradient(
            ellipse at 54% 48%,
            rgba(0, 0, 0, 1) 32%,
            rgba(0, 0, 0, 0.75) 52%,
            rgba(0, 0, 0, 0.25) 70%,
            transparent 88%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at 54% 48%,
            rgba(0, 0, 0, 1) 32%,
            rgba(0, 0, 0, 0.75) 52%,
            rgba(0, 0, 0, 0.25) 70%,
            transparent 88%
          );
        }

        .hero-artwork-image {
          object-fit: contain !important;
          object-position: center right !important;
          filter: grayscale(100%) contrast(1.14) brightness(0.92) !important;
          opacity: 0.92;
          transition: filter 0.4s ease, opacity 0.4s ease;
        }

        .hero-artwork-quote {
          position: absolute;
          bottom: 8%;
          left: 14%;
          font-size: 0.85rem;
          font-style: italic;
          color: rgba(238, 238, 238, 0.65);
          font-family: Georgia, serif;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
          pointer-events: none;
        }

        /* Responsive Tablet & Mobile Stacking */
        @media (max-width: 900px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-content {
            max-width: 100% !important;
          }
          .hero-artwork-wrapper {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 520px !important;
            height: 380px !important;
            margin: 2.5rem auto 0 auto !important;
          }
          .hero-artwork-inner {
            mask-image: radial-gradient(
              ellipse at 50% 50%,
              rgba(0, 0, 0, 1) 30%,
              rgba(0, 0, 0, 0.6) 55%,
              transparent 85%
            ) !important;
            -webkit-mask-image: radial-gradient(
              ellipse at 50% 50%,
              rgba(0, 0, 0, 1) 30%,
              rgba(0, 0, 0, 0.6) 55%,
              transparent 85%
            ) !important;
          }
          .hero-artwork-image {
            object-position: center !important;
          }
          .hero-artwork-quote {
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: 4% !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </section>
  );
}
