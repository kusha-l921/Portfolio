'use client';

import React from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectTerminalBoxProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export default function ProjectTerminalBox({ project, className = '', onClick }: ProjectTerminalBoxProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scriptName = `run_${project.id.replace(/-/g, '_')}.sh`;

  return (
    <div
      onClick={onClick}
      className={`project-terminal-box ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '230px',
        maxHeight: '290px',
        borderRadius: '6px',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: isLight ? 'var(--border-card)' : 'var(--border-card)',
        backgroundColor: isLight ? '#EFEFEA' : '#090909',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.74rem',
        lineHeight: 1.55,
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.04)' : '0 4px 20px rgba(0, 0, 0, 0.5)',
        transition: 'border-color 0.2s ease, background-color 0.25s ease, box-shadow 0.2s ease',
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
          flexShrink: 0,
        }}
      >
        {/* Left: Window Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#D0D0CA' : '#2A2A2A',
              border: isLight ? '1px solid #BCBCB6' : '1px solid #383838',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#D0D0CA' : '#2A2A2A',
              border: isLight ? '1px solid #BCBCB6' : '1px solid #383838',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#D0D0CA' : '#2A2A2A',
              border: isLight ? '1px solid #BCBCB6' : '1px solid #383838',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              marginLeft: '0.4rem',
              fontSize: '0.7rem',
              color: isLight ? 'var(--text-secondary)' : 'var(--text-dim)',
              letterSpacing: '0.02em',
            }}
          >
            {scriptName}
          </span>
        </div>

        {/* Right: Runtime Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              backgroundColor: isLight ? '#3A3A35' : '#D0D0D0',
              boxShadow: isLight ? 'none' : '0 0 4px rgba(255, 255, 255, 0.2)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.65rem',
              color: isLight ? 'var(--text-muted)' : 'var(--gray-medium)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            eval · ok
          </span>
        </div>
      </div>

      {/* Terminal Screen Body */}
      <div
        style={{
          flex: 1,
          padding: '0.75rem 0.95rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: isLight ? '#222220' : '#D0D0D0',
          overflowY: 'auto',
          backgroundColor: isLight ? '#F5F5F2' : '#080808',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
          {/* Invocation */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
            <span style={{ color: isLight ? '#777770' : '#666666' }}>kushal@edge:~$</span>
            <span style={{ color: isLight ? '#0A0A0A' : '#FFFFFF', fontWeight: 500 }}>
              ./eval --project {project.id}
            </span>
          </div>

          {/* Model info */}
          <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
            <span style={{ color: isLight ? '#888880' : '#555555' }}>[arch]</span>
            <span style={{ color: isLight ? '#1A1A18' : '#CCCCCC' }}>
              {project.architecture[0]}
            </span>
          </div>

          {project.architecture[1] && (
            <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
              <span style={{ color: isLight ? '#888880' : '#555555' }}>[pipe]</span>
              <span style={{ color: isLight ? '#2A2A26' : '#B8B8B8' }}>
                {project.architecture[1]}
              </span>
            </div>
          )}

          {/* Verified Results Output */}
          {project.results.length > 0 && (
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.1rem' }}>
              <span style={{ color: isLight ? '#888880' : '#555555' }}>[eval]</span>
              <span style={{ color: isLight ? '#111111' : '#FFFFFF' }}>
                {project.results[0].metric}:{' '}
                <strong style={{ fontWeight: 600 }}>{project.results[0].value}</strong>{' '}
                <span style={{ color: isLight ? '#666660' : '#888888', fontSize: '0.7rem' }}>
                  ({project.results[0].detail})
                </span>
              </span>
            </div>
          )}

          {project.results.length > 1 && (
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <span style={{ color: isLight ? '#888880' : '#555555' }}>[eval]</span>
              <span style={{ color: isLight ? '#111111' : '#FFFFFF' }}>
                {project.results[1].metric}:{' '}
                <strong style={{ fontWeight: 600 }}>{project.results[1].value}</strong>{' '}
                <span style={{ color: isLight ? '#666660' : '#888888', fontSize: '0.7rem' }}>
                  ({project.results[1].detail})
                </span>
              </span>
            </div>
          )}

          {/* Stack summary */}
          <div style={{ display: 'flex', gap: '0.4rem', color: isLight ? '#555550' : '#888888' }}>
            <span style={{ color: isLight ? '#888880' : '#555555' }}>[stack]</span>
            <span style={{ color: isLight ? '#444440' : '#AAAAAA' }}>
              {project.tags.slice(0, 3).join(' · ')}
            </span>
          </div>
        </div>

        {/* Bottom prompt line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            paddingTop: '0.4rem',
            borderTop: '1px solid',
            borderColor: isLight ? '#E5E5E0' : '#141414',
            fontSize: '0.68rem',
            color: isLight ? '#777770' : '#666666',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>kushal@edge:~$</span>
            <span
              className="cursor-blink"
              style={{
                display: 'inline-block',
                width: '6px',
                height: '1.05em',
                backgroundColor: isLight ? '#111111' : '#FFFFFF',
              }}
            />
          </div>

          <span style={{ fontSize: '0.65rem', color: isLight ? '#888880' : '#555555' }}>
            click card for details →
          </span>
        </div>
      </div>
    </div>
  );
}
