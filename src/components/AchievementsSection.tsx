'use client';

import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Achievement } from '../types';
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

        {/* Compact Full-Width Vertical List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                className="card achievement-item-card"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: isExpanded
                    ? (isLight ? '#F5F5F0' : '#101010')
                    : (isLight ? '#FFFFFF' : '#0C0C0C'),
                  border: '1px solid',
                  borderColor: isExpanded
                    ? (isLight ? '#C8C8C1' : 'var(--border-strong)')
                    : (isLight ? 'var(--border-card)' : 'var(--border-card)'),
                  padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                  cursor: 'pointer',
                  transition: 'background-color 280ms cubic-bezier(0.16, 1, 0.3, 1), border-color 280ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 280ms cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isExpanded
                    ? (isLight ? '0 10px 30px rgba(0, 0, 0, 0.06)' : '0 12px 36px rgba(0, 0, 0, 0.45)')
                    : 'none',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Collapsed Top Header (Always Visible) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Metadata Row: Number + Placement Badge + Year + Expand Arrow */}
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
                          color: isLight ? 'var(--text-muted)' : 'var(--gray)',
                        }}
                      >
                        {ach.number}
                      </span>

                      {/* Grayscale Badge (1st Place vs Runner-Up contrast) */}
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          padding: '0.24rem 0.65rem',
                          borderRadius: '4px',
                          backgroundColor: isFirstPlace
                            ? (isLight ? '#E5E5E0' : '#1B1B1B')
                            : (isLight ? '#ECECE8' : '#151515'),
                          border: '1px solid',
                          borderColor: isFirstPlace
                            ? (isLight ? '#C8C8C0' : '#333333')
                            : (isLight ? '#D4D4CD' : '#2A2A2A'),
                          color: isFirstPlace
                            ? (isLight ? '#1A1A18' : '#D0D0D0')
                            : (isLight ? '#4A4A46' : '#B0B0B0'),
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
                          color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
                        }}
                      >
                        {ach.date}
                      </span>

                      {/* Expand Indicator (Rotates smoothly) */}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          backgroundColor: isExpanded
                            ? (isLight ? '#DFDFD9' : '#1D1D1D')
                            : (isLight ? '#ECECE8' : '#141414'),
                          border: '1px solid',
                          borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-subtle)',
                          color: isExpanded
                            ? (isLight ? 'var(--text-primary)' : 'var(--text-white)')
                            : (isLight ? 'var(--text-secondary)' : 'var(--gray-light)'),
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease, color 200ms ease',
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Title & One-Liner */}
                  <div>
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 1.8vw, 1.55rem)',
                        fontWeight: 600,
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
                        marginTop: '0.35rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {ach.collapsedSummary}
                    </p>
                  </div>
                </div>

                {/* Expanded Detailed Content (Accordion) */}
                <div
                  id={`achievement-details-${ach.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    transition: 'grid-template-rows 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      style={{
                        paddingTop: '1.5rem',
                        marginTop: '1.25rem',
                        borderTop: '1px solid',
                        borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
                        transition: 'opacity 250ms ease, transform 250ms ease',
                      }}
                    >
                      {/* Section: WHAT WE BUILT */}
                      <div>
                        <div
                          className="font-mono"
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
                            textTransform: 'uppercase',
                            marginBottom: '0.5rem',
                          }}
                        >
                          // WHAT WE BUILT
                        </div>

                        <p
                          style={{
                            fontSize: '0.92rem',
                            color: 'var(--text-primary)',
                            lineHeight: 1.65,
                          }}
                        >
                          {ach.whatWeBuilt}
                        </p>

                        {ach.whatWeBuiltBullets && (
                          <ul
                            style={{
                              marginTop: '0.65rem',
                              paddingLeft: '1.25rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.35rem',
                              fontSize: '0.88rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.55,
                            }}
                          >
                            {ach.whatWeBuiltBullets.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Optional Core Pipeline visualization */}
                      {ach.pipeline && (
                        <div>
                          <div
                            className="font-mono"
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              letterSpacing: '0.06em',
                              color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
                              textTransform: 'uppercase',
                              marginBottom: '0.5rem',
                            }}
                          >
                            // CORE PIPELINE
                          </div>

                          <div
                            className="font-mono"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: '0.4rem',
                              padding: '0.85rem 1rem',
                              borderRadius: '6px',
                              backgroundColor: isLight ? '#EAEAE5' : '#080808',
                              border: '1px solid',
                              borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                              fontSize: '0.76rem',
                              color: 'var(--text-primary)',
                              lineHeight: 1.6,
                            }}
                          >
                            {ach.pipeline.map((step, idx) => (
                              <React.Fragment key={idx}>
                                <span
                                  style={{
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '4px',
                                    backgroundColor: isLight ? '#DFDFD9' : '#151515',
                                    border: '1px solid',
                                    borderColor: isLight ? '#D0D0CA' : '#222222',
                                    color: 'var(--text-primary)',
                                  }}
                                >
                                  {step}
                                </span>
                                {idx < ach.pipeline!.length - 1 && (
                                  <span style={{ color: isLight ? '#999990' : '#555555' }}>→</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Detailed Technical Sections */}
                      {ach.technicalSections.map((sec, secIdx) => (
                        <div key={secIdx}>
                          <div
                            className="font-mono"
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              letterSpacing: '0.06em',
                              color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
                              textTransform: 'uppercase',
                              marginBottom: '0.55rem',
                            }}
                          >
                            // {sec.heading.toUpperCase()}
                          </div>

                          {sec.description && (
                            <p
                              style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: '0.5rem',
                              }}
                            >
                              {sec.description}
                            </p>
                          )}

                          {sec.subsections && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                              {sec.subsections.map((sub, subIdx) => (
                                <div
                                  key={subIdx}
                                  style={{
                                    padding: '0.85rem 1rem',
                                    borderRadius: '6px',
                                    backgroundColor: isLight ? '#ECECE8' : '#090909',
                                    border: '1px solid',
                                    borderColor: isLight ? 'var(--border-subtle)' : 'var(--border-dark)',
                                  }}
                                >
                                  <div
                                    className="font-mono"
                                    style={{
                                      fontSize: '0.8rem',
                                      fontWeight: 600,
                                      color: 'var(--text-primary)',
                                      marginBottom: '0.3rem',
                                    }}
                                  >
                                    {sub.title}
                                  </div>
                                  {sub.content && (
                                    <p
                                      style={{
                                        fontSize: '0.88rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                      }}
                                    >
                                      {sub.content}
                                    </p>
                                  )}
                                  {sub.bullets && (
                                    <ul
                                      style={{
                                        marginTop: '0.45rem',
                                        paddingLeft: '1.15rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.25rem',
                                        fontSize: '0.84rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.5,
                                      }}
                                    >
                                      {sub.bullets.map((b, bIdx) => (
                                        <li key={bIdx}>{b}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {sec.bullets && (
                            <ul
                              style={{
                                paddingLeft: '1.25rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.35rem',
                                fontSize: '0.88rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.55,
                              }}
                            >
                              {sec.bullets.map((b, bIdx) => (
                                <li key={bIdx}>{b}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                      {/* Section: RESULT */}
                      <div
                        style={{
                          padding: '0.85rem 1.15rem',
                          borderRadius: '6px',
                          backgroundColor: isLight ? '#E5E5E0' : '#141414',
                          border: '1px solid',
                          borderColor: isLight ? '#D0D0CA' : 'var(--border-card)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.35rem',
                        }}
                      >
                        <div
                          className="font-mono"
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.06em',
                            color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
                            textTransform: 'uppercase',
                          }}
                        >
                          // RESULT
                        </div>

                        <div
                          style={{
                            fontSize: '0.98rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                          }}
                        >
                          {ach.resultSummary} — {ach.competition}
                        </div>

                        {ach.resultBullets && (
                          <div
                            style={{
                              fontSize: '0.85rem',
                              color: 'var(--text-secondary)',
                              marginTop: '0.15rem',
                            }}
                          >
                            {ach.resultBullets.join(' · ')}
                          </div>
                        )}
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
