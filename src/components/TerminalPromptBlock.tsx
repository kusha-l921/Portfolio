'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

interface TerminalPromptBlockProps {
  path?: string;
  user?: string;
  dateTime?: string;
  commandText?: string;
  isInput?: boolean;
  children?: React.ReactNode;
  compact?: boolean;
  accentColor?: string;
}

export default function TerminalPromptBlock({
  path = '~',
  user = 'kushal@portfolio',
  dateTime,
  commandText,
  isInput = false,
  children,
  compact = false,
  accentColor,
}: TerminalPromptBlockProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  // Format date/time in the exact reference format: "Wed  7 Oct — 23:35"
  const [timeStr, setTimeStr] = useState<string>(dateTime || 'Wed  7 Oct — 23:35');

  useEffect(() => {
    if (dateTime) {
      setTimeStr(dateTime);
      return;
    }

    const updateTime = () => {
      const now = new Date();
      const weekday = now.toLocaleDateString('en-US', { weekday: 'short' });
      const day = now.getDate();
      const month = now.toLocaleDateString('en-US', { month: 'short' });
      const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      setTimeStr(`${weekday}  ${day} ${month} — ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [dateTime]);

  // Subtle developer palette — minimal contrast, no neon
  const bgSegment1 = isLight ? '#DFE2E8' : '#24272F';
  const bgSegment2 = isLight ? '#D0D4DD' : '#2F333D';
  const textDate = isLight ? '#555B68' : '#9AA0AD';
  const textPath = isLight ? '#2B303C' : '#D0D4DF';
  const textUser = isLight ? '#1E232E' : '#E0E3EC';
  const promptArrow = accentColor || (isLight ? '#4B5565' : '#8B93A2');

  const fontSize = compact ? '0.68rem' : '0.74rem';

  return (
    <div
      className="terminal-shell-prompt-block"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? '2px' : '3px',
        fontFamily: 'var(--font-mono)',
        fontSize,
        lineHeight: 1.35,
        userSelect: 'none',
      }}
    >
      {/* Top Line: Date / Time + Current Directory */}
      <div style={{ display: 'flex', alignItems: 'center', height: compact ? '19px' : '22px' }}>
        {/* Date Segment with pointed right arrow */}
        <div
          style={{
            backgroundColor: bgSegment1,
            color: textDate,
            padding: compact ? '1px 8px 1px 7px' : '2px 10px 2px 8px',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%)',
            display: 'inline-flex',
            alignItems: 'center',
            letterSpacing: '0.02em',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          {timeStr}
        </div>

        {/* Directory Segment nested into previous segment and pointing right */}
        <div
          style={{
            backgroundColor: bgSegment2,
            color: textPath,
            padding: compact ? '1px 9px 1px 9px' : '2px 12px 2px 10px',
            marginLeft: '-1px',
            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%, 6px 50%)',
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {path}
        </div>
      </div>

      {/* Bottom Line: User/Host Prompt + Cursor / Input / Command */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          minHeight: compact ? '19px' : '22px',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          {/* User Prompt Segment */}
          <div
            style={{
              backgroundColor: bgSegment1,
              color: textUser,
              padding: compact ? '1px 8px 1px 7px' : '2px 10px 2px 8px',
              clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              fontWeight: 600,
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}
          >
            {user}
          </div>
          <span
            style={{
              color: promptArrow,
              marginLeft: '0.2rem',
              fontWeight: 700,
              fontSize: compact ? '0.72rem' : '0.8rem',
            }}
          >
            ❯
          </span>
        </div>

        {/* Active Input or Command Execution Content */}
        {isInput ? (
          <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
            {children}
          </div>
        ) : commandText ? (
          <span
            style={{
              color: isLight ? '#1A1D24' : '#F0F2F5',
              fontWeight: 600,
              userSelect: 'text',
              wordBreak: 'break-all',
            }}
          >
            {commandText}
          </span>
        ) : (
          children && <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        )}
      </div>
    </div>
  );
}
