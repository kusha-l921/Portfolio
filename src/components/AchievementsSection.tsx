'use client';

import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Achievement } from '../types';
import AchievementModal from './AchievementModal';

export default function AchievementsSection() {
  const [activeModalAchievement, setActiveModalAchievement] = useState<Achievement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, ach: Achievement) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveModalAchievement(ach);
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
            const isFirstPlace = ach.badge.includes('1ST PLACE');

            return (
              <div
                key={ach.id}
                id={`achievement-${ach.id}`}
                role="button"
                tabIndex={0}
                aria-label={`View achievement details for ${ach.title}`}
                onClick={() => setActiveModalAchievement(ach)}
                onKeyDown={(e) => handleKeyDown(e, ach)}
                className="card achievement-card-item"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-card)',
                  padding: 'clamp(1.4rem, 2.2vw, 2rem)',
                  cursor: 'pointer',
                  outline: 'none',
                  position: 'relative',
                  overflow: 'hidden',
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
                          backgroundColor: isFirstPlace ? '#181818' : '#141414',
                          border: '1px solid',
                          borderColor: isFirstPlace ? '#333333' : '#2A2A2A',
                          color: isFirstPlace ? '#D0D0D0' : '#B0B0B0',
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
                          color: 'var(--text-secondary)',
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
                        color: 'var(--text-light)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontWeight: 500,
                      }}
                    >
                      <span>View Specifications &amp; Architecture</span>
                      <span style={{ fontSize: '0.9rem' }}>→</span>
                    </span>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      click to inspect
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Detail Modal (Matches Project Modal) */}
      <AchievementModal
        achievement={activeModalAchievement}
        onClose={() => setActiveModalAchievement(null)}
      />

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
