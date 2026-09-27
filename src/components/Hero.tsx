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
        minHeight: '660px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="hero-container">
        {/* Left Hero Content: ~42-45% width on desktop */}
        <div className="hero-content">
          {/* Terminal prompt label */}
          <div className="terminal-label" style={{ marginBottom: '1rem' }}>
            <span>{PERSONAL_DATA.terminalPrompt}</span>
          </div>

          {/* Main Name Heading with terminal cursor */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                lineHeight: 1.06,
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
              fontSize: 'clamp(1.35rem, 2.5vw, 1.95rem)',
              fontWeight: 600,
              color: '#EEEEEE',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              marginTop: '1.35rem',
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
              fontSize: '1rem',
              color: '#969696',
              lineHeight: 1.7,
              marginTop: '1rem',
              maxWidth: '540px',
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
              marginTop: '1.25rem',
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
              marginTop: '1.75rem',
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

          {/* Social Links */}
          <div
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.82rem',
              color: '#666666',
              marginTop: '1.35rem',
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
        </div>
      </div>

      {/* Integrated Anime Artwork (Large visual scale, closer to text, blends into dark background) */}
      <div className="hero-artwork-wrapper" aria-hidden="true">
        <div className="hero-artwork-inner">
          <Image
            src="/images/inverted_pfp.jpeg"
            alt="Kushal Patel Anime Illustration"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className="hero-artwork-image"
          />
        </div>
      </div>

      <style jsx global>{`
        /* Hero Container: Begins 40-60px from viewport edge on desktop */
        .hero-container {
          width: 94vw;
          max-width: 1560px;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(12px, 1.5vw, 24px);
          padding-right: clamp(12px, 1.5vw, 24px);
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 580px;
          width: 100%;
          position: relative;
          z-index: 3;
        }

        /* Desktop Hero: Artwork spans 48-55vw, positioned closer to text */
        .hero-artwork-wrapper {
          position: absolute;
          right: clamp(1vw, 2.5vw, 4vw);
          top: 50%;
          transform: translateY(-50%);
          width: clamp(560px, 50vw, 840px);
          height: clamp(540px, 48vw, 760px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-artwork-inner {
          position: relative;
          width: 100%;
          height: 100%;
          /* Smoothly soften outer edges into deep background */
          mask-image: radial-gradient(
            ellipse at 52% 50%,
            rgba(0, 0, 0, 1) 45%,
            rgba(0, 0, 0, 0.85) 65%,
            rgba(0, 0, 0, 0.3) 84%,
            transparent 96%
          );
          -webkit-mask-image: radial-gradient(
            ellipse at 52% 50%,
            rgba(0, 0, 0, 1) 45%,
            rgba(0, 0, 0, 0.85) 65%,
            rgba(0, 0, 0, 0.3) 84%,
            transparent 96%
          );
        }

        .hero-artwork-image {
          object-fit: contain !important;
          object-position: center right !important;
          mix-blend-mode: screen !important;
          filter: contrast(1.15) brightness(1.0) !important;
          opacity: 0.96;
        }

        /* Responsive Tablet & Mobile Stacking */
        @media (max-width: 900px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-container {
            width: 100% !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
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
              rgba(0, 0, 0, 1) 40%,
              rgba(0, 0, 0, 0.7) 65%,
              transparent 90%
            ) !important;
            -webkit-mask-image: radial-gradient(
              ellipse at 50% 50%,
              rgba(0, 0, 0, 1) 40%,
              rgba(0, 0, 0, 0.7) 65%,
              transparent 90%
            ) !important;
          }
          .hero-artwork-image {
            object-position: center !important;
          }
        }
      `}</style>
    </section>
  );
}
