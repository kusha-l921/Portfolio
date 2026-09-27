'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="me"
      style={{
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Subtle grid line indicator on desktop */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT COLUMN: Identity, Heading, Bio, Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Terminal prompt label */}
            <div className="terminal-label">
              <span>{PERSONAL_DATA.terminalPrompt}</span>
            </div>

            {/* Main Name Heading with terminal cursor */}
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
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
                  fontSize: '1rem',
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
                fontSize: 'clamp(1.35rem, 2.8vw, 1.85rem)',
                fontWeight: 600,
                color: '#EEEEEE',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                maxWidth: '560px',
              }}
            >
              Building <span style={{ color: '#FFFFFF', textDecoration: 'underline', textDecorationColor: '#333333', textUnderlineOffset: '4px' }}>intelligent systems</span> for a better tomorrow.
            </h2>

            {/* Supporting paragraph */}
            <p
              style={{
                fontSize: '0.98rem',
                color: '#969696',
                lineHeight: 1.65,
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
                marginTop: '0.25rem',
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
                marginTop: '0.5rem',
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
                marginTop: '0.75rem',
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
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.68rem', color: '#666666' }}
                  >
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

              {/* Minimal SVG Sparkline / Waveform */}
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
                marginTop: '0.35rem',
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

          {/* RIGHT COLUMN: The personal.meta Profile Card (Artwork + Micro Panels) */}
          <div
            className="hero-card-wrapper"
            style={{
              position: 'relative',
              borderRadius: '10px',
              backgroundColor: '#0A0A0A',
              border: '1px solid #1F1F1F',
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65)',
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = '#2E2E2E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#1F1F1F';
            }}
          >
            {/* Card Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 1rem',
                borderBottom: '1px solid #191919',
                backgroundColor: '#0D0D0D',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#262626',
                  }}
                />
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#262626',
                  }}
                />
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#262626',
                  }}
                />
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: '#8A8A8A',
                    marginLeft: '0.35rem',
                  }}
                >
                  &gt; personal.meta
                </span>
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: '#555555',
                }}
              >
                {PERSONAL_DATA.metaVersion}
              </span>
            </div>

            {/* Inner Content Area */}
            <div
              style={{
                padding: '1.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: '#070707',
              }}
            >
              {/* Top Row: Mini Cards (daily.log and goals.txt) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                }}
              >
                {/* daily.log widget */}
                <div
                  style={{
                    backgroundColor: '#0C0C0C',
                    border: '1px solid #1A1A1A',
                    borderRadius: '6px',
                    padding: '0.65rem 0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #161616',
                      paddingBottom: '0.35rem',
                      marginBottom: '0.45rem',
                      color: '#8A8A8A',
                    }}
                  >
                    <span>daily.log</span>
                    <span style={{ color: '#444444' }}>●</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', color: '#969696' }}>
                    <div>&gt; learn()</div>
                    <div>&gt; build()</div>
                    <div>&gt; improve()</div>
                    <div>&gt; repeat()</div>
                    <div style={{ marginTop: '0.25rem', color: '#666666' }}>// progress... 78%</div>
                    {/* Progress bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '3px',
                        backgroundColor: '#1A1A1A',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        marginTop: '0.15rem',
                      }}
                    >
                      <div
                        style={{
                          width: '78%',
                          height: '100%',
                          backgroundColor: '#8A8A8A',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* goals.txt widget */}
                <div
                  style={{
                    backgroundColor: '#0C0C0C',
                    border: '1px solid #1A1A1A',
                    borderRadius: '6px',
                    padding: '0.65rem 0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid #161616',
                      paddingBottom: '0.35rem',
                      marginBottom: '0.45rem',
                      color: '#8A8A8A',
                    }}
                  >
                    <span>goals.txt</span>
                    <span style={{ color: '#444444' }}>●</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {PERSONAL_DATA.goals.map((g, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: g.completed ? '#D0D0D0' : '#555555',
                          fontSize: '0.68rem',
                        }}
                      >
                        <span style={{ color: g.completed ? '#EEEEEE' : '#444444' }}>
                          {g.completed ? '[✓]' : '[ ]'}
                        </span>
                        <span style={{ textDecoration: g.completed ? 'none' : 'none' }}>
                          {g.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Anime Artwork Visual Centerpiece */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  backgroundColor: '#0A0A0A',
                  border: '1px solid #181818',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="artwork-container"
              >
                <Image
                  src={PERSONAL_DATA.animeArtwork}
                  alt="Kushal Patel Personal Illustration"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{
                    objectFit: 'contain',
                    filter: 'grayscale(100%) contrast(1.08) brightness(0.92)',
                    transition: 'all 0.3s ease',
                  }}
                  className="hero-artwork-img"
                />

                {/* Handwritten personal quote overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    fontSize: '0.78rem',
                    fontStyle: 'italic',
                    color: 'rgba(238, 238, 238, 0.75)',
                    fontFamily: 'serif',
                    letterSpacing: '0.01em',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;{PERSONAL_DATA.quote}&rdquo;
                </div>
              </div>

              {/* Card Footer: Metadata Rows */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid #161616',
                }}
              >
                <div>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.62rem', color: '#666666', display: 'block' }}
                  >
                    currently_building
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#EEEEEE',
                      fontWeight: 500,
                      display: 'block',
                      marginTop: '0.15rem',
                    }}
                  >
                    Solar Flare Pred.
                  </span>
                </div>

                <div>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.62rem', color: '#666666', display: 'block' }}
                  >
                    specialization
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#EEEEEE',
                      fontWeight: 500,
                      display: 'block',
                      marginTop: '0.15rem',
                    }}
                  >
                    ViT &amp; Edge AI
                  </span>
                </div>

                <div>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.62rem', color: '#666666', display: 'block' }}
                  >
                    dev_loop()
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.7rem',
                      color: '#A5A5A5',
                      display: 'block',
                      marginTop: '0.15rem',
                    }}
                  >
                    learn → build
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            gridTemplateColumns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-card-wrapper {
            max-width: 520px;
            margin: 0 auto;
            width: 100%;
          }
        }
        .hero-artwork-img:hover {
          filter: grayscale(100%) contrast(1.15) brightness(1.02) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
