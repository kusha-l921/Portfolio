'use client';

import React, { useState, useRef, useEffect } from 'react';
import { RESUME_DATA } from '@/data/portfolioData';

interface TerminalLine {
  id: string;
  type: 'prompt' | 'output';
  text: React.ReactNode;
}

export default function TerminalPanel({
  onNavigateSection,
}: {
  onNavigateSection?: (sectionId: string) => void;
}) {
  const [inputVal, setInputVal] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'cmd-1',
      type: 'prompt',
      text: 'help',
    },
    {
      id: 'out-1',
      type: 'output',
      text: (
        <div className="space-y-0.5 text-text-secondary">
          <p className="text-text-primary">Available commands:</p>
          <div className="grid grid-cols-1 gap-0.5 pl-2 text-[10.5px]">
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('about')}>about</span>
              <span className="text-text-muted">- Learn more about me</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('projects')}>projects</span>
              <span className="text-text-muted">- View my work</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('skills')}>skills</span>
              <span className="text-text-muted">- List my skills</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('experience')}>experience</span>
              <span className="text-text-muted">- My journey</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('contact')}>contact</span>
              <span className="text-text-muted">- Get in touch</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('github')}>github</span>
              <span className="text-text-muted">- Open my GitHub</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('resume')}>resume</span>
              <span className="text-text-muted">- Download my resume</span>
            </div>
            <div>
              <span className="text-cyan-accent font-semibold inline-block w-24 cursor-pointer hover:underline" onClick={() => handleCommand('clear')}>clear</span>
              <span className="text-text-muted">- Clear the terminal</span>
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLines([]);
      setInputVal('');
      return;
    }

    let outNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outNode = (
          <div className="space-y-0.5 text-text-secondary">
            <p className="text-text-primary">Available commands:</p>
            <div className="grid grid-cols-1 gap-0.5 pl-2 text-[10.5px]">
              <div><span className="text-cyan-accent font-semibold inline-block w-24">about</span><span className="text-text-muted">- Learn more about me</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">projects</span><span className="text-text-muted">- View my work</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">skills</span><span className="text-text-muted">- List my skills</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">experience</span><span className="text-text-muted">- My journey</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">contact</span><span className="text-text-muted">- Get in touch</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">github</span><span className="text-text-muted">- Open my GitHub</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">resume</span><span className="text-text-muted">- Download my resume</span></div>
              <div><span className="text-cyan-accent font-semibold inline-block w-24">clear</span><span className="text-text-muted">- Clear the terminal</span></div>
            </div>
          </div>
        );
        break;

      case 'about':
        outNode = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p className="text-text-primary font-semibold">{RESUME_DATA.personal.fullName} — {RESUME_DATA.personal.role}</p>
            <p>{RESUME_DATA.education.degree} ({RESUME_DATA.education.institution}), CGPA: {RESUME_DATA.education.cgpa}</p>
            <p>{RESUME_DATA.personal.description}</p>
          </div>
        );
        onNavigateSection?.('about');
        break;

      case 'projects':
        outNode = (
          <div className="space-y-1 text-xs">
            {RESUME_DATA.projects.map((p) => (
              <div key={p.id} className="text-text-secondary">
                <span className="text-cyan-accent font-semibold">[{p.number}] {p.title}</span> — {p.tags.join(', ')}
              </div>
            ))}
          </div>
        );
        onNavigateSection?.('projects');
        break;

      case 'skills':
        outNode = (
          <div className="space-y-1 text-xs text-text-secondary">
            <p><span className="text-cyan-accent font-semibold">AI/ML:</span> {RESUME_DATA.skills.aiml.join(', ')}</p>
            <p><span className="text-cyan-accent font-semibold">Languages:</span> {RESUME_DATA.skills.languages.join(', ')}</p>
            <p><span className="text-cyan-accent font-semibold">Web:</span> {RESUME_DATA.skills.web.join(', ')}</p>
            <p><span className="text-cyan-accent font-semibold">Tools:</span> {RESUME_DATA.skills.tools.join(', ')}</p>
          </div>
        );
        onNavigateSection?.('skills');
        break;

      case 'experience':
        outNode = (
          <div className="space-y-1 text-xs text-text-secondary">
            {RESUME_DATA.achievements.map((a) => (
              <div key={a.id}>
                <span className="text-cyan-accent font-semibold">• {a.title}</span>
                <p className="text-[10px] text-text-muted">{a.description}</p>
              </div>
            ))}
          </div>
        );
        onNavigateSection?.('experience');
        break;

      case 'contact':
        outNode = (
          <div className="space-y-0.5 text-xs text-text-secondary">
            <p>Email: <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-cyan-accent underline">{RESUME_DATA.personal.email}</a></p>
            <p>Phone: {RESUME_DATA.personal.phone}</p>
            <p>Location: {RESUME_DATA.personal.location}</p>
          </div>
        );
        onNavigateSection?.('contact');
        break;

      case 'github':
        window.open(RESUME_DATA.personal.github, '_blank');
        outNode = <span className="text-cyan-accent">Opening GitHub {RESUME_DATA.personal.github}...</span>;
        break;

      case 'resume':
        window.open(RESUME_DATA.personal.resumeUrl, '_blank');
        outNode = <span className="text-cyan-accent">Opening resume PDF...</span>;
        break;

      default:
        outNode = (
          <span className="text-text-muted">
            zsh: command not found: {cmd}. Type <span className="text-cyan-accent font-semibold">help</span>.
          </span>
        );
        break;
    }

    setLines((prev) => [
      ...prev,
      { id: `cmd-${Date.now()}`, type: 'prompt', text: rawCmd },
      { id: `out-${Date.now()}`, type: 'output', text: outNode },
    ]);
    setInputVal('');
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full h-full p-4 rounded-lg border border-border-cyan bg-[#080D16] flex flex-col justify-between font-mono text-[11px] shadow-sm cursor-text"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-subtle text-text-muted select-none">
        <div className="flex items-center gap-2">
          <span className="text-cyan-accent font-semibold">/terminal</span>
          <span className="text-[10px] text-text-muted">zsh</span>
        </div>
        <div className="flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
        </div>
      </div>

      {/* Terminal Viewport */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[190px]">
        {lines.map((item) => (
          <div key={item.id}>
            {item.type === 'prompt' ? (
              <div className="flex items-center gap-1 text-text-muted">
                <span className="text-cyan-accent font-semibold">kushal@portfolio:~$</span>
                <span className="text-text-primary">{item.text}</span>
              </div>
            ) : (
              <div className="pl-1 mt-0.5">{item.text}</div>
            )}
          </div>
        ))}

        {/* Active Command Input Line */}
        <div className="flex items-center gap-1 text-text-muted pt-1">
          <span className="text-cyan-accent font-semibold">kushal@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand(inputVal);
            }}
            className="flex-1 bg-transparent text-text-primary font-mono text-[11px] focus:outline-none caret-cyan-accent"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
