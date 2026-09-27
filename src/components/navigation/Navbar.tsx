'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'Skills', href: '/#skills', id: 'skills' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

export default function Navbar({
  onToggleTerminal,
  isTerminalOpen,
}: {
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    if (pathname === '/' && href.startsWith('/#')) {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Left: KUSHAL / AI/ML ENGINEER + Subtle Terminal prompt */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-primary-text group-hover:text-white transition-colors">
                KUSHAL
              </span>
              <span className="font-mono text-[10px] text-muted-text uppercase tracking-wider">
                AI/ML ENGINEER
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/10 text-xs font-mono text-muted-text group-hover:text-secondary-text transition-colors">
              <span className="text-accent">&gt;</span>
              <span>kushal@portfolio:~$</span>
            </div>
          </Link>

          {/* Center / Right Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-sans">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (pathname === '/' && link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.href, link.id);
                  }
                }}
                className="text-secondary-text hover:text-primary-text transition-colors font-medium text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Far Right: Resume & Terminal Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleTerminal}
              className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-mono transition-colors ${
                isTerminalOpen
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-white/10 text-muted-text hover:text-secondary-text hover:border-white/20'
              }`}
              title="Toggle developer terminal [~]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>_term</span>
            </button>

            <Link
              href="/resume"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-[#161D26] hover:bg-[#1E2733] border border-white/10 hover:border-white/20 text-xs font-mono font-medium text-primary-text transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-secondary-text" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded border border-white/10 text-secondary-text"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-16 z-40 p-4 rounded-xl border border-white/10 bg-[#0D1117]/95 backdrop-blur-xl md:hidden font-mono text-sm space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (pathname === '/' && link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }
              }}
              className="block px-3 py-2 rounded text-secondary-text hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleTerminal();
              }}
              className="text-xs text-accent flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Open Terminal</span>
            </button>
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-secondary-text hover:text-white"
            >
              Full Resume ↗
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
