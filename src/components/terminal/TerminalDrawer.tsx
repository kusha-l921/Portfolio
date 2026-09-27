'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_NODES, EXPERIENCES } from '@/data/portfolioData';
import { sound } from '@/utils/sound';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  isError?: boolean;
}

const ASCII_ART = `
██╗  ██╗██╗   ██╗███████╗██╗  ██╗ █████╗ ██╗     
██║ ██╔╝██║   ██║██╔════╝██║  ██║██╔══██╗██║     
█████╔╝ ██║   ██║███████╗███████║███████║██║     
██╔═██╗ ██║   ██║╚════██║██╔══██║██╔══██║██║     
██║  ██╗╚██████╔╝███████║██║  ██║██║  ██║███████╗
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
       AI / ML ENGINEER // SYSTEMS BUILDER
`;

export default function TerminalDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="text-secondary-text space-y-1">
          <p className="text-bright-blue font-semibold">Kushal Digital Environment [Version 2.4.0]</p>
          <p>Type <span className="text-electric-blue font-bold">help</span> to view available system commands or <span className="text-success">sudo hire kushal</span>.</p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    sound.playClick();
    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIdx(-1);

    const parts = raw.toLowerCase().split(' ');
    const command = parts[0];
    const args = parts.slice(1).join(' ');

    let resultNode: React.ReactNode = null;
    let isErr = false;

    switch (command) {
      case 'help':
        resultNode = (
          <div className="space-y-1 text-xs text-secondary-text">
            <p className="text-electric-blue font-bold">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-1">
              <div><span className="text-primary-text font-bold">whoami</span> — Current engineer biography</div>
              <div><span className="text-primary-text font-bold">projects</span> — Index of intelligent systems</div>
              <div><span className="text-primary-text font-bold">skills</span> — 3D universe tech stack</div>
              <div><span className="text-primary-text font-bold">experience</span> — Chronological timeline</div>
              <div><span className="text-primary-text font-bold">contact</span> — Reach out / connect</div>
              <div><span className="text-primary-text font-bold">resume</span> — Open interactive resume</div>
              <div><span className="text-primary-text font-bold">github</span> — Launch GitHub repository</div>
              <div><span className="text-primary-text font-bold">clear</span> — Wipe terminal screen</div>
            </div>
            <p className="text-muted-text text-[11px] mt-2 italic">Easter eggs: coffee, matrix, ascii, sudo hire kushal</p>
          </div>
        );
        break;

      case 'whoami':
        resultNode = (
          <div className="space-y-1 text-xs">
            <p className="text-bright-blue font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p className="text-secondary-text">{PERSONAL_INFO.subheadline}</p>
            <p className="text-muted-text">Institution: {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.degree})</p>
            <p className="text-success">Active Focus: {PERSONAL_INFO.currentlyWorkingOn.project}</p>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-1 text-xs">
            <p className="text-electric-blue font-semibold">Engineered AI/ML Projects:</p>
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/20 py-1">
                <div>
                  <span className="text-primary-text font-bold">[{idx + 1}] {p.title}</span>
                  <span className="text-muted-text text-[11px] block">{p.tagline}</span>
                </div>
                <span className="text-bright-blue text-[11px] font-mono">{p.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs">
            <p className="text-electric-blue font-semibold">Technical Universe Nodes:</p>
            <div className="flex flex-wrap gap-1.5">
              {SKILL_NODES.map((s) => (
                <span key={s.id} className="px-2 py-0.5 rounded bg-panel-elevated border border-border/40 text-secondary-text">
                  {s.name} ({s.proficiency}%)
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        resultNode = (
          <div className="space-y-1.5 text-xs">
            <p className="text-electric-blue font-semibold">Experience Timeline:</p>
            {EXPERIENCES.map((e) => (
              <div key={e.id} className="border-l border-electric-blue/40 pl-2">
                <span className="text-primary-text font-bold">{e.year}: {e.role}</span>
                <span className="text-muted-text"> @ {e.organization}</span>
                <p className="text-secondary-text text-[11px]">{e.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="text-xs space-y-1">
            <p className="text-primary-text">Send an email transmission:</p>
            <a href={`mailto:${PERSONAL_INFO.socials.email}`} className="text-electric-blue underline block">
              {PERSONAL_INFO.socials.email}
            </a>
            <p className="text-muted-text">LinkedIn: {PERSONAL_INFO.socials.linkedin}</p>
          </div>
        );
        break;

      case 'github':
        window.open(PERSONAL_INFO.socials.github, '_blank');
        resultNode = <p className="text-success text-xs">Navigating to {PERSONAL_INFO.socials.github}...</p>;
        break;

      case 'resume':
        window.location.href = '/resume';
        resultNode = <p className="text-success text-xs">Routing to /resume...</p>;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      // Easter Eggs
      case 'sudo':
        if (args === 'hire kushal' || args === 'hire') {
          sound.playSuccess();
          resultNode = (
            <div className="space-y-1 text-xs p-2 rounded bg-success/10 border border-success/30 text-success">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                [AUTH_ACCEPTED]: Permission granted.
              </p>
              <p>Initializing high-impact hiring protocol...</p>
              <p className="text-secondary-text">Forwarding contract and calendly synchronization to: <span className="text-primary-text underline">{PERSONAL_INFO.socials.email}</span></p>
            </div>
          );
        } else {
          resultNode = <p className="text-warning text-xs">sudo: authorization required for: {args}</p>;
        }
        break;

      case 'coffee':
        resultNode = (
          <div className="text-xs text-warning">
            Developer fuel loaded ☕ [Caffeine level: 100% // Neural latency reduced to 1ms]
          </div>
        );
        break;

      case 'matrix':
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 2400);
        resultNode = (
          <div className="text-xs text-bright-blue font-mono">
            System glitch animation initiated. Entering reality layer 0x07...
          </div>
        );
        break;

      case 'ascii':
        resultNode = (
          <pre className="text-[9px] leading-tight font-mono text-electric-blue overflow-x-auto">
            {ASCII_ART}
          </pre>
        );
        break;

      default:
        isErr = true;
        resultNode = (
          <p className="text-xs text-warning">
            Command not found: <span className="text-primary-text font-bold">{raw}</span>. Type <span className="text-electric-blue">help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: raw,
        output: resultNode,
        isError: isErr,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIdx(nextIdx);
          setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isExpanded
          ? 'inset-4 md:inset-10'
          : 'bottom-4 right-4 w-[calc(100vw-32px)] sm:w-[540px] h-[400px]'
      } rounded-xl border border-electric-blue/40 bg-panel/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden font-mono ${
        isGlitching ? 'animate-pulse border-bright-blue ring-2 ring-bright-blue/50' : ''
      }`}
    >
      {/* Top Header Bar */}
      <div className="h-10 px-3.5 border-b border-border/40 bg-panel-elevated/80 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-electric-blue" />
          <span className="text-primary-text font-semibold tracking-wide">
            kushal@portfolio:~$ [SECONDARY_SHELL]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded hover:bg-panel text-muted-text hover:text-primary-text transition-colors"
            title="Expand/Collapse"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-panel text-muted-text hover:text-primary-text transition-colors"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Output Console Viewport */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-muted-text">
              <span className="text-electric-blue font-bold">&gt;</span>
              <span className="text-primary-text font-medium">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Active Command Input Bar */}
      <div className="p-3 border-t border-border/40 bg-panel-elevated/40 flex items-center gap-2">
        <span className="text-electric-blue font-bold text-xs">kushal:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'whoami', or 'sudo hire kushal'..."
          className="flex-1 bg-transparent text-primary-text font-mono text-xs focus:outline-none placeholder:text-muted-text/50"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          className="p-1 text-muted-text hover:text-electric-blue transition-colors"
          title="Send"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
