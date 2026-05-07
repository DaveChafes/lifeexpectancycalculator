'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState, type CSSProperties } from 'react';

export interface ComparisonChartProps {
  comparisons: { label: string; age: number; isUser: boolean }[];
  percentileVsPeers: number;
  sex: 'male' | 'female';
}

const ResponsiveContainer = dynamic(
  () => import('recharts').then((m) => m.ResponsiveContainer),
  { ssr: false }
);
const BarChart = dynamic(() => import('recharts').then((m) => m.BarChart), {
  ssr: false,
});
const Bar = dynamic(() => import('recharts').then((m) => m.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((m) => m.XAxis), {
  ssr: false,
});
const YAxis = dynamic(() => import('recharts').then((m) => m.YAxis), {
  ssr: false,
});
const Tooltip = dynamic(() => import('recharts').then((m) => m.Tooltip), {
  ssr: false,
});

type ComparisonRow = { name: string; age: number; isUser: boolean };

type BarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: ComparisonRow;
};

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value?: number }[];
}) {
  if (!active || !payload || payload.length === 0) return null;
  const v = payload[0]?.value;
  if (typeof v !== 'number') return null;
  return (
    <div
      style={{
        background: '#fffdf7',
        border: '1px solid #d4c9b0',
        borderRadius: '8px',
        padding: '10px 12px',
        color: '#1a1612',
        fontSize: '13px',
        boxShadow: '0 4px 16px rgba(26, 22, 18, 0.08)',
      }}
    >
      Est. age: {Math.round(v)}
    </div>
  );
}

export default function ComparisonChart({
  comparisons,
  percentileVsPeers,
  sex,
}: ComparisonChartProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 480px)');
    const sync = () => setIsMobile(mql.matches);
    sync();
    mql.addEventListener('change', sync);
    return () => mql.removeEventListener('change', sync);
  }, []);

  const data = useMemo(
    () =>
      comparisons.map((c) => ({
        name: c.label,
        age: c.age,
        isUser: c.isUser,
      })),
    [comparisons]
  );

  const headerStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#1a1612',
    textAlign: 'center',
    margin: 0,
    marginBottom: '16px',
  };

  const statBoxStyle: CSSProperties = {
    border: '1px solid #e8dfc8',
    borderRadius: '12px',
    background: '#fffdf7',
    padding: '16px 24px',
    textAlign: 'center',
    marginTop: '18px',
  };

  const line1Style: CSSProperties = {
    fontSize: '18px',
    color: '#4a3f2f',
    margin: 0,
    lineHeight: 1.35,
  };

  const pctStyle: CSSProperties = {
    color: '#c9a84c',
    fontSize: '24px',
    fontWeight: 700,
  };

  const line2Style: CSSProperties = {
    margin: 0,
    marginTop: '6px',
    fontSize: '14px',
    color: '#9a8f7a',
  };

  const peopleWord = sex === 'male' ? 'men' : 'women';
  const clampedPct = Math.min(100, Math.max(0, Math.round(percentileVsPeers)));

  return (
    <section style={{ width: '100%' }}>
      <h2 style={headerStyle}>How do you compare?</h2>

      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 6, right: 14, left: 4, bottom: 0 }}
          >
            <XAxis
              type="number"
              domain={[60, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9a8f7a', fontSize: isMobile ? 11 : 12 }}
            />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              width={isMobile ? 90 : 120}
              tick={{ fill: '#4a3f2f', fontSize: isMobile ? 11 : 13 }}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: 'rgba(232, 223, 200, 0.35)' }}
            />
            <Bar
              dataKey="age"
              isAnimationActive
              radius={4}
              fill="#e8dfc8"
              // Recharts supports per-bar fills via Cell; using a shape fn keeps this file light
              // and still meets the spec for user vs others color.
              shape={(props: BarShapeProps) => {
                const { x = 0, y = 0, width = 0, height = 0, payload } = props;
                const fill = payload?.isUser ? '#c9a84c' : '#e8dfc8';
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={4}
                    ry={4}
                    fill={fill}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={statBoxStyle}>
        <p style={line1Style}>
          You&apos;re on track to outlive{' '}
          <span style={pctStyle}>{clampedPct}%</span> of {peopleWord} your age
        </p>
        <p style={line2Style}>
          Your choices above can push that number higher.
        </p>
      </div>
    </section>
  );
}
