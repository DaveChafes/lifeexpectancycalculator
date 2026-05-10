'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { openResultShareOnTwitter } from '@/lib/shareResultTwitter';

export interface ShareCardProps {
  estimatedDeathAge: number;
  estimatedDeathYear: number;
  percentileVsPeers: number;
  sex: 'male' | 'female';
  currentAge: number;
  weeksRemaining: number;
}

export default function ShareCard(props: ShareCardProps) {
  const {
    estimatedDeathYear,
    percentileVsPeers,
    sex,
    weeksRemaining,
  } = props;
  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
  }, []);

  const clampedPct = Math.min(100, Math.max(0, Math.round(percentileVsPeers)));
  const peopleWord = sex === 'male' ? 'men' : 'women';

  function shareTwitter() {
    openResultShareOnTwitter(estimatedDeathYear, weeksRemaining);
  }

  function shareFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://whenwillidiecalculator.com')}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  async function copyLink() {
    await navigator.clipboard.writeText('https://whenwillidiecalculator.com');
    setCopied(true);
    if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
  }

  const cardStyle: CSSProperties = {
    background: '#fffdf7',
    border: '1px solid #e8dfc8',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '480px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const dividerStyle: CSSProperties = {
    height: 1,
    background: '#e8dfc8',
    margin: '16px 0',
    border: 'none',
  };

  const siteNameStyle: CSSProperties = {
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#6b5e4e',
    margin: 0,
  };

  const headlineStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#1a1612',
    margin: 0,
    lineHeight: 1.25,
  };

  const weeksLineStyle: CSSProperties = {
    fontSize: '16px',
    color: '#4a3f2f',
    marginTop: '8px',
    marginBottom: 0,
  };

  const identityStyle: CSSProperties = {
    fontSize: '16px',
    color: '#c9a84c',
    fontStyle: 'italic',
    fontWeight: 600,
    marginTop: '8px',
    marginBottom: 0,
  };

  const pctLineStyle: CSSProperties = {
    fontSize: '14px',
    color: '#6b5e4e',
    marginTop: '12px',
    marginBottom: 0,
  };

  const footerStyle: CSSProperties = {
    fontSize: '11px',
    color: '#7a6e5f',
    letterSpacing: '0.05em',
    margin: 0,
  };

  const btnBase: CSSProperties = {
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
    fontFamily: 'inherit',
    border: 'none',
  };

  const btnRow: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '24px',
    flexWrap: 'wrap',
  };

  return (
    <>
      <style>{`
        .share-card-action-btn:hover {
          opacity: 0.85;
        }
        @media (max-width: 480px) {
          .share-card {
            padding: 20px !important;
          }
          .share-btn-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .share-btn-row .share-card-action-btn {
            width: 100% !important;
          }
        }
      `}</style>

      <div style={{ width: '100%' }}>
        <div style={cardStyle} className="share-card">
          <p style={siteNameStyle}>Life Expectancy Calculator</p>
          <hr style={dividerStyle} />
          <p style={headlineStyle}>Estimated to live until {estimatedDeathYear}</p>
          <p style={weeksLineStyle}>
            That&apos;s {weeksRemaining.toLocaleString()} weeks.
          </p>
          <p style={identityStyle}>I&apos;m not wasting them.</p>
          <p style={pctLineStyle}>
            On track to outlive {clampedPct}% of {peopleWord} my age
          </p>
          <hr style={dividerStyle} />
          <p style={footerStyle}>whenwillidiecalculator.com</p>
        </div>

        <div style={btnRow} className="share-btn-row">
          <button
            type="button"
            className="share-card-action-btn"
            style={{ ...btnBase, background: '#000000', color: '#ffffff' }}
            onClick={shareTwitter}
          >
            Share on X
          </button>
          <button
            type="button"
            className="share-card-action-btn"
            style={{ ...btnBase, background: '#1877f2', color: '#ffffff' }}
            onClick={shareFacebook}
          >
            Share on Facebook
          </button>
          <button
            type="button"
            className="share-card-action-btn"
            style={{
              ...btnBase,
              background: '#fffdf7',
              color: '#4a3f2f',
              border: '1px solid #d4c9b0',
            }}
            onClick={() => void copyLink()}
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </>
  );
}
