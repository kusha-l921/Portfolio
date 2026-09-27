'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '../data/portfolioData';

const NAV_LINKS = [
  { label: '/me', href: '#me' },
  { label: '/about', href: '#about' },
  { label: '/education', href: '#education' },
  { label: '/projects', href: '#projects' },
  { label: '/skills', href: '#skills' },
  { label: '/contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('me');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['me', 'about', 'education', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: '12px',
        zIndex: 50,
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
        padding: '0 1rem',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '52px',
          padding: '0 1rem',
          borderRadius: '9999px',
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.92)' : 'rgba(13, 13, 13, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid',
          borderColor: isScrolled ? '#262626' : '#1A1A1A',
          boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.6)' : 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Main Navigation"
      >
        {/* Left: Avatar + Identity */}
        <a
          href="#me"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid #333333',
              backgroundColor: '#171717',
              flexShrink: 0,
            }}
          >
            <Image
              src={PERSONAL_DATA.avatarImage}
              alt="Kushal Patel"
              fill
              sizes="28px"
              style={{
                objectFit: 'cover',
                filter: 'grayscale(100%) brightness(0.95)',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
              }}
            >
              {PERSONAL_DATA.fullName}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.68rem',
                color: '#8A8A8A',
              }}
            >
              AI/ML Engineer
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div
          className="desktop-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className="font-mono"
                style={{
                  fontSize: '0.78rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  color: isActive ? '#FFFFFF' : '#8A8A8A',
                  backgroundColor: isActive ? '#1F1F1F' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? '#333333' : 'transparent',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#EEEEEE';
                    e.currentTarget.style.backgroundColor = '#161616';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#8A8A8A';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: Online Status + Resume Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          {/* Online status indicator */}
          <div
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              color: '#8A8A8A',
              padding: '0.25rem 0.5rem',
              borderRadius: '9999px',
              backgroundColor: '#121212',
              border: '1px solid #1C1C1C',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#EEEEEE',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.4)',
                display: 'inline-block',
              }}
            />
            <span>online</span>
          </div>

          {/* Resume PDF link */}
          <a
            href={PERSONAL_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              padding: '0.32rem 0.75rem',
              borderRadius: '9999px',
              color: '#FFFFFF',
              backgroundColor: '#1A1A1A',
              border: '1px solid #2D2D2D',
              textDecoration: 'none',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#262626';
              e.currentTarget.style.borderColor = '#444444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1A1A';
              e.currentTarget.style.borderColor = '#2D2D2D';
            }}
          >
            <span>resume.pdf</span>
            <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>↗</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: '1px solid #222222',
              borderRadius: '6px',
              padding: '0.35rem',
              color: '#EEEEEE',
              cursor: 'pointer',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: '0.5rem',
            backgroundColor: '#0D0D0D',
            border: '1px solid #222222',
            borderRadius: '12px',
            padding: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono"
              style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                color: activeSection === link.href.replace('#', '') ? '#FFFFFF' : '#8A8A8A',
                backgroundColor: activeSection === link.href.replace('#', '') ? '#1A1A1A' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.85rem',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
