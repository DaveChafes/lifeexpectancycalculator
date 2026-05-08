import Link from 'next/link';

export const metadata = {
  title: 'Average Life Expectancy in the USA',
  description:
    'What is the average life expectancy in the United States? Current CDC data by age, sex, and year — plus what moves the number up or down for individuals.',
  keywords: [
    'average life expectancy usa',
    'average life expectancy united states',
    'us life expectancy',
    'american life expectancy',
    'life expectancy usa 2024',
    'cdc life expectancy united states',
  ],
  openGraph: {
    title: 'Average Life Expectancy in the USA | Life Expectancy Calculator',
    description:
      'Current US life expectancy data by age and sex from CDC. What the average means — and how to beat it.',
    url: 'https://whenwillidiecalculator.com/average-life-expectancy-usa',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/average-life-expectancy-usa',
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

const H3_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#1a1612',
  margin: '24px 0 8px 0',
};

const P_STYLE = {
  fontSize: 16,
  color: '#4a3f2f',
  lineHeight: 1.8,
  margin: '0 0 16px 0',
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

const SSA_TABLE_ROWS = [
  { age: 0, maleEx: 74.8, femaleEx: 80.2 },
  { age: 20, maleEx: 55.8, femaleEx: 60.8 },
  { age: 30, maleEx: 46.5, femaleEx: 51.0 },
  { age: 40, maleEx: 37.2, femaleEx: 41.3 },
  { age: 50, maleEx: 28.4, femaleEx: 31.9 },
  { age: 60, maleEx: 20.4, femaleEx: 23.1 },
  { age: 65, maleEx: 17.1, femaleEx: 19.2 },
  { age: 70, maleEx: 14.0, femaleEx: 15.5 },
  { age: 80, maleEx: 8.7, femaleEx: 9.6 },
] as const;

export default function AverageLifeExpectancyUSA() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the current average life expectancy in the United States?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A commonly cited CDC National Center for Health Statistics figure is approximately 76.4 years overall, though the exact number varies by year and methodology.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why did US life expectancy drop recently?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'COVID-19 caused the sharpest single-year declines in decades in 2020–2021. Opioid overdose mortality and chronic disease trends also contributed. Recovery began in 2022 but has been uneven across groups.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average life expectancy for men in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commonly cited CDC summaries place US men around 74.8 years on average, varying by year and data source.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average life expectancy for women in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commonly cited CDC summaries place US women around 80.2 years on average, varying by year and data source.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the US compare to other countries in life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In many recent global comparisons, the US ranks around the mid-30s among wealthy nations, despite high GDP per capita. The drivers are largely systems-level (healthcare access, obesity, firearms mortality, overdose mortality).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the single biggest thing I can do to live longer than the US average?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not smoking (or quitting if you currently smoke) is consistently among the highest-impact levers in population studies, often associated with a gap of around a decade versus daily smoking. Regular exercise and preventive care are also high-leverage.',
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
        name: 'Average Life Expectancy in the USA',
        item: 'https://whenwillidiecalculator.com/average-life-expectancy-usa',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Average Life Expectancy in the United States',
    description:
      'What is the average life expectancy in the United States? Current CDC data and what drives the number up or down for individuals.',
    url: 'https://whenwillidiecalculator.com/average-life-expectancy-usa',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Average Life Expectancy in the USA
      </nav>

      <h1 style={H1_STYLE}>Average Life Expectancy in the United States</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        The average American lives to approximately 76.4 years, according to commonly cited CDC
        National Center for Health Statistics figures. But that single number hides enormous
        variation by sex, state, income, and — most importantly for you personally — lifestyle. This
        page breaks down what the US average actually means and what moves it. For a personalized
        estimate based on your habits, use our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <div
        style={{
          border: '1px solid #e8dfc8',
          borderRadius: 14,
          padding: '18px 18px',
          background: '#fffdf7',
          marginTop: 10,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 12,
            alignItems: 'start',
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Overall US Average
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              76.4 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Men
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              74.8 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Women
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              80.2 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Rank among wealthy nations
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~37th
            </div>
          </div>
        </div>
      </div>

      <h2 style={H2_STYLE}>Current US Life Expectancy (CDC Data)</h2>
      <p style={P_STYLE}>
        The CDC National Center for Health Statistics publishes annual life expectancy figures. The
        most recent comprehensive figures commonly cited in summaries put overall US life expectancy
        at approximately 76.4 years. That number reflects a partial recovery after COVID-19-related
        declines in 2020–2021, which pushed life expectancy to its lowest point in decades.
        Pre-pandemic, the US was around 78.8 years. The recovery has been uneven across demographic
        groups, with differences shaped by chronic disease burden, healthcare access, and mortality
        from accidents, overdose, and violence.
      </p>

      <h2 style={H2_STYLE}>US Life Expectancy by Age and Sex — SSA 2022 Period Life Table</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Current Age</th>
              <th style={thStyle}>Men (additional years)</th>
              <th style={thStyle}>Women (additional years)</th>
              <th style={thStyle}>Men (estimated lifespan)</th>
              <th style={thStyle}>Women (estimated lifespan)</th>
            </tr>
          </thead>
          <tbody>
            {SSA_TABLE_ROWS.map((r, idx) => (
              <tr key={r.age} style={{ background: idx % 2 === 0 ? '#fffdf7' : '#f7f2e8' }}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{r.age}</td>
                <td style={tdStyle}>{r.maleEx.toFixed(1)}</td>
                <td style={tdStyle}>{r.femaleEx.toFixed(1)}</td>
                <td style={tdStyle}>{(r.age + r.maleEx).toFixed(1)}</td>
                <td style={tdStyle}>{(r.age + r.femaleEx).toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 13, color: '#6b5e4e', marginTop: 12 }}>
        ex = expected additional years of life from that age. Source: SSA 2022 Period Life Table.
        Estimated lifespan = current age + ex.
      </p>

      <h2 style={H2_STYLE}>How US Life Expectancy Has Changed Over Time</h2>
      <p style={P_STYLE}>
        US life expectancy rose steadily through the 20th century, from around 47 years in 1900 to
        nearly 79 years by 2019, driven by sanitation, antibiotics, vaccines, and reduced smoking.
        The opioid crisis caused a dip starting around 2015. COVID-19 caused the sharpest single-year
        decline in decades. Recovery began in 2022. The longer arc is still upward — but progress is
        not automatic and varies significantly by population group.
      </p>

      <div
        style={{
          border: '1px solid #e8dfc8',
          borderRadius: 12,
          background: '#fffdf7',
          padding: '12px 14px',
          color: '#4a3f2f',
          fontSize: 14,
          lineHeight: 1.7,
        }}
      >
        1900: ~47 years | 1950: ~68 years | 1980: ~74 years | 2000: ~77 years | 2019: ~78.8 years |
        2021: ~76.4 years (COVID low) | 2022+: recovering
      </div>

      <h2 style={H2_STYLE}>Why the US Ranks Lower Than Other Wealthy Countries</h2>
      <p style={P_STYLE}>
        Despite being one of the highest-GDP countries, the US ranks around 37th globally.
        Contributing factors include higher obesity rates (affecting cardiovascular and metabolic
        disease), higher firearms mortality than peer nations, fragmented healthcare coverage that
        creates gaps in preventive care, higher opioid and drug overdose mortality, and shorter
        average paid leave that reduces access to preventive appointments. This is a systems story,
        not a character story — and it means individual choices matter more in the US, not less.
      </p>

      <h2 style={H2_STYLE}>What Moves the US Average Up or Down for Individuals</h2>

      <h3 style={H3_STYLE}>Factors that can add years</h3>
      <p style={P_STYLE}>
        Regular exercise is associated with meaningful longevity gains in cohort studies (often on
        the order of a few years, such as +2 to +3 years). Never smoking versus daily smoking can
        represent roughly a decade difference. A healthy BMI can add years versus obesity bands, and
        consistently getting 7–8 hours of sleep is associated with better long-term outcomes. Strong
        social connections correlate with lower mortality risk, and preventive healthcare helps by
        catching hypertension, diabetes, and cancers earlier.
      </p>

      <h3 style={H3_STYLE}>Factors that can subtract years</h3>
      <p style={P_STYLE}>
        Daily smoking is among the highest-impact negative factors (often cited around −10 years in
        population comparisons). Severe obesity can subtract roughly −5 to −7 years, heavy alcohol
        use roughly −4 to −5 years, and chronic high stress roughly −2 to −3 years in some analyses.
        Sedentary lifestyle and poor sleep also correlate with elevated risk. These are population
        estimates from longitudinal research — individual variation is real.
      </p>

      <p style={P_STYLE}>
        Our life expectancy calculator lets you stack these factors together and see your
        personalized estimate in real time.
      </p>

      <h2 style={H2_STYLE}>The Average Is a Floor, Not a Ceiling</h2>
      <p style={P_STYLE}>
        The 76.4-year average includes smokers, sedentary individuals, people with untreated chronic
        conditions, and those with limited healthcare access. A person who doesn&apos;t smoke,
        exercises regularly, sleeps well, and gets preventive care can realistically expect to
        significantly outperform the national average. The average describes what happens when you
        do nothing special — not what&apos;s possible. Explore practical steps in{' '}
        <Link
          href="/how-to-live-longer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          how to live longer
        </Link>
        .
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

      <h2 style={H2_STYLE}>Data Sources</h2>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/nchs/nvss/life-expectancy.htm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC National Center for Health Statistics — Life Expectancy
        </a>
      </p>
      <p style={{ ...P_STYLE, marginTop: 12 }}>
        <a
          href="https://www.ssa.gov/oact/STATS/table4c6.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Social Security Administration — Period Life Tables (SSA 2022 Period Life Table)
        </a>
      </p>

      <p style={{ ...P_STYLE, marginTop: 18 }}>
        Related: see{' '}
        <Link
          href="/life-expectancy-by-state"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy by state
        </Link>
        ,{' '}
        <Link
          href="/life-expectancy-by-country"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy by country
        </Link>
        , and{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy differences between men and women
        </Link>
        .
      </p>
    </main>
  );
}

