'use client';

import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import LifeBar from '@/components/LifeBar';

export interface ResultProps {
  birthDate: string;
  sex: 'male' | 'female';
  estimatedDeathAge: number;
  estimatedDeathYear: number;
  yearsRemaining: number;
  weeksRemaining: number;
  currentAge: number;
  exactDeathDate: Date;
  onReset: () => void;
}

function splitRemaining(end: Date): {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  let remaining = Math.max(0, end.getTime() - Date.now());
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365.25 * day;
  const month = year / 12;

  const years = Math.floor(remaining / year);
  remaining -= years * year;
  const months = Math.floor(remaining / month);
  remaining -= months * month;
  const days = Math.floor(remaining / day);
  remaining -= days * day;
  const hours = Math.floor(remaining / hour);
  remaining -= hours * hour;
  const minutes = Math.floor(remaining / minute);
  remaining -= minutes * minute;
  const seconds = Math.floor(remaining / second);
  return { years, months, days, hours, minutes, seconds };
}

export default function Result(props: ResultProps) {
  const {
    estimatedDeathAge,
    estimatedDeathYear,
    weeksRemaining,
    currentAge,
    exactDeathDate,
    onReset,
  } = props;

  const [displayAge, setDisplayAge] = useState(0);
  const [remaining, setRemaining] = useState(() =>
    splitRemaining(exactDeathDate)
  );

  useEffect(() => {
    setDisplayAge(0);
    const durationMs = 1800;
    const tickMs = 30;
    const totalSteps = Math.round(durationMs / tickMs);
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      const progress = step / totalSteps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(easedProgress * estimatedDeathAge);
      setDisplayAge(currentValue);
      if (step >= totalSteps || currentValue >= Math.round(estimatedDeathAge)) {
        setDisplayAge(Math.round(estimatedDeathAge));
        clearInterval(id);
      }
    }, tickMs);
    return () => clearInterval(id);
  }, [estimatedDeathAge]);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(splitRemaining(exactDeathDate));
    }, 1000);
    return () => clearInterval(id);
  }, [exactDeathDate]);

  const outerStyle: CSSProperties = {
    width: '100%',
    paddingTop: '48px',
    paddingBottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    opacity: 0,
    animation: 'resultFadeIn 0.4s ease forwards',
  };

  const innerStyle: CSSProperties = {
    width: '100%',
    maxWidth: '680px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  };

  const lifespanLabelStyle: CSSProperties = {
    fontSize: '12px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#9a8f7a',
    textAlign: 'center',
    marginBottom: '8px',
  };

  const bigNumStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: 'clamp(72px, 18vw, 140px)',
    fontWeight: 700,
    color: '#1a1612',
    textAlign: 'center',
    fontVariantNumeric: 'tabular-nums',
    lineHeight: 1,
    margin: 0,
  };

  const bigNumWrapStyle: CSSProperties = {
    minWidth: '3ch',
    textAlign: 'center',
    transformOrigin: 'center',
  };

  const yearLineStyle: CSSProperties = {
    fontSize: '22px',
    color: '#4a3f2f',
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: 0,
  };

  const weeksLineStyle: CSSProperties = {
    fontSize: '18px',
    color: '#9a8f7a',
    textAlign: 'center',
    marginTop: '8px',
    marginBottom: 0,
  };

  const countdownLabelStyle: CSSProperties = {
    fontSize: '12px',
    letterSpacing: '0.12em',
    fontVariant: 'small-caps',
    color: '#9a8f7a',
    textAlign: 'center',
    marginTop: '16px',
    marginBottom: '6px',
  };

  const countdownLineStyle: CSSProperties = {
    fontSize: '14px',
    color: '#9a8f7a',
    textAlign: 'center',
    margin: 0,
    lineHeight: 1.5,
    maxWidth: 560,
    padding: '0 10px',
  };

  const numAccentStyle: CSSProperties = {
    color: '#4a3f2f',
    fontWeight: 600,
  };

  const linkStyle: CSSProperties = {
    display: 'block',
    textAlign: 'center',
    marginTop: '28px',
    fontSize: '14px',
    color: '#9a8f7a',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    width: '100%',
    fontFamily: 'inherit',
  };

  const weeksFmt = useMemo(
    () => weeksRemaining.toLocaleString('en-US'),
    [weeksRemaining]
  );

  return (
    <>
      <style>{`
        @keyframes resultFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes numberReveal {
          0% { opacity: 0; transform: scale(0.5); }
          60% { opacity: 1; transform: scale(1.05); }
          80% { transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1.0); }
        }
        @keyframes numberSettle {
          0% { transform: scale(1.0); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1.0); }
        }

        @media (max-width: 480px) {
          .result-outer { padding-top: 32px !important; }
        }
      `}</style>
      <div style={outerStyle} className="result-outer">
      <div style={innerStyle}>
        <div style={lifespanLabelStyle}>YOUR ESTIMATED LIFESPAN</div>
        <div style={bigNumWrapStyle}>
          <p
            style={{
              ...bigNumStyle,
              animation: 'none',
            }}
          >
            {Math.round(displayAge)}
          </p>
        </div>

        <p style={yearLineStyle}>
          You are estimated to live until{' '}
          <strong style={{ color: '#c9a84c', fontWeight: 700 }}>
            {estimatedDeathYear}
          </strong>
        </p>

        <p style={weeksLineStyle}>
          That&apos;s {weeksFmt} weeks remaining.{' '}
          <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>
            Make them count.
          </em>
        </p>

        <div style={countdownLabelStyle}>TIME REMAINING (LIVE)</div>
        <p style={countdownLineStyle}>
          You have{' '}
          <span style={numAccentStyle}>{remaining.years}</span> years,{' '}
          <span style={numAccentStyle}>{remaining.months}</span> months,{' '}
          <span style={numAccentStyle}>{remaining.days}</span> days,{' '}
          <span style={numAccentStyle}>{remaining.hours}</span> hours,{' '}
          <span style={numAccentStyle}>{remaining.minutes}</span> minutes,{' '}
          <span style={numAccentStyle}>{remaining.seconds}</span> seconds remaining
        </p>

        <div style={{ marginTop: '28px', width: '100%' }}>
          <LifeBar
            currentAge={currentAge}
            estimatedDeathAge={estimatedDeathAge}
          />
        </div>

        <button type="button" style={linkStyle} onClick={onReset}>
          ← Start over
        </button>
      </div>
      </div>
    </>
  );
}
