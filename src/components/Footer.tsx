'use client';

import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #141414',
        paddingTop: '2.5rem',
        paddingBottom: '3.5rem',
        backgroundColor: '#050505',
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
            <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFFFFF' }}>
              {PERSONAL_DATA.fullName}
            </div>
            <div
              className="font-mono"
              style={{ fontSize: '0.72rem', color: '#666666', marginTop: '0.15rem' }}
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
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              GitHub ↗
            </a>
            <a
              href={PERSONAL_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              style={{ color: '#8A8A8A', textDecoration: 'none', transition: 'color 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
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
              style={{ fontSize: '0.72rem', color: '#444444' }}
            >
              &gt; end_of_session
            </span>
            <span
              className="font-mono"
              style={{ fontSize: '0.72rem', color: '#666666' }}
            >
              © 2026 {PERSONAL_DATA.fullName}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
