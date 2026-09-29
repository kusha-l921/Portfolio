'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'info';
  text: string;
}

const COMMAND_LIST = [
  'help',
  'about',
  'education',
  'projects',
  'skills',
  'contact',
  'resume',
  'home',
  'whoami',
  'ls',
  'pwd',
  'clear',
  'cd /about',
  'cd /education',
  'cd /projects',
  'cd /skills',
  'cd /contact',
  'cd about',
  'cd education',
  'cd projects',
  'cd skills',
  'cd contact',
];

export default function PortfolioTerminal() {
  const [currentPath, setCurrentPath] = useState('~/portfolio');
  const [inputVal, setInputVal] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'command',
      text: 'kushal@portfolio:~$ help',
    },
    {
      id: 'init-2',
      type: 'output',
      text: 'available:\n  about     projects  skills\n  education contact   resume',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of terminal when history changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, inputVal]);

  // Sync terminal title with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'me', path: '~/portfolio' },
        { id: 'about', path: '~/portfolio/about' },
        { id: 'education', path: '~/portfolio/education' },
        { id: 'projects', path: '~/portfolio/projects' },
        { id: 'skills', path: '~/portfolio/skills' },
        { id: 'contact', path: '~/portfolio/contact' },
      ];
      const scrollPos = window.scrollY + 240;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentPath(sections[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const focusInput = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  const scrollToSection = (targetId: string, pathName: string) => {
    setCurrentPath(pathName);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    // Strip aesthetic sudo prefix if present
    let cmd = trimmed.toLowerCase();
    if (cmd.startsWith('sudo ')) {
      cmd = cmd.slice(5).trim();
    }

    const commandEntry: TerminalLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      text: `kushal@portfolio:~$ ${trimmed}`,
    };

    let responseText = '';
    let shouldClear = false;

    // Safe Command Router
    switch (cmd) {
      case 'help':
        responseText =
          'available:\n  about     projects  skills\n  education contact   resume\nnavigation:\n  cd /about cd /projects home';
        break;

      case 'about':
      case 'cd /about':
      case 'cd about':
        responseText = 'navigating to ~/about...';
        scrollToSection('about', '~/portfolio/about');
        break;

      case 'education':
      case 'cd /education':
      case 'cd education':
        responseText = 'navigating to ~/education...';
        scrollToSection('education', '~/portfolio/education');
        break;

      case 'projects':
      case 'cd /projects':
      case 'cd projects':
        responseText = 'navigating to ~/projects...';
        scrollToSection('projects', '~/portfolio/projects');
        break;

      case 'skills':
      case 'cd /skills':
      case 'cd skills':
        responseText = 'navigating to ~/skills...';
        scrollToSection('skills', '~/portfolio/skills');
        break;

      case 'contact':
      case 'cd /contact':
      case 'cd contact':
        responseText = 'navigating to ~/contact...';
        scrollToSection('contact', '~/portfolio/contact');
        break;

      case 'home':
      case 'cd ~':
      case 'cd /':
      case 'cd ..':
        responseText = 'navigating to ~/home...';
        scrollToSection('me', '~/portfolio');
        break;

      case 'resume':
        responseText = 'opening resume.pdf...';
        window.open('/docs/Kushal_Patel_Resume.pdf', '_blank');
        break;

      case 'whoami':
        responseText =
          'Kushal Patel — AI/ML Engineer · Systems Builder';
        break;

      case 'ls':
        responseText =
          'about/   education/   projects/   skills/   contact/   resume.pdf';
        break;

      case 'pwd':
        responseText = `/home/kushal/${currentPath.replace('~/', '')}`;
        break;

      case 'clear':
        shouldClear = true;
        break;

      default:
        responseText = `command not found: ${trimmed} (try 'help')`;
        break;
    }

    if (shouldClear) {
      setHistory([]);
    } else {
      setHistory((prev) => [
        ...prev,
        commandEntry,
        {
          id: `res-${Date.now()}`,
          type: 'output',
          text: responseText,
        },
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Autocomplete with Tab
    if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;

      const match = COMMAND_LIST.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
      return;
    }

    // Submit with Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      return;
    }

    // Command History: Arrow Up
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const nextIdx =
        historyIdx === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[nextIdx]);
      return;
    }

    // Command History: Arrow Down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;

      const nextIdx = historyIdx + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
      return;
    }

    // Escape removes focus
    if (e.key === 'Escape') {
      inputRef.current?.blur();
      setIsFocused(false);
      return;
    }
  };

  return (
    <div
      className="portfolio-terminal-window"
      onClick={focusInput}
      style={{
        width: '100%',
        maxWidth: '330px',
        height: '240px',
        backgroundColor: 'var(--bg-card)',
        border: `1px solid ${isFocused ? 'var(--border-strong)' : 'var(--border-card)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: isFocused
          ? '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--border-hover)'
          : '0 6px 20px rgba(0, 0, 0, 0.35)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'text',
        userSelect: 'none',
      }}
    >
      {/* Title Bar (Hyprland / Linux Minimalist Window Controls) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.45rem 0.75rem',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {/* Window controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#333333',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#333333',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#333333',
              display: 'inline-block',
            }}
          />
        </div>

        {/* Dynamic Window Title */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.68rem',
            color: 'var(--text-dim)',
            letterSpacing: '0.02em',
          }}
        >
          {currentPath}
        </div>

        {/* Status indicator */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
          }}
        >
          zsh
        </div>
      </div>

      {/* Terminal Screen & Logs */}
      <div
        ref={scrollRef}
        style={{
          padding: '0.65rem 0.85rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-primary)',
          lineHeight: 1.45,
          overflowY: 'auto',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
        }}
      >
        {history.map((item) => (
          <div key={item.id}>
            {item.type === 'command' && (
              <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                {item.text}
              </div>
            )}
            {item.type === 'info' && (
              <div style={{ color: 'var(--text-secondary)' }}>{item.text}</div>
            )}
            {item.type === 'output' && (
              <pre
                style={{
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  color: 'var(--text-dim)',
                  whiteSpace: 'pre-wrap',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {item.text}
              </pre>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            marginTop: '0.15rem',
          }}
        >
          <span style={{ color: 'var(--text-dim)', flexShrink: 0, fontSize: '0.7rem' }}>
            kushal@portfolio:~$
          </span>
          <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Portfolio interactive terminal command line"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-white)',
                fontFamily: 'inherit',
                fontSize: '0.72rem',
                padding: 0,
                margin: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Terminal Footer Micro Hint */}
      <div
        style={{
          padding: '0.25rem 0.75rem',
          borderTop: '1px solid var(--border-subtle)',
          backgroundColor: 'var(--bg-section)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          color: 'var(--text-muted)',
        }}
      >
        <span>type &apos;help&apos;</span>
        <span>[tab] complete</span>
      </div>
    </div>
  );
}
