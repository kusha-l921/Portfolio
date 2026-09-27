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
    <section id="contact" className="section" style={{ borderTop: '1px solid #141414' }}>
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
              style={{ fontSize: '0.75rem', color: '#555555' }}
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

        {/* Contact Container Box */}
        <div
          style={{
            maxWidth: '780px',
            backgroundColor: '#0B0B0B',
            border: '1px solid #1C1C1C',
            borderRadius: '10px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Email Action Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              padding: '1rem 1.25rem',
              backgroundColor: '#101010',
              border: '1px solid #1E1E1E',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: '#181818',
                  border: '1px solid #282828',
                  color: '#A5A5A5',
                  fontSize: '0.85rem',
                }}
              >
                ✉
              </span>
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.68rem', color: '#666666', display: 'block' }}
                >
                  direct_email
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.88rem',
                    color: '#EEEEEE',
                    fontWeight: 500,
                  }}
                >
                  {PERSONAL_DATA.email}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <button
                onClick={copyEmail}
                className="font-mono"
                style={{
                  fontSize: '0.75rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '6px',
                  backgroundColor: copied ? '#1F1F1F' : '#141414',
                  color: copied ? '#FFFFFF' : '#A5A5A5',
                  border: '1px solid',
                  borderColor: copied ? '#3A3A3A' : '#252525',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                {copied ? '✓ copied!' : 'copy'}
              </button>

              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="btn btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.95rem' }}
              >
                <span>Send an email</span>
                <span style={{ fontSize: '0.85rem' }}>↗</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Secondary CTA */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
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
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#0E0E0E',
                border: '1px solid #1B1B1B',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.68rem', color: '#666666', display: 'block' }}
                >
                  GitHub
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.82rem', color: '#EEEEEE' }}
                >
                  @kusha-l921
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.85rem', color: '#666666' }}>
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
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#0E0E0E',
                border: '1px solid #1B1B1B',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.68rem', color: '#666666', display: 'block' }}
                >
                  LinkedIn
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.82rem', color: '#EEEEEE' }}
                >
                  /in/kushalpatel15
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.85rem', color: '#666666' }}>
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
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#0E0E0E',
                border: '1px solid #1B1B1B',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.68rem', color: '#666666', display: 'block' }}
                >
                  Resume
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: '0.82rem', color: '#EEEEEE' }}
                >
                  Kushal_Patel.pdf
                </span>
              </div>
              <span className="font-mono" style={{ fontSize: '0.85rem', color: '#666666' }}>
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
