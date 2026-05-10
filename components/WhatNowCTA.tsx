'use client';

import Link from 'next/link';
import { useMemo, type CSSProperties } from 'react';
import { openResultShareOnTwitter } from '@/lib/shareResultTwitter';

export interface WhatNowCTAProps {
  weeksRemaining: number;
  estimatedDeathYear: number;
}

export default function WhatNowCTA({
  weeksRemaining,
  estimatedDeathYear,
}: WhatNowCTAProps) {
  const weeksFmt = useMemo(
    () => weeksRemaining.toLocaleString('en-US'),
    [weeksRemaining]
  );

  const boxStyle: CSSProperties = {
    border: '1px solid #e8dfc8',
    borderRadius: 14,
    padding: '20px',
    background: '#fffdf7',
    maxWidth: '480px',
    margin: '0 auto',
  };

  const headingStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: 'clamp(20px, 4.5vw, 24px)',
    fontWeight: 700,
    color: '#1a1612',
    textAlign: 'center',
    margin: 0,
    lineHeight: 1.35,
  };

  const btnStyle: CSSProperties = {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
    fontFamily: 'inherit',
    border: '1px solid #b89a3d',
    background: '#c9a84c',
    color: '#1a1612',
    boxSizing: 'border-box',
  };

  const btnCol: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '20px',
  };

  return (
    <>
      <style>{`
        .what-now-cta-btn:hover {
          opacity: 0.88;
        }
      `}</style>
      <div style={boxStyle}>
        <h2 style={headingStyle}>
          You have {weeksFmt} weeks. Make them count.
        </h2>
        <div style={btnCol}>
          <Link
            href="/how-to-live-longer"
            className="what-now-cta-btn"
            style={btnStyle}
          >
            See the evidence-based habits →
          </Link>
          <button
            type="button"
            className="what-now-cta-btn"
            style={btnStyle}
            onClick={() =>
              openResultShareOnTwitter(estimatedDeathYear, weeksRemaining)
            }
          >
            Share your result
          </button>
        </div>
      </div>
    </>
  );
}
