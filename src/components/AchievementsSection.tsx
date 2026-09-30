'use client';

import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function AchievementsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const toggleAchievement = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAchievement(id);
    }
  };

  return (
    <section id="achievements" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="terminal-label">
            <span>&gt; achievements.log</span>
          </div>

          <h2 className="section-title">Achievements</h2>
          <p className="section-desc">
            Competitive engineering records and hackathon solutions evaluated under real-world judging criteria.
          </p>
        </div>

        {/* Floating 2-Column Grid Matching Project Card Visual Language */}
        <div
          className="achievements-floating-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
            alignItems: 'start',
          }}
        >
          {ACHIEVEMENTS_DATA.map((ach) => {
            const isExpanded = expandedId === ach.id;
            const isFirstPlace = ach.badge.includes('1ST PLACE');

            return (
              <div
                key={ach.id}
                id={`achievement-${ach.id}`}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={`achievement-details-${ach.id}`}
                onClick={() => toggleAchievement(ach.id)}
                onKeyDown={(e) => handleKeyDown(e, ach.id)}
                className={`card achievement-card-item ${isExpanded ? 'is-expanded' : ''}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: isExpanded
                    ? (isLight ? '#FFFFFF' : 'var(--bg-card-hover)')
                    : 'var(--bg-card)',
                  border: '1px solid',
                  borderColor: isExpanded
                    ? (isLight ? 'var(--border-strong)' : 'var(--accent-amber-border)')
                    : 'var(--border-card)',
                  padding: 'clamp(1.4rem, 2.2vw, 2rem)',
                  cursor: 'pointer',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isExpanded
                    ? (isLight ? '0 10px 30px rgba(0, 0, 0, 0.06)' : '0 14px 36px rgba(0, 0, 0, 0.55)')
                    : 'none',
                  transition: 'transform 0.26s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.26s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.26s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.26s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* Header Row: Number + Placement Badge + Date + Expand Arrow */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {ach.number}
                      </span>
                      <span style={{ color: 'var(--border-card)' }}>·</span>

                      {/* Amber Badge */}
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          padding: '0.22rem 0.65rem',
                          borderRadius: '4px',
                          backgroundColor: isFirstPlace
                            ? (isLight ? '#E5E5E0' : '#181818')
                            : (isLight ? '#ECECE8' : '#141414'),
                          border: '1px solid',
                          borderColor: isExpanded
                            ? 'var(--accent-amber-border)'
                            : (isFirstPlace
                                ? (isLight ? '#C8C8C0' : '#333333')
                                : (isLight ? '#D4D4CD' : '#2A2A2A')),
                          color: isExpanded
                            ? 'var(--accent-amber)'
                            : (isFirstPlace
                                ? (isLight ? '#1A1A18' : '#D0D0D0')
                                : (isLight ? '#4A4A46' : '#B0B0B0')),
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {ach.badge}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {ach.date}
                      </span>

                      {/* Expand Arrow matching project interaction */}
                      <span
                        className="achievement-arrow font-mono"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.95rem',
                          color: isExpanded ? 'var(--accent-amber)' : 'var(--text-secondary)',
                          transform: isExpanded ? 'rotate(45deg)' : 'none',
                          transition: 'transform 0.24s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease',
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Title & Project Name */}
                  <div>
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--accent-amber)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {ach.projectName}
                    </div>
                    <h3
                      className="achievement-title"
                      style={{
                        fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25,
                      }}
                    >
                      {ach.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.45rem',
                        lineHeight: 1.55,
                      }}
                    >
                      {ach.collapsedSummary}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                    {(ach.id === 'loc-8-exportify'
                      ? ['Python', 'PostgreSQL', 'Operations Research', 'Risk Engine']
                      : ['Computer Vision', 'Temporal Tracking', 'Edge AI', 'Risk Scoring']
                    ).map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono"
                        style={{
                          fontSize: '0.74rem',
                          padding: '0.22rem 0.55rem',
                          borderRadius: '4px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-light)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Verified Result Pill */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.4rem 0.75rem',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      width: 'fit-content',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--accent-amber)',
                        fontWeight: 600,
                      }}
                    >
                      // RESULT:
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                      }}
                    >
                      {ach.resultSummary}
                    </span>
                  </div>

                  {/* View Details Action Prompt */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.5rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.78rem',
                        color: isExpanded ? 'var(--accent-amber)' : 'var(--text-light)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontWeight: 500,
                      }}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Architecture & Results'}</span>
                      <span
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.22s ease',
                        }}
                      >
                        ↓
                      </span>
                    </span>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      click card
                    </span>
                  </div>
                </div>

                {/* Expanded In-Place Content (Smooth Height Transition) */}
                <div
                  id={`achievement-details-${ach.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    transition: 'grid-template-rows 280ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        paddingTop: '1.25rem',
                        marginTop: '1.15rem',
                        borderTop: '1px solid',
                        borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.15rem',
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
                        transition: 'opacity 240ms ease, transform 240ms ease',
                      }}
                    >
                      {/* Project Overview */}
                      <div>
                        <div
                          className="font-mono"
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.04em',
                            marginBottom: '0.35rem',
                          }}
                        >
                          // SYSTEM_OVERVIEW
                        </div>
                        <p
                          style={{
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}
                        >
                          {ach.whatWeBuilt}
                        </p>
                      </div>

                      {/* Technical Architecture Blocks (Clean Stacking for 2-Column Grid) */}
                      {ach.id === 'loc-8-exportify' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div
                            style={{
                              padding: '0.75rem 0.9rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.25rem',
                              }}
                            >
                              // MATCHING ENGINE & OPTIMIZATION
                            </div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              Multi-criteria compatibility scoring on product specifications, trade certifications, and supplier capacity constraints with operations research allocation.
                            </p>
                          </div>

                          <div
                            style={{
                              padding: '0.75rem 0.9rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.25rem',
                              }}
                            >
                              // RISK & LOGISTICS ENGINE
                            </div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              Continuous risk evaluation assessing transit lead times, geopolitical disruption indices, and cross-border customs regulations.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div
                            style={{
                              padding: '0.75rem 0.9rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.35rem',
                              }}
                            >
                              // PIPELINE FLOW
                            </div>
                            <div
                              className="font-mono"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '0.3rem',
                                fontSize: '0.72rem',
                                color: 'var(--text-primary)',
                              }}
                            >
                              {ach.pipeline?.map((step, idx) => (
                                <React.Fragment key={idx}>
                                  <span
                                    style={{
                                      padding: '0.15rem 0.45rem',
                                      borderRadius: '4px',
                                      backgroundColor: isLight ? '#DFDFD9' : '#151515',
                                      border: '1px solid',
                                      borderColor: isLight ? '#D0D0CA' : '#222222',
                                    }}
                                  >
                                    {step}
                                  </span>
                                  {idx < (ach.pipeline?.length ?? 0) - 1 && (
                                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          <div
                            style={{
                              padding: '0.75rem 0.9rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.25rem',
                              }}
                            >
                              // EDGE INFERENCE & PRIVACY
                            </div>
                            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              Privacy-preserving edge alert architecture: camera → local inference → behavioral risk scoring (0-100 gradient). Raw frames remain localized on-device.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Collapse Footer Action */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '0.65rem',
                          borderTop: '1px solid',
                          borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.72rem',
                            color: 'var(--accent-amber)',
                            fontWeight: 600,
                          }}
                        >
                          // AWARD VERIFIED
                        </span>

                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.76rem',
                            color: 'var(--text-muted)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                          }}
                        >
                          <span>click card to collapse</span>
                          <span>↑</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .achievements-floating-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
