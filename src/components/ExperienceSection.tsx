'use client';

import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Experience } from '../types';
import ExperienceModal from './ExperienceModal';

export default function ExperienceSection() {
  const [activeModalExperience, setActiveModalExperience] = useState<Experience | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent, exp: Experience) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveModalExperience(exp);
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="terminal-label experience-reveal experience-reveal-heading">
            <span>&gt; experience.log</span>
          </div>

          <h2 className="section-title experience-reveal experience-reveal-heading">
            Experience
          </h2>

          <p className="section-desc experience-reveal experience-reveal-desc">
            Building at the intersection of AI/ML engineering and product development.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div
          className="experience-cards-container experience-reveal experience-reveal-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              id={`experience-${exp.id}`}
              role="button"
              tabIndex={0}
              aria-label={`View experience details for ${exp.role} at ${exp.company}`}
              onClick={() => setActiveModalExperience(exp)}
              onKeyDown={(e) => handleKeyDown(e, exp)}
              className="card experience-card-item"
              style={{
                width: '100%',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                cursor: 'pointer',
                outline: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition:
                  'transform 0.26s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.26s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.26s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.26s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                }}
              >
                {/* Top Row: Company Name + Status/Date Pill + Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* Left: Company & Identity */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {exp.number || '01'}
                      </span>
                      <span style={{ color: 'var(--border-card)' }}>·</span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--accent-amber)',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        // INDUSTRY
                      </span>
                    </div>

                    <h3
                      className="card-title"
                      style={{
                        fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        transition: 'color 0.2s ease, transform 0.22s ease',
                      }}
                    >
                      {exp.company}
                    </h3>

                    <div
                      style={{
                        fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
                        fontWeight: 500,
                        color: 'var(--text-light)',
                        marginTop: '0.35rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.role}
                    </div>
                  </div>

                  {/* Right: Timeline & Status & Expand Arrow */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    {/* Subtle Current Role Indicator */}
                    {exp.current && (
                      <div
                        className="font-mono"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.72rem',
                          padding: '0.28rem 0.65rem',
                          borderRadius: '9999px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span className="status-dot-pulse" />
                        <span style={{ color: 'var(--text-light)' }}>
                          {exp.statusText || 'Currently working'}
                        </span>
                      </div>
                    )}

                    {/* Period Badge */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.32rem 0.75rem',
                        borderRadius: '4px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {exp.period}
                    </div>

                    {/* Arrow / Detail prompt matching Projects & Achievements */}
                    <span
                      className="experience-arrow font-mono"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        transition:
                          'transform 0.24s cubic-bezier(0.22, 1, 0.36, 1), color 0.2s ease',
                        marginLeft: '0.25rem',
                      }}
                    >
                      ↗
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.68,
                    maxWidth: '1100px',
                  }}
                >
                  {exp.description}
                </p>

                {/* Neutral Role Tags (monochrome/gray by default, subtle electric-blue accent on hover) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid var(--border-subtle)',
                    marginTop: '0.35rem',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono experience-role-tag"
                        style={{
                          fontSize: '0.76rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                          transition: 'all 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span>Inspect details</span>
                    <span style={{ fontSize: '0.85rem' }}>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Experience Detail Modal */}
      <ExperienceModal
        experience={activeModalExperience}
        onClose={() => setActiveModalExperience(null)}
      />

      <style jsx global>{`
        .experience-card-item:hover .experience-role-tag {
          border-color: var(--border-strong) !important;
          color: var(--text-light) !important;
        }
        .experience-role-tag:hover {
          border-color: var(--accent-amber-border) !important;
          color: var(--text-white) !important;
          background-color: var(--bg-surface-hover) !important;
        }
        @media (max-width: 768px) {
          .experience-card-item {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
