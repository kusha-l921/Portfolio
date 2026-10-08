'use client';

import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectSystemFlowProps {
  project: Project;
}

export default function ProjectSystemFlow({ project }: ProjectSystemFlowProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = project.systemFlow || [];
  const specGrid = project.specGrid || [];

  if (steps.length === 0 && specGrid.length === 0) return null;

  return (
    <div
      className="project-system-flow-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '0.65rem',
        marginBottom: '0.2rem',
      }}
    >
      {/* Section Label: Small Technical Header */}
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
          SYSTEM FLOW
        </span>
        <span
          style={{
            height: '1px',
            flex: 1,
            backgroundColor: 'var(--border-subtle)',
          }}
        />
      </div>

      {/* Horizontal Pipeline Steps */}
      {steps.length > 0 && (
        <div
          className="system-flow-pipeline"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: '0.35rem',
          }}
        >
          {steps.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <React.Fragment key={item.step}>
                <div
                  className="system-flow-step"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: '0.45rem 0.55rem',
                    borderRadius: '6px',
                    backgroundColor: isHovered ? 'var(--bg-surface-hover)' : 'var(--bg-surface)',
                    border: '1px solid',
                    borderColor: isHovered ? 'var(--accent-blue-border)' : 'var(--border-subtle)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem',
                    cursor: 'default',
                    boxShadow: isHovered
                      ? '0 2px 10px rgba(91, 140, 255, 0.12)'
                      : 'none',
                  }}
                >
                  {/* Step Number + Step Label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.62rem',
                        color: isHovered ? 'var(--accent-blue-light)' : 'var(--accent-blue)',
                        fontWeight: 600,
                      }}
                    >
                      {item.step}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        color: isHovered ? 'var(--text-white)' : 'var(--text-primary)',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Step Detail */}
                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: isHovered ? 'var(--text-light)' : 'var(--text-muted)',
                      lineHeight: 1.25,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s ease',
                    }}
                    title={item.detail}
                  >
                    {item.detail}
                  </span>
                </div>

                {/* Arrow Connector */}
                {idx < steps.length - 1 && (
                  <span
                    className="system-flow-arrow"
                    style={{
                      fontSize: '0.74rem',
                      color:
                        hoveredIdx === idx || hoveredIdx === idx + 1
                          ? 'var(--accent-blue)'
                          : 'var(--border-light)',
                      flexShrink: 0,
                      userSelect: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Secondary Technical Specifications Row (only rendered if technicalSnapshot is not provided) */}
      {!project.technicalSnapshot && specGrid.length > 0 && (
        <div
          className="system-flow-specs-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '0.65rem',
            marginTop: '0.6rem',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {specGrid.map((spec) => (
            <div key={spec.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {spec.label}
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-light)',
                  fontWeight: 600,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                title={spec.value}
              >
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 1024px) {
          .system-flow-pipeline {
            flex-wrap: wrap !important;
            gap: 0.5rem !important;
          }
          .system-flow-arrow {
            display: none !important;
          }
          .system-flow-step {
            flex: 1 1 calc(50% - 0.5rem) !important;
            min-width: 130px !important;
          }
          .system-flow-specs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .system-flow-step {
            flex: 1 1 100% !important;
          }
          .system-flow-specs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
