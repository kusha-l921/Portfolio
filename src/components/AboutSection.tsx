'use client';

import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div className="terminal-label">
              <span>&gt; about.txt</span>
            </div>
            <span
              className="font-mono"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
            >
              01
            </span>
          </div>
          <h2 className="section-title">About</h2>
        </div>

        {/* Two-Column Clean Editorial Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Personal Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {ABOUT_DATA.bioParagraph1}
            </p>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.72,
              }}
            >
              {ABOUT_DATA.bioParagraph2}
            </p>

            {/* Core Interest Badges */}
            <div style={{ marginTop: '0.75rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '0.65rem',
                }}
              >
                // primary_domains
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ABOUT_DATA.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-card)',
                      color: 'var(--text-light)',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus & Profile Details */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '8px',
              padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Focus */}
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                focus
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {ABOUT_DATA.focus.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                currently_learning
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {ABOUT_DATA.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="font-mono"
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      padding: '0.25rem 0.6rem',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '4px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Location & Education */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '0.35rem',
                  }}
                >
                  location
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  {ABOUT_DATA.location}
                </span>
              </div>

              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    display: 'block',
                    marginBottom: '0.35rem',
                  }}
                >
                  education
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                  {ABOUT_DATA.education}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 840px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
