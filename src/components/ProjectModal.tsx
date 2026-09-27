'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

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
            borderBottom: '1px solid #1C1C1C',
            backgroundColor: '#0E0E0E',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '0.85rem',
                color: '#8A8A8A',
                backgroundColor: '#171717',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid #252525',
              }}
            >
              {project.number}
            </span>
            <span className="font-mono" style={{ fontSize: '0.78rem', color: '#666666' }}>
              &gt; project_specs / {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'transparent',
              border: '1px solid #222222',
              borderRadius: '6px',
              color: '#8A8A8A',
              padding: '0.35rem 0.6rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#444444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8A8A8A';
              e.currentTarget.style.borderColor = '#222222';
            }}
          >
            [esc] ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Title & Tagline */}
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
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  backgroundColor: '#1C1C1C',
                  color: '#EEEEEE',
                  border: '1px solid #2D2D2D',
                }}
              >
                {project.category}
              </span>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: '#666666' }}>
                {project.period}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h3>

            <p style={{ fontSize: '1rem', color: '#969696', marginTop: '0.35rem', lineHeight: 1.5 }}>
              {project.tagline}
            </p>
          </div>

          {/* Optional Project Thumbnail */}
          {project.image && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '220px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #202020',
                backgroundColor: '#080808',
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                style={{
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.85)',
                }}
              />
            </div>
          )}

          {/* Verified Technical Results */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: '#666666',
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
              {project.results.map((res, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#121212',
                    border: '1px solid #1F1F1F',
                    borderRadius: '6px',
                    padding: '0.85rem 1rem',
                  }}
                >
                  <div
                    className="font-mono"
                    style={{ fontSize: '0.68rem', color: '#8A8A8A', textTransform: 'uppercase' }}
                  >
                    {res.metric}
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginTop: '0.15rem',
                    }}
                  >
                    {res.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#666666', marginTop: '0.2rem' }}>
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
                color: '#666666',
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
                backgroundColor: '#0F0F0F',
                border: '1px solid #1C1C1C',
                borderRadius: '6px',
              }}
            >
              {project.architecture.map((layer, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      color: '#D0D0D0',
                      padding: '0.25rem 0.55rem',
                      backgroundColor: '#171717',
                      borderRadius: '4px',
                      border: '1px solid #262626',
                    }}
                  >
                    {layer}
                  </span>
                  {idx < project.architecture.length - 1 && (
                    <span style={{ color: '#444444', fontSize: '0.75rem' }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Highlights & Methodology */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: '#666666',
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
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.88rem',
                    color: '#B0B0B0',
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ color: '#666666', marginTop: '0.1rem', flexShrink: 0 }}
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
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  backgroundColor: '#141414',
                  border: '1px solid #222222',
                  color: '#8A8A8A',
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
              borderTop: '1px solid #1C1C1C',
              paddingTop: '1.25rem',
              marginTop: '0.5rem',
            }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>View Source on GitHub</span>
              <span style={{ fontSize: '0.9rem', lineHeight: 1 }}>↗</span>
            </a>

            <button onClick={onClose} className="btn btn-secondary">
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
