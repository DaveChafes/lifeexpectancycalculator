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
          {[
            ['Smoking', 'None', '0'],
            ['Smoking', 'Occasional', '-3 years'],
            ['Smoking', 'Daily', '-10 years'],
            ['BMI', 'Healthy (18.5-24.9)', '0'],
            ['BMI', 'Underweight (<18.5)', '-2 years'],
            ['BMI', 'Overweight (25-29.9)', '-1 year'],
            ['BMI', 'Obese (30-34.9)', '-3 years'],
            ['BMI', 'Severely Obese (35+)', '-7 years'],
            ['Exercise', 'Sedentary', '-3 years'],
            ['Exercise', 'Light', '0'],
            ['Exercise', 'Active', '+2 years'],
            ['Exercise', 'Very Active', '+3 years'],
            ['Alcohol', 'None or Light', '0'],
            ['Alcohol', 'Moderate', '-1 year'],
            ['Alcohol', 'Heavy', '-5 years'],
            ['Sleep', 'Under 6hrs', '-3 years'],
            ['Sleep', '6-8hrs', '0'],
            ['Sleep', '8+hrs', '+1 year'],
            ['Stress', 'Low', '+1 year'],
            ['Stress', 'Medium', '0'],
            ['Stress', 'High', '-3 years'],
            ['Diet', 'Poor', '-3 years'],
            ['Diet', 'Average', '0'],
            ['Diet', 'Good', '+2 years'],
          ].map(([factor, option, years], idx) => (
            <tr key={`${factor}-${option}`} style={{ background: idx % 2 === 0 ? '#fffdf7' : '#f7f2e8' }}>
              <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{factor}</td>
              <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{option}</td>
              <td style={{ padding: '10px 16px', border: '1px solid #e8dfc8' }}>{years}</td>
            </tr>
          ))}
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
