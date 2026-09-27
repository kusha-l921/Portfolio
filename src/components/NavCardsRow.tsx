'use client';

import React from 'react';
import { QUICK_NAV_CARDS } from '../data/portfolioData';

export default function NavCardsRow() {
  return (
    <section style={{ paddingTop: '1rem', paddingBottom: '3.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.85rem',
          }}
          className="nav-cards-grid"
        >
          {QUICK_NAV_CARDS.map((card) => (
            <a
              key={card.number}
              href={card.target}
              className="card nav-card-link"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1rem',
                minHeight: '120px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '8px',
                backgroundColor: '#0A0A0A',
                border: '1px solid #1A1A1A',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.45rem',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.72rem', color: '#666666' }}
                  >
                    {card.number}
                  </span>
                  <span
                    className="nav-card-arrow"
                    style={{
                      fontSize: '0.8rem',
                      color: '#666666',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                    }}
                  >
                    [→]
                  </span>
                </div>
                <h3
                  className="font-mono"
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#EEEEEE',
                    letterSpacing: '0.04em',
                    marginBottom: '0.35rem',
                  }}
                >
                  {card.title}
                </h3>
              </div>

              <p
                style={{
                  fontSize: '0.75rem',
                  color: '#8A8A8A',
                  lineHeight: 1.4,
                }}
              >
                {card.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .nav-cards-grid {
            gridTemplateColumns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .nav-cards-grid {
            gridTemplateColumns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 440px) {
          .nav-cards-grid {
            gridTemplateColumns: 1fr !important;
          }
        }
        .nav-card-link:hover .nav-card-arrow {
          transform: translateX(3px);
          color: #FFFFFF !important;
        }
        .nav-card-link:hover h3 {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
