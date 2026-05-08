'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface LifeGridProps {
  birthDate: string;
  estimatedDeathAge: number;
}

function monthsSinceBirth(birthDate: string): number {
  const birth = new Date(birthDate);
  const now = new Date();
  if (!Number.isFinite(birth.getTime())) return 0;
  return (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
}

function weeksAndMonthsFromBirth(birthDate: string): { weeks: number; months: number } {
  const t0 = new Date(birthDate).getTime();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const weeks = Number.isFinite(t0) ? Math.max(0, Math.floor((Date.now() - t0) / weekMs)) : 0;
  const months = monthsSinceBirth(birthDate);
  return { weeks, months };
}

export default function LifeGrid({ birthDate, estimatedDeathAge }: LifeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [scale, setScale] = useState(1);

  const COLS = 24;
  const RADIUS = 8;
  const GAP = 7;
  const CELL = RADIUS * 2 + GAP;

  const totalMonths = Math.max(0, Math.round(estimatedDeathAge * 12));
  const ROWS = Math.ceil(totalMonths / COLS);

  const { weeks: weeksLived, months: monthsLivedRaw } = useMemo(
    () => weeksAndMonthsFromBirth(birthDate),
    [birthDate]
  );
  const monthsLived = Math.max(0, Math.min(monthsLivedRaw, totalMonths));
  const weeksRemaining = Math.max(0, Math.round((estimatedDeathAge - monthsLived / 12) * 52));

  const COLOR_LIVED = '#c9a84c';
  const COLOR_REMAINING_STROKE = '#d4c9b0';

  const canvasWidth = COLS * CELL;
  const canvasHeight = ROWS * CELL;

  const getCenter = useCallback(
    (index: number) => {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      return {
        x: col * CELL + RADIUS,
        y: row * CELL + RADIUS,
      };
    },
    [CELL, COLS, RADIUS]
  );

  const drawLivedCircle = useCallback(
    (ctx: CanvasRenderingContext2D, index: number, scale = 1) => {
      const { x, y } = getCenter(index);
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = COLOR_LIVED;
      ctx.fill();
      ctx.restore();
    },
    [COLOR_LIVED, RADIUS, getCenter]
  );

  const drawCurrentCircle = useCallback(
    (ctx: CanvasRenderingContext2D, index: number) => {
      const { x, y } = getCenter(index);
      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = '#fffdf7';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = '#c9a84c';
      ctx.lineWidth = 2;
      ctx.stroke();
    },
    [RADIUS, getCenter]
  );

  const drawRemainingCircle = useCallback(
    (ctx: CanvasRenderingContext2D, index: number) => {
      const { x, y } = getCenter(index);
      ctx.beginPath();
      ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = COLOR_REMAINING_STROKE;
      ctx.lineWidth = 1;
      ctx.stroke();
    },
    [COLOR_REMAINING_STROKE, RADIUS, getCenter]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    function updateScale() {
      const container = containerRef.current;
      if (!container) return;
      const availableWidth = container.clientWidth;
      const naturalWidth = COLS * CELL;
      const newScale = Math.min(1, availableWidth / naturalWidth);
      setScale(newScale);
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [COLS, CELL]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    if (!hasStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const ctx2: CanvasRenderingContext2D = ctx;

    setStatsVisible(false);

    const WAVE_DURATION = 4000;
    const startTime = performance.now();

    function getWaveDelay(index: number): number {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      const waveFactor = (col * 0.5 + row) / (COLS * 0.5 + ROWS);
      return waveFactor * WAVE_DURATION * 0.85;
    }

    function animate(now: number) {
      const elapsed = now - startTime;
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);

      let allDone = true;

      for (let i = 0; i < monthsLived; i++) {
        const delay = getWaveDelay(i);
        const p = Math.max(0, Math.min(1, (elapsed - delay) / 250));
        if (p < 1) allDone = false;
        if (p > 0) {
          const scale = p < 0.6 ? p / 0.6 : 1 + Math.sin(((p - 0.6) / 0.4) * Math.PI) * 0.12;
          drawLivedCircle(ctx2, i, scale);
        }
      }

      if (!allDone) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        animFrameRef.current = requestAnimationFrame(() => animateCurrentCircle(ctx2));
      }
    }

    function animateCurrentCircle(ctx3: CanvasRenderingContext2D) {
      drawCurrentCircle(ctx3, monthsLived);
      setTimeout(() => animateRemainingDissolve(ctx3), 800);
    }

    function animateRemainingDissolve(ctx3: CanvasRenderingContext2D) {
      const remainingIndices: number[] = [];
      for (let i = monthsLived + 1; i < totalMonths; i++) {
        remainingIndices.push(i);
      }
      for (let i = remainingIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingIndices[i], remainingIndices[j]] = [remainingIndices[j], remainingIndices[i]];
      }

      const DISSOLVE_DURATION = 2500;
      const startTime3 = performance.now();
      const total = remainingIndices.length;
      let lastRevealed = 0;

      function dissolveFrame(now: number) {
        const elapsed = now - startTime3;
        const p = Math.min(elapsed / DISSOLVE_DURATION, 1);
        const revealCount = Math.floor(p * total);

        for (let i = lastRevealed; i < revealCount; i++) {
          const idx = remainingIndices[i];
          if (idx === undefined) continue;
          drawRemainingCircle(ctx3, idx);
        }
        lastRevealed = revealCount;

        if (p < 1) {
          animFrameRef.current = requestAnimationFrame(dissolveFrame);
        } else {
          setStatsVisible(true);
        }
      }

      animFrameRef.current = requestAnimationFrame(dissolveFrame);
    }

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [
    COLS,
    ROWS,
    RADIUS,
    monthsLived,
    totalMonths,
    hasStarted,
    drawCurrentCircle,
    drawLivedCircle,
    drawRemainingCircle,
    getCenter,
  ]);

  return (
    <section style={{ width: '100%' }}>
      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1612',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        Your Life in Months
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9a8f7a',
          textAlign: 'center',
          marginBottom: '24px',
          lineHeight: 1.6,
        }}
      >
        Each circle is one month of your life. The golden ones are already gone. What will you do
        with the rest?
      </p>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            display: 'block',
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            width: canvasWidth,
            height: canvasHeight,
            marginBottom: `${canvasHeight * (scale - 1)}px`,
          }}
        />
      </div>

      {statsVisible ? (
        <div
          style={{
            marginTop: '24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <p style={{ fontSize: '14px', color: '#9a8f7a', margin: 0 }}>
            You have lived{' '}
            <strong style={{ color: '#4a3f2f' }}>{monthsLived.toLocaleString()} months</strong> —
            approximately{' '}
            <strong style={{ color: '#4a3f2f' }}>{weeksLived.toLocaleString()} weeks</strong>.
          </p>
          <p style={{ fontSize: '14px', color: '#9a8f7a', margin: 0 }}>
            Approximately{' '}
            <strong style={{ color: '#c9a84c' }}>{weeksRemaining.toLocaleString()} weeks</strong>{' '}
            remain. Make them count.
          </p>
        </div>
      ) : null}
    </section>
  );
}
