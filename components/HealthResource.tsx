import { ExternalLink, Heart } from 'lucide-react';
import type { CSSProperties } from 'react';

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
    icon: 'heart' | 'external';
  }
> = {
  smoking: {
    headline: 'Ready to reclaim those years?',
    description: 'Smokefree.gov has free tools, apps, and coaching — no judgment, just support.',
    url: 'https://smokefree.gov',
    linkText: 'Visit Smokefree.gov →',
    icon: 'heart',
  },
  exercise: {
    headline: '22 minutes a day changes everything.',
    description: 'The Move Your Way tool builds a simple plan around your actual life.',
    url: 'https://health.gov/moveyourway',
    linkText: 'Build your plan →',
    icon: 'external',
  },
  alcohol: {
    headline: 'Curious about cutting back?',
    description: 'The NIAAA Rethinking Drinking guide is free, private, and judgment-free.',
    url: 'https://www.rethinkingdrinking.niaaa.nih.gov',
    linkText: 'Explore the guide →',
    icon: 'external',
  },
  sleep: {
    headline: 'Better sleep might be simpler than you think.',
    description: "The CDC's sleep hygiene guide covers the highest-impact changes first.",
    url: 'https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html',
    linkText: 'Read the guide →',
    icon: 'external',
  },
  stress: {
    headline: 'Stress shortens telomeres. You can reverse that.',
    description: 'MindTools has free, evidence-based stress management techniques.',
    url: 'https://www.mindtools.com/pages/article/newTCS_00.htm',
    linkText: 'Explore techniques →',
    icon: 'external',
  },
  diet: {
    headline: 'Small diet changes compound over years.',
    description: 'The Dietary Guidelines for Americans is free and surprisingly readable.',
    url: 'https://www.dietaryguidelines.gov',
    linkText: 'Read the guidelines →',
    icon: 'external',
  },
  bmi_overweight: {
    headline: 'Even small changes move the number.',
    description: "The CDC's Healthy Weight guide focuses on sustainable habits, not crash diets.",
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Explore healthy weight →',
    icon: 'heart',
  },
  bmi_obese: {
    headline: 'Your choices today shape your decades ahead.',
    description: "The CDC's Healthy Weight guide focuses on sustainable habits, not crash diets.",
    url: 'https://www.cdc.gov/healthyweight',
    linkText: 'Explore healthy weight →',
    icon: 'heart',
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
  const Icon = r.icon === 'heart' ? Heart : ExternalLink;

  const wrap: CSSProperties = {
    maxWidth: 480,
    opacity: show ? 1 : 0,
    transition: 'opacity 200ms ease, max-height 200ms ease, margin-top 200ms ease',
    maxHeight: show ? 140 : 0,
    overflow: 'hidden',
    marginTop: show ? 10 : 0,
    pointerEvents: show ? 'auto' : 'none',
  };

  const card: CSSProperties = {
    background: '#1a1a1a',
    color: '#f5f5f5',
    borderLeft: '3px solid #f59e0b',
    borderRadius: 12,
    padding: '12px 14px',
    boxShadow: '0 1px 6px rgba(0,0,0,0.18)',
  };

  const headline: CSSProperties = {
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1.3,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  const desc: CSSProperties = {
    fontSize: 12,
    opacity: 0.9,
    margin: '6px 0 8px 22px',
    lineHeight: 1.45,
  };

  const link: CSSProperties = {
    fontSize: 12,
    color: '#f59e0b',
    textDecoration: 'none',
    fontWeight: 600,
    marginLeft: 22,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
  };

  return (
    <div style={wrap} aria-hidden={!show}>
      <div style={card}>
        <div style={headline}>
          <Icon size={16} color="#f59e0b" aria-hidden />
          <span>{r.headline}</span>
        </div>
        <div style={desc}>{r.description}</div>
        <a href={r.url} target="_blank" rel="noopener noreferrer" style={link}>
          {r.linkText}
          <ExternalLink size={14} color="#f59e0b" aria-hidden />
        </a>
      </div>
    </div>
  );
}

