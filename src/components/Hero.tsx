'use client';

import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import PortfolioTerminal from './PortfolioTerminal';

export default function Hero() {
  return (
    <section
      id="me"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-flex-wrapper">
          {/* Main Hero Identity Content: ~65-70% width */}
          <div className="hero-main-content">
            {/* Terminal prompt label */}
            <div className="terminal-label" style={{ marginBottom: '1.25rem' }}>
              <span>{PERSONAL_DATA.terminalPrompt}</span>
            </div>

            {/* Kushal Patel (Primary visual focus, 64-80px desktop) */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.035em',
                  color: 'var(--text-white)',
                  lineHeight: 1.05,
                }}
              >
                {PERSONAL_DATA.fullName}
                <span className="cursor-blink" aria-hidden="true" />
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                  color: 'var(--text-dim)',
                  marginTop: '0.5rem',
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
                fontSize: 'clamp(1.4rem, 2.6vw, 2.15rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                marginTop: '1.5rem',
                maxWidth: '680px',
              }}
            >
              Building{' '}
              <span
                style={{
                  color: 'var(--text-white)',
                  textDecoration: 'underline',
                  textDecorationColor: 'var(--border-strong)',
                  textUnderlineOffset: '6px',
                }}
              >
                intelligent systems
              </span>{' '}
              for a better tomorrow.
            </h2>

            {/* Supporting paragraph */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginTop: '1.15rem',
                maxWidth: '640px',
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
                marginTop: '1.5rem',
              }}
            >
              <div className="pill">
                <span style={{ color: 'var(--text-muted)' }}>loc:</span>
                <span>{PERSONAL_DATA.location}</span>
              </div>
              <div className="pill">
                <span style={{ color: 'var(--text-muted)' }}>edu:</span>
                <span>{PERSONAL_DATA.college}</span>
              </div>
              <div className="pill">
                <span style={{ color: 'var(--text-muted)' }}>deg:</span>
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
                gap: '1.35rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginTop: '1.5rem',
              }}
            >
              <a
                href={PERSONAL_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                github ↗
              </a>
              <span style={{ color: 'var(--border-strong)' }}>·</span>
              <a
                href={PERSONAL_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                linkedin ↗
              </a>
              <span style={{ color: 'var(--border-strong)' }}>·</span>
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
              >
                email ↗
              </a>
            </div>
          </div>

          {/* Secondary Detail: Small Floating Terminal on the far right */}
          <div className="hero-side-terminal" style={{ zIndex: 20 }}>
            <PortfolioTerminal />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-flex-wrapper {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: clamp(2rem, 5vw, 6rem);
          width: 100%;
        }

        .hero-main-content {
          flex: 1 1 65%;
          max-width: 720px;
          min-width: 0;
        }

        .hero-side-terminal {
          flex: 0 0 auto;
          width: clamp(280px, 24vw, 340px);
          display: flex;
          justifyContent: flex-end;
        }

        /* Tablet & Mobile Layout */
        @media (max-width: 960px) {
          .hero-flex-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2.5rem !important;
          }
          .hero-main-content {
            max-width: 100% !important;
          }
          .hero-side-terminal {
            width: 100% !important;
            max-width: 340px !important;
            justifyContent: flex-start !important;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
