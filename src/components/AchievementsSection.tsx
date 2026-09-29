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

        {/* Compact Full-Width List Matching Project Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
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
                    ? (isLight ? 'var(--border-strong)' : 'var(--border-hover)')
                    : 'var(--border-card)',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  cursor: 'pointer',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: isExpanded
                    ? (isLight ? '0 10px 30px rgba(0, 0, 0, 0.06)' : '0 12px 36px rgba(0, 0, 0, 0.45)')
                    : 'none',
                }}
              >
                {/* Collapsed Top Header (Always Visible) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Row 1: Number + Placement Badge + Year + Expand Arrow */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.65rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
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

                      {/* Grayscale Badge with subtle accent indicator */}
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          padding: '0.25rem 0.7rem',
                          borderRadius: '4px',
                          backgroundColor: isFirstPlace
                            ? (isLight ? '#E5E5E0' : '#1B1B1B')
                            : (isLight ? '#ECECE8' : '#151515'),
                          border: '1px solid',
                          borderColor: isExpanded
                            ? 'var(--accent-border)'
                            : (isFirstPlace
                                ? (isLight ? '#C8C8C0' : '#333333')
                                : (isLight ? '#D4D4CD' : '#2A2A2A')),
                          color: isFirstPlace
                            ? (isLight ? '#1A1A18' : '#D0D0D0')
                            : (isLight ? '#4A4A46' : '#B0B0B0'),
                          transition: 'border-color 0.2s ease',
                        }}
                      >
                        {ach.badge}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                          fontSize: '1rem',
                          color: isExpanded ? 'var(--accent)' : 'var(--text-secondary)',
                          transform: isExpanded ? 'rotate(-45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease',
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Row 2: Title & One-Liner */}
                  <div>
                    <h3
                      className="achievement-title"
                      style={{
                        fontSize: 'clamp(1.25rem, 1.9vw, 1.6rem)',
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
                        fontSize: 'clamp(0.92rem, 1.1vw, 1rem)',
                        color: 'var(--text-secondary)',
                        marginTop: '0.4rem',
                        lineHeight: 1.55,
                      }}
                    >
                      {ach.collapsedSummary}
                    </p>
                  </div>
                </div>

                {/* Expanded In-Place Content (Smooth Grid Transition) */}
                <div
                  id={`achievement-details-${ach.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    transition: 'grid-template-rows 280ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        paddingTop: '1.5rem',
                        marginTop: '1.35rem',
                        borderTop: '1px solid',
                        borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.35rem',
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
                        transition: 'opacity 240ms ease, transform 240ms ease',
                      }}
                    >
                      {/* Project Name + Overview */}
                      <div>
                        <div
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.015em',
                            marginBottom: '0.4rem',
                          }}
                        >
                          {ach.projectName}
                        </div>

                        <p
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.65,
                          }}
                        >
                          {ach.whatWeBuilt}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {(ach.id === 'loc-8-exportify'
                          ? ['Python', 'PostgreSQL', 'Operations Research', 'Multi-Factor Scoring', 'Risk Engine']
                          : ['Computer Vision', 'Multi-Person Tracking', 'Temporal Analysis', 'Risk Scoring', 'Edge AI']
                        ).map((tag, idx) => (
                          <span
                            key={idx}
                            className="font-mono"
                            style={{
                              fontSize: '0.76rem',
                              padding: '0.25rem 0.6rem',
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

                      {/* Structured Technical Architecture Grid (Compact Project Density) */}
                      {ach.id === 'loc-8-exportify' ? (
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '0.85rem',
                          }}
                        >
                          {/* Architecture */}
                          <div
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.35rem',
                              }}
                            >
                              // ARCHITECTURE
                            </div>
                            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                              Python full-stack request routing, PostgreSQL transactional records, multi-factor scoring engine, operations research allocation, and logistics risk indexing.
                            </p>
                          </div>

                          {/* Matching Engine */}
                          <div
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.35rem',
                              }}
                            >
                              // MATCHING ENGINE
                            </div>
                            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                              Multi-criteria compatibility scoring on product specifications, verified trade certifications, pricing tolerances, and historical fulfillment reliability.
                            </p>
                          </div>

                          {/* Optimization */}
                          <div
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.35rem',
                              }}
                            >
                              // OPTIMIZATION
                            </div>
                            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                              Mathematical allocation factoring supplier capacity constraints, minimum order quantities (MOQs), and tight delivery production deadlines.
                            </p>
                          </div>

                          {/* Risk Engine */}
                          <div
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.35rem',
                              }}
                            >
                              // RISK ENGINE
                            </div>
                            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                              Continuous risk evaluation assessing transit lead times, geopolitical / shipping-lane disruption indices, and cross-border regulatory compliance.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                          {/* Pipeline Step Ribbon */}
                          <div
                            style={{
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                            }}
                          >
                            <div
                              className="font-mono"
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 600,
                                color: 'var(--text-muted)',
                                letterSpacing: '0.04em',
                                marginBottom: '0.45rem',
                              }}
                            >
                              // TECHNICAL PIPELINE
                            </div>
                            <div
                              className="font-mono"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '0.35rem',
                                fontSize: '0.74rem',
                                color: 'var(--text-primary)',
                              }}
                            >
                              {ach.pipeline?.map((step, idx) => (
                                <React.Fragment key={idx}>
                                  <span
                                    style={{
                                      padding: '0.2rem 0.5rem',
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

                          {/* Core System & Edge/Privacy */}
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                              gap: '0.85rem',
                            }}
                          >
                            <div
                              style={{
                                padding: '0.85rem 1rem',
                                borderRadius: '6px',
                                backgroundColor: isLight ? '#EAEAE5' : '#080808',
                                border: '1px solid',
                                borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                              }}
                            >
                              <div
                                className="font-mono"
                                style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 600,
                                  color: 'var(--text-muted)',
                                  letterSpacing: '0.04em',
                                  marginBottom: '0.35rem',
                                }}
                              >
                                // CORE SYSTEM
                              </div>
                              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                Person detection, multi-person temporal tracking across frames (Person #17 → Frame 100-103), continuous behavioral risk scoring (0-100 gradient), and anomaly detection surfacing critical misconduct alerts.
                              </p>
                            </div>

                            <div
                              style={{
                                padding: '0.85rem 1rem',
                                borderRadius: '6px',
                                backgroundColor: isLight ? '#EAEAE5' : '#080808',
                                border: '1px solid',
                                borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                              }}
                            >
                              <div
                                className="font-mono"
                                style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 600,
                                  color: 'var(--text-muted)',
                                  letterSpacing: '0.04em',
                                  marginBottom: '0.35rem',
                                }}
                              >
                                // EDGE / PRIVACY
                              </div>
                              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                Privacy-preserving edge alerts: Camera → Local edge inference → Behavioral analysis → Real-time alert metadata. Raw CCTV frames remain localized on-device.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Result & Actions Footer */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          gap: '0.75rem',
                          paddingTop: '0.65rem',
                          borderTop: '1px solid',
                          borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <span
                            className="font-mono"
                            style={{
                              fontSize: '0.72rem',
                              color: 'var(--accent)',
                              fontWeight: 600,
                            }}
                          >
                            // RESULT
                          </span>
                          <span
                            style={{
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {ach.resultSummary}
                          </span>
                        </div>

                        <span
                          className="font-mono"
                          style={{
                            fontSize: '0.78rem',
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
    </section>
  );
}
