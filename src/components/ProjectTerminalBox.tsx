'use client';

import React from 'react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import TerminalPromptBlock from './TerminalPromptBlock';

interface ProjectTerminalBoxProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export default function ProjectTerminalBox({ project, className = '', onClick }: ProjectTerminalBoxProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scriptName = `run_${project.id.replace(/-/g, '_')}.sh`;

  // Real Linux Terminal Color Palette
  const colors = {
    bgBase: isLight ? '#F5F6F8' : '#08090B',
    bgHeader: isLight ? '#E5E7EB' : '#111318',
    border: isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.10)',
    borderSubtle: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
    textPrimary: isLight ? '#1A1D24' : '#E6E6E6',
    textSecondary: isLight ? '#555A63' : '#8B8F98',
    textMuted: isLight ? '#7A808C' : '#555A63',
    accent: isLight ? '#3E72EC' : '#5B8CFF',
  };

  return (
    <div
      onClick={onClick}
      className={`project-terminal-box ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '260px',
        maxHeight: '100%',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.bgBase,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.73rem',
        lineHeight: 1.55,
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: isLight
          ? '0 4px 16px rgba(0, 0, 0, 0.04)'
          : '0 4px 20px rgba(0, 0, 0, 0.55)',
        transition: 'border-color 0.2s ease, background-color 0.25s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Linux Terminal Window Chrome / Title Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '32px',
          padding: '0 0.85rem',
          backgroundColor: colors.bgHeader,
          borderBottom: `1px solid ${colors.borderSubtle}`,
          userSelect: 'none',
          flexShrink: 0,
        }}
      >
        {/* Left: Window Controls + Script File */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span
              style={{
                width: '7.5px',
                height: '7.5px',
                borderRadius: '50%',
                backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '7.5px',
                height: '7.5px',
                borderRadius: '50%',
                backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '7.5px',
                height: '7.5px',
                borderRadius: '50%',
                backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                display: 'inline-block',
              }}
            />
          </div>

          <span
            style={{
              marginLeft: '0.45rem',
              fontSize: '0.7rem',
              color: colors.textSecondary,
              letterSpacing: '0.02em',
              fontWeight: 500,
            }}
          >
            {scriptName}
          </span>
        </div>

        {/* Right: Runtime Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span
            style={{
              width: '4.5px',
              height: '4.5px',
              borderRadius: '50%',
              backgroundColor: colors.accent,
              boxShadow: `0 0 6px ${colors.accent}`,
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.64rem',
              color: colors.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              fontWeight: 600,
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
          color: colors.textPrimary,
          overflowY: 'auto',
          backgroundColor: colors.bgBase,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {/* Shell Prompt Block inspired by reference */}
          <TerminalPromptBlock
            path={`~/projects/${project.id}`}
            user="kushal@portfolio"
            commandText={`run ./eval --project ${project.id}`}
            compact={true}
            accentColor={colors.accent}
          />

          {/* Model Architecture */}
          <div style={{ display: 'flex', gap: '0.45rem' }}>
            <span style={{ color: colors.textMuted, flexShrink: 0 }}>[arch]</span>
            <span style={{ color: isLight ? '#2D3139' : '#D0D3DA' }}>
              {project.architecture[0]}
            </span>
          </div>

          {/* Pipeline */}
          {project.architecture[1] && (
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <span style={{ color: colors.textMuted, flexShrink: 0 }}>[pipe]</span>
              <span style={{ color: isLight ? '#4B5262' : '#A6AAB4' }}>
                {project.architecture[1]}
              </span>
            </div>
          )}

          {/* Verified Results Output Line 1 */}
          {project.results.length > 0 && (
            <div style={{ display: 'flex', gap: '0.45rem', marginTop: '0.08rem' }}>
              <span style={{ color: colors.textMuted, flexShrink: 0 }}>[eval]</span>
              <span style={{ color: colors.textPrimary }}>
                <span style={{ color: colors.textSecondary }}>{project.results[0].metric}:</span>{' '}
                <strong style={{ fontWeight: 600, color: colors.textPrimary }}>
                  {project.results[0].value}
                </strong>{' '}
                <span style={{ color: colors.textMuted, fontSize: '0.69rem' }}>
                  ({project.results[0].detail})
                </span>
              </span>
            </div>
          )}

          {/* Verified Results Output Line 2 */}
          {project.results.length > 1 && (
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <span style={{ color: colors.textMuted, flexShrink: 0 }}>[eval]</span>
              <span style={{ color: colors.textPrimary }}>
                <span style={{ color: colors.textSecondary }}>{project.results[1].metric}:</span>{' '}
                <strong style={{ fontWeight: 600, color: colors.textPrimary }}>
                  {project.results[1].value}
                </strong>{' '}
                <span style={{ color: colors.textMuted, fontSize: '0.69rem' }}>
                  ({project.results[1].detail})
                </span>
              </span>
            </div>
          )}

          {/* Stack summary */}
          <div style={{ display: 'flex', gap: '0.45rem' }}>
            <span style={{ color: colors.textMuted, flexShrink: 0 }}>[stack]</span>
            <span style={{ color: colors.textSecondary }}>
              {project.tags.slice(0, 4).join(' · ')}
            </span>
          </div>

          {/* Divider between architecture context and execution trace */}
          {project.executionTrace && project.executionTrace.length > 0 && (
            <div
              style={{
                height: '1px',
                backgroundColor: colors.borderSubtle,
                margin: '0.35rem 0',
              }}
            />
          )}

          {/* Execution Trace Block */}
          {project.executionTrace && project.executionTrace.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.15rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.62rem',
                    color: colors.textMuted,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                  }}
                >
                  execution trace
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    color: '#10B981',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                  }}
                >
                  ● active session
                </span>
              </div>

              {project.executionTrace.map((trace) => (
                <div
                  key={trace.phase}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.45rem',
                    fontSize: '0.67rem',
                    lineHeight: 1.45,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      minWidth: 0,
                    }}
                  >
                    <span style={{ color: colors.accent, fontWeight: 600, flexShrink: 0 }}>
                      {trace.phase}
                    </span>
                    <span
                      style={{
                        color: isLight ? '#2D3139' : '#D0D3DA',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      title={trace.action}
                    >
                      {trace.action}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: colors.borderSubtle,
                        letterSpacing: '0.12em',
                        userSelect: 'none',
                        fontSize: '0.6rem',
                      }}
                    >
                      ....
                    </span>
                    <span style={{ color: '#10B981', fontWeight: 600 }}>
                      {trace.status}
                    </span>
                    {trace.duration && (
                      <span
                        style={{
                          color: colors.textMuted,
                          fontSize: '0.62rem',
                        }}
                      >
                        ({trace.duration})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Linux Prompt Line & Card Interaction Hint */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            paddingTop: '0.4rem',
            borderTop: `1px solid ${colors.borderSubtle}`,
            fontSize: '0.68rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>
              <span style={{ color: colors.textSecondary }}>kushal@portfolio</span>
              <span style={{ color: colors.textMuted }}>:</span>
              <span style={{ color: colors.accent }}>~$</span>
            </span>
            <span
              className="terminal-cursor-block"
              style={{
                width: '6px',
                height: '1.05em',
                backgroundColor: colors.accent,
              }}
            />
          </div>

          <span style={{ fontSize: '0.65rem', color: colors.textMuted }}>
            click card for details →
          </span>
        </div>
      </div>
    </div>
  );
}
