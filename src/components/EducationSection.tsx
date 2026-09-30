'use client';

import { EDUCATION_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="terminal-label">
            <span>&gt; education.info</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Academic foundation in artificial intelligence, machine learning, and immersive systems.
          </p>
        </div>

        {/* Education Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
          className="education-grid"
        >
          {/* Main Institution Card */}
          <div
            className="card education-card-item"
            style={{
              padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      letterSpacing: '-0.015em',
                      transition: 'transform 0.22s ease, color 0.2s ease',
                    }}
                  >
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.3rem',
                    }}
                  >
                    {EDUCATION_DATA.university} · {EDUCATION_DATA.location}
                  </p>
                </div>

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {EDUCATION_DATA.period}
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {EDUCATION_DATA.degree}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginTop: '0.35rem',
                  }}
                >
                  {EDUCATION_DATA.honours}
                </div>
              </div>

              {/* Coursework & Focus Points */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {EDUCATION_DATA.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ color: 'var(--text-muted)', marginTop: '0.1rem' }}
                    >
                      &gt;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Status / CGPA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
                marginTop: '1.75rem',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}
              >
                academic_standing
              </span>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                }}
              >
                CGPA : {EDUCATION_DATA.cgpa}
              </div>
            </div>
          </div>

          {/* Academic Coursework & Research Focus Panel */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Relevant Coursework */}
            <div
              className="card education-card-item"
              style={{
                padding: 'clamp(1.25rem, 2vw, 1.65rem)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                // relevant_coursework
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                }}
              >
                {EDUCATION_DATA.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="font-mono"
                    style={{
                      fontSize: '0.76rem',
                      padding: '0.28rem 0.65rem',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Research Focus */}
            <div
              className="card education-card-item"
              style={{
                padding: 'clamp(1.25rem, 2vw, 1.65rem)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                // academic_research_focus
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {EDUCATION_DATA.researchFocus.map((focus, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ color: 'var(--text-muted)', marginTop: '0.1rem', fontSize: '0.8rem' }}
                    >
                      &gt;
                    </span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .education-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
