import type { ReactNode } from 'react';

export const metadata = {
  title: 'Methodology',
  description:
    'How the Life Expectancy Calculator works — SSA 2022 Period Life Table, CDC actuarial data, and evidence-based lifestyle modifiers explained in plain English.',
  openGraph: {
    title: 'Methodology | Life Expectancy Calculator',
    description:
      'How the Life Expectancy Calculator works — SSA 2022 Period Life Table, CDC data, and lifestyle modifiers explained.',
    url: 'https://whenwillidiecalculator.com/methodology',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/methodology',
  },
};

import AdUnit from '@/components/AdUnit';

const MODIFIER_SOURCE_STYLE = {
  fontSize: 13,
  color: '#6b5e4e',
  lineHeight: 1.55,
} as const;

const MODIFIER_TABLE_BLOCKS: {
  rows: [string, string, string][];
  citation: string;
}[] = [
  {
    rows: [
      ['Smoking', 'None', '0'],
      ['Smoking', 'Occasional', '-3 years'],
      ['Smoking', 'Daily', '-10 years'],
    ],
    citation:
      'Smoking −10 years: Doll R et al., BMJ 2004 (British Doctors Study — 50-year follow-up).',
  },
  {
    rows: [
      ['Exercise', 'Sedentary', '-3 years'],
      ['Exercise', 'Light', '0'],
      ['Exercise', 'Active', '+2 years'],
      ['Exercise', 'Very Active', '+3 years'],
    ],
    citation: 'Exercise +2–3 years: Moore SC et al., PLOS Medicine 2012.',
  },
  {
    rows: [
      ['BMI', 'Healthy (18.5-24.9)', '0'],
      ['BMI', 'Underweight (<18.5)', '-2 years'],
      ['BMI', 'Overweight (25-29.9)', '-1 year'],
      ['BMI', 'Obese (30-34.9)', '-3 years'],
      ['BMI', 'Severely Obese (35+)', '-7 years'],
    ],
    citation: 'BMI: Global BMI Mortality Collaboration, Lancet 2016.',
  },
  {
    rows: [
      ['Alcohol', 'None or Light', '0'],
      ['Alcohol', 'Moderate', '-1 year'],
      ['Alcohol', 'Heavy', '-5 years'],
    ],
    citation: 'Alcohol: GBD 2016 Alcohol Collaborators, Lancet 2018.',
  },
  {
    rows: [
      ['Sleep', 'Under 6hrs', '-3 years'],
      ['Sleep', '6-8hrs', '0'],
      ['Sleep', '8+hrs', '+1 year'],
    ],
    citation: 'Sleep: Cappuccini et al., Sleep 2010 meta-analysis.',
  },
  {
    rows: [
      ['Stress', 'Low', '+1 year'],
      ['Stress', 'Medium', '0'],
      ['Stress', 'High', '-3 years'],
    ],
    citation: 'Stress: Kivimäki et al., BMJ 2012 (Whitehall II study).',
  },
  {
    rows: [
      ['Diet', 'Poor', '-3 years'],
      ['Diet', 'Average', '0'],
      ['Diet', 'Good', '+2 years'],
    ],
    citation: 'Diet: Sofi F et al., BMJ 2008 (Mediterranean diet meta-analysis).',
  },
];

export default function MethodologyPage() {
  return (
    <main
      style={{
        background: '#f7f2e8',
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Methodology for the Life Expectancy Calculator',
            description:
              'How the Life Expectancy Calculator works — SSA 2022 Period Life Table, CDC actuarial data, and evidence-based lifestyle modifiers explained.',
            url: 'https://whenwillidiecalculator.com/methodology',
            publisher: {
              '@type': 'Organization',
              name: 'Life Expectancy Calculator',
              url: 'https://whenwillidiecalculator.com',
            },
          }),
        }}
      />
      <h1
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 36,
          fontWeight: 700,
          color: '#1a1612',
          margin: '0 0 8px 0',
        }}
      >
        Methodology &amp; Data Sources
      </h1>

      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        This page explains exactly how the Life Expectancy Calculator works, what data it
        uses, and how lifestyle adjustments are calculated.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Base Life Expectancy Data
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        The calculator uses the U.S. Social Security Administration 2022 Period Life Table —
        the same table used in the 2025 SSA Trustees Report. For each age and sex, the table
        provides &quot;ex&quot; — the expected additional years of life. When you enter your
        birth date, the calculator determines your precise current age, looks up ex for your
        age and sex, and adds that to your current age to produce your estimated lifespan.
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '12px 0 0 0' }}>
        <a
          href="https://www.ssa.gov/oact/STATS/table4c6.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none' }}
          className="supporting-link"
        >
          SSA 2022 Period Life Table
        </a>
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Lifestyle Modifier Values
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '0 0 16px 0' }}>
        The lifestyle sliders apply evidence-based year adjustments to the base estimate.
        These are directional estimates drawn from population-level research — not individual
        predictions.
      </p>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 14,
          color: '#4a3f2f',
          border: '1px solid #e8dfc8',
          overflow: 'hidden',
          borderRadius: 10,
        }}
      >
        <thead>
          <tr style={{ background: '#fffdf7' }}>
            <th style={{ textAlign: 'left', padding: '10px 16px', border: '1px solid #e8dfc8' }}>
              Factor
            </th>
            <th style={{ textAlign: 'left', padding: '10px 16px', border: '1px solid #e8dfc8' }}>
              Option
            </th>
            <th style={{ textAlign: 'left', padding: '10px 16px', border: '1px solid #e8dfc8' }}>
              Years Added/Subtracted
            </th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            let dataRowIndex = 0;
            return MODIFIER_TABLE_BLOCKS.flatMap((block) => {
              const out: ReactNode[] = [];
              for (const [factor, option, years] of block.rows) {
                const idx = dataRowIndex;
                dataRowIndex += 1;
                out.push(
                  <tr
                    key={`${factor}-${option}`}
                    style={{ background: idx % 2 === 0 ? '#fffdf7' : '#f7f2e8' }}
                  >
                    <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{factor}</td>
                    <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{option}</td>
                    <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{years}</td>
                  </tr>
                );
              }
              out.push(
                <tr key={`${block.rows[0]?.[0] ?? 'block'}-source`}>
                  <td
                    colSpan={3}
                    style={{
                      padding: '10px 16px',
                      border: '1px solid #e8dfc8',
                      background: '#f7f2e8',
                      ...MODIFIER_SOURCE_STYLE,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Primary source.</span> {block.citation}
                  </td>
                </tr>
              );
              return out;
            });
          })()}
        </tbody>
      </table>

      <div style={{ margin: '48px 0' }}>
        <AdUnit slotId="slot-methodology-mid" format="rectangle" />
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Important Limitations
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        These estimates are statistical averages from population data. They do not predict
        any individual&apos;s lifespan. Genetics, healthcare access, accidents, and countless
        other factors are not captured here. This tool is for educational and entertainment
        purposes only and is not medical advice.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Data Sources
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        <a
          href="https://www.ssa.gov/oact/STATS/table4c6.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none' }}
          className="supporting-link"
        >
          SSA 2022 Period Life Table
        </a>
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '12px 0 0 0' }}>
        <a
          href="https://www.cdc.gov/nchs/nvss/life-expectancy.htm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none' }}
          className="supporting-link"
        >
          CDC National Center for Health Statistics
        </a>
      </p>
    </main>
  );
}
