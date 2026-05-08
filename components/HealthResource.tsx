import type { CSSProperties } from 'react';

export type HealthResourceKind =
  | 'smoking'
  | 'exercise'
  | 'alcohol'
  | 'sleep'
  | 'stress'
  | 'diet'
  | 'bmi_underweight'
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
    description: 'Free tools, apps, and coaching — no judgment, just support.',
    url: 'https://smokefree.gov',
    linkText: 'Visit Smokefree.gov →',
  },
  exercise: {
    headline: '22 minutes a day changes everything.',
    description: 'Build a simple plan around your actual life.',
    url: 'https://health.gov/moveyourway',
    linkText: 'Build your plan →',
  },
  alcohol: {
    headline: 'Curious about cutting back?',
    description: 'Free, private, and judgment-free guidance.',
    url: 'https://www.rethinkingdrinking.niaaa.nih.gov',
    linkText: 'Explore the guide →',
  },
  sleep: {
    headline: 'Better sleep might be simpler than you think.',
    description: 'The highest-impact changes, explained clearly.',
    url: 'https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html',
    linkText: 'Read the guide →',
  },
  stress: {
    headline: 'Stress shortens telomeres. You can reverse that.',
    description: 'Evidence-based techniques, free to use.',
    url: 'https://www.mindtools.com/pages/article/newTCS_00.htm',
    linkText: 'Explore techniques →',
  },
  diet: {
    headline: 'Small diet changes compound over years.',
    description: 'Practical guidance, not a crash diet.',
    url: 'https://www.dietaryguidelines.gov',
    linkText: 'Read the guidelines →',
  },
  bmi_underweight: {
    headline: 'Being underweight carries real health risks too.',
    description: 'Sustainable habits for reaching a healthy weight.',
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Learn more →',
  },
  bmi_overweight: {
    headline: 'Even small changes move the number.',
    description: 'Sustainable habits, not crash diets.',
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Explore healthy weight →',
  },
  bmi_obese: {
    headline: 'Your choices today shape your decades ahead.',
    description: 'Sustainable habits for lasting change.',
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
  const wrap: CSSProperties = {
    width: '100%',
    maxWidth: 400,
    opacity: show ? 1 : 0,
    transition: show
      ? 'opacity 350ms ease-out, max-height 350ms ease-out, margin-top 350ms ease-out'
      : 'opacity 250ms ease-in, max-height 250ms ease-in, margin-top 250ms ease-in',
    maxHeight: show ? 120 : 0,
    overflow: 'hidden',
    marginTop: show ? 10 : 0,
    pointerEvents: show ? 'auto' : 'none',
  };

  const card: CSSProperties = {
    background: '#1a1a1a',
    borderLeft: '3px solid #f59e0b',
    padding: '8px 12px',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  };

  return (
    <div style={wrap} aria-hidden={!show}>
      <div style={card}>
        <div style={{ fontSize: 14, color: '#ffffff', fontWeight: 500, lineHeight: 1.35 }}>
          {r.headline}
        </div>
        <div style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.4, marginTop: 2 }}>
          {r.description}
        </div>
        <a
          href={r.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12,
            color: '#fbbf24',
            textDecoration: 'underline',
            fontWeight: 600,
            display: 'inline-block',
            marginTop: 4,
          }}
        >
          {r.linkText}
        </a>
      </div>
    </div>
  );
}

