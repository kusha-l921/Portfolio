'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
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
              <span>&gt; contact.init()</span>
            </div>
            <span
              className="font-mono"
              style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
            >
              05
            </span>
          </div>

          <h2 className="section-title">Let&apos;s build something.</h2>
          <p className="section-desc">
            I&apos;m always open to interesting conversations, collaboration opportunities,
            or discussing AI/ML architectures and research ideas.
          </p>
        </div>

        {/* Full-Width Contact Container Box */}
        <div
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '10px',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Email Action Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.25rem, 2.5vw, 2rem)',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-pill)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-light)',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                ✉
              </span>
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}
                >
                  direct_email
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                  }}
                >
                  {PERSONAL_DATA.email}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={copyEmail}
                className="font-mono"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '6px',
                  backgroundColor: copied ? 'var(--border-strong)' : 'var(--bg-pill)',
                  color: copied ? 'var(--text-white)' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: copied ? 'var(--border-hover)' : 'var(--border-card)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                {copied ? '✓ copied!' : 'copy'}
              </button>

              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="btn btn-primary"
                style={{ fontSize: '0.85rem', padding: '0.55rem 1.15rem' }}
              >
                <span>Send an email</span>
                <span style={{ fontSize: '0.9rem' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Secondary CTA (Full Width Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* GitHub Card */}
            <a
              href={PERSONAL_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}
                >
                  GitHub
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.92rem', color: 'var(--text-white)', fontWeight: 500 }}
                >
                  @kusha-l921
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                ↗
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}
                >
                  LinkedIn
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.92rem', color: 'var(--text-white)', fontWeight: 500 }}
                >
                  /in/kushalpatel15
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                ↗
              </span>
            </a>

            {/* Resume Card */}
            <a
              href={PERSONAL_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}
                >
                  Resume
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.92rem', color: 'var(--text-white)', fontWeight: 500 }}
                >
                  Kushal_Patel.pdf
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
