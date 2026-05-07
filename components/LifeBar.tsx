'use client';

import { useEffect, useState, type CSSProperties } from 'react';

export interface LifeBarProps {
  currentAge: number;
  estimatedDeathAge: number;
}

export default function LifeBar({
  currentAge,
  estimatedDeathAge,
}: LifeBarProps) {
  const [mounted, setMounted] = useState(false);

  const pct =
    estimatedDeathAge > 0
      ? Math.min(1, Math.max(0, currentAge / estimatedDeathAge))
      : 0;

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fillFrac = mounted ? pct : 0;

  const deathYearApprox =
    new Date().getFullYear() +
    Math.max(0, Math.round(estimatedDeathAge - currentAge));

  const labelMuted: CSSProperties = {
    fontSize: '11px',
    color: '#9a8f7a',
  };

  const rowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    width: '100%',
  };

  const centerAgeStyle: CSSProperties = {
    fontSize: '12px',
    color: '#4a3f2f',
    fontWeight: 600,
  };

  const trackStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '12px',
    borderRadius: '999px',
    backgroundColor: '#e8dfc8',
  };

  const fillStyle: CSSProperties = {
    height: '100%',
    width: `${fillFrac * 100}%`,
    borderRadius: '999px',
    backgroundColor: '#c9a84c',
    transition: 'width 0.8s ease-out',
  };

  const markerStyle: CSSProperties = {
    position: 'absolute',
    left: `${fillFrac * 100}%`,
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '#c9a84c',
    border: '3px solid #f7f2e8',
    boxSizing: 'border-box',
    transition: 'left 0.8s ease-out',
    pointerEvents: 'none',
  };

  const captionStyle: CSSProperties = {
    marginTop: '8px',
    textAlign: 'center',
    fontSize: '11px',
    color: '#9a8f7a',
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={rowStyle}>
        <span style={labelMuted}>Born</span>
        <span style={centerAgeStyle}>{Math.round(currentAge)}</span>
        <span style={labelMuted}>Est. {deathYearApprox}</span>
      </div>
      <div style={trackStyle}>
        <div style={fillStyle} />
        <div style={markerStyle} aria-hidden />
      </div>
      <p style={captionStyle}>
        Age {Math.round(currentAge)} of an estimated{' '}
        {Math.round(estimatedDeathAge)}
      </p>
    </div>
  );
}
