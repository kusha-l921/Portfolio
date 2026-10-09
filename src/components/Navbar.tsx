'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useTerminal } from '../context/TerminalContext';
import PFPLightbox from './PFPLightbox';

const NAV_LINKS = [
  { label: '/me', href: '#me' },
  { label: '/about', href: '#about' },
  { label: '/education', href: '#education' },
  { label: '/experience', href: '#experience' },
  { label: '/projects', href: '#projects' },
  { label: '/achievements', href: '#achievements' },
  { label: '/skills', href: '#skills' },
  { label: '/contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('me');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPFPLightboxOpen, setIsPFPLightboxOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isOpen: isTerminalOpen, toggleTerminal } = useTerminal();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 25);

          // Section spy
          const sections = ['me', 'about', 'education', 'experience', 'projects', 'achievements', 'skills', 'contact'];
          const scrollPos = scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= scrollPos) {
              setActiveSection(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="navbar-header"
      style={{
        position: 'sticky',
        top: '12px',
        zIndex: 50,
        width: 'min(94%, 1560px)',
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '0 clamp(10px, 2vw, 24px)',
        boxSizing: 'border-box',
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
          backgroundColor: isScrolled
            ? (theme === 'light' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(10, 10, 10, 0.92)')
            : (theme === 'light' ? 'rgba(244, 244, 242, 0.85)' : 'rgba(13, 13, 13, 0.75)'),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid',
          borderColor: isScrolled ? 'var(--border-strong)' : 'var(--border-card)',
          boxShadow: isScrolled
            ? (theme === 'light' ? '0 8px 24px rgba(0, 0, 0, 0.06)' : '0 8px 30px rgba(0, 0, 0, 0.6)')
            : 'none',
          transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
        aria-label="Main Navigation"
      >
        {/* Left: Avatar (Clickable for Lightbox) + Identity */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPFPLightboxOpen(true);
            }}
            aria-label="View profile picture"
            title="View profile picture (Click to enlarge)"
            className="navbar-avatar-btn"
            style={{
              position: 'relative',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1px solid var(--border-strong)',
              backgroundColor: 'var(--bg-surface)',
              flexShrink: 0,
              padding: 0,
              cursor: 'pointer',
              display: 'block',
              transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), filter 0.2s ease, border-color 0.2s ease',
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
          </button>

          <a
            href="#me"
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1.15,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-white)',
                letterSpacing: '-0.01em',
              }}
            >
              {PERSONAL_DATA.fullName}
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '0.68rem',
                color: 'var(--text-dim)',
              }}
            >
              AI/ML Engineer
            </span>
          </a>
        </div>

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
                className="font-mono nav-link-item"
                style={{
                  fontSize: '0.78rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  color: isActive ? 'var(--text-white)' : 'var(--text-dim)',
                  backgroundColor: isActive ? 'var(--bg-pill-hover)' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent-blue-border)' : 'transparent',
                  transition: 'all 0.18s ease',
                  position: 'relative',
                }}
              >
                {isActive && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-blue)',
                      marginRight: '5px',
                      verticalAlign: 'middle',
                    }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right: Terminal Trigger + Theme Toggle + Online Status + Resume Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          {/* Desktop-Only Utilities */}
          <div
            className="desktop-utilities"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
            }}
          >
            {/* Subtle Terminal Trigger Button with Light Sweep */}
            <button
              onClick={toggleTerminal}
              aria-label="Toggle VS Code terminal"
              className="font-mono navbar-terminal-btn"
              title="Toggle Terminal (Ctrl + ` or T)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.72rem',
                padding: '0.28rem 0.65rem',
                borderRadius: '9999px',
                backgroundColor: isTerminalOpen ? 'var(--bg-pill-hover)' : 'var(--bg-card)',
                color: isTerminalOpen ? 'var(--text-white)' : 'var(--text-dim)',
                border: '1px solid',
                borderColor: isTerminalOpen ? 'var(--accent-blue-border)' : 'var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span style={{ color: 'var(--accent-blue)' }}>&gt;_</span>
              <span>terminal</span>
            </button>

            {/* Online status indicator with Soft Green */}
            <div
              className="font-mono navbar-online-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                padding: '0.25rem 0.55rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span className="status-dot-pulse" />
              <span style={{ color: 'var(--text-secondary)' }}>online</span>
            </div>

            {/* Resume PDF link */}
            <a
              href={PERSONAL_DATA.resumeUrl}
              download="Kushal_Patel_Resume.pdf"
              className="font-mono navbar-resume-btn"
              title="Download Kushal Patel's Resume (PDF)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                padding: '0.32rem 0.75rem',
                borderRadius: '9999px',
                color: 'var(--text-white)',
                backgroundColor: 'var(--bg-pill)',
                border: '1px solid var(--border-card)',
                textDecoration: 'none',
                transition: 'all 0.18s ease',
              }}
            >
              <span>resume.pdf</span>
              <span style={{ fontSize: '0.85rem', lineHeight: 1 }}>↓</span>
            </a>
          </div>

          {/* Theme Toggle Button (Accessible on both Desktop & Mobile) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="font-mono navbar-theme-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '0.75rem',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: '1px solid var(--border-card)',
              borderRadius: '6px',
              padding: '0.35rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              width: '32px',
              height: '32px',
              flexShrink: 0,
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
          className="mobile-nav-drawer"
          style={{
            marginTop: '0.5rem',
            backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(12, 12, 12, 0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-card)',
            borderRadius: '14px',
            padding: '0.85rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.75)',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
          }}
        >
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    const targetId = link.href.replace('#', '');
                    const el = document.getElementById(targetId);
                    if (el) {
                      e.preventDefault();
                      const navOffset = 68;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - navOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className="font-mono mobile-nav-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.55rem 0.85rem',
                    borderRadius: '8px',
                    color: isActive ? 'var(--text-white)' : 'var(--text-secondary)',
                    backgroundColor: isActive ? 'var(--bg-pill)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-blue-border)' : 'transparent',
                    textDecoration: 'none',
                    fontSize: '0.86rem',
                    transition: 'all 0.18s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {isActive && (
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-blue)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    <span>{link.label}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>→</span>
                </a>
              );
            })}
          </div>

          {/* Drawer Utilities Divider */}
          <div
            style={{
              height: '1px',
              backgroundColor: 'var(--border-subtle)',
              margin: '0.4rem 0',
            }}
          />

          {/* Drawer Utilities: Terminal, Resume, Online */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              flexWrap: 'wrap',
              padding: '0.35rem 0.25rem',
            }}
          >
            <button
              onClick={() => {
                toggleTerminal();
                setMobileMenuOpen(false);
              }}
              className="font-mono btn btn-secondary"
              style={{
                flex: 1,
                fontSize: '0.75rem',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                minWidth: '110px',
              }}
            >
              <span style={{ color: 'var(--accent-blue)' }}>&gt;_</span>
              <span>terminal</span>
            </button>

            <a
              href={PERSONAL_DATA.resumeUrl}
              download="Kushal_Patel_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono btn btn-primary"
              title="Download Kushal Patel's Resume (PDF)"
              style={{
                flex: 1,
                fontSize: '0.75rem',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                minWidth: '110px',
              }}
            >
              <span>resume.pdf</span>
              <span style={{ fontSize: '0.8rem' }}>↓</span>
            </a>
          </div>

          <div
            className="font-mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              paddingTop: '0.2rem',
            }}
          >
            <span className="status-dot-pulse" />
            <span>systems online · responsive workspace</span>
          </div>
        </div>
      )}

      {/* PFP Lightbox Modal */}
      <PFPLightbox
        isOpen={isPFPLightboxOpen}
        onClose={() => setIsPFPLightboxOpen(false)}
        imageSrc={PERSONAL_DATA.avatarImage}
        altText={PERSONAL_DATA.fullName}
      />

      <style jsx global>{`
        .navbar-avatar-btn:hover {
          transform: scale(1.03) !important;
          filter: brightness(1.18) !important;
          border-color: var(--accent-blue-border) !important;
        }
        @media (max-width: 768px) {
          .navbar-header {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
            box-sizing: border-box !important;
          }
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-utilities {
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
