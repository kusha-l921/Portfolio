'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '@/utils/sound';

const NAV_LINKS = [
  { label: '/home', href: '/', id: 'hero' },
  { label: '/about', href: '/#about', id: 'about' },
  { label: '/projects', href: '/#projects', id: 'projects' },
  { label: '/skills', href: '/#skills', id: 'skills' },
  { label: '/experience', href: '/#experience', id: 'experience' },
  { label: '/contact', href: '/#contact', id: 'contact' },
];

export default function Navbar({
  onToggleTerminal,
  isTerminalOpen,
}: {
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section on page
      if (pathname === '/') {
        const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleAudio = () => {
    const next = sound.toggle();
    setSoundEnabled(next);
  };

  const handleNavClick = (href: string, id: string) => {
    sound.playHover();
    setMobileMenuOpen(false);

    if (pathname === '/' && href.startsWith('/#')) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-40 px-4 sm:px-8 transition-all duration-300 flex justify-center`}
      >
        <div
          className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B1118]/85 backdrop-blur-xl border-border/80 shadow-2xl py-2.5 px-4 sm:px-6'
              : 'bg-[#0B1118]/60 backdrop-blur-md border-border/40 py-3.5 px-4 sm:px-6 shadow-glass'
          } flex items-center justify-between gap-4`}
        >
          {/* Left: Terminal Shell Identifier */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="group flex items-center gap-2 font-mono text-xs sm:text-sm text-primary-text hover:text-bright-blue transition-colors"
          >
            <span className="text-electric-blue font-bold">&gt;</span>
            <span className="font-semibold tracking-tight">kushal@portfolio:~$</span>
            <span className="w-1.5 h-3 bg-electric-blue/70 animate-pulse ml-0.5" />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2 bg-panel-elevated/40 p-1 rounded-xl border border-border/30">
            {NAV_LINKS.map((link) => {
              const isActive =
                (pathname === '/' && activeSection === link.id) ||
                (pathname === link.href && link.href !== '/');

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === '/' && link.href.startsWith('/#')) {
                      e.preventDefault();
                      handleNavClick(link.href, link.id);
                    }
                  }}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-text bg-panel-elevated border border-border/60 shadow-sm'
                      : 'text-secondary-text hover:text-primary-text hover:bg-panel/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-electric-blue shadow-[0_0_6px_#1687FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Telemetry Status, Resume, Terminal Button & Sound */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* System Online Telemetry Badge */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-panel-elevated/70 border border-border/40 text-[10px] font-mono text-secondary-text">
              <span className="text-muted-text">SYS:</span>
              <span className="text-success font-medium flex items-center gap-1">
                ONLINE
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping" />
              </span>
            </div>

            {/* Terminal Drawer Toggle Button */}
            <button
              onClick={() => {
                sound.playClick();
                onToggleTerminal();
              }}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                isTerminalOpen
                  ? 'border-bright-blue bg-electric-blue/20 text-bright-blue shadow-[0_0_10px_rgba(22,135,255,0.3)]'
                  : 'border-border/50 bg-panel text-secondary-text hover:text-primary-text hover:border-electric-blue/60'
              }`}
              title="Toggle Developer Terminal [~]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">_TERM</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-1.5 rounded-lg border transition-colors ${
                soundEnabled
                  ? 'border-bright-blue/50 text-bright-blue bg-electric-blue/15'
                  : 'border-border/40 text-muted-text hover:text-secondary-text'
              }`}
              title={soundEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Button */}
            <Link
              href="/resume"
              onClick={() => sound.playClick()}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-electric-blue to-bright-blue hover:from-bright-blue hover:to-soft-blue text-white font-mono text-xs font-semibold shadow-[0_0_15px_rgba(22,135,255,0.35)] transition-all flex items-center gap-1"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg border border-border/50 bg-panel text-secondary-text"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 p-4 rounded-2xl border border-border/80 bg-panel-elevated/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 md:hidden font-mono">
          <div className="text-[10px] text-muted-text uppercase tracking-wider mb-1 px-2">
            SYSTEM ROUTING TABLE
          </div>
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
              className="px-3 py-2.5 rounded-lg text-sm text-secondary-text hover:text-primary-text hover:bg-panel border border-transparent hover:border-border/40 transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-electric-blue text-xs">&gt;</span>
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted-text px-2">
            <span>STATUS: ONLINE</span>
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="text-bright-blue underline font-semibold"
            >
              FULL RESUME
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
