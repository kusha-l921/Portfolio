'use client';

import React from 'react';
import { ABOUT_DATA } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid #141414' }}>
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
              style={{ fontSize: '0.75rem', color: '#555555' }}
            >
              01
            </span>
          </div>
          <h2 className="section-title">About</h2>
        </div>

        {/* Two-Column Clean Architecture */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left Column: Personal Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#D0D0D0',
                lineHeight: 1.7,
              }}
            >
              {ABOUT_DATA.bioParagraph1}
            </p>

            <p
              style={{
                fontSize: '0.95rem',
                color: '#8A8A8A',
                lineHeight: 1.68,
              }}
            >
              {ABOUT_DATA.bioParagraph2}
            </p>

            {/* Core Interest Badges */}
            <div style={{ marginTop: '0.5rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: '#666666',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                // primary_domains
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {ABOUT_DATA.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono"
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '4px',
                      backgroundColor: '#0F0F0F',
                      border: '1px solid #1C1C1C',
                      color: '#A5A5A5',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Information Panel */}
          <div
            style={{
              backgroundColor: '#0B0B0B',
              border: '1px solid #1C1C1C',
              borderRadius: '8px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Focus */}
            <div>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                focus
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {ABOUT_DATA.focus.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.88rem',
                      color: '#EEEEEE',
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div style={{ borderTop: '1px solid #161616', paddingTop: '1rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                currently_learning
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {ABOUT_DATA.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      color: '#A5A5A5',
                      padding: '0.2rem 0.5rem',
                      backgroundColor: '#121212',
                      border: '1px solid #1E1E1E',
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
                gap: '1rem',
                borderTop: '1px solid #161616',
                paddingTop: '1rem',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: '#666666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  location
                </span>
                <span style={{ fontSize: '0.85rem', color: '#D0D0D0' }}>
                  {ABOUT_DATA.location}
                </span>
              </div>

              <div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: '#666666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  education
                </span>
                <span style={{ fontSize: '0.85rem', color: '#D0D0D0' }}>
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
            gridTemplateColumns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
