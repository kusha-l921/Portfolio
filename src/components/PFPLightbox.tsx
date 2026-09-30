'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface PFPLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText?: string;
}

export default function PFPLightbox({
  isOpen,
  onClose,
  imageSrc,
  altText = 'Profile Picture',
}: PFPLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Profile picture lightbox"
      className="pfp-lightbox-overlay"
      onClick={onClose}
    >
      <div
        className="pfp-lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Close Button */}
        <div className="pfp-lightbox-header">
          <div className="font-mono pfp-lightbox-label">
            <span style={{ color: 'var(--accent-blue)' }}>&gt;</span>
            <span>avatar.view()</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image lightbox"
            className="pfp-lightbox-close"
          >
            ✕
          </button>
        </div>

        {/* Full Image Box */}
        <div className="pfp-lightbox-image-wrapper">
          <Image
            src={imageSrc}
            alt={altText}
            width={480}
            height={480}
            priority
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '75vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '6px',
            }}
          />
        </div>

        {/* Caption */}
        <div className="pfp-lightbox-caption font-mono">
          <span>Kushal Patel · AI/ML Engineer</span>
          <span className="pfp-lightbox-hint">esc to close</span>
        </div>
      </div>

      <style jsx>{`
        .pfp-lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(5, 5, 5, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: pfpOverlayFade 0.24s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          cursor: pointer;
        }

        .pfp-lightbox-container {
          position: relative;
          max-width: 480px;
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-radius: 12px;
          padding: 1rem;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.85);
          animation: pfpImageScale 0.26s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          cursor: default;
        }

        .pfp-lightbox-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .pfp-lightbox-label {
          font-size: 0.76rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .pfp-lightbox-close {
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.18s ease;
        }

        .pfp-lightbox-close:hover {
          color: var(--text-white);
          border-color: var(--border-hover);
          background: var(--bg-pill-hover);
          transform: scale(1.05);
        }

        .pfp-lightbox-image-wrapper {
          position: relative;
          width: 100%;
          background: #000;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--border-subtle);
        }

        .pfp-lightbox-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.75rem;
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .pfp-lightbox-hint {
          color: var(--text-dim);
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        @keyframes pfpOverlayFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pfpImageScale {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
