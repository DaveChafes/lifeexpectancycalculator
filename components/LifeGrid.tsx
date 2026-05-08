'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface LifeGridProps {
  birthDate: string;
  estimatedDeathAge: number;
}

function weeksSinceBirth(birthDate: string): number {
  const t0 = new Date(birthDate).getTime();
  if (!Number.isFinite(t0)) return 0;
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  return Math.max(0, Math.floor((Date.now() - t0) / weekMs));
}

export default function LifeGrid({ birthDate, estimatedDeathAge }: LifeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [weeksLivedDisplay, setWeeksLivedDisplay] = useState(0);
  const [weeksRemainingDisplay, setWeeksRemainingDisplay] = useState(0);

  const COLS = 52;
  const RADIUS = 5;
  const GAP = 6;
  const CELL = RADIUS * 2 + GAP;

  const totalWeeks = Math.round(estimatedDeathAge * 52);
  const ROWS = Math.ceil(totalWeeks / COLS);
  const weeksLivedRaw = useMemo(() => weeksSinceBirth(birthDate), [birthDate]);
  const weeksLived = Math.max(0, Math.min(weeksLivedRaw, totalWeeks));

  const COLOR_LIVED = '#c9a84c';
  const COLOR_CURRENT = '#1a1612';
  const COLOR_REMAINING_STROKE = '#d4c9b0';

  const canvasWidth = COLS * CELL;
  const canvasHeight = ROWS * CELL;

  const getCircleCenter = useCallback(
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

  const drawCircle = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      index: number,
      type: 'lived' | 'current' | 'remaining' | 'hidden',
      scale = 1
    ) => {
      if (type === 'hidden') return;
      const { x, y } = getCircleCenter(index);
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
      if (type === 'lived') {
        ctx.fillStyle = COLOR_LIVED;
        ctx.fill();
      } else if (type === 'current') {
        ctx.fillStyle = COLOR_CURRENT;
        ctx.fill();
      } else if (type === 'remaining') {
        ctx.strokeStyle = COLOR_REMAINING_STROKE;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();
    },
    [COLOR_CURRENT, COLOR_LIVED, COLOR_REMAINING_STROKE, RADIUS, getCircleCenter]
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  }, [canvasWidth, canvasHeight]);

  const animateRemainingDissolve = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const remainingIndices: number[] = [];
      for (let i = weeksLived + 1; i < totalWeeks; i++) {
        remainingIndices.push(i);
      }
      for (let i = remainingIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remainingIndices[i], remainingIndices[j]] = [remainingIndices[j], remainingIndices[i]];
      }

      const DISSOLVE_DURATION = 2000;
      const startTime = performance.now();
      const total = remainingIndices.length;
      let lastReveal = 0;

      function dissolveFrame(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DISSOLVE_DURATION, 1);
        const revealCount = Math.floor(progress * total);

        for (let i = lastReveal; i < revealCount; i++) {
          const idx = remainingIndices[i];
          if (idx === undefined) continue;
          drawCircle(ctx, idx, 'remaining');
        }
        lastReveal = revealCount;

        if (progress < 1) {
          requestAnimationFrame(dissolveFrame);
        } else {
          setWeeksRemainingDisplay(totalWeeks - weeksLived);
        }
      }

      requestAnimationFrame(dissolveFrame);
    },
    [drawCircle, totalWeeks, weeksLived]
  );

  const animateCurrentCircle = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const PULSE_DURATION = 2800;
      const startTime = performance.now();
      const { x, y } = getCircleCenter(weeksLived);

      function pulseFrame(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / PULSE_DURATION, 1);

        ctx.clearRect(x - RADIUS * 3, y - RADIUS * 3, RADIUS * 6, RADIUS * 6);

        let scale: number;
        if (progress < 0.3) {
          scale = 1 + (progress / 0.3) * 2;
        } else if (progress < 0.6) {
          scale = 3 - ((progress - 0.3) / 0.3) * 2;
        } else if (progress < 0.75) {
          scale = 1 + ((progress - 0.6) / 0.15) * 0.3;
        } else if (progress < 0.9) {
          scale = 1.3 - ((progress - 0.75) / 0.15) * 0.3;
        } else {
          scale = 1;
        }

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.arc(0, 0, RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = COLOR_CURRENT;
        ctx.fill();
        ctx.restore();

        if (progress < 1) {
          requestAnimationFrame(pulseFrame);
        } else {
          drawCircle(ctx, weeksLived, 'current');
          setWeeksLivedDisplay(weeksLived);
          setTimeout(() => animateRemainingDissolve(ctx), 1200);
        }
      }

      requestAnimationFrame(pulseFrame);
    },
    [
      COLOR_CURRENT,
      RADIUS,
      animateRemainingDissolve,
      drawCircle,
      getCircleCenter,
      weeksLived,
    ]
  );

  useEffect(() => {
    if (!hasStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasEl: HTMLCanvasElement = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const ctx2: CanvasRenderingContext2D = ctx;

    const WAVE_DURATION = 5000;
    const startTime = performance.now();

    function getWaveDelay(index: number): number {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      const waveFactor = (col + row * 0.3) / (COLS + ROWS * 0.3);
      return waveFactor * WAVE_DURATION * 0.8;
    }

    function animate(now: number) {
      const elapsed = now - startTime;
      ctx2.clearRect(0, 0, canvasEl.width, canvasEl.height);

      let allLivedDone = true;

      for (let i = 0; i < weeksLived; i++) {
        const delay = getWaveDelay(i);
        const progress = Math.max(0, Math.min(1, (elapsed - delay) / 300));

        if (progress < 1) allLivedDone = false;

        if (progress > 0) {
          const scale =
            progress < 0.5
              ? progress * 2
              : 1 + Math.sin((progress - 0.5) * Math.PI) * 0.15;
          drawCircle(ctx2, i, 'lived', scale);
        }
      }

      if (!allLivedDone) {
        requestAnimationFrame(animate);
      } else {
        animateCurrentCircle(ctx2);
      }
    }

    requestAnimationFrame(animate);
  }, [COLS, ROWS, animateCurrentCircle, drawCircle, hasStarted, weeksLived]);

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
        Your Life in Weeks
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
        Each circle is one week of your life. The golden ones are already gone. What will
        you do with the rest?
      </p>

      <div
        ref={containerRef}
        style={{
          width: '100%',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>

      {weeksLivedDisplay > 0 ? (
        <p
          style={{
            fontSize: '14px',
            color: '#9a8f7a',
            textAlign: 'center',
            marginTop: '16px',
          }}
        >
          You have lived {weeksLivedDisplay.toLocaleString()} weeks. Approximately{' '}
          {weeksRemainingDisplay.toLocaleString()} weeks remain.
        </p>
      ) : null}
    </section>
  );
}
