'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const FILTERS = ['All', 'AI / ML', 'Computer Vision', 'Systems'] as const;

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedFilter === 'All') return true;
    return proj.category === selectedFilter;
  });

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid #141414' }}>
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
              <span>&gt; projects/</span>
            </div>
            <span
              className="font-mono"
              style={{ fontSize: '0.75rem', color: '#555555' }}
            >
              03
            </span>
          </div>

          <h2 className="section-title">Selected Work</h2>
          <p className="section-desc">
            A collection of projects, experiments and systems I&apos;ve built.
          </p>

          {/* Monochrome Filter Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.5rem',
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
                    fontSize: '0.78rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    backgroundColor: isActive ? '#EEEEEE' : '#0E0E0E',
                    color: isActive ? '#050505' : '#8A8A8A',
                    border: '1px solid',
                    borderColor: isActive ? '#FFFFFF' : '#1F1F1F',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#EEEEEE';
                      e.currentTarget.style.borderColor = '#333333';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#8A8A8A';
                      e.currentTarget.style.borderColor = '#1F1F1F';
                    }
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Archive List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card project-card-item"
              style={{
                borderRadius: '8px',
                backgroundColor: '#0A0A0A',
                border: '1px solid #1A1A1A',
                overflow: 'hidden',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
                  gap: '1.5rem',
                  padding: '1.5rem',
                  alignItems: 'center',
                }}
                className="project-grid"
              >
                {/* Left: Project Information */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Micro header: Number + Category */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.78rem',
                        color: '#666666',
                      }}
                    >
                      {project.number}
                    </span>
                    <span style={{ color: '#252525' }}>·</span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.72rem',
                        color: '#8A8A8A',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ color: '#252525' }}>·</span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.72rem',
                        color: '#555555',
                      }}
                    >
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="project-title"
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
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
                      fontSize: '0.92rem',
                      color: '#8A8A8A',
                      lineHeight: 1.55,
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono"
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          backgroundColor: '#121212',
                          border: '1px solid #1E1E1E',
                          color: '#A5A5A5',
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
                        gap: '0.5rem',
                        padding: '0.4rem 0.75rem',
                        borderRadius: '6px',
                        backgroundColor: '#0F0F0F',
                        border: '1px solid #1C1C1C',
                        width: 'fit-content',
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: '#666666' }}>
                        {project.results[0].metric}:
                      </span>
                      <span
                        className="font-mono"
                        style={{ fontSize: '0.78rem', color: '#EEEEEE', fontWeight: 600 }}
                      >
                        {project.results[0].value}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#555555' }}>
                        ({project.results[0].detail})
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginTop: '0.35rem',
                    }}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="project-action-btn font-mono"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.8rem',
                        color: '#EEEEEE',
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
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: '#8A8A8A',
                        textDecoration: 'none',
                        transition: 'color 0.18s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
                    >
                      <span>GitHub</span>
                      <span style={{ fontSize: '0.85rem' }}>↗</span>
                    </a>
                  </div>
                </div>

                {/* Right: Technical Preview / Schematic */}
                <div
                  className="project-preview-wrapper"
                  onClick={() => setActiveModalProject(project)}
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid #1C1C1C',
                    backgroundColor: '#080808',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      style={{
                        objectFit: 'cover',
                        filter: 'grayscale(100%) contrast(1.15) brightness(0.75)',
                        transition: 'transform 0.3s ease, filter 0.3s ease',
                      }}
                      className="project-img-inner"
                    />
                  ) : (
                    /* Minimal Blueprint Graphic for projects without raw satellite photos */
                    <div
                      style={{
                        padding: '1.25rem',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: '#0B0B0B',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderBottom: '1px solid #181818',
                          paddingBottom: '0.4rem',
                        }}
                      >
                        <span style={{ fontSize: '0.68rem', color: '#666666' }}>
                          // schematic.sys
                        </span>
                        <span style={{ fontSize: '0.65rem', color: '#444444' }}>
                          {project.id}.bin
                        </span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.35rem',
                          fontSize: '0.72rem',
                          color: '#8A8A8A',
                        }}
                      >
                        {project.architecture.slice(0, 3).map((arch, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                            }}
                          >
                            <span style={{ color: '#444444' }}>0{i + 1}</span>
                            <span style={{ color: '#A5A5A5' }}>{arch}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontSize: '0.65rem',
                          color: '#555555',
                          borderTop: '1px solid #161616',
                          paddingTop: '0.4rem',
                        }}
                      >
                        <span>[ONNX / C++]</span>
                        <span>[READY]</span>
                      </div>
                    </div>
                  )}

                  {/* Hover prompt */}
                  <div
                    className="project-overlay-hint"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(5, 5, 5, 0.65)',
                      backdropFilter: 'blur(2px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.2s ease',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: '#FFFFFF',
                    }}
                  >
                    <span>Click to inspect specs ↗</span>
                  </div>
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
        @media (max-width: 820px) {
          .project-grid {
            gridTemplateColumns: 1fr !important;
            gap: 1.25rem !important;
          }
          .project-preview-wrapper {
            height: 180px !important;
          }
        }
        .project-card-item:hover {
          border-color: #2B2B2B !important;
          transform: translateY(-2px);
          background-color: #0E0E0E !important;
        }
        .project-card-item:hover .project-title {
          transform: translateX(3px);
          color: #FFFFFF !important;
        }
        .project-card-item:hover .project-arrow {
          transform: translateX(3px);
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
