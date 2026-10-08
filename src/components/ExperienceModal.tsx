'use client';

import React, { useEffect } from 'react';
import { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '780px',
        }}
      >
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
                fontSize: '0.82rem',
                color: 'var(--accent-amber)',
                backgroundColor: 'var(--bg-pill)',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)',
                fontWeight: 600,
              }}
            >
              {experience.number || '01'}
            </span>
            <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              &gt; experience_specs / {experience.id}
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
              e.currentTarget.style.borderColor = 'var(--accent-amber-border)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
            }}
          >
            [esc] ✕
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: '1.45rem' }}>
          {/* Company, Role & Duration */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
                marginBottom: '0.5rem',
              }}
            >
              {experience.current && (
                <span
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.72rem',
                    padding: '0.22rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--bg-pill)',
                    color: 'var(--text-white)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span className="status-dot-pulse" />
                  <span>{experience.statusText || 'Currently working'}</span>
                </span>
              )}
              <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {experience.period}
              </span>
            </div>

            <h3
              id="experience-modal-title"
              style={{
                fontSize: 'clamp(1.5rem, 2.4vw, 1.95rem)',
                fontWeight: 700,
                color: 'var(--text-white)',
                letterSpacing: '-0.025em',
                lineHeight: 1.18,
              }}
            >
              {experience.company}
            </h3>

            <div
              className="font-mono"
              style={{
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'var(--accent-amber-light)',
                fontWeight: 500,
                marginTop: '0.35rem',
                letterSpacing: '-0.01em',
              }}
            >
              {experience.role}
            </div>
          </div>

          {/* About the role */}
          <div
            style={{
              padding: '1.15rem 1.25rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.55rem',
              }}
            >
              // about_the_role
            </span>
            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.68,
              }}
            >
              {experience.description}
            </p>
          </div>

          {/* Primary Focus Tags */}
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
                marginBottom: '0.55rem',
              }}
            >
              // focus
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {(experience.focus || experience.tags).map((item) => (
                <span
                  key={item}
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.32rem 0.75rem',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span style={{ color: 'var(--accent-amber)', fontSize: '0.75rem' }}>#</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Status Box */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1.15rem',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div
                className="font-mono"
                style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}
              >
                // status
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                  marginTop: '0.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                }}
              >
                <span className="status-dot-pulse" />
                <span>{experience.statusText || 'Currently working'}</span>
              </div>
            </div>

            <span
              className="font-mono"
              style={{
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
              }}
            >
              Verified Role
            </span>
          </div>

          {/* Bottom Actions Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '1.25rem',
              marginTop: '0.25rem',
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.76rem',
                color: 'var(--text-dim)',
              }}
            >
              iPolygon · October 2026 — Present
            </span>

            <button onClick={onClose} className="btn btn-secondary">
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
