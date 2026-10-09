'use client';

import React, { useState, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Project } from '../types';
import ProjectTerminalBox from './ProjectTerminalBox';
import ProjectSystemFlow from './ProjectSystemFlow';
import ProjectTechnicalSnapshot from './ProjectTechnicalSnapshot';

interface ProjectStackItemProps {
  project: Project;
  index?: number;
  total?: number;
  overlayOpacity?: MotionValue<number>;
  onSelectProject: (project: Project) => void;
}

export default function ProjectStackItem({
  project,
  overlayOpacity,
  onSelectProject,
}: ProjectStackItemProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="project-slide-item"
      style={{
        width: '100%',
        maxWidth: '1550px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Large, Commanding Project Card */}
      <div
        id={`project-${project.id}`}
        className="card project-card-item"
        style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? 'calc(100svh - 86px)' : 'clamp(560px, 72vh, 820px)',
          maxHeight: isMobile ? 'calc(100svh - 86px)' : 'none',
          minHeight: isMobile ? '460px' : '560px',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          overflowY: isMobile ? 'auto' : 'hidden',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          boxSizing: 'border-box',
          scrollMarginTop: '100px',
          boxShadow:
            '0 -8px 30px rgba(0, 0, 0, 0.65), -14px 0 45px rgba(0, 0, 0, 0.75), 0 24px 60px rgba(0, 0, 0, 0.85)',
        }}
      >
        {/* Internal Card Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.35fr) minmax(0, 1.15fr)',
            gap: isMobile ? '1.35rem' : 'clamp(1.75rem, 3.2vw, 3.2rem)',
            padding: isMobile ? '1.15rem' : 'clamp(2.2rem, 3.2vw, 3.2rem)',
            height: isMobile ? 'auto' : '100%',
            alignItems: 'stretch',
            position: 'relative',
            zIndex: 1,
            boxSizing: 'border-box',
          }}
          className="project-grid"
        >
          {/* Left Column: Metadata, Title, Description, Tags, Results, Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            {/* Top Cluster */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Micro Header: Number + Category + Period */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.number}
                </span>
                <span style={{ color: 'var(--border-card)' }}>·</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.category}
                </span>
                <span style={{ color: 'var(--border-card)' }}>·</span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  {project.period}
                </span>
              </div>

              {/* Title (Prominent Desktop Scale 28–36px) */}
              <h3
                className="project-title"
                style={{
                  fontSize: 'clamp(1.85rem, 2.6vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  marginTop: '0.75rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                onClick={() => onSelectProject(project)}
              >
                {project.title}
              </h3>

              {/* Tagline / Description */}
              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.15vw, 1.08rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginTop: '0.85rem',
                }}
              >
                {project.tagline}
              </p>

              {/* Technology Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  marginTop: '1.25rem',
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono"
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.65rem',
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

              {/* Verified Key Metric Pill */}
              {project.results.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.5rem 0.95rem',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    width: 'fit-content',
                    marginTop: '1.35rem',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {project.results[0].metric}:
                  </span>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}
                  >
                    {project.results[0].value}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    ({project.results[0].detail})
                  </span>
                </div>
              )}
            </div>

            {/* Technical System Flow & Specification Visualization */}
            <ProjectSystemFlow project={project} />

            {/* Technical Snapshot Matrix */}
            <ProjectTechnicalSnapshot project={project} />

            {/* Bottom Cluster: Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '0.85rem',
                paddingTop: '0.5rem',
              }}
            >
              <button
                onClick={() => onSelectProject(project)}
                className="project-action-btn font-mono"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--text-white)',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <span>View Details</span>
                <span className="project-arrow" style={{ transition: 'transform 0.2s ease' }}>
                  →
                </span>
              </button>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.18s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>GitHub</span>
                  <span style={{ fontSize: '0.9rem' }}>↗</span>
                </a>
              ) : (
                <span
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    userSelect: 'none',
                  }}
                >
                  <span>Private Repo</span>
                  <span style={{ fontSize: '0.75rem' }}>🔒</span>
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Full-Height Technical Terminal Preview Box */}
          <div
            className="project-preview-wrapper"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: isMobile ? '230px' : '360px',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <ProjectTerminalBox
              project={project}
              onClick={() => onSelectProject(project)}
            />
          </div>
        </div>

        {/* Subtle Darkening Overlay when subsequent card slides on top */}
        {overlayOpacity && (
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '12px',
              backgroundColor: '#000000',
              opacity: overlayOpacity,
              pointerEvents: 'none',
              zIndex: 20,
            }}
          />
        )}
      </div>
    </div>
  );
}
