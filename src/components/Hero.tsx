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
        minHeight: '580px',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      <div className="hero-container">
        <div className="hero-row">
          {/* LEFT: Personal introduction (~55-60%) */}
          <div className="hero-content">
            {/* Terminal prompt label */}
            <div className="terminal-label" style={{ marginBottom: '1rem' }}>
              <span>{PERSONAL_DATA.terminalPrompt}</span>
            </div>

            {/* Main Name Heading with terminal cursor */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
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
                fontSize: 'clamp(1.3rem, 2.4vw, 1.85rem)',
                fontWeight: 600,
                color: '#EEEEEE',
                letterSpacing: '-0.02em',
                lineHeight: 1.32,
                marginTop: '1.25rem',
                maxWidth: '600px',
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
                lineHeight: 1.68,
                marginTop: '1rem',
                maxWidth: '560px',
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
                marginTop: '1.65rem',
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

          {/* RIGHT: Compact Interactive Terminal (~30-35%) */}
          <div className="hero-terminal-col">
            <PortfolioTerminal />
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Hero Container: Begins 40-60px from viewport edge on desktop */
        .hero-container {
          width: 94vw;
          max-width: 1560px;
          margin-left: auto;
          margin-right: auto;
          padding-left: clamp(16px, 3vw, 48px);
          padding-right: clamp(16px, 3vw, 48px);
          position: relative;
          z-index: 2;
        }

        .hero-row {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: clamp(2rem, 4.5vw, 4.5rem);
          width: 100%;
        }

        .hero-content {
          flex: 1 1 58%;
          max-width: 640px;
          min-width: 0;
        }

        .hero-terminal-col {
          flex: 0 0 auto;
          width: clamp(380px, 34vw, 460px);
          height: 310px;
          display: flex;
          flex-direction: column;
        }

        .hero-terminal-col .portfolio-terminal-window {
          height: 100%;
        }

        /* Responsive Tablet & Mobile Stacking */
        @media (max-width: 960px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .hero-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2.5rem !important;
          }
          .hero-content {
            max-width: 100% !important;
          }
          .hero-terminal-col {
            width: 100% !important;
            max-width: 420px !important;
            height: 290px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
