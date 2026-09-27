'use client';

import React from 'react';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section" style={{ borderTop: '1px solid #141414' }}>
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
              <span>&gt; education.info</span>
            </div>
            <span
              className="font-mono"
              style={{ fontSize: '0.75rem', color: '#555555' }}
            >
              02
            </span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">
            Academic foundation in artificial intelligence, machine learning, and immersive systems.
          </p>
        </div>

        {/* Education Main Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
            gap: '1.5rem',
          }}
          className="education-grid"
        >
          {/* Main Institution Card */}
          <div
            className="card"
            style={{
              padding: '1.75rem',
              backgroundColor: '#0B0B0B',
              border: '1px solid #1C1C1C',
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
                  marginBottom: '0.75rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#8A8A8A',
                      marginTop: '0.2rem',
                    }}
                  >
                    {EDUCATION_DATA.university} · {EDUCATION_DATA.location}
                  </p>
                </div>

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: '#EEEEEE',
                    backgroundColor: '#161616',
                    border: '1px solid #282828',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {EDUCATION_DATA.period}
                </div>
              </div>

              <div style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#EEEEEE',
                  }}
                >
                  {EDUCATION_DATA.degree}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    color: '#A5A5A5',
                    marginTop: '0.25rem',
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
                  gap: '0.55rem',
                }}
              >
                {EDUCATION_DATA.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.85rem',
                      color: '#969696',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{ color: '#555555', marginTop: '0.1rem' }}
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
                borderTop: '1px solid #161616',
                paddingTop: '1rem',
                marginTop: '1.5rem',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.75rem', color: '#666666' }}
              >
                academic_standing
              </span>
              <div
                className="font-mono"
                style={{
                  fontSize: '0.82rem',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}
              >
                CGPA : {EDUCATION_DATA.cgpa}
              </div>
            </div>
          </div>

          {/* Hackathon & Engineering Honors Panel (Verified from Resume) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              // competitive_honors
            </div>

            {ACHIEVEMENTS_DATA.map((ach) => (
              <div
                key={ach.id}
                className="card"
                style={{
                  padding: '1.25rem',
                  backgroundColor: '#0B0B0B',
                  border: '1px solid #1C1C1C',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.68rem',
                      color: '#EEEEEE',
                      backgroundColor: '#181818',
                      border: '1px solid #292929',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    {ach.badge}
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.72rem', color: '#666666' }}
                  >
                    {ach.date}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#EEEEEE',
                    lineHeight: 1.35,
                  }}
                >
                  {ach.title}
                </h4>

                <p
                  style={{
                    fontSize: '0.8rem',
                    color: '#8A8A8A',
                    lineHeight: 1.5,
                  }}
                >
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 860px) {
          .education-grid {
            gridTemplateColumns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
