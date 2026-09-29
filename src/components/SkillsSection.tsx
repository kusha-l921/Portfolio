'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Minimalist Monochrome SVG Icons
function CategoryIcon({ id }: { id: string }) {
  const iconStyle = { width: '16px', height: '16px', stroke: '#969696', fill: 'none', strokeWidth: '1.75' };

  switch (id) {
    case 'ml':
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      );
    case 'cv':
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'dev':
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'tools':
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" style={iconStyle}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="terminal-label">
            <span>&gt; skills.list</span>
          </div>

          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-desc">
            Tools, frameworks, and core engineering proficiencies.
          </p>
        </div>

        {/* Wide Categorized Rows Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="card skill-category-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(180px, 20vw, 260px) 1fr',
                alignItems: 'center',
                gap: 'clamp(1rem, 3vw, 2.5rem)',
                padding: 'clamp(1rem, 2vw, 1.4rem) clamp(1.25rem, 2.5vw, 2rem)',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Category Identity */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    flexShrink: 0,
                  }}
                >
                  <CategoryIcon id={cat.id} />
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 1rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.55rem',
                }}
              >
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono"
                    style={{
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-light)',
                      transition: 'all 0.15s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-pill-hover)';
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                      e.currentTarget.style.color = 'var(--text-white)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-light)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .skill-category-row {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        .skill-category-row:hover {
          border-color: var(--border-hover) !important;
          background-color: var(--bg-card-hover) !important;
        }
      `}</style>
    </section>
  );
}
