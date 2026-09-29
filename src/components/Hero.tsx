'use client';

import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

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
        paddingTop: 'clamp(3.5rem, 7vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 6rem)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main Hero Identity Content */}
        <div className="hero-main-content">
          {/* Terminal prompt label */}
          <div className="terminal-label" style={{ marginBottom: '1.25rem' }}>
            <span>{PERSONAL_DATA.terminalPrompt}</span>
          </div>

          {/* Kushal Patel (Primary visual focus, 64-80px desktop) */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.8vw, 5rem)',
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
                marginTop: '0.6rem',
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
              fontSize: 'clamp(1.45rem, 2.7vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1.32,
              marginTop: '1.65rem',
              maxWidth: '820px',
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
              fontSize: 'clamp(1.02rem, 1.25vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              marginTop: '1.25rem',
              maxWidth: '740px',
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
              marginTop: '1.65rem',
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
              marginTop: '1.85rem',
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
              marginTop: '1.75rem',
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
      </div>

      <style jsx global>{`
        .hero-main-content {
          max-width: 820px;
          min-width: 0;
        }
      `}</style>
    </section>
  );
}
