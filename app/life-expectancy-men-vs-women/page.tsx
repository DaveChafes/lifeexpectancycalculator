import Link from 'next/link';

export const metadata = {
  title: 'Life Expectancy Men vs Women',
  description:
    'Why do women live longer than men? Life expectancy differences between men and women explained with CDC data — biological, behavioral, and social factors.',
  keywords: [
    'life expectancy men vs women',
    'why do women live longer than men',
    'male vs female life expectancy',
    'life expectancy by gender',
    'men life expectancy USA',
    'women life expectancy USA',
  ],
  openGraph: {
    title: 'Life Expectancy Men vs Women | Life Expectancy Calculator',
    description: 'Why do women live longer than men? CDC data and research explained.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-men-vs-women',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-men-vs-women',
  },
};

const H1_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 40,
  fontWeight: 700,
  color: '#1a1612',
  margin: '0 0 10px 0',
  textAlign: 'center' as const,
};

const H2_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 28,
  fontWeight: 700,
  color: '#1a1612',
  margin: '48px 0 12px 0',
};

const P_STYLE = {
  fontSize: 16,
  color: '#4a3f2f',
  lineHeight: 1.8,
  margin: '0 0 16px 0',
};

const boxStyle = {
  border: '1px solid #e8dfc8',
  borderRadius: 14,
  padding: '18px 18px',
  background: '#fffdf7',
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

const rows = [
  { age: 0, male: 74.8, female: 80.2, gap: 5.4 },
  { age: 10, male: 65.4, female: 70.7, gap: 5.3 },
  { age: 20, male: 55.8, female: 60.8, gap: 5.0 },
  { age: 30, male: 46.5, female: 51.0, gap: 4.5 },
  { age: 40, male: 37.2, female: 41.3, gap: 4.1 },
  { age: 50, male: 28.4, female: 31.9, gap: 3.5 },
  { age: 60, male: 20.4, female: 23.1, gap: 2.7 },
  { age: 65, male: 17.1, female: 19.2, gap: 2.1 },
  { age: 70, male: 14.0, female: 15.5, gap: 1.5 },
  { age: 80, male: 8.7, female: 9.6, gap: 0.9 },
];

export default function LifeExpectancyMenVsWomenPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do women live longer than men?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Women tend to live longer due to a combination of biological factors (hormones, immune response, genetics) and behavioral/social factors (smoking, alcohol, risk-taking, preventive healthcare). The behavioral portion is also the most actionable.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the life expectancy difference between men and women in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A commonly cited CDC summary is about 5.4 years: roughly 80.2 years for women vs 74.8 years for men (approximate 2021-era figures).',
        },
      },
      {
        '@type': 'Question',
        name: 'Has the life expectancy gap between men and women always existed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The gap has existed in most modern datasets and in many countries, but its size changes over time. It widened when smoking and occupational risks were higher for men, and has narrowed in some periods as behaviors converged.',
        },
      },
      {
        '@type': 'Question',
        name: 'At what age does the life expectancy gap between men and women narrow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The gap typically narrows with age. Differences are largest earlier in life and shrink substantially at older ages; by around age 80, remaining-life-expectancy gaps are often under 1 year in SSA tables.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can men do to live longer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The highest-impact levers are quitting smoking, exercising regularly, limiting alcohol, maintaining a healthy BMI, improving sleep, managing stress, building strong social connections, and getting preventive healthcare (annual checkups and age-appropriate screening).',
        },
      },
      {
        '@type': 'Question',
        name: 'Do men or women have better quality of life in old age?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Women often live longer, but longevity and quality of life are not the same. Quality depends on mobility, chronic disease burden, social support, mental health, and access to care — areas where both policy and personal habits matter.',
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://whenwillidiecalculator.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Life Expectancy Men vs Women',
        item: 'https://whenwillidiecalculator.com/life-expectancy-men-vs-women',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy: Men vs Women — Why the Gap Exists and What You Can Do About It',
    description:
      'Why do women live longer than men? Life expectancy differences between men and women explained with CDC data — biological, behavioral, and social factors.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-men-vs-women',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Life Expectancy Men vs Women
      </nav>

      <h1 style={H1_STYLE}>
        Life Expectancy: Men vs Women — Why the Gap Exists and What You Can Do About It
      </h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        In the United States, women live an average of about 5.4 years longer than men — roughly
        80.2 years vs 74.8 years in common CDC summaries. A gap like this exists in virtually every
        country, but it isn’t purely “biology.” The difference is driven by biological, behavioral,
        and social factors — and the behavioral part means men have real leverage to close the gap.
        If you want a personalized estimate that shows how habits stack up, try our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <div style={boxStyle}>
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
              US Male average life expectancy
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              74.8 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              US Female average life expectancy
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              80.2 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Gap
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              5.4 years
            </div>
            <div style={{ fontSize: 13, color: '#6b5e4e', marginTop: 2 }}>(approximately 281 weeks)</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Global average gap
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~5 years
            </div>
            <div style={{ fontSize: 13, color: '#6b5e4e', marginTop: 2 }}>(WHO data)</div>
          </div>
        </div>
      </div>

      <h2 style={H2_STYLE}>Biological Factors</h2>
      <p style={P_STYLE}>
        Biology contributes to the gap. Estrogen has protective effects on cardiovascular health,
        especially earlier in adulthood, while testosterone is associated with higher risk-taking
        behavior and different cardiometabolic profiles. Women also tend to mount stronger immune
        responses, which can reduce vulnerability to certain infections — though stronger immune
        activity can also raise autoimmune risk.
      </p>
      <p style={P_STYLE}>
        Genetics matters too. Women have two X chromosomes (XX) while men have one X and one Y (XY).
        Having a “backup” X can provide resilience when a harmful variant is present on one copy.
        None of this guarantees outcomes for any individual — it just shifts probabilities across
        large populations.
      </p>

      <h2 style={H2_STYLE}>Behavioral Factors</h2>
      <p style={P_STYLE}>
        Behavior is often the most actionable part of the story. Men are more likely to smoke, drink
        heavily, and work in dangerous occupations. They are also less likely to seek preventive
        care — routine checkups, blood pressure screening, cholesterol checks, and early treatment
        for conditions that compound over time.
      </p>
      <p style={P_STYLE}>
        Men also have higher mortality from accidents and violence in many datasets, and higher
        rates of suicide. Each of these is not a moral failing — it’s a pattern that can be changed
        with better support, better systems, and better personal defaults: fewer cigarettes, fewer
        risky miles driven tired or intoxicated, more proactive healthcare, and earlier mental
        health intervention.
      </p>

      <h2 style={H2_STYLE}>Social Factors</h2>
      <p style={P_STYLE}>
        Social structure plays a role. Social connection and marriage correlate with longer life,
        and the “marriage benefit” tends to be stronger for men. Stress, emotional expression, and
        cultural norms around toughness can also shape healthcare avoidance. Workplace hazards and
        rural access gaps amplify risk in certain regions.
      </p>

      <h2 style={H2_STYLE}>The Gap Is Narrowing</h2>
      <p style={P_STYLE}>
        Over recent decades, the male–female life expectancy gap has narrowed in many places as
        smoking rates among men fell and behaviors converged. At the same time, women entered more
        high-stress workplaces and some risk factors increased across both sexes. Behavioral
        convergence drives outcome convergence — which is another way of saying the gap isn’t fixed.
      </p>

      <h2 style={H2_STYLE}>What Men Can Do to Close the Gap</h2>
      <p style={P_STYLE}>
        The best strategy is boring — and powerful: quit smoking, exercise consistently, see a
        doctor annually, limit alcohol, build strong relationships, get enough sleep, and manage
        stress. These habits don’t just add years — they add good years. For a concrete estimate,
        use our{' '}
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

      <h2 style={H2_STYLE}>Life Expectancy by Age (SSA 2022 Period Life Table)</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
          <thead>
            <tr>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>Male ex</th>
              <th style={thStyle}>Female ex</th>
              <th style={thStyle}>Gap</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.age} style={{ background: idx % 2 === 0 ? '#fffdf7' : '#f7f2e8' }}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{r.age}</td>
                <td style={tdStyle}>{r.male.toFixed(1)}</td>
                <td style={tdStyle}>{r.female.toFixed(1)}</td>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{r.gap.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 12 }}>
        Note: Gap narrows significantly with age — men who reach 80 are nearly as likely as women to
        reach 90.
      </p>

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
      <ul style={{ margin: 0, paddingLeft: 18, color: '#4a3f2f', lineHeight: 1.8 }}>
        <li style={{ marginBottom: 10 }}>
          <a
            href="https://www.cdc.gov/nchs/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
          >
            CDC National Center for Health Statistics
          </a>
        </li>
        <li style={{ marginBottom: 10 }}>
          <a
            href="https://www.ssa.gov/oact/STATS/table4c6.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
          >
            SSA 2022 Period Life Table
          </a>
        </li>
        <li style={{ marginBottom: 0 }}>
          <a
            href="https://www.who.int/data/gho"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
          >
            WHO Global Health Observatory
          </a>
        </li>
      </ul>

      <p style={{ ...P_STYLE, marginTop: 18 }}>
        Related: see{' '}
        <Link
          href="/life-expectancy-by-state"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy by state
        </Link>
        .
      </p>

      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 28, marginBottom: 0 }}>
        For details on assumptions and modifiers, see{' '}
        <Link href="/methodology" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how our calculator works
        </Link>
        .
      </p>
    </main>
  );
}

