import { Info } from 'lucide-react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

export type HealthResourceKind =
  | 'smoking'
  | 'exercise'
  | 'alcohol'
  | 'sleep'
  | 'stress'
  | 'diet'
  | 'bmi_overweight'
  | 'bmi_obese';

const RESOURCES: Record<
  HealthResourceKind,
  {
    headline: string;
    description: string;
    url: string;
    linkText: string;
  }
> = {
  smoking: {
    headline: 'Ready to reclaim those years?',
    description: 'Smokefree.gov has free tools, apps, and coaching — no judgment, just support.',
    url: 'https://smokefree.gov',
    linkText: 'Visit Smokefree.gov →',
  },
  exercise: {
    headline: '22 minutes a day changes everything.',
    description: 'The Move Your Way tool builds a simple plan around your actual life.',
    url: 'https://health.gov/moveyourway',
    linkText: 'Build your plan →',
  },
  alcohol: {
    headline: 'Curious about cutting back?',
    description: 'The NIAAA Rethinking Drinking guide is free, private, and judgment-free.',
    url: 'https://www.rethinkingdrinking.niaaa.nih.gov',
    linkText: 'Explore the guide →',
  },
  sleep: {
    headline: 'Better sleep might be simpler than you think.',
    description: "The CDC's sleep hygiene guide covers the highest-impact changes first.",
    url: 'https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html',
    linkText: 'Read the guide →',
  },
  stress: {
    headline: 'Stress shortens telomeres. You can reverse that.',
    description: 'MindTools has free, evidence-based stress management techniques.',
    url: 'https://www.mindtools.com/pages/article/newTCS_00.htm',
    linkText: 'Explore techniques →',
  },
  diet: {
    headline: 'Small diet changes compound over years.',
    description: 'The Dietary Guidelines for Americans is free and surprisingly readable.',
    url: 'https://www.dietaryguidelines.gov',
    linkText: 'Read the guidelines →',
  },
  bmi_overweight: {
    headline: 'Even small changes move the number.',
    description: "The CDC's Healthy Weight guide focuses on sustainable habits, not crash diets.",
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Explore healthy weight →',
  },
  bmi_obese: {
    headline: 'Your choices today shape your decades ahead.',
    description: "The CDC's Healthy Weight guide focuses on sustainable habits, not crash diets.",
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Explore healthy weight →',
  },
};

export default function HealthResource({
  kind,
  show,
}: {
  kind: HealthResourceKind;
  show: boolean;
}) {
  const r = RESOURCES[kind];
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [shiftX, setShiftX] = useState(0);

  const isShown = show;

  useEffect(() => {
    if (!isShown) setOpen(false);
  }, [isShown]);

  useEffect(() => {
    if (!open) return;
    function onDocPointerDown(e: MouseEvent | TouchEvent) {
      const a = anchorRef.current;
      if (!a) return;
      if (e.target instanceof Node && !a.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocPointerDown, true);
    document.addEventListener('touchstart', onDocPointerDown, true);
    return () => {
      document.removeEventListener('mousedown', onDocPointerDown, true);
      document.removeEventListener('touchstart', onDocPointerDown, true);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return;
    const tip = tipRef.current;
    if (!tip) return;
    const rect = tip.getBoundingClientRect();
    const pad = 8;
    let dx = 0;
    if (rect.left < pad) dx = pad - rect.left;
    if (rect.right > window.innerWidth - pad) dx = (window.innerWidth - pad) - rect.right;
    setShiftX(dx);
  }, [open]);

  const wrap: CSSProperties = useMemo(
    () => ({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      opacity: isShown ? 1 : 0,
      transition: 'opacity 200ms ease',
      pointerEvents: isShown ? 'auto' : 'none',
    }),
    [isShown]
  );

  const iconBtn: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
    borderRadius: 999,
    border: 'none',
    background: 'transparent',
    padding: 0,
    cursor: 'pointer',
  };

  const tooltip: CSSProperties = {
    position: 'absolute',
    zIndex: 50,
    top: '22px',
    left: '50%',
    transform: `translateX(calc(-50% + ${shiftX}px))`,
    width: 'max-content',
    maxWidth: 280,
    background: '#1a1a1a',
    border: '1px solid #f59e0b',
    borderRadius: 12,
    padding: '10px 12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.28)',
    opacity: open ? 1 : 0,
    transition: 'opacity 150ms ease',
    pointerEvents: open ? 'auto' : 'none',
    color: '#f5f5f5',
    textAlign: 'left',
  };

  return (
    <span
      ref={anchorRef}
      style={wrap}
      aria-hidden={!isShown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label="Health resource"
        style={iconBtn}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <Info size={14} color="#fbbf24" aria-hidden />
      </button>

      <div ref={tipRef} style={tooltip} role="tooltip">
        <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>
          {r.headline}
        </div>
        <div style={{ fontSize: 12, opacity: 0.9, lineHeight: 1.4, marginBottom: 8 }}>
          {r.description}
        </div>
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 12, color: '#fbbf24', textDecoration: 'underline', fontWeight: 600 }}
        >
          {r.linkText}
        </a>
      </div>
    </span>
  );
}

