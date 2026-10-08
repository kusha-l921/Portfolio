'use client';

import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectTechnicalSnapshotProps {
  project: Project;
}

export default function ProjectTechnicalSnapshot({ project }: ProjectTechnicalSnapshotProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const items = project.technicalSnapshot || [];
  if (items.length === 0) return null;

  return (
    <div
      className="project-technical-snapshot-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '0.65rem',
        marginBottom: '0.4rem',
      }}
    >
      {/* Small Technical Section Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          marginBottom: '0.45rem',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.64rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            fontWeight: 600,
          }}
        >
          TECHNICAL SNAPSHOT
        </span>
        <span
          style={{
            height: '1px',
            flex: 1,
            backgroundColor: 'var(--border-subtle)',
          }}
        />
      </div>

      {/* Snapshot Specification Grid */}
      <div
        className="technical-snapshot-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '0.45rem',
        }}
      >
        {items.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={item.label}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.15rem',
                padding: '0.4rem 0.6rem',
                borderRadius: '5px',
                backgroundColor: isHovered ? 'var(--bg-surface-hover)' : 'var(--bg-surface)',
                border: '1px solid',
                borderColor: isHovered ? 'var(--accent-blue-border)' : 'var(--border-subtle)',
                transition: 'all 0.2s ease',
                minWidth: 0,
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: '0.58rem',
                  color: isHovered ? 'var(--accent-blue)' : 'var(--text-muted)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: isHovered ? 'var(--text-white)' : 'var(--text-light)',
                  fontWeight: 600,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease',
                }}
                title={item.value}
              >
                {item.value}
              </span>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .technical-snapshot-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .technical-snapshot-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
