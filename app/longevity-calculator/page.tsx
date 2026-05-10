import Link from 'next/link';

export const metadata = {
  title: 'Longevity Calculator — Estimate Your Lifespan Based on Your Habits',
  description:
    'Free longevity calculator based on SSA and CDC actuarial data. Enter your age, sex, and lifestyle habits to estimate how long you will live — and what changes your timeline.',
  keywords: [
    'longevity calculator',
    'lifespan calculator',
    'how long will I live calculator',
    'longevity estimator',
    'life expectancy estimator',
    'calculate longevity',
  ],
  openGraph: {
    title: 'Longevity Calculator | Life Expectancy Calculator',
    description:
      'Free longevity calculator based on SSA and CDC data. See your estimated lifespan and what lifestyle habits change it.',
    url: 'https://whenwillidiecalculator.com/longevity-calculator',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/longevity-calculator',
  },
};

const H1_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 40,
  fontWeight: 700,
  color: '#1a1612',
  margin: '0 0 8px 0',
  textAlign: 'center' as const,
};

const H2_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 28,
  fontWeight: 700,
  color: '#1a1612',
  margin: '48px 0 12px 0',
};

/* Mirrored from app/life-expectancy-by-state/page.tsx (unused on this page). */
/* eslint-disable @typescript-eslint/no-unused-vars */
const H3_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#1a1612',
  margin: '24px 0 8px 0',
};

const tableWrapStyle = {
  width: '100%',
  overflowX: 'auto' as const,
  border: '1px solid #e8dfc8',
  borderRadius: 12,
  background: '#fffdf7',
};

const thStyle = {
  textAlign: 'left' as const,
  padding: '12px 14px',
  borderBottom: '1px solid #e8dfc8',
  fontSize: 13,
  color: '#4a3f2f',
  background: '#fffdf7',
  whiteSpace: 'nowrap' as const,
};

const tdStyle = {
  padding: '12px 14px',
  borderBottom: '1px solid #efe6d2',
  fontSize: 14,
  color: '#1a1612',
  whiteSpace: 'nowrap' as const,
};
/* eslint-enable @typescript-eslint/no-unused-vars */

const P_STYLE = {
  fontSize: 16,
  color: '#4a3f2f',
  lineHeight: 1.8,
  margin: '0 0 16px 0',
};

const listStyle = {
  paddingLeft: 20,
  color: '#4a3f2f',
  lineHeight: 2,
  fontSize: 16,
  margin: '0 0 16px 0',
};

export default function LongevityCalculatorPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a longevity calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A longevity calculator estimates remaining lifespan using actuarial tables (mortality rates by age and sex) and often adds lifestyle adjustments based on epidemiologic research. It produces a statistical estimate, not a personal medical prognosis.',
        },
      },
      {
        '@type': 'Question',
        name: 'How accurate is a longevity calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Accuracy depends on data quality and how well inputs match research categories. SSA/CDC baselines are population averages; lifestyle adjustments summarize typical associations from studies, which vary by individual. Use results as an informed starting point, not a guarantee.',
        },
      },
      {
        '@type': 'Question',
        name: 'What data does this longevity calculator use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This tool uses the U.S. Social Security Administration 2022 Period Life Table for baseline remaining life expectancy by age and sex, plus CDC National Center for Health Statistics context. Lifestyle modifiers are aligned with peer-reviewed longitudinal research summarized on the methodology page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this longevity calculator free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The calculator runs in your browser, requires no signup, and does not collect or store personal data. It is free to use for educational purposes.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://whenwillidiecalculator.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Longevity Calculator',
        item: 'https://whenwillidiecalculator.com/longevity-calculator',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Longevity Calculator: Estimate Your Lifespan Based on Your Habits',
    description:
      'Free longevity calculator based on SSA and CDC actuarial data. Enter your age, sex, and lifestyle habits to estimate how long you will live — and what changes your timeline.',
    url: 'https://whenwillidiecalculator.com/longevity-calculator',
    publisher: {
      '@type': 'Organization',
      name: 'Life Expectancy Calculator',
      url: 'https://whenwillidiecalculator.com',
    },
  };

  return (
    <main
      style={{
        background: '#f7f2e8',
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <nav style={{ fontSize: 13, color: '#6b5e4e', marginBottom: 18 }}>
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          Home
        </Link>{' '}
        <span style={{ color: '#6b5e4e' }}>›</span> Longevity Calculator
      </nav>

      <h1 style={H1_STYLE}>Longevity Calculator: Estimate Your Lifespan Based on Your Habits</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        A longevity calculator estimates how long you are likely to live based on actuarial data and
        lifestyle factors. Our free tool uses the U.S. Social Security Administration 2022 Period Life
        Table and CDC National Center for Health Statistics data — the same sources used by financial
        planners, insurers, and researchers. You enter your age, sex, and seven lifestyle factors. The
        calculator shows your estimated lifespan in years and weeks, a life grid, and how each habit
        affects your timeline.
      </p>

      <div
        style={{
          border: '2px solid #c9a84c',
          borderRadius: 16,
          padding: '28px 24px',
          background: '#fffdf7',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        <h2 style={{ ...H2_STYLE, margin: '0 0 12px 0', textAlign: 'center' }}>Try the Longevity Calculator</h2>
        <p style={{ ...P_STYLE, marginBottom: 20, textAlign: 'center' }}>
          Takes 60 seconds. Based on SSA &amp; CDC actuarial data. No signup required.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: '#c9a84c',
            color: '#1a1200',
            padding: '14px 28px',
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: 16,
          }}
        >
          Calculate My Longevity →
        </Link>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 0 }}>What Is a Longevity Calculator?</h2>
      <p style={P_STYLE}>
        A longevity calculator uses actuarial life tables — statistical models of mortality rates by age
        and sex — to estimate how many additional years a person is likely to live from their current
        age. The most credible US-based calculators use SSA or CDC life tables, which are compiled from
        death certificate data across the entire US population. Our calculator starts with the SSA base
        estimate for your age and sex, then applies evidence-based lifestyle adjustments drawn from
        peer-reviewed longitudinal research. The result is a personalized estimate that reflects both your
        demographic baseline and your modifiable risk factors. It is not a prediction — it is a
        statistically informed starting point for thinking about your time and what you want to do with
        it.
      </p>

      <h2 style={H2_STYLE}>What This Longevity Calculator Measures</h2>
      <p style={P_STYLE}>
        Each slider maps research categories to years added or subtracted from your SSA baseline. Here is
        what goes into the model:
      </p>
      <ul style={listStyle}>
        <li>Base life expectancy from SSA 2022 Period Life Table by age and sex</li>
        <li>Smoking status — none, occasional, or daily (up to −10 years)</li>
        <li>BMI — calculated from your height and weight (−7 to 0 years depending on category)</li>
        <li>Exercise level — sedentary to very active (−3 to +3 years)</li>
        <li>Alcohol consumption — none to heavy (0 to −5 years)</li>
        <li>Sleep quality — under 6hrs to 8+hrs (−2 to +1 years)</li>
        <li>Stress level — low to high (−3 to +1 years)</li>
        <li>Diet quality — poor to good (−3 to +2 years)</li>
      </ul>

      <h2 style={H2_STYLE}>How It Differs from Other Longevity Calculators</h2>
      <p style={P_STYLE}>
        Most longevity calculators either require long quizzes before showing results (Living to 100
        requires 40+ questions and an account), rely on proprietary AI models with no transparent
        methodology, or show a single number with no visualization. Ours shows results instantly after 3
        inputs, then lets you adjust lifestyle factors in real time with live updates. The life-in-weeks
        grid — showing your remaining weeks as individual squares — is designed to create genuine
        perspective rather than just output a statistic. All calculations happen in your browser. No
        personal data is collected or stored. The methodology and data sources are fully documented on
        our{' '}
        <Link href="/methodology" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          methodology page
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>Longevity Calculator vs Life Expectancy Calculator — What&apos;s the Difference?</h2>
      <p style={P_STYLE}>
        The terms are used interchangeably. &quot;Longevity calculator&quot; tends to be used in the
        context of health optimization and lifestyle — how long you could live given your habits.
        &quot;Life expectancy calculator&quot; is the more traditional actuarial term — how long the
        average person your age and sex is expected to live. Our tool does both: it starts with the
        actuarial baseline and adds personalized lifestyle adjustments. Whether you search for a
        longevity calculator or a life expectancy calculator, you&apos;ll find the same tool here.
      </p>

      <div
        style={{
          border: '1px solid #e8dfc8',
          borderRadius: 14,
          padding: '18px 18px',
          background: '#fffdf7',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginTop: 10,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1612' }}>
          See your personal life expectancy estimate
        </div>
        <div style={{ fontSize: 14, color: '#6b5e4e', lineHeight: 1.6 }}>
          Based on SSA &amp; CDC data. Takes 60 seconds.
        </div>
        <div style={{ marginTop: 6 }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: '#c9a84c',
              color: '#1a1200',
              padding: '10px 14px',
              borderRadius: 12,
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: 14,
            }}
          >
            Calculate My Life Expectancy →
          </Link>
        </div>
      </div>

      <h2 style={H2_STYLE}>FAQ</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqJsonLd.mainEntity.map((q) => (
          <details
            key={q.name}
            style={{
              border: '1px solid #e8dfc8',
              borderRadius: 12,
              padding: '12px 16px',
              background: '#fffdf7',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                fontWeight: 700,
                color: '#4a3f2f',
                fontSize: 15,
              }}
            >
              {q.name}
            </summary>
            <p style={{ ...P_STYLE, marginTop: 12, marginBottom: 0, fontSize: 15 }}>
              {(q.acceptedAnswer as { text: string }).text}
            </p>
          </details>
        ))}
      </div>

      <p style={{ ...P_STYLE, marginTop: 8 }}>
        Related:{' '}
        <Link href="/methodology" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          methodology
        </Link>
        ,{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        , and{' '}
        <Link
          href="/average-life-expectancy-usa"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          average life expectancy in the USA
        </Link>
        .
      </p>
    </main>
  );
}
