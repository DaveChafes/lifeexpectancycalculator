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

  const totalWeeks = Math.round(estimatedDeathAge * 52);
  const weeksLivedRaw = useMemo(() => weeksSinceBirth(birthDate), [birthDate]);
  const weeksLived = Math.max(0, Math.min(weeksLivedRaw, totalWeeks));

  const COLS = 52;
  const ROWS = Math.ceil(totalWeeks / COLS);
  const SQ = 10;
  const GAP = 2;
  const CELL = SQ + GAP;

  const COLOR_LIVED = '#c9a84c';
  const COLOR_CURRENT = '#1a1612';
  const COLOR_REMAINING = '#e8dfc8';
  const COLOR_BG = '#f7f2e8';

  const drawGrid = useCallback(
    (
      canvas: HTMLCanvasElement,
      revealedCount: number,
      showRemaining: boolean,
      showCurrent: boolean
    ) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = COLOR_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < totalWeeks; i++) {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const x = col * CELL;
        const y = row * CELL;

        if (i < revealedCount) {
          ctx.fillStyle = COLOR_LIVED;
          ctx.beginPath();
          ctx.roundRect(x, y, SQ, SQ, 2);
          ctx.fill();
        } else if (i === weeksLived && showCurrent) {
          ctx.fillStyle = COLOR_CURRENT;
          ctx.beginPath();
          ctx.roundRect(x, y, SQ, SQ, 2);
          ctx.fill();
        } else if (showRemaining) {
          ctx.fillStyle = COLOR_REMAINING;
          ctx.beginPath();
          ctx.roundRect(x, y, SQ, SQ, 2);
          ctx.fill();
        }
      }
    },
    [
      CELL,
      COLS,
      COLOR_BG,
      COLOR_CURRENT,
      COLOR_LIVED,
      COLOR_REMAINING,
      SQ,
      totalWeeks,
      weeksLived,
    ]
  );

  const animateRemainingDissolve = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx === null) return;
    const ctx2: CanvasRenderingContext2D = ctx;

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
        const col = idx % COLS;
        const row = Math.floor(idx / COLS);
        ctx2.fillStyle = COLOR_REMAINING;
        ctx2.beginPath();
        ctx2.roundRect(col * CELL, row * CELL, SQ, SQ, 2);
        ctx2.fill();
      }
      lastReveal = revealCount;

      if (progress < 1) {
        requestAnimationFrame(dissolveFrame);
      } else {
        setWeeksRemainingDisplay(Math.max(0, totalWeeks - weeksLived));
      }
    }

    requestAnimationFrame(dissolveFrame);
  }, [CELL, COLS, COLOR_REMAINING, SQ, totalWeeks, weeksLived]);

  const animateCurrentSquare = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const col = weeksLived % COLS;
    const row = Math.floor(weeksLived / COLS);
    const cx = col * CELL + SQ / 2;
    const cy = row * CELL + SQ / 2;
    const startTime = performance.now();
    const SPIN_DURATION = 2800;

    function spinFrame(now: number) {
      const ctx2 = canvasRef.current?.getContext('2d');
      if (!ctx2) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SPIN_DURATION, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      const scale =
        progress < 0.5
          ? 1 + 1.5 * (progress / 0.5)
          : 2.5 - 1.5 * ((progress - 0.5) / 0.5);

      const rotation = eased * Math.PI * 2;

      const buffer = SQ * 3;
      ctx2.clearRect(cx - buffer, cy - buffer, buffer * 2, buffer * 2);

      for (let di = -2; di <= 2; di++) {
        for (let dj = -2; dj <= 2; dj++) {
          const ni = row + di;
          const nj = col + dj;
          const idx = ni * COLS + nj;
          if (idx >= 0 && idx < totalWeeks && idx !== weeksLived) {
            const nx = nj * CELL;
            const ny = ni * CELL;
            if (idx < weeksLived) {
              ctx2.fillStyle = COLOR_LIVED;
              ctx2.beginPath();
              ctx2.roundRect(nx, ny, SQ, SQ, 2);
              ctx2.fill();
            }
          }
        }
      }

      ctx2.save();
      ctx2.translate(cx, cy);
      ctx2.rotate(rotation);
      ctx2.scale(scale, scale);
      ctx2.fillStyle = COLOR_CURRENT;
      ctx2.beginPath();
      ctx2.roundRect(-SQ / 2, -SQ / 2, SQ, SQ, 2);
      ctx2.fill();
      ctx2.restore();

      if (progress < 1) {
        requestAnimationFrame(spinFrame);
      } else {
        ctx2.fillStyle = COLOR_CURRENT;
        ctx2.beginPath();
        ctx2.roundRect(col * CELL, row * CELL, SQ, SQ, 2);
        ctx2.fill();
        setWeeksLivedDisplay(weeksLived);
        setTimeout(() => animateRemainingDissolve(), 1200);
      }
    }

    requestAnimationFrame(spinFrame);
  }, [
    CELL,
    COLS,
    COLOR_CURRENT,
    COLOR_LIVED,
    SQ,
    animateRemainingDissolve,
    totalWeeks,
    weeksLived,
  ]);

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
    canvas.width = COLS * CELL;
    canvas.height = ROWS * CELL;
    drawGrid(canvas, 0, false, false);
  }, [COLS, CELL, ROWS, drawGrid]);

  useEffect(() => {
    if (!hasStarted) return;
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const canvasEl: HTMLCanvasElement = canvas;

    const DURATION = 5000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const revealedCount = Math.floor(progress * weeksLived);

      drawGrid(canvasEl, revealedCount, false, false);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        drawGrid(canvasEl, weeksLived, false, false);
        animateCurrentSquare();
      }
    }

    requestAnimationFrame(animate);
  }, [hasStarted, weeksLived, totalWeeks, drawGrid, animateCurrentSquare]);

  const canvasWidth = COLS * CELL;
  const canvasHeight = ROWS * CELL;

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
        }}
      >
        Each square is one week of your life. The golden ones are already gone. What will
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
