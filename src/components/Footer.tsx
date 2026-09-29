'use client';

import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '2.5rem',
        paddingBottom: '3.5rem',
        backgroundColor: 'var(--bg-body)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Identity */}
          <div>
            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-white)' }}>
              {PERSONAL_DATA.fullName}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}
            >
              AI/ML Engineer · Systems Builder
            </div>
          </div>

          {/* Social Links */}
          <div
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              fontSize: '0.78rem',
            }}
          >
            <a
              href={PERSONAL_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Email ↗
            </a>
          </div>

          {/* End of session and copyright */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.2rem',
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}
            >
              &gt; end_of_session
            </span>
            <span
              className="font-mono"
              style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}
            >
              © 2026 {PERSONAL_DATA.fullName}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
