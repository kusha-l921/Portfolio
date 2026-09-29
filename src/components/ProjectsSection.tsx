'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectTerminalBox from './ProjectTerminalBox';

const FILTERS = ['All', 'AI / ML', 'Computer Vision', 'Systems'] as const;

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="terminal-label">
            <span>&gt; projects/</span>
          </div>

          <h2 className="section-title">Selected Work</h2>
          <p className="section-desc">
            A collection of production experiments, neural architectures, and edge systems.
          </p>

          {/* Monochrome Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            {FILTERS.map((f) => {
              const isActive = selectedFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '6px',
                    backgroundColor: isActive ? 'var(--text-white)' : 'var(--bg-card)',
                    color: isActive ? 'var(--bg-body)' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--text-white)' : 'var(--border-card)',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-white)';
                      e.currentTarget.style.borderColor = 'var(--border-hover)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-card)';
                    }
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Full-Width Panels List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="card project-card-item"
              style={{
                borderRadius: '8px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-card)',
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                scrollMarginTop: '100px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.55fr) minmax(0, 1fr)',
                  gap: 'clamp(1.5rem, 3.5vw, 3rem)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  alignItems: 'center',
                }}
                className="project-grid"
              >
                {/* Left: Project Information */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Micro header: Number + Category */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.number}
                    </span>
                    <span style={{ color: 'var(--border-card)' }}>·</span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.75rem',
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
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Title (Large Desktop Scale 28-36px) */}
                  <h3
                    className="project-title"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.3vw, 2.15rem)',
                      fontWeight: 700,
                      color: 'var(--text-white)',
                      letterSpacing: '-0.025em',
                      lineHeight: 1.18,
                      transition: 'transform 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onClick={() => setActiveModalProject(project)}
                  >
                    {project.title}
                  </h3>

                  {/* Tagline / Description */}
                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono"
                        style={{
                          fontSize: '0.76rem',
                          padding: '0.25rem 0.6rem',
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
                        gap: '0.6rem',
                        padding: '0.45rem 0.85rem',
                        borderRadius: '6px',
                        backgroundColor: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        width: 'fit-content',
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {project.results[0].metric}:
                      </span>
                      <span
                        className="font-mono"
                        style={{ fontSize: '0.82rem', color: 'var(--text-white)', fontWeight: 600 }}
                      >
                        {project.results[0].value}
                      </span>
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                        ({project.results[0].detail})
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="project-action-btn font-mono"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.84rem',
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

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.84rem',
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
                  </div>
                </div>

                {/* Right: Technical Terminal Preview Box */}
                <div
                  className="project-preview-wrapper"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ProjectTerminalBox
                    project={project}
                    onClick={() => setActiveModalProject(project)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <style jsx global>{`
        @media (max-width: 860px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .project-preview-wrapper {
            height: 200px !important;
          }
        }
        .project-card-item:hover {
          border-color: var(--border-hover) !important;
          transform: translateY(-2px);
          background-color: var(--bg-card-hover) !important;
        }
        .project-card-item:hover .project-title {
          transform: translateX(4px);
        }
        .project-card-item:hover .project-arrow {
          transform: translateX(4px);
        }
        .project-card-item:hover .project-img-inner {
          transform: scale(1.03);
          filter: grayscale(100%) contrast(1.2) brightness(0.9) !important;
        }
        .project-preview-wrapper:hover .project-overlay-hint {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
