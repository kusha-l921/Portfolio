'use client';

import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: '3.5rem',
        paddingBottom: '4rem',
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
            className="font-mono footer-social-links"
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
              className="footer-social-link"
            >
              <span>GitHub</span>
              <span className="footer-arrow">↗</span>
            </a>
            <a
              href={PERSONAL_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <span>LinkedIn</span>
              <span className="footer-arrow">↗</span>
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="footer-social-link"
            >
              <span>Email</span>
              <span className="footer-arrow">↗</span>
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

      <style jsx global>{`
        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.18s var(--ease-smooth);
        }
        .footer-social-link .footer-arrow {
          display: inline-block;
          transition: transform 0.22s var(--ease-smooth), color 0.2s ease;
          color: var(--text-muted);
        }
        .footer-social-link:hover {
          color: var(--text-white);
        }
        .footer-social-link:hover .footer-arrow {
          transform: translate(2px, -2px);
          color: var(--accent-blue);
        }
      `}</style>
    </footer>
  );
}
