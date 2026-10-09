'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTerminal, DockPosition } from '../context/TerminalContext';
import { useTheme } from '../context/ThemeContext';
import TerminalPromptBlock from './TerminalPromptBlock';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'info';
  text?: string;
  cmdText?: string;
  path?: string;
}

const KNOWN_COMMANDS = [
  'help',
  'clear',
  'pwd',
  'ls',
  'whoami',
  'sysfetch',
  'uname',
  'home',
  'about',
  'education',
  'experience',
  'projects',
  'achievements',
  'skills',
  'contact',
  'resume',
  'cd about',
  'cd education',
  'cd experience',
  'cd projects',
  'cd achievements',
  'cd skills',
  'cd contact',
  'cd ~',
  'cd ..',
  'cd prometheus',
  'cd llm-council',
  'cd solarflare',
  'cd fieldsight',
  'cd firsefile',
  'sudo light-mode',
  'sudo dark-mode',
  'theme light',
  'theme dark',
];

export default function PortfolioTerminal() {
  const {
    isOpen,
    closeTerminal,
    dock,
    setDock,
    dockWidth,
    setDockWidth,
    dockHeight,
    setDockHeight,
    floatingPos,
    setFloatingPos,
    isDragging,
    setIsDragging,
  } = useTerminal();

  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  // State
  const [currentPath, setCurrentPath] = useState('~');
  const [inputVal, setInputVal] = useState('');
  const [ghostDock, setGhostDock] = useState<DockPosition | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 'init-info',
      type: 'info',
      text:
        "Kushal Patel — Interactive Workspace Shell\n" +
        "Type 'help' for navigation & utilities, or 'cd projects' to inspect work.\n" +
        "Drag header to move/dock. Use controls to snap Left, Right, Bottom or Float.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Drag ref tracking
  const dragRef = useRef<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
    initialDock: DockPosition;
    active: boolean;
  }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    initialDock: 'bottom',
    active: false,
  });

  // Resize ref tracking
  const resizeRef = useRef<{
    active: boolean;
    handle: string;
    startX: number;
    startY: number;
    startW: number;
    startH: number;
    startPosX: number;
    startPosY: number;
  }>({
    active: false,
    handle: '',
    startX: 0,
    startY: 0,
    startW: 0,
    startH: 0,
    startPosX: 0,
    startPosY: 0,
  });

  // Check mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Auto-focus when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, inputVal, isOpen]);

  // Color Palette — Minimal Developer Workspace
  const colors = {
    bgBase: isLight ? '#F5F6F8' : '#090A0D',
    bgHeader: isLight ? '#E5E7EB' : '#12141A',
    border: isLight ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.10)',
    borderSubtle: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.07)',
    textPrimary: isLight ? '#1A1D24' : '#E6E6E6',
    textSecondary: isLight ? '#555A63' : '#8B8F98',
    textMuted: isLight ? '#7A808C' : '#555A63',
    accent: isLight ? '#3E72EC' : '#5B8CFF',
  };

  const smoothScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Command Execution
  const handleCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const cmdLower = trimmed.toLowerCase();

    // 1. CLEAR
    if (cmdLower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const userCmdEntry: TerminalLine = {
      id: `cmd-${Date.now()}`,
      type: 'command',
      cmdText: trimmed,
      path: currentPath,
    };

    let response = '';

    // 2. HELP
    if (cmdLower === 'help') {
      response =
        "Kushal Patel — Terminal Navigation & Workspace Commands\n\n" +
        "SECTIONS:\n" +
        "  cd about         Navigate to Personal Profile & Background\n" +
        "  cd education     Dwarkadas J. Sanghvi College of Engineering\n" +
        "  cd experience    iPolygon — AI/ML & Product Development Intern\n" +
        "  cd projects      Selected Work & Benchmarks\n" +
        "  cd achievements  LOC 8.0 Winner & Drishti AI 1st Runner-Up\n" +
        "  cd skills        Machine Learning, PyTorch, Edge AI toolchain\n" +
        "  cd contact       Direct communication & verified profiles\n" +
        "  cd ~ | home      Return to Hero overview\n\n" +
        "PROJECT SPECIFICS:\n" +
        "  cd prometheus    LLM prompt detection & requirements\n" +
        "  cd llm-council   Stateful multi-agent DAG consensus\n" +
        "  cd solarflare    Vision Transformer for solar flare prediction\n" +
        "  cd fieldsight    Edge vision defect detection\n" +
        "  cd firsefile     Forensic Swin Transformer carving platform\n\n" +
        "UTILITIES:\n" +
        "  pwd, ls, whoami, sysfetch, clear, resume, help\n" +
        "  sudo light-mode | sudo dark-mode | theme light | theme dark\n\n" +
        "TIPS:\n" +
        "  [Tab] Autocomplete   [↑/↓] Command history   [Ctrl+` / T] Toggle terminal";
    }

    // 3. WHOAMI
    else if (cmdLower === 'whoami') {
      response =
        "kushal (Kushal Patel) — AI/ML Engineer · Systems Builder\n" +
        "Dwarkadas J. Sanghvi College of Engineering, Mumbai\n" +
        "Specialization: Deep Learning, Computer Vision, Multi-Agent LLMs, Edge AI.";
    }

    // 4. SYSFETCH
    else if (cmdLower === 'sysfetch' || cmdLower === 'neofetch' || cmdLower === 'fetch') {
      response =
        "--------------------------------------------------\n" +
        "  OS:        Kushal Patel Portfolio Workspace v2.4\n" +
        "  Host:      Next.js 14 · React 18 · TypeScript\n" +
        "  Kernel:    Linux / WebAssembly Preempt Engine\n" +
        "  Role:      AI/ML & Product Development Intern @ iPolygon\n" +
        "  College:   D.J. Sanghvi College of Engineering, Mumbai\n" +
        "  Toolkit:   PyTorch, OpenCV, Transformers, Docker, FastAPI\n" +
        "  Hardware:  RTX 4060 GPU / Apple Silicon Accelerators\n" +
        "  Status:    Active Session · All systems nominal\n" +
        "--------------------------------------------------";
    }

    // 5. UNAME
    else if (cmdLower === 'uname' || cmdLower === 'uname -a') {
      response = "Linux portfolio-core 6.10.8-arch1-1 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux";
    }

    // 6. PWD
    else if (cmdLower === 'pwd') {
      if (currentPath === '~') response = '/home/kushal';
      else response = `/home/kushal/${currentPath.replace('~/', '')}`;
    }

    // 7. LS
    else if (cmdLower === 'ls' || cmdLower === 'ls -la' || cmdLower === 'ls -l') {
      if (currentPath === '~') {
        response =
          "drwxr-xr-x  about/\n" +
          "drwxr-xr-x  education/\n" +
          "drwxr-xr-x  experience/\n" +
          "drwxr-xr-x  projects/\n" +
          "drwxr-xr-x  achievements/\n" +
          "drwxr-xr-x  skills/\n" +
          "drwxr-xr-x  contact/\n" +
          "-rw-r--r--  Kushal_Patel_Resume.pdf";
      } else if (currentPath === '~/projects') {
        response =
          "drwxr-xr-x  prometheus/     (Prompt Requirement Extraction)\n" +
          "drwxr-xr-x  llm-council/    (Multi-Agent DAG Consensus)\n" +
          "drwxr-xr-x  solarflare/     (Spatiotemporal Vision Transformer)\n" +
          "drwxr-xr-x  fieldsight/     (Edge Defect Vision Engine)\n" +
          "drwxr-xr-x  firsefile/      (Forensic Swin Transformer)";
      } else {
        response = "total 2\n-rw-r--r--  README.md\n-rwxr-xr-x  eval.py";
      }
    }

    // 8. RESUME
    else if (cmdLower === 'resume' || cmdLower === 'cv') {
      response = "opening /docs/Kushal_Patel_Resume.pdf...";
      window.open('/docs/Kushal_Patel_Resume.pdf', '_blank');
    }

    // 9. NAVIGATION
    else if (cmdLower === 'cd ~' || cmdLower === 'cd' || cmdLower === 'home') {
      setCurrentPath('~');
      smoothScrollTo('me');
      response = 'navigating to ~ (Hero)';
    } else if (cmdLower === 'cd ..') {
      if (currentPath.includes('/')) {
        setCurrentPath('~/projects');
        smoothScrollTo('projects');
        response = 'navigating to ~/projects';
      } else {
        setCurrentPath('~');
        smoothScrollTo('me');
        response = 'navigating to ~';
      }
    } else if (cmdLower === 'cd about' || cmdLower === 'about') {
      setCurrentPath('~/about');
      smoothScrollTo('about');
      response = 'navigating to ~/about';
    } else if (cmdLower === 'cd education' || cmdLower === 'education') {
      setCurrentPath('~/education');
      smoothScrollTo('education');
      response = 'navigating to ~/education';
    } else if (cmdLower === 'cd experience' || cmdLower === 'experience') {
      setCurrentPath('~/experience');
      smoothScrollTo('experience');
      response = 'navigating to ~/experience';
    } else if (cmdLower === 'cd projects' || cmdLower === 'projects') {
      setCurrentPath('~/projects');
      smoothScrollTo('projects');
      response = 'navigating to ~/projects';
    } else if (cmdLower === 'cd achievements' || cmdLower === 'achievements') {
      setCurrentPath('~/achievements');
      smoothScrollTo('achievements');
      response = 'navigating to ~/achievements';
    } else if (cmdLower === 'cd skills' || cmdLower === 'skills') {
      setCurrentPath('~/skills');
      smoothScrollTo('skills');
      response = 'navigating to ~/skills';
    } else if (cmdLower === 'cd contact' || cmdLower === 'contact') {
      setCurrentPath('~/contact');
      smoothScrollTo('contact');
      response = 'navigating to ~/contact';
    }

    // Project deep links
    else if (cmdLower.includes('prometheus')) {
      setCurrentPath('~/projects/prometheus');
      smoothScrollTo('project-prometheus');
      response = 'focusing project: Prometheus (Prompt Detection)';
    } else if (cmdLower.includes('council')) {
      setCurrentPath('~/projects/llm-council');
      smoothScrollTo('project-llm-council');
      response = 'focusing project: LLM-Council (Multi-Agent Consensus)';
    } else if (cmdLower.includes('solarflare')) {
      setCurrentPath('~/projects/solarflare');
      smoothScrollTo('project-solar-flare');
      response = 'focusing project: Solar Flare (Vision Transformer)';
    } else if (cmdLower.includes('fieldsight')) {
      setCurrentPath('~/projects/fieldsight');
      smoothScrollTo('project-fieldsight-lite');
      response = 'focusing project: FieldSight Lite (Edge Defect Detection)';
    } else if (cmdLower.includes('firsefile')) {
      setCurrentPath('~/projects/firsefile');
      smoothScrollTo('project-firsefile');
      response = 'focusing project: FirSeFile (Forensic Carving Platform)';
    }

    // THEME COMMANDS
    else if (cmdLower === 'sudo light-mode' || cmdLower === 'theme light' || cmdLower === 'light') {
      if (theme !== 'light') toggleTheme();
      response = '[sudo] environment display switched to light theme.';
    } else if (cmdLower === 'sudo dark-mode' || cmdLower === 'theme dark' || cmdLower === 'dark') {
      if (theme !== 'dark') toggleTheme();
      response = '[sudo] environment display switched to dark theme.';
    }

    // SUDO GENERAL
    else if (cmdLower.startsWith('sudo ')) {
      response = `[sudo] user 'kushal' authorized for execution of '${cmdLower.replace('sudo ', '')}'.`;
    }

    // UNKNOWN
    else {
      response = `zsh: command not found: ${trimmed}\nType 'help' for available commands.`;
    }

    const outputEntry: TerminalLine = {
      id: `res-${Date.now()}`,
      type: 'output',
      text: response,
    };

    setHistory((prev) => [...prev, userCmdEntry, outputEntry]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 1. Tab Autocomplete
    if (e.key === 'Tab') {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;

      const match = KNOWN_COMMANDS.find((cmd) => cmd.startsWith(current));
      if (match) {
        setInputVal(match);
      }
      return;
    }

    // 2. History Navigation Up
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(commandHistory[nextIdx]);
      return;
    }

    // 3. History Navigation Down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      if (historyIdx < commandHistory.length - 1) {
        const nextIdx = historyIdx + 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      } else {
        setHistoryIdx(-1);
        setInputVal('');
      }
      return;
    }

    // 4. Enter Submission
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
      return;
    }

    // 5. Escape Closes Terminal
    if (e.key === 'Escape') {
      e.preventDefault();
      closeTerminal();
    }
  };

  // ==========================================
  // DRAG LOGIC (Pointer Events with Capture)
  // ==========================================
  const handleHeaderPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only drag from primary button and on non-mobile
    if (e.button !== 0 || isMobile) return;

    // Don't drag if clicking buttons, controls, or inputs
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'BUTTON' ||
      target.closest('button') ||
      target.tagName === 'INPUT' ||
      target.getAttribute('role') === 'button'
    ) {
      return;
    }

    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: floatingPos.x,
      initialY: floatingPos.y,
      initialDock: dock,
      active: true,
    };

    setIsDragging(true);
  };

  const handleHeaderPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    // If starting drag while docked, break away to floating at pointer
    if (dragRef.current.initialDock !== 'floating') {
      const newFloatingW = floatingPos.width || 720;
      const newFloatingH = floatingPos.height || 420;
      const newX = Math.max(20, Math.min(window.innerWidth - newFloatingW - 20, e.clientX - newFloatingW / 2));
      const newY = Math.max(20, Math.min(window.innerHeight - newFloatingH - 20, e.clientY - 20));

      setFloatingPos((prev) => ({
        ...prev,
        x: newX,
        y: newY,
      }));
      setDock('floating');
      dragRef.current.initialDock = 'floating';
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
      dragRef.current.initialX = newX;
      dragRef.current.initialY = newY;
    } else {
      const maxX = Math.max(20, window.innerWidth - (floatingPos.width || 420) - 20);
      const maxY = Math.max(20, window.innerHeight - 80);
      const newX = Math.min(Math.max(20, dragRef.current.initialX + dx), maxX);
      const newY = Math.min(Math.max(20, dragRef.current.initialY + dy), maxY);

      setFloatingPos((prev) => ({
        ...prev,
        x: newX,
        y: newY,
      }));
    }

    // Edge Snap Detection (~60px threshold)
    const threshold = 65;
    if (e.clientX <= threshold) {
      setGhostDock('left');
    } else if (e.clientX >= window.innerWidth - threshold) {
      setGhostDock('right');
    } else if (e.clientY <= threshold) {
      setGhostDock('top');
    } else if (e.clientY >= window.innerHeight - threshold) {
      setGhostDock('bottom');
    } else {
      setGhostDock(null);
    }
  };

  const handleHeaderPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    dragRef.current.active = false;
    setIsDragging(false);

    if (ghostDock) {
      setDock(ghostDock);
      setGhostDock(null);
    }
  };

  // ==========================================
  // RESIZE LOGIC (Floating handles & Dock dividers)
  // ==========================================
  const startResize = useCallback(
    (e: React.PointerEvent, handle: string) => {
      if (e.button !== 0 || isMobile) return;
      e.preventDefault();
      e.stopPropagation();

      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

      resizeRef.current = {
        active: true,
        handle,
        startX: e.clientX,
        startY: e.clientY,
        startW: dock === 'floating' ? floatingPos.width : dockWidth,
        startH: dock === 'floating' ? floatingPos.height : dockHeight,
        startPosX: floatingPos.x,
        startPosY: floatingPos.y,
      };

      setIsDragging(true);
    },
    [dock, floatingPos, dockWidth, dockHeight, isMobile, setIsDragging]
  );

  const onResizeMove = useCallback(
    (e: React.PointerEvent) => {
      if (!resizeRef.current.active) return;

      const { handle, startX, startY, startW, startH, startPosX, startPosY } = resizeRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      // Resizing while docked
      if (dock === 'right') {
        // Dragging left edge: moving left increases width
        const newW = Math.max(360, Math.min(Math.round(window.innerWidth * 0.75), startW - dx));
        setDockWidth(newW);
        return;
      }
      if (dock === 'left') {
        // Dragging right edge: moving right increases width
        const newW = Math.max(360, Math.min(Math.round(window.innerWidth * 0.75), startW + dx));
        setDockWidth(newW);
        return;
      }
      if (dock === 'bottom') {
        // Dragging top edge: moving up increases height
        const newH = Math.max(220, Math.min(Math.round(window.innerHeight * 0.75), startH - dy));
        setDockHeight(newH);
        return;
      }
      if (dock === 'top') {
        // Dragging bottom edge: moving down increases height
        const newH = Math.max(220, Math.min(Math.round(window.innerHeight * 0.75), startH + dy));
        setDockHeight(newH);
        return;
      }

      // Resizing while floating
      if (dock === 'floating') {
        let newW = startW;
        let newH = startH;
        let newX = startPosX;
        let newY = startPosY;

        const minW = 420;
        const minH = 260;
        const maxW = window.innerWidth - 40;
        const maxH = window.innerHeight - 40;

        if (handle.includes('e')) {
          newW = Math.max(minW, Math.min(maxW, startW + dx));
        }
        if (handle.includes('s')) {
          newH = Math.max(minH, Math.min(maxH, startH + dy));
        }
        if (handle.includes('w')) {
          const potW = startW - dx;
          if (potW >= minW && potW <= maxW) {
            newW = potW;
            newX = startPosX + dx;
          }
        }
        if (handle.includes('n')) {
          const potH = startH - dy;
          if (potH >= minH && potH <= maxH) {
            newH = potH;
            newY = startPosY + dy;
          }
        }

        setFloatingPos({
          x: Math.max(10, Math.min(window.innerWidth - newW - 10, newX)),
          y: Math.max(10, Math.min(window.innerHeight - newH - 10, newY)),
          width: newW,
          height: newH,
        });
      }
    },
    [dock, setDockWidth, setDockHeight, setFloatingPos]
  );

  const onResizeUp = useCallback(
    (e: React.PointerEvent) => {
      if (!resizeRef.current.active) return;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Ignore
      }
      resizeRef.current.active = false;
      setIsDragging(false);
    },
    [setIsDragging]
  );

  // Determine current window style based on dock position
  const getContainerStyle = (): React.CSSProperties => {
    if (!isOpen) {
      return {
        display: 'none',
      };
    }

    if (isMobile) {
      // Mobile bottom-sheet layout
      return {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '100%',
        height: 'clamp(280px, 50vh, 440px)',
        zIndex: 1000,
        backgroundColor: colors.bgBase,
        borderTop: `1px solid ${colors.border}`,
        boxShadow: '0 -10px 40px rgba(0, 0, 0, 0.45)',
        display: 'flex',
        flexDirection: 'column',
      };
    }

    // Desktop Docked: Right
    if (dock === 'right') {
      return {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: `${dockWidth}px`,
        height: '100vh',
        zIndex: 1000,
        backgroundColor: colors.bgBase,
        borderLeft: `1px solid ${colors.border}`,
        boxShadow: isLight
          ? '-6px 0 24px rgba(0, 0, 0, 0.06)'
          : '-8px 0 32px rgba(0, 0, 0, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        transition: isDragging ? 'none' : 'width 280ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }

    // Desktop Docked: Left
    if (dock === 'left') {
      return {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: `${dockWidth}px`,
        height: '100vh',
        zIndex: 1000,
        backgroundColor: colors.bgBase,
        borderRight: `1px solid ${colors.border}`,
        boxShadow: isLight
          ? '6px 0 24px rgba(0, 0, 0, 0.06)'
          : '8px 0 32px rgba(0, 0, 0, 0.65)',
        display: 'flex',
        flexDirection: 'column',
        transition: isDragging ? 'none' : 'width 280ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }

    // Desktop Docked: Bottom
    if (dock === 'bottom') {
      return {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: `${dockHeight}px`,
        zIndex: 1000,
        backgroundColor: colors.bgBase,
        borderTop: `1px solid ${colors.border}`,
        boxShadow: isLight
          ? '0 -8px 28px rgba(0, 0, 0, 0.08)'
          : '0 -10px 36px rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        transition: isDragging ? 'none' : 'height 280ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }

    // Desktop Docked: Top
    if (dock === 'top') {
      return {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        width: '100vw',
        height: `${dockHeight}px`,
        zIndex: 1000,
        backgroundColor: colors.bgBase,
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: isLight
          ? '0 8px 28px rgba(0, 0, 0, 0.08)'
          : '0 10px 36px rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        transition: isDragging ? 'none' : 'height 280ms cubic-bezier(0.22, 1, 0.36, 1)',
      };
    }

    // Floating Window
    return {
      position: 'fixed',
      left: `${floatingPos.x}px`,
      top: `${floatingPos.y}px`,
      width: `${floatingPos.width}px`,
      height: `${floatingPos.height}px`,
      zIndex: 1000,
      backgroundColor: colors.bgBase,
      borderRadius: '8px',
      border: `1px solid ${colors.border}`,
      boxShadow: isLight
        ? '0 16px 48px rgba(0, 0, 0, 0.16)'
        : '0 20px 60px rgba(0, 0, 0, 0.85)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: isDragging ? 'none' : 'border-color 0.2s ease, box-shadow 0.2s ease',
    };
  };

  return (
    <>
      {/* Subtle Ghost Dock Preview Area (Active when dragging near an edge) */}
      {isDragging && ghostDock && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            zIndex: 999,
            pointerEvents: 'none',
            backgroundColor: isLight ? 'rgba(62, 114, 236, 0.06)' : 'rgba(91, 140, 255, 0.06)',
            border: isLight ? '1.5px dashed rgba(62, 114, 236, 0.40)' : '1.5px dashed rgba(91, 140, 255, 0.35)',
            borderRadius: '6px',
            transition: 'all 0.14s ease-out',
            ...(ghostDock === 'right' && {
              top: 0,
              right: 0,
              bottom: 0,
              width: `${dockWidth}px`,
            }),
            ...(ghostDock === 'left' && {
              top: 0,
              left: 0,
              bottom: 0,
              width: `${dockWidth}px`,
            }),
            ...(ghostDock === 'bottom' && {
              left: 0,
              right: 0,
              bottom: 0,
              height: `${dockHeight}px`,
            }),
            ...(ghostDock === 'top' && {
              left: 0,
              right: 0,
              top: 0,
              height: `${dockHeight}px`,
            }),
          }}
        />
      )}

      {/* Main Terminal Window */}
      <aside
        ref={terminalRef}
        aria-label="Interactive Workspace Terminal"
        style={getContainerStyle()}
      >
        {/* RESIZE DIVIDER (When docked to edges) */}
        {!isMobile && dock === 'right' && (
          <div
            onPointerDown={(e) => startResize(e, 'w')}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeUp}
            title="Drag to resize dock width"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '6px',
              cursor: 'col-resize',
              zIndex: 100,
              backgroundColor: 'transparent',
            }}
          />
        )}
        {!isMobile && dock === 'left' && (
          <div
            onPointerDown={(e) => startResize(e, 'e')}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeUp}
            title="Drag to resize dock width"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '6px',
              cursor: 'col-resize',
              zIndex: 100,
              backgroundColor: 'transparent',
            }}
          />
        )}
        {!isMobile && dock === 'bottom' && (
          <div
            onPointerDown={(e) => startResize(e, 'n')}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeUp}
            title="Drag to resize dock height"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              cursor: 'row-resize',
              zIndex: 100,
              backgroundColor: 'transparent',
            }}
          />
        )}
        {!isMobile && dock === 'top' && (
          <div
            onPointerDown={(e) => startResize(e, 's')}
            onPointerMove={onResizeMove}
            onPointerUp={onResizeUp}
            title="Drag to resize dock height"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '6px',
              cursor: 'row-resize',
              zIndex: 100,
              backgroundColor: 'transparent',
            }}
          />
        )}

        {/* FLOATING RESIZE HANDLES (All 8 edges & corners) */}
        {!isMobile && dock === 'floating' && (
          <>
            <div
              onPointerDown={(e) => startResize(e, 'e')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '6px', cursor: 'e-resize', zIndex: 100 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'w')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', cursor: 'w-resize', zIndex: 100 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 's')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '6px', cursor: 's-resize', zIndex: 100 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'n')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '6px', cursor: 'n-resize', zIndex: 100 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'se')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', right: 0, bottom: 0, width: '12px', height: '12px', cursor: 'se-resize', zIndex: 101 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'sw')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', left: 0, bottom: 0, width: '12px', height: '12px', cursor: 'sw-resize', zIndex: 101 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'ne')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', right: 0, top: 0, width: '12px', height: '12px', cursor: 'ne-resize', zIndex: 101 }}
            />
            <div
              onPointerDown={(e) => startResize(e, 'nw')}
              onPointerMove={onResizeMove}
              onPointerUp={onResizeUp}
              style={{ position: 'absolute', left: 0, top: 0, width: '12px', height: '12px', cursor: 'nw-resize', zIndex: 101 }}
            />
          </>
        )}

        {/* Minimal Terminal Title Bar & Drag Handle */}
        <div
          onPointerDown={handleHeaderPointerDown}
          onPointerMove={handleHeaderPointerMove}
          onPointerUp={handleHeaderPointerUp}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '36px',
            backgroundColor: colors.bgHeader,
            borderBottom: `1px solid ${colors.borderSubtle}`,
            padding: '0 0.85rem',
            userSelect: 'none',
            flexShrink: 0,
            cursor: isMobile ? 'default' : 'grab',
          }}
        >
          {/* Left: Window Dots + Host / Directory Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span
                style={{
                  width: '7.5px',
                  height: '7.5px',
                  borderRadius: '50%',
                  backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                  border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '7.5px',
                  height: '7.5px',
                  borderRadius: '50%',
                  backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                  border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  width: '7.5px',
                  height: '7.5px',
                  borderRadius: '50%',
                  backgroundColor: isLight ? '#D1D5DB' : '#2A2D35',
                  border: isLight ? '1px solid #9CA3AF' : '1px solid #3F4450',
                  display: 'inline-block',
                }}
              />
            </div>

            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: colors.textSecondary,
                letterSpacing: '0.01em',
                fontWeight: 500,
              }}
            >
              kushal@portfolio:{currentPath}
            </span>
          </div>

          {/* Right: Dock Controls + Clear + Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {/* Desktop Dock Mode Switcher */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginRight: '0.3rem' }}>
                <button
                  onClick={() => setDock('floating')}
                  title="Float window"
                  aria-label="Float window"
                  className="font-mono"
                  style={{
                    background: dock === 'floating' ? (isLight ? '#D1D5DB' : '#2A2E38') : 'transparent',
                    border: 'none',
                    color: dock === 'floating' ? colors.textPrimary : colors.textMuted,
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.35rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  ⬚
                </button>

                <button
                  onClick={() => setDock('left')}
                  title="Dock left"
                  aria-label="Dock left"
                  className="font-mono"
                  style={{
                    background: dock === 'left' ? (isLight ? '#D1D5DB' : '#2A2E38') : 'transparent',
                    border: 'none',
                    color: dock === 'left' ? colors.textPrimary : colors.textMuted,
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.35rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  ◧
                </button>

                <button
                  onClick={() => setDock('right')}
                  title="Dock right"
                  aria-label="Dock right"
                  className="font-mono"
                  style={{
                    background: dock === 'right' ? (isLight ? '#D1D5DB' : '#2A2E38') : 'transparent',
                    border: 'none',
                    color: dock === 'right' ? colors.textPrimary : colors.textMuted,
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.35rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  ◨
                </button>

                <button
                  onClick={() => setDock('bottom')}
                  title="Dock bottom"
                  aria-label="Dock bottom"
                  className="font-mono"
                  style={{
                    background: dock === 'bottom' ? (isLight ? '#D1D5DB' : '#2A2E38') : 'transparent',
                    border: 'none',
                    color: dock === 'bottom' ? colors.textPrimary : colors.textMuted,
                    fontSize: '0.72rem',
                    padding: '0.15rem 0.35rem',
                    borderRadius: '3px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  ⬒
                </button>
              </div>
            )}

            {/* Clear Button */}
            <button
              onClick={() => setHistory([])}
              aria-label="Clear terminal buffer"
              title="Clear buffer"
              className="font-mono"
              style={{
                background: 'transparent',
                border: 'none',
                color: colors.textSecondary,
                fontSize: '0.68rem',
                cursor: 'pointer',
                padding: '0.15rem 0.3rem',
                borderRadius: '3px',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.textPrimary)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.textSecondary)}
            >
              clear
            </button>

            {/* Close Button */}
            <button
              onClick={closeTerminal}
              aria-label="Close terminal panel"
              title="Close terminal (Esc)"
              style={{
                background: 'transparent',
                border: 'none',
                color: colors.textSecondary,
                fontSize: '0.82rem',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '0.15rem 0.35rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
                e.currentTarget.style.backgroundColor = isLight ? '#DCDCD6' : '#22252D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0.85rem clamp(12px, 2vw, 20px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            lineHeight: 1.52,
            color: colors.textPrimary,
            backgroundColor: colors.bgBase,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem',
            cursor: 'text',
          }}
        >
          {history.map((item) => (
            <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {item.type === 'command' && (
                <TerminalPromptBlock
                  path={item.path || currentPath}
                  user="kushal@portfolio"
                  commandText={item.cmdText}
                />
              )}
              {item.type === 'info' && (
                <div style={{ color: colors.textSecondary, fontSize: '0.74rem', whiteSpace: 'pre-wrap' }}>
                  {item.text}
                </div>
              )}
              {item.type === 'output' && (
                <pre
                  style={{
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: colors.textPrimary,
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                    lineHeight: 1.48,
                  }}
                >
                  {item.text}
                </pre>
              )}
            </div>
          ))}

          {/* Active Two-Line Shell Prompt Block inspired directly by reference */}
          <div style={{ marginTop: '0.25rem' }}>
            <TerminalPromptBlock
              path={currentPath}
              user="kushal@portfolio"
              isInput={true}
            >
              <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
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
                  aria-label="Workspace shell input"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: colors.textPrimary,
                    fontFamily: 'inherit',
                    fontSize: '0.76rem',
                    padding: 0,
                    margin: 0,
                    caretColor: colors.accent,
                    fontWeight: 500,
                  }}
                />
              </div>
            </TerminalPromptBlock>
          </div>
        </div>
      </aside>
    </>
  );
}
