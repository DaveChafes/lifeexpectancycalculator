'use client';

import {
  applyLifestyleModifiers,
  type LifestyleModifiers,
} from '@/lib/modifiers';
import {
  Apple,
  Brain,
  CigaretteOff,
  Dumbbell,
  Moon,
  Scale,
  Wine,
} from 'lucide-react';
import HealthResource, { type HealthResourceKind } from '@/components/HealthResource';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import Link from 'next/link';

export interface SlidersProps {
  baseDeathAge: number;
  onModifiersChange: (
    adjustedDeathAge: number,
    breakdown: { factor: string; years: number }[]
  ) => void;
}

const DEFAULT_MODIFIERS: LifestyleModifiers = {
  smoking: 'none',
  bmi: 22,
  exercise: 'light',
  alcohol: 'light',
  sleep: 'ok',
  stress: 'medium',
  diet: 'average',
};

const ICON_COLOR = '#6b5e4e';

function weeksFromYears(years: number): number {
  return Math.round(years * 52);
}

function DeltaBadge({
  yearsDelta,
  visible,
}: {
  yearsDelta: number;
  visible: boolean;
}) {
  if (!visible) return <span className="sliders-badge-spacer" style={{ width: 100, flexShrink: 0 }} />;
  const positive = yearsDelta > 0;
  const wks = weeksFromYears(yearsDelta);
  const yPart = `${yearsDelta > 0 ? '+' : ''}${yearsDelta} yrs`;
  const wPart = `${yearsDelta > 0 ? '+' : ''}${wks} wks`;

  const style: CSSProperties = {
    flexShrink: 0,
    width: 100,
    textAlign: 'right',
    borderRadius: '999px',
    padding: '4px 10px',
    fontSize: '12px',
    fontWeight: 600,
    backgroundColor: positive ? '#d4edda' : '#fde8e8',
    color: positive ? '#1a5c2a' : '#7a1a1a',
    display: 'inline-block',
    animation: 'sliders-badge-pop 0.2s ease forwards',
    transformOrigin: 'center right',
    whiteSpace: 'nowrap',
  };

  return (
    <span style={style} className="sliders-delta-badge">
      {yPart} · {wPart}
    </span>
  );
}

function ToggleGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const wrap: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    alignItems: 'center',
  };

  return (
    <div style={wrap}>
      {options.map((opt) => {
        const sel = opt.value === value;
        const btn: CSSProperties = {
          height: '34px',
          padding: '0 14px',
          borderRadius: '999px',
          fontSize: '13px',
          border: sel ? '1px solid #c9a84c' : '1px solid #d4c9b0',
          backgroundColor: sel ? '#c9a84c' : 'transparent',
          color: sel ? '#1a1200' : '#6b5e4e',
          fontWeight: sel ? 600 : 400,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          fontFamily: 'inherit',
        };
        return (
          <button
            key={opt.value}
            type="button"
            style={btn}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

type BmiUnit = 'imperial' | 'metric';

function clampBmi(n: number): number {
  return Math.min(45, Math.max(15, n));
}

function roundBmi1(n: number): number {
  return Math.round(n * 10) / 10;
}

function bmiFromImperial(ft: number, inches: number, lbs: number): number {
  const totalIn = ft * 12 + inches;
  if (totalIn <= 0) return 22;
  return clampBmi(roundBmi1((lbs * 703) / (totalIn * totalIn)));
}

function bmiFromMetric(cm: number, kg: number): number {
  const m = cm / 100;
  if (m <= 0) return 22;
  return clampBmi(roundBmi1(kg / (m * m)));
}

function categoryForBmi(bmi: number): { label: string; color: string } {
  if (bmi < 18.5) return { label: 'Underweight', color: '#7a5c1a' };
  if (bmi < 25) return { label: 'Healthy weight', color: '#1a5c2a' };
  if (bmi < 30) return { label: 'Overweight', color: '#7a4e1a' };
  if (bmi < 35) return { label: 'Obese (Class I)', color: '#7a1a1a' };
  if (bmi < 40) return { label: 'Obese (Class II)', color: '#7a1a1a' };
  return { label: 'Obese (Class III)', color: '#7a1a1a' };
}

function clampInt(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

const BMI_MARKERS: { value: number; label: string }[] = [
  { value: 18.5, label: 'Underweight' },
  { value: 22, label: 'Healthy' },
  { value: 30, label: 'Overweight' },
  { value: 35, label: 'Obese' },
];

function BmiSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const min = 15;
  const max = 45;

  const trackWrap: CSSProperties = {
    position: 'relative',
    width: '100%',
    paddingBottom: '28px',
  };

  const labelsRow: CSSProperties = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '22px',
    pointerEvents: 'none',
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <input
          type="range"
          min={min}
          max={max}
          step={0.5}
          value={value}
          onChange={(e) => onChange(Number.parseFloat(e.target.value))}
          className="sliders-bmi-range"
          style={{
            flex: 1,
            height: '8px',
            accentColor: '#c9a84c',
          }}
        />
        <span style={{ fontSize: '14px', fontWeight: 600, color: '#4a3f2f', minWidth: '40px' }}>
          {value}
        </span>
      </div>
      <div style={trackWrap}>
        <div style={labelsRow}>
          {BMI_MARKERS.map((m) => {
            const leftPct = ((m.value - min) / (max - min)) * 100;
            return (
              <span
                key={m.label}
                style={{
                  position: 'absolute',
                  left: `${leftPct}%`,
                  transform: 'translateX(-50%)',
                  fontSize: '10px',
                  color: '#6b5e4e',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                {m.label}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const BMI_INPUT_BASE: CSSProperties = {
  height: 36,
  border: '1px solid #d4c9b0',
  borderRadius: 8,
  fontSize: 14,
  color: '#4a3f2f',
  background: '#fffdf7',
  padding: '0 10px',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
};

function unitPillStyle(selected: boolean): CSSProperties {
  return {
    height: '34px',
    padding: '0 14px',
    borderRadius: '999px',
    fontSize: '13px',
    border: selected ? '1px solid #c9a84c' : '1px solid #d4c9b0',
    backgroundColor: selected ? '#c9a84c' : 'transparent',
    color: selected ? '#1a1200' : '#6b5e4e',
    fontWeight: selected ? 600 : 400,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    fontFamily: 'inherit',
  };
}

export default function Sliders({ baseDeathAge, onModifiersChange }: SlidersProps) {
  const [modifiers, setModifiers] = useState<LifestyleModifiers>(DEFAULT_MODIFIERS);
  const [shownRows, setShownRows] = useState(0);
  const [bmiUnit, setBmiUnit] = useState<BmiUnit>('imperial');
  const [impFt, setImpFt] = useState(5);
  const [impIn, setImpIn] = useState(10);
  const [impLbs, setImpLbs] = useState(154);
  const [metCm, setMetCm] = useState(() => Math.round(70 * 2.54));
  const [metKg, setMetKg] = useState(() => Math.round(154 * 0.45359237));

  const defaultBreakdown = useMemo(
    () => applyLifestyleModifiers(baseDeathAge, DEFAULT_MODIFIERS).breakdown,
    [baseDeathAge]
  );

  useEffect(() => {
    const { adjustedDeathAge, breakdown } = applyLifestyleModifiers(
      baseDeathAge,
      modifiers
    );
    onModifiersChange(adjustedDeathAge, breakdown);
  }, [baseDeathAge, modifiers, onModifiersChange]);

  useEffect(() => {
    const ids: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 7; i++) {
      ids.push(setTimeout(() => setShownRows((s) => Math.max(s, i + 1)), i * 60));
    }
    return () => ids.forEach(clearTimeout);
  }, []);

  const patch = useCallback((p: Partial<LifestyleModifiers>) => {
    setModifiers((m) => ({ ...m, ...p }));
  }, []);

  useEffect(() => {
    const next =
      bmiUnit === 'imperial'
        ? bmiFromImperial(impFt, impIn, impLbs)
        : bmiFromMetric(metCm, metKg);
    setModifiers((m) => (Math.abs(m.bmi - next) < 0.0001 ? m : { ...m, bmi: next }));
  }, [bmiUnit, impFt, impIn, impLbs, metCm, metKg]);

  function yearsDiffForFactor(factor: string, currentYears: number): boolean {
    const base = defaultBreakdown.find((b) => b.factor === factor)?.years ?? 0;
    return currentYears !== base;
  }

  const rowOpacity = (index: number) => ({
    opacity: shownRows > index ? 1 : 0,
    transition: 'opacity 0.22s ease',
  });

  const rowBase = (index: number, last: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 0',
    borderBottom: last ? 'none' : '1px solid #e8dfc8',
    ...rowOpacity(index),
  });

  const labelCol: CSSProperties = {
    flexShrink: 0,
    width: 140,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const labelText: CSSProperties = {
    fontSize: '14px',
    color: '#4a3f2f',
    fontWeight: 500,
  };

  const centerCol: CSSProperties = {
    flex: 1,
    minWidth: 0,
  };

  const headerStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#1a1612',
    textAlign: 'center',
    marginBottom: '8px',
    marginTop: 0,
  };

  const subStyle: CSSProperties = {
    fontSize: '15px',
    color: '#6b5e4e',
    textAlign: 'center',
    marginBottom: '40px',
    marginTop: 0,
  };

  const breakdown = useMemo(
    () => applyLifestyleModifiers(baseDeathAge, modifiers).breakdown,
    [baseDeathAge, modifiers]
  );

  function bdYears(name: string): number {
    return breakdown.find((b) => b.factor === name)?.years ?? 0;
  }

  const smokingOpts = [
    { value: 'none' as const, label: 'None' },
    { value: 'occasional' as const, label: 'Occasional' },
    { value: 'daily' as const, label: 'Daily' },
  ];

  const exerciseOpts = [
    { value: 'sedentary' as const, label: 'Sedentary' },
    { value: 'light' as const, label: 'Light' },
    { value: 'active' as const, label: 'Active' },
    { value: 'very_active' as const, label: 'Very Active' },
  ];

  const alcoholOpts = [
    { value: 'none' as const, label: 'None' },
    { value: 'light' as const, label: 'Light' },
    { value: 'moderate' as const, label: 'Moderate' },
    { value: 'heavy' as const, label: 'Heavy' },
  ];

  const sleepOpts = [
    { value: 'poor' as const, label: 'Under 6hrs' },
    { value: 'ok' as const, label: '6-8hrs' },
    { value: 'good' as const, label: '8+hrs' },
  ];

  const stressOpts = [
    { value: 'low' as const, label: 'Low' },
    { value: 'medium' as const, label: 'Medium' },
    { value: 'high' as const, label: 'High' },
  ];

  const dietOpts = [
    { value: 'poor' as const, label: 'Poor' },
    { value: 'average' as const, label: 'Average' },
    { value: 'good' as const, label: 'Good' },
  ];

  const handleBmiUnitChange = useCallback(
    (next: BmiUnit) => {
      if (next === bmiUnit) return;
      if (next === 'metric') {
        const totalIn = impFt * 12 + impIn;
        setMetCm(Math.round(totalIn * 2.54));
        setMetKg(Math.round(impLbs * 0.45359237));
      } else {
        const totalIn = metCm / 2.54;
        let ft = Math.floor(totalIn / 12);
        let inch = Math.round(totalIn - ft * 12);
        while (inch >= 12) {
          ft += 1;
          inch -= 12;
        }
        while (inch < 0 && ft > 0) {
          ft -= 1;
          inch += 12;
        }
        setImpFt(clampInt(ft, 4, 7));
        setImpIn(clampInt(inch, 0, 11));
        setImpLbs(clampInt(Math.round(metKg / 0.45359237), 60, 500));
      }
      setBmiUnit(next);
    },
    [bmiUnit, impFt, impIn, impLbs, metCm, metKg]
  );

  const bmiCat = categoryForBmi(modifiers.bmi);

  const rows: {
    icon: ReactNode;
    label: string;
    factor: string;
    center: ReactNode;
    resource?: { kind: HealthResourceKind; show: boolean };
  }[] = [
    {
      icon: <CigaretteOff size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Smoking',
      factor: 'Smoking',
      center: (
        <ToggleGroup
          options={smokingOpts}
          value={modifiers.smoking}
          onChange={(v) => patch({ smoking: v })}
        />
      ),
      resource: {
        kind: 'smoking',
        show: modifiers.smoking === 'occasional' || modifiers.smoking === 'daily',
      },
    },
    {
      icon: <Scale size={18} color={ICON_COLOR} aria-hidden />,
      label: 'BMI',
      factor: 'BMI',
      center: (
        <div style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              marginBottom: 8,
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
              <button
                type="button"
                style={unitPillStyle(bmiUnit === 'imperial')}
                onClick={() => handleBmiUnitChange('imperial')}
              >
                Imperial
              </button>
              <button
                type="button"
                style={unitPillStyle(bmiUnit === 'metric')}
                onClick={() => handleBmiUnitChange('metric')}
              >
                Metric
              </button>
            </div>
          </div>

          <div
            className="bmi-hw-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginBottom: 8,
              alignItems: 'flex-end',
            }}
          >
            {bmiUnit === 'imperial' ? (
              <>
                <div
                  className="bmi-hw-field"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: '#4a3f2f', fontWeight: 500 }}>Height:</span>
                  <input
                    type="number"
                    min={4}
                    max={7}
                    className="bmi-num-input"
                    style={{ ...BMI_INPUT_BASE, width: 56 }}
                    value={impFt}
                    onChange={(e) => {
                      const v = Number.parseInt(e.target.value, 10);
                      setImpFt(clampInt(Number.isNaN(v) ? 4 : v, 4, 7));
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#6b5e4e' }}>ft</span>
                  <input
                    type="number"
                    min={0}
                    max={11}
                    className="bmi-num-input"
                    style={{ ...BMI_INPUT_BASE, width: 56 }}
                    value={impIn}
                    onChange={(e) => {
                      const v = Number.parseInt(e.target.value, 10);
                      setImpIn(clampInt(Number.isNaN(v) ? 0 : v, 0, 11));
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#6b5e4e' }}>in</span>
                </div>
                <div
                  className="bmi-hw-field"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: '#4a3f2f', fontWeight: 500 }}>Weight:</span>
                  <input
                    type="number"
                    min={60}
                    max={500}
                    className="bmi-num-input"
                    style={{ ...BMI_INPUT_BASE, width: 72 }}
                    value={impLbs}
                    onChange={(e) => {
                      const v = Number.parseInt(e.target.value, 10);
                      setImpLbs(clampInt(Number.isNaN(v) ? 60 : v, 60, 500));
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#6b5e4e' }}>lbs</span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="bmi-hw-field"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: '#4a3f2f', fontWeight: 500 }}>Height:</span>
                  <input
                    type="number"
                    min={120}
                    max={220}
                    className="bmi-num-input"
                    style={{ ...BMI_INPUT_BASE, width: 72 }}
                    value={metCm}
                    onChange={(e) => {
                      const v = Number.parseInt(e.target.value, 10);
                      setMetCm(clampInt(Number.isNaN(v) ? 120 : v, 120, 220));
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#6b5e4e' }}>cm</span>
                </div>
                <div
                  className="bmi-hw-field"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14, color: '#4a3f2f', fontWeight: 500 }}>Weight:</span>
                  <input
                    type="number"
                    min={30}
                    max={250}
                    className="bmi-num-input"
                    style={{ ...BMI_INPUT_BASE, width: 72 }}
                    value={metKg}
                    onChange={(e) => {
                      const v = Number.parseInt(e.target.value, 10);
                      setMetKg(clampInt(Number.isNaN(v) ? 30 : v, 30, 250));
                    }}
                  />
                  <span style={{ fontSize: 12, color: '#6b5e4e' }}>kg</span>
                </div>
              </>
            )}
          </div>

          <div style={{ fontSize: 13, color: '#6b5e4e', marginBottom: 8 }}>
            Calculated BMI: {modifiers.bmi.toFixed(1)} —{' '}
            <span style={{ color: bmiCat.color, fontWeight: 600 }}>{bmiCat.label}</span>
          </div>

          <BmiSlider value={modifiers.bmi} onChange={(v) => patch({ bmi: v })} />
        </div>
      ),
      resource:
        modifiers.bmi < 18.5
          ? { kind: 'bmi_underweight', show: true }
          : modifiers.bmi > 34.9
            ? { kind: 'bmi_obese', show: true }
            : modifiers.bmi > 29.9
              ? { kind: 'bmi_overweight', show: true }
              : { kind: 'bmi_overweight', show: false },
    },
    {
      icon: <Dumbbell size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Exercise',
      factor: 'Exercise',
      center: (
        <ToggleGroup
          options={exerciseOpts}
          value={modifiers.exercise}
          onChange={(v) => patch({ exercise: v })}
        />
      ),
      resource: { kind: 'exercise', show: modifiers.exercise === 'sedentary' },
    },
    {
      icon: <Wine size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Alcohol',
      factor: 'Alcohol',
      center: (
        <ToggleGroup
          options={alcoholOpts}
          value={modifiers.alcohol}
          onChange={(v) => patch({ alcohol: v })}
        />
      ),
      resource: { kind: 'alcohol', show: modifiers.alcohol === 'heavy' },
    },
    {
      icon: <Moon size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Sleep',
      factor: 'Sleep',
      center: (
        <ToggleGroup
          options={sleepOpts}
          value={modifiers.sleep}
          onChange={(v) => patch({ sleep: v })}
        />
      ),
      resource: { kind: 'sleep', show: modifiers.sleep === 'poor' },
    },
    {
      icon: <Brain size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Stress',
      factor: 'Stress',
      center: (
        <ToggleGroup
          options={stressOpts}
          value={modifiers.stress}
          onChange={(v) => patch({ stress: v })}
        />
      ),
      resource: { kind: 'stress', show: modifiers.stress === 'high' },
    },
    {
      icon: <Apple size={18} color={ICON_COLOR} aria-hidden />,
      label: 'Diet',
      factor: 'Diet',
      center: (
        <ToggleGroup
          options={dietOpts}
          value={modifiers.diet}
          onChange={(v) => patch({ diet: v })}
        />
      ),
      resource: { kind: 'diet', show: modifiers.diet === 'poor' },
    },
  ];

  return (
    <>
      <style>{`
        @keyframes sliders-badge-pop {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        .sliders-bmi-range {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          background: transparent;
        }
        .sliders-bmi-range::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 999px;
          background: #e8dfc8;
        }
        .sliders-bmi-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #c9a84c;
          margin-top: -6px;
          border: 2px solid #fffdf7;
          box-shadow: 0 1px 4px rgba(26, 22, 18, 0.15);
        }
        .sliders-bmi-range::-moz-range-track {
          height: 6px;
          border-radius: 999px;
          background: #e8dfc8;
        }
        .sliders-bmi-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #c9a84c;
          border: 2px solid #fffdf7;
          box-shadow: 0 1px 4px rgba(26, 22, 18, 0.15);
        }

        .bmi-num-input:focus {
          outline: 2px solid #c9a84c;
          outline-offset: 2px;
        }
        .sliders-row-bmi {
          align-items: flex-start;
        }
        .sliders-row-bmi .sliders-badge-col {
          align-items: flex-start;
          padding-top: 4px;
        }

        @media (max-width: 480px) {
          .bmi-hw-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .bmi-hw-field {
            width: 100% !important;
          }
          .sliders-row {
            flex-wrap: wrap;
            gap: 10px;
          }
          .sliders-resource-row {
            gap: 10px !important;
          }
          .sliders-resource-spacer,
          .sliders-resource-right-spacer {
            display: none !important;
          }
          .sliders-label-col {
            width: 100px !important;
          }
          .sliders-badge-col {
            width: 100% !important;
            justify-content: flex-start !important;
            text-align: left !important;
            margin-top: 6px;
            order: 3;
          }
          .sliders-badge-spacer {
            display: none;
          }
          .sliders-delta-badge {
            transform-origin: left center !important;
          }
        }
        @media (max-width: 360px) {
          .sliders-label-col {
            width: 100% !important;
          }
        }
      `}</style>

      <section style={{ width: '100%' }}>
        <h2 style={headerStyle}>See how your choices protect your time</h2>
        <p
          style={{
            fontSize: 13,
            color: '#6b5e4e',
            textAlign: 'center',
            marginTop: 0,
            marginBottom: 16,
            lineHeight: 1.6,
          }}
        >
          Modifier values based on peer-reviewed longitudinal research.{' '}
          <Link
            href="/methodology"
            style={{
              color: '#c9a84c',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            See our methodology →
          </Link>
        </p>
        <p style={subStyle}>
          Every change updates your estimated lifespan in real time.
        </p>

        <div>
          {rows.map((row, index) => {
            const y = bdYears(row.factor);
            const showBadge = yearsDiffForFactor(row.factor, y);
            const last = index === rows.length - 1;
            return (
              <div key={row.factor}>
                <div
                  style={rowBase(index, last)}
                  className={row.factor === 'BMI' ? 'sliders-row sliders-row-bmi' : 'sliders-row'}
                >
                  <div style={labelCol} className="sliders-label-col">
                    {row.icon}
                    <span style={labelText}>{row.label}</span>
                  </div>
                  <div style={centerCol}>{row.center}</div>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 100,
                      textAlign: 'right',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                    className="sliders-badge-col"
                  >
                    <DeltaBadge yearsDelta={y} visible={showBadge} />
                  </div>
                </div>
                {row.resource && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '16px',
                      paddingBottom: last ? 0 : 16,
                      ...rowOpacity(index),
                    }}
                    className="sliders-resource-row"
                  >
                    <div
                      style={{ ...labelCol, opacity: 0 }}
                      aria-hidden
                      className="sliders-resource-spacer"
                    />
                    <div style={centerCol}>
                      <HealthResource kind={row.resource.kind} show={row.resource.show} />
                    </div>
                    <div
                      style={{ width: 100, flexShrink: 0 }}
                      aria-hidden
                      className="sliders-resource-right-spacer"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
