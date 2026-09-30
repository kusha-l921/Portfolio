'use client';

import React, { useEffect } from 'react';
import { Achievement } from '../types';
import { useTheme } from '../context/ThemeContext';

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (achievement) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [achievement, onClose]);

  if (!achievement) return null;

  const isExportify = achievement.id === 'loc-8-exportify';

  const metrics = isExportify
    ? [
        { metric: 'Standing', value: '1st Place', detail: 'National Winner out of 1000+ participants' },
        { metric: 'Competition', value: 'LOC 8.0', detail: 'National-Level Engineering Hackathon' },
        { metric: 'Architecture', value: 'OR Engine', detail: 'Operations Research allocation & risk index' },
      ]
    : [
        { metric: 'Standing', value: '1st Runner-Up', detail: 'Evaluated against 150+ engineering teams' },
        { metric: 'Competition', value: 'Drishti AI', detail: 'Real-time CCTV intelligence hackathon' },
        { metric: 'Privacy', value: 'Edge-Local', detail: 'Raw frames remain localized on-device' },
      ];

  const pipeline = isExportify
    ? [
        'Supplier Catalog Ingestion',
        'Multi-Factor Compatibility Scoring',
        'Operations Research Allocation',
        'Continuous Risk Indexing',
      ]
    : achievement.pipeline && achievement.pipeline.length > 0
    ? achievement.pipeline
    : [
        'Person Detection',
        'Temporal Multi-Tracking',
        'Behavioral Risk Scoring',
        'Edge Alert Metadata',
      ];

  const highlights = isExportify
    ? [
        'Engineered Exportify, an AI-driven B2B trade platform to automate international commerce pairing global demanders with verified exporters.',
        'Developed an operations research allocation engine mathematically optimizing supplier capacity, minimum order quantities (MOQs), and tight delivery lead times.',
        'Implemented a multi-criteria compatibility scoring engine assessing product specs, international trade certifications, pricing tolerances, and historical reliability.',
        'Built a continuous supply chain risk engine assessing transit times, geopolitical / shipping lane disruptions, and regulatory compliance.',
      ]
    : [
        'Built CopyCop, a real-time CCTV monitoring pipeline tracking examinees and invigilators across video frames with continuous risk scoring (0-100 gradient).',
        'Implemented temporal multi-person tracking preserving identity permanence across frame occlusions without biometric cloud transmission.',
        'Designed a privacy-preserving edge inference architecture: camera → local inference → behavioral analysis → real-time alert metadata.',
        'Awarded 1st Runner-Up under rigorous benchmark evaluation criteria evaluated against 150+ competing teams.',
      ];

  const tags = isExportify
    ? ['Python', 'PostgreSQL', 'Operations Research', 'Multi-Factor Scoring', 'Risk Engine', 'Optimization']
    : ['Computer Vision', 'Temporal Tracking', 'Edge AI', 'Behavioral Scoring', 'Anomaly Detection', 'Privacy Inference'];

  const scriptName = `run_${achievement.projectName.toLowerCase()}.sh`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.85rem',
                color: 'var(--accent-amber)',
                backgroundColor: 'var(--bg-pill)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)',
                fontWeight: 600,
              }}
            >
              {achievement.number}
            </span>
            <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              &gt; achievement_specs / {achievement.id}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-secondary)',
              padding: '0.35rem 0.6rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-white)';
              e.currentTarget.style.borderColor = 'var(--border-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            [esc] ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Title & Badge */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginBottom: '0.5rem',
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-pill)',
                  color: 'var(--accent-amber)',
                  border: '1px solid var(--accent-amber-border)',
                  fontWeight: 600,
                }}
              >
                {achievement.badge}
              </span>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {achievement.date}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: 'var(--text-white)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}
            >
              {achievement.projectName}
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.35rem', lineHeight: 1.55 }}>
              {achievement.description || achievement.collapsedSummary}
            </p>
          </div>

          {/* Technical Execution Terminal Box (Matching Project Box) */}
          <div
            style={{
              width: '100%',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid var(--border-card)',
              backgroundColor: isLight ? '#EFEFEA' : '#090909',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              lineHeight: 1.55,
              boxShadow: isLight ? '0 4px 16px rgba(0,0,0,0.04)' : '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Terminal Title Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '32px',
                padding: '0 0.85rem',
                backgroundColor: isLight ? '#E2E2DC' : '#111111',
                borderBottom: '1px solid',
                borderColor: isLight ? 'var(--border-subtle)' : '#1C1C1C',
                userSelect: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2A2A2A', display: 'inline-block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2A2A2A', display: 'inline-block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2A2A2A', display: 'inline-block' }} />
                <span style={{ marginLeft: '0.4rem', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                  {scriptName}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-amber)',
                    boxShadow: '0 0 6px var(--accent-amber-glow)',
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  eval · ok
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              style={{
                padding: '0.75rem 0.95rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.28rem',
                backgroundColor: isLight ? '#F5F5F2' : '#080808',
                color: isLight ? '#222220' : '#D0D0D0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
                <span style={{ color: isLight ? '#777770' : '#666666' }}>kushal@edge:~$</span>
                <span style={{ color: isLight ? '#0A0A0A' : '#FFFFFF', fontWeight: 500 }}>
                  ./eval --achievement {achievement.id}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
                <span style={{ color: isLight ? '#888880' : '#555555' }}>[arch]</span>
                <span style={{ color: isLight ? '#1A1A18' : '#CCCCCC' }}>
                  {isExportify ? 'Operations Research & Multi-Criteria Trade Matching Engine' : 'Temporal Multi-Tracking & Behavioral Risk Gradient Engine'}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
                <span style={{ color: isLight ? '#888880' : '#555555' }}>[pipe]</span>
                <span style={{ color: isLight ? '#2A2A26' : '#B8B8B8' }}>
                  {isExportify ? 'Weighted Scoring · Capacity Constraints · Dynamic Lead-Time Risk Indexing' : 'Edge Inference · Frame Permutation · 0-100 Behavioral Risk Scoring'}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.1rem' }}>
                <span style={{ color: isLight ? '#888880' : '#555555' }}>[eval]</span>
                <span style={{ color: isLight ? '#111111' : '#FFFFFF' }}>
                  Result: <strong style={{ fontWeight: 600, color: 'var(--accent-amber)' }}>{achievement.badge}</strong>
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
                <span style={{ color: isLight ? '#888880' : '#555555' }}>[stack]</span>
                <span style={{ color: isLight ? '#444440' : '#AAAAAA' }}>
                  {tags.slice(0, 4).join(' · ')}
                </span>
              </div>

              {/* Bottom prompt line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.4rem',
                  paddingTop: '0.35rem',
                  borderTop: '1px solid',
                  borderColor: isLight ? '#E5E5E0' : '#141414',
                  fontSize: '0.68rem',
                  color: isLight ? '#777770' : '#666666',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>
                    <span style={{ color: isLight ? '#777770' : '#666666' }}>kushal@edge:</span>
                    <span style={{ color: 'var(--accent-amber)' }}>~$</span>
                  </span>
                  <span
                    className="cursor-blink"
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '1.05em',
                      backgroundColor: 'var(--accent-amber)',
                    }}
                  />
                </div>

                <span style={{ fontSize: '0.65rem', color: isLight ? '#888880' : '#555555' }}>
                  verified evaluation output ✓
                </span>
              </div>
            </div>
          </div>

          {/* Verified Empirical Metrics Grid */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '0.65rem',
              }}
            >
              // empirical_metrics
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {metrics.map((res, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                  }}
                >
                  <div
                    className="font-mono"
                    style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}
                  >
                    {res.metric}
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      marginTop: '0.15rem',
                    }}
                  >
                    {res.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    {res.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              // architecture_pipeline
            </span>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                padding: '0.85rem 1rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
              }}
            >
              {pipeline.map((layer, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      padding: '0.25rem 0.55rem',
                      backgroundColor: 'var(--bg-pill)',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {layer}
                  </span>
                  {idx < pipeline.length - 1 && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Engineering Highlights */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '0.65rem',
              }}
            >
              // engineering_highlights
            </span>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ color: 'var(--accent-amber)', marginTop: '0.1rem', flexShrink: 0 }}
                  >
                    [+]
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.76rem', color: 'var(--accent-amber)', fontWeight: 600 }}>
                // COMPETITION:
              </span>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                {achievement.competition} ({achievement.date})
              </span>
            </div>

            <button onClick={onClose} className="btn btn-secondary">
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
