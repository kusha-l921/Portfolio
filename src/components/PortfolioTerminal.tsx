'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTerminal } from '../context/TerminalContext';
import { useTheme } from '../context/ThemeContext';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'info';
  text: string;
}

const KNOWN_COMMANDS = [
  'help',
  'clear',
  'pwd',
  'ls',
  'whoami',
  'home',
  'about',
  'education',
  'projects',
  'achievements',
  'skills',
  'contact',
  'resume',
  'cd about',
  'cd education',
  'cd projects',
  'cd achievements',
  'cd skills',
  'cd contact',
  'cd ~',
  'cd ..',
  'cd ../..',
  'cd projects/prometheus',
  'cd projects/llm-council',
  'cd projects/solarflare',
  'cd projects/fieldsight',
  'cd projects/firsefile',
  'cd projects/rewear',
  'cd prometheus',
  'cd llm-council',
  'cd solarflare',
  'cd fieldsight',
  'cd firsefile',
  'cd rewear',
  'sudo light-mode',
  'sudo dark-mode',
  'sudo about',
  'sudo projects',
  'sudo achievements',
  'sudo contact',
  'theme light',
  'theme dark',
];

export default function PortfolioTerminal() {
  const { isOpen, closeTerminal } = useTerminal();
  const { theme, toggleTheme } = useTheme();

  const [currentPath, setCurrentPath] = useState('~');
  const [activeTab, setActiveTab] = useState<'terminal' | 'output'>('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      type: 'info',
      text: 'Kushal Patel — Interactive Portfolio Shell [v2.4 x86_64]',
    },
    {
      id: 'init-2',
      type: 'output',
      text: "Type 'help' for commands, 'cd projects' to browse work, or 'sudo light-mode' / 'sudo dark-mode' to switch theme.\nUse [Tab] to autocomplete and [↑/↓] for history. Press Ctrl+` or T to toggle panel.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-focus when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of terminal screen
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, inputVal, isOpen]);

  const getPromptString = () => {
    if (currentPath === '~') return 'kushal@portfolio:~$ ';
    return `kushal@portfolio:${currentPath}$ `;
  };

  const smoothScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const promptText = `${getPromptString()}${trimmed}`;
    const userCmdEntry: TerminalLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      text: promptText,
    };

    const cmdLower = trimmed.toLowerCase();

    // 1. CLEAR
    if (cmdLower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response = '';

    // 2. HELP
    if (cmdLower === 'help') {
      response =
        "Available commands:\n" +
        "  navigation:  cd about | cd education | cd projects | cd achievements | cd skills | cd contact | cd ~\n" +
        "  projects:    cd prometheus | cd llm-council | cd solarflare | cd fieldsight | cd firsefile | cd rewear\n" +
        "  utilities:   ls, pwd, whoami, clear, resume, help\n" +
        "  theme:       sudo light-mode | sudo dark-mode | theme light | theme dark\n" +
        "  shortcuts:   [tab] autocomplete, [↑/↓] history, [ctrl+` / T] toggle terminal";
    }

    // 3. WHOAMI
    else if (cmdLower === 'whoami') {
      response = 'Kushal Patel — AI/ML Engineer · Systems Builder\nDwarkadas J. Sanghvi College of Engineering, Mumbai';
    }

    // 4. PWD
    else if (cmdLower === 'pwd') {
      const relative = currentPath.replace('~', '');
      response = `/home/kushal${relative || ''}`;
    }

    // 5. RESUME
    else if (cmdLower === 'resume') {
      response = 'opening resume.pdf in new tab...';
      window.open('/docs/Kushal_Patel_Resume.pdf', '_blank');
    }

    // 6. LS
    else if (cmdLower === 'ls' || cmdLower.startsWith('ls ')) {
      if (currentPath === '~') {
        response = 'about/        education/    projects/     achievements/ skills/       contact/      resume.pdf';
      } else if (currentPath === '~/projects') {
        response = '01 prometheus/  02 llm-council/  03 solarflare/  04 fieldsight/  05 firsefile/  06 rewear/';
      } else if (currentPath === '~/achievements') {
        response = '01 exportify-loc8.log   02 copycop-drishti.log';
      } else if (currentPath.startsWith('~/projects/')) {
        response = 'overview.md   architecture.onnx   empirical_metrics.csv   github_repo.url';
      } else if (currentPath === '~/about') {
        response = 'bio.txt   interests.json   domains.list   academic_background.md';
      } else if (currentPath === '~/education') {
        response = 'djsanghvi_coe.md   curriculum.txt   competitive_honors.log';
      } else if (currentPath === '~/skills') {
        response = 'machine_learning.py   computer_vision.onnx   development.cpp   web_tools.ts';
      } else if (currentPath === '~/contact') {
        response = 'direct_email.txt   github.url   linkedin.url';
      } else {
        response = 'README.md';
      }
    }

    // 7. HOME
    else if (cmdLower === 'home') {
      response = 'navigating to ~/home...';
      setCurrentPath('~');
      setTimeout(() => smoothScrollTo('me'), 240);
    }

    // 8. DIRECT SECTION COMMANDS
    else if (cmdLower === 'about') {
      response = 'navigating to ~/about...';
      setCurrentPath('~/about');
      setTimeout(() => smoothScrollTo('about'), 240);
    } else if (cmdLower === 'education') {
      response = 'navigating to ~/education...';
      setCurrentPath('~/education');
      setTimeout(() => smoothScrollTo('education'), 240);
    } else if (cmdLower === 'projects') {
      response = 'navigating to ~/projects...';
      setCurrentPath('~/projects');
      setTimeout(() => smoothScrollTo('projects'), 240);
    } else if (cmdLower === 'achievements') {
      response = 'navigating to ~/achievements...';
      setCurrentPath('~/achievements');
      setTimeout(() => smoothScrollTo('achievements'), 240);
    } else if (cmdLower === 'skills') {
      response = 'navigating to ~/skills...';
      setCurrentPath('~/skills');
      setTimeout(() => smoothScrollTo('skills'), 240);
    } else if (cmdLower === 'contact') {
      response = 'navigating to ~/contact...';
      setCurrentPath('~/contact');
      setTimeout(() => smoothScrollTo('contact'), 240);
    }

    // 9. SUDO & THEME SWITCHING
    else if (cmdLower === 'sudo light-mode' || cmdLower === 'theme light') {
      response = '[sudo] switching interface theme to light mode...';
      if (theme !== 'light') {
        toggleTheme();
      }
    } else if (cmdLower === 'sudo dark-mode' || cmdLower === 'theme dark') {
      response = '[sudo] switching interface theme to dark mode...';
      if (theme !== 'dark') {
        toggleTheme();
      }
    } else if (cmdLower === 'sudo about') {
      response = '[sudo] authorized navigation: navigating to ~/about...';
      setCurrentPath('~/about');
      setTimeout(() => smoothScrollTo('about'), 240);
    } else if (cmdLower === 'sudo projects') {
      response = '[sudo] authorized navigation: navigating to ~/projects...';
      setCurrentPath('~/projects');
      setTimeout(() => smoothScrollTo('projects'), 240);
    } else if (cmdLower === 'sudo achievements') {
      response = '[sudo] authorized navigation: navigating to ~/achievements...';
      setCurrentPath('~/achievements');
      setTimeout(() => smoothScrollTo('achievements'), 240);
    } else if (cmdLower === 'sudo contact') {
      response = '[sudo] authorized navigation: navigating to ~/contact...';
      setCurrentPath('~/contact');
      setTimeout(() => smoothScrollTo('contact'), 240);
    } else if (cmdLower.startsWith('sudo ')) {
      response = '[sudo] command recognized. Sudo privileges granted for navigation and theme switches.';
    }

    // 10. CD COMMANDS & DIRECTORY TRAVERSAL
    else if (cmdLower === 'cd' || cmdLower === 'cd ~' || cmdLower === 'cd /') {
      response = 'navigating to ~/home...';
      setCurrentPath('~');
      setTimeout(() => smoothScrollTo('me'), 240);
    } else if (cmdLower === 'cd ..') {
      if (currentPath.startsWith('~/projects/')) {
        response = 'navigating to ~/projects...';
        setCurrentPath('~/projects');
        setTimeout(() => smoothScrollTo('projects'), 240);
      } else {
        response = 'navigating to ~/home...';
        setCurrentPath('~');
        setTimeout(() => smoothScrollTo('me'), 240);
      }
    } else if (cmdLower === 'cd ../..' || cmdLower === 'cd ../../') {
      response = 'navigating to ~/home...';
      setCurrentPath('~');
      setTimeout(() => smoothScrollTo('me'), 240);
    }

    // Section CDs
    else if (cmdLower === 'cd about' || cmdLower === 'cd /about' || cmdLower === 'cd ~/about') {
      response = 'navigating to ~/about...';
      setCurrentPath('~/about');
      setTimeout(() => smoothScrollTo('about'), 240);
    } else if (cmdLower === 'cd education' || cmdLower === 'cd /education' || cmdLower === 'cd ~/education') {
      response = 'navigating to ~/education...';
      setCurrentPath('~/education');
      setTimeout(() => smoothScrollTo('education'), 240);
    } else if (cmdLower === 'cd projects' || cmdLower === 'cd /projects' || cmdLower === 'cd ~/projects') {
      response = 'navigating to ~/projects...';
      setCurrentPath('~/projects');
      setTimeout(() => smoothScrollTo('projects'), 240);
    } else if (cmdLower === 'cd achievements' || cmdLower === 'cd /achievements' || cmdLower === 'cd ~/achievements') {
      response = 'navigating to ~/achievements...';
      setCurrentPath('~/achievements');
      setTimeout(() => smoothScrollTo('achievements'), 240);
    } else if (cmdLower === 'cd skills' || cmdLower === 'cd /skills' || cmdLower === 'cd ~/skills') {
      response = 'navigating to ~/skills...';
      setCurrentPath('~/skills');
      setTimeout(() => smoothScrollTo('skills'), 240);
    } else if (cmdLower === 'cd contact' || cmdLower === 'cd /contact' || cmdLower === 'cd ~/contact') {
      response = 'navigating to ~/contact...';
      setCurrentPath('~/contact');
      setTimeout(() => smoothScrollTo('contact'), 240);
    }

    // Project Nested CDs (prometheus, llm-council, solarflare, fieldsight, firsefile, rewear)
    else if (
      cmdLower === 'cd prometheus' ||
      cmdLower === 'cd projects/prometheus' ||
      cmdLower === 'cd /projects/prometheus'
    ) {
      response = 'navigating to ~/projects/prometheus...\n[PROMETHEUS: Browser-based prompt intelligence engine]';
      setCurrentPath('~/projects/prometheus');
      setTimeout(() => smoothScrollTo('project-prometheus'), 240);
    } else if (
      cmdLower === 'cd llm-council' ||
      cmdLower === 'cd llm_council' ||
      cmdLower === 'cd projects/llm-council' ||
      cmdLower === 'cd projects/llm_council' ||
      cmdLower === 'cd /projects/llm-council'
    ) {
      response = 'navigating to ~/projects/llm-council...\n[LLM Council: Multi-agent reasoning and orchestration system]';
      setCurrentPath('~/projects/llm-council');
      setTimeout(() => smoothScrollTo('project-llm-council'), 240);
    } else if (
      cmdLower === 'cd solarflare' ||
      cmdLower === 'cd solar-flare' ||
      cmdLower === 'cd projects/solarflare' ||
      cmdLower === 'cd projects/solar-flare' ||
      cmdLower === 'cd /projects/solarflare'
    ) {
      response = 'navigating to ~/projects/solarflare...\n[Solar Flare Prediction: Vision Transformer spatiotemporal forecasting]';
      setCurrentPath('~/projects/solarflare');
      setTimeout(() => smoothScrollTo('project-solar-flare'), 240);
    } else if (
      cmdLower === 'cd fieldsight' ||
      cmdLower === 'cd fieldsight-lite' ||
      cmdLower === 'cd projects/fieldsight' ||
      cmdLower === 'cd projects/fieldsight-lite' ||
      cmdLower === 'cd /projects/fieldsight'
    ) {
      response = 'navigating to ~/projects/fieldsight...\n[FieldSight Lite: Unsupervised training-free edge vision pipeline]';
      setCurrentPath('~/projects/fieldsight');
      setTimeout(() => smoothScrollTo('project-fieldsight-lite'), 240);
    } else if (
      cmdLower === 'cd firsefile' ||
      cmdLower === 'cd projects/firsefile' ||
      cmdLower === 'cd /projects/firsefile'
    ) {
      response = 'navigating to ~/projects/firsefile...\n[FirSeFile: ML digital forensics with Swin Transformer V2 & Rust]';
      setCurrentPath('~/projects/firsefile');
      setTimeout(() => smoothScrollTo('project-firsefile'), 240);
    } else if (
      cmdLower === 'cd rewear' ||
      cmdLower === 'cd projects/rewear' ||
      cmdLower === 'cd /projects/rewear'
    ) {
      response = 'navigating to ~/projects/rewear...\n[ReWear: Sustainable circular wardrobe exchange engine]';
      setCurrentPath('~/projects/rewear');
      setTimeout(() => smoothScrollTo('project-rewear'), 240);
    }


    // Invalid CD
    else if (cmdLower.startsWith('cd ')) {
      const targetDir = trimmed.slice(3).trim();
      response = `bash: cd: ${targetDir}: no such portfolio directory\nType 'ls' to view available directories, or 'help' for guide.`;
    }

    // Default Unknown Command
    else {
      response = `bash: command not found: ${trimmed}\nTry 'help' or 'cd projects'`;
    }

    setHistory((prev) => [
      ...prev,
      userCmdEntry,
      {
        id: `res-${Date.now()}`,
        type: 'output',
        text: response,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 1. Tab Autocomplete
    if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;

      // Match commands
      const match = KNOWN_COMMANDS.find((cmd) => cmd.startsWith(current));
      if (match) {
        setInputVal(match);
      } else if (currentPath === '~/projects') {
        const sub = ['solarflare', 'fieldsight', 'firsefile', 'rewear'].find((p) =>
          `cd ${p}`.startsWith(current) || p.startsWith(current)
        );
        if (sub) {
          setInputVal(current.startsWith('cd ') ? `cd ${sub}` : sub);
        }
      }
      return;
    }

    // 2. Submit on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      return;
    }

    // 3. Arrow Up History
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const nextIdx =
        historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[nextIdx]);
      return;
    }

    // 4. Arrow Down History
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

    // 5. Escape closes terminal
    if (e.key === 'Escape') {
      e.preventDefault();
      closeTerminal();
      return;
    }
  };

  const isLight = theme === 'light';

  return (
    <aside
      className="vscode-integrated-terminal-panel"
      aria-label="Integrated Terminal"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: 'clamp(260px, 32vh, 380px)',
        backgroundColor: isLight ? '#FAFAF8' : '#080808',
        borderTop: isLight ? '1px solid #D4D4CD' : '1px solid #1C1C1C',
        boxShadow: isOpen
          ? (isLight ? '0 -10px 40px rgba(0, 0, 0, 0.12)' : '0 -10px 40px rgba(0, 0, 0, 0.75)')
          : 'none',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease',
        pointerEvents: isOpen ? 'auto' : 'none',
        userSelect: 'text',
      }}
    >
      {/* VS Code Panel Tab Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '36px',
          backgroundColor: isLight ? '#EAEAE6' : '#0D0D0D',
          borderBottom: isLight ? '1px solid #D4D4CD' : '1px solid #1C1C1C',
          padding: '0 clamp(16px, 2.5vw, 28px)',
          userSelect: 'none',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        {/* Left: Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', height: '100%' }}>
          <button
            onClick={() => setActiveTab('terminal')}
            className="font-mono"
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'terminal'
                ? (isLight ? '2px solid #161616' : '1px solid #E5E5E5')
                : '1px solid transparent',
              color: activeTab === 'terminal'
                ? (isLight ? '#161616' : '#E5E5E5')
                : (isLight ? '#777770' : '#777777'),
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '0 0.2rem',
              height: '100%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.15s ease',
            }}
          >
            <span>TERMINAL</span>
            <span
              style={{
                fontSize: '0.62rem',
                color: isLight ? '#444440' : '#888888',
                backgroundColor: isLight ? '#DCDCD6' : '#151515',
                padding: '0.1rem 0.35rem',
                borderRadius: '3px',
              }}
            >
              1
            </span>
          </button>

          <button
            onClick={() => setActiveTab('output')}
            className="font-mono"
            style={{
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'output'
                ? (isLight ? '2px solid #161616' : '1px solid #E5E5E5')
                : '1px solid transparent',
              color: activeTab === 'output'
                ? (isLight ? '#161616' : '#E5E5E5')
                : (isLight ? '#777770' : '#777777'),
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '0 0.2rem',
              height: '100%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.15s ease',
            }}
          >
            <span>OUTPUT</span>
          </button>

          <span
            className="font-mono"
            style={{
              color: isLight ? '#888880' : '#555555',
              fontSize: '0.72rem',
              letterSpacing: '0.04em',
              cursor: 'default',
            }}
          >
            PROBLEMS (0)
          </span>
        </div>

        {/* Right: Path Status + Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span
            className="font-mono"
            style={{
              fontSize: '0.68rem',
              color: isLight ? '#666660' : '#666666',
            }}
          >
            bash · {currentPath}
          </span>

          <span style={{ color: isLight ? '#D0D0CA' : '#252525' }}>|</span>

          {/* Clear Button */}
          <button
            onClick={() => setHistory([])}
            aria-label="Clear terminal"
            title="Clear terminal buffer"
            className="font-mono"
            style={{
              background: 'transparent',
              border: 'none',
              color: isLight ? '#666660' : '#777777',
              fontSize: '0.72rem',
              cursor: 'pointer',
              padding: '0.2rem 0.35rem',
              borderRadius: '3px',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = isLight ? '#111111' : '#E5E5E5')}
            onMouseLeave={(e) => (e.currentTarget.style.color = isLight ? '#666660' : '#777777')}
          >
            clear
          </button>

          {/* Close Panel Button */}
          <button
            onClick={closeTerminal}
            aria-label="Close terminal panel"
            title="Close terminal (Esc or Ctrl+`)"
            style={{
              background: 'transparent',
              border: 'none',
              color: isLight ? '#666660' : '#888888',
              fontSize: '1rem',
              lineHeight: 1,
              cursor: 'pointer',
              padding: '0.2rem 0.4rem',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isLight ? '#111111' : '#FFFFFF';
              e.currentTarget.style.backgroundColor = isLight ? '#DCDCD6' : '#1C1C1C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isLight ? '#666660' : '#888888';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Terminal Screen Body */}
      {activeTab === 'terminal' ? (
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0.75rem clamp(16px, 2.5vw, 28px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            lineHeight: 1.5,
            color: isLight ? '#1A1A18' : '#E5E5E5',
            backgroundColor: isLight ? '#FAFAF8' : '#080808',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.35rem',
            cursor: 'text',
          }}
        >
          {history.map((item) => (
            <div key={item.id}>
              {item.type === 'command' && (
                <div style={{ color: isLight ? '#0A0A0A' : '#FFFFFF', fontWeight: 500 }}>
                  {item.text}
                </div>
              )}
              {item.type === 'info' && (
                <div style={{ color: isLight ? '#666660' : '#888888', fontSize: '0.78rem' }}>
                  {item.text}
                </div>
              )}
              {item.type === 'output' && (
                <pre
                  style={{
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: isLight ? '#282824' : '#B5B5B5',
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                    lineHeight: 1.45,
                  }}
                >
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          {/* Active Command Input Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.2rem',
            }}
          >
            <span style={{ color: isLight ? '#666660' : '#888888', flexShrink: 0 }}>
              {getPromptString()}
            </span>
            <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Portfolio shell input line"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: isLight ? '#0A0A0A' : '#FFFFFF',
                  fontFamily: 'inherit',
                  fontSize: '0.82rem',
                  padding: 0,
                  margin: 0,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        /* OUTPUT Tab */
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0.75rem clamp(16px, 2.5vw, 28px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: isLight ? '#555550' : '#888888',
            backgroundColor: isLight ? '#FAFAF8' : '#080808',
            lineHeight: 1.6,
          }}
        >
          <div>[Portfolio Runtime]: Next.js 14 · Static Prerendering Active</div>
          <div>[Environment]: Production Build (Client Navigation Engine)</div>
          <div>[Active Theme]: {theme} mode</div>
          <div>[Session Navigation]: Verified portfolio sections: Hero, About, Education, Projects, Skills, Contact</div>
          <div style={{ marginTop: '0.5rem', color: isLight ? '#888880' : '#555555' }}>
            // All systems operating nominally. Type commands in TERMINAL tab.
          </div>
        </div>
      )}

      {/* Micro Status Bar / Shortcuts Hint */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '24px',
          backgroundColor: isLight ? '#EAEAE6' : '#0A0A0A',
          borderTop: isLight ? '1px solid #D4D4CD' : '1px solid #161616',
          padding: '0 clamp(16px, 2.5vw, 28px)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: isLight ? '#666660' : '#666666',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Ctrl+` or T to toggle</span>
          <span>Tab for autocomplete</span>
          <span>↑/↓ for history</span>
        </div>
        <div>
          <span>utf-8 · LF</span>
        </div>
      </div>
    </aside>
  );
}
