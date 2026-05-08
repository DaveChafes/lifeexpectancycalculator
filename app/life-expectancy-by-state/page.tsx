import Link from 'next/link';

export const metadata = {
  title: 'Life Expectancy by State',
  description:
    'Life expectancy by state in the United States — ranked from highest to lowest. See how your state compares and what drives the differences. Data from CDC National Center for Health Statistics.',
  keywords: [
    'life expectancy by state',
    'US state life expectancy',
    'which state has highest life expectancy',
    'life expectancy United States by state',
    'CDC life expectancy by state',
  ],
  openGraph: {
    title: 'Life Expectancy by State | Life Expectancy Calculator',
    description: 'Life expectancy by state in the United States — ranked from highest to lowest with CDC data.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-state',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-by-state',
  },
};

const US_AVG = 76.4;

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

const states = [
  { rank: 1, state: 'Hawaii', years: 80.7 },
  { rank: 2, state: 'California', years: 79.2 },
  { rank: 3, state: 'Minnesota', years: 79.1 },
  { rank: 4, state: 'Massachusetts', years: 79.0 },
  { rank: 5, state: 'Connecticut', years: 78.8 },
  { rank: 6, state: 'New York', years: 78.7 },
  { rank: 7, state: 'Colorado', years: 78.6 },
  { rank: 8, state: 'Washington', years: 78.5 },
  { rank: 9, state: 'New Hampshire', years: 78.4 },
  { rank: 10, state: 'Vermont', years: 78.3 },
  { rank: 11, state: 'Oregon', years: 78.1 },
  { rank: 12, state: 'New Jersey', years: 78.0 },
  { rank: 13, state: 'Utah', years: 77.9 },
  { rank: 14, state: 'Rhode Island', years: 77.8 },
  { rank: 15, state: 'Idaho', years: 77.6 },
  { rank: 16, state: 'Nebraska', years: 77.5 },
  { rank: 17, state: 'Iowa', years: 77.4 },
  { rank: 18, state: 'Wisconsin', years: 77.3 },
  { rank: 19, state: 'North Dakota', years: 77.2 },
  { rank: 20, state: 'South Dakota', years: 77.1 },
  { rank: 21, state: 'Arizona', years: 77.0 },
  { rank: 22, state: 'Maine', years: 76.9 },
  { rank: 23, state: 'Maryland', years: 76.8 },
  { rank: 24, state: 'Virginia', years: 76.7 },
  { rank: 25, state: 'Illinois', years: 76.5 },
  { rank: 26, state: 'Kansas', years: 76.4 },
  { rank: 27, state: 'Florida', years: 76.3 },
  { rank: 28, state: 'Delaware', years: 76.2 },
  { rank: 29, state: 'Pennsylvania', years: 76.1 },
  { rank: 30, state: 'Michigan', years: 75.9 },
  { rank: 31, state: 'Montana', years: 75.8 },
  { rank: 32, state: 'Nevada', years: 75.7 },
  { rank: 33, state: 'Texas', years: 75.6 },
  { rank: 34, state: 'North Carolina', years: 75.4 },
  { rank: 35, state: 'Georgia', years: 75.3 },
  { rank: 36, state: 'Missouri', years: 75.1 },
  { rank: 37, state: 'Ohio', years: 75.0 },
  { rank: 38, state: 'Indiana', years: 74.8 },
  { rank: 39, state: 'South Carolina', years: 74.7 },
  { rank: 40, state: 'New Mexico', years: 74.6 },
  { rank: 41, state: 'Alaska', years: 74.5 },
  { rank: 42, state: 'Wyoming', years: 74.4 },
  { rank: 43, state: 'Arkansas', years: 74.2 },
  { rank: 44, state: 'Tennessee', years: 74.1 },
  { rank: 45, state: 'Kentucky', years: 73.9 },
  { rank: 46, state: 'Louisiana', years: 73.8 },
  { rank: 47, state: 'Alabama', years: 73.7 },
  { rank: 48, state: 'Oklahoma', years: 73.5 },
  { rank: 49, state: 'West Virginia', years: 73.2 },
  { rank: 50, state: 'Mississippi', years: 72.9 },
  { rank: 51, state: 'District of Columbia', years: 76.1 },
];

function formatDelta(y: number): string {
  const d = Number((y - US_AVG).toFixed(1));
  if (Object.is(d, -0)) return '+0.0';
  return `${d >= 0 ? '+' : ''}${d.toFixed(1)}`;
}

export default function LifeExpectancyByStatePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which state has the highest life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hawaii consistently ranks as the highest life expectancy state in CDC summaries, at roughly 80.7 years in approximate 2021 figures.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which state has the lowest life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mississippi consistently ranks as the lowest life expectancy state in CDC summaries, at roughly 72.9 years in approximate 2021 figures.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does Hawaii have such high life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hawaii’s advantage is often attributed to lower smoking rates, strong social connection, daily activity, and dietary patterns that support cardiometabolic health. Statewide systems and built environments also influence outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does Mississippi have the lowest life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lower life expectancy in Mississippi is linked to systemic factors: higher poverty rates, lower access to preventive care in some regions, higher chronic disease burden, and higher rates of risk factors like smoking and obesity. These are population trends — not individual destinies.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does state of residence affect life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'State averages can differ by roughly 7 years between the highest and lowest states. But your personal outcomes are influenced by many factors — healthcare access, environment, and especially habits like smoking, activity, sleep, diet, and alcohol use.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average life expectancy in the United States?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A commonly cited US average around 2021 is approximately 76.4 years (CDC). The national average changes over time and can differ by sex, race/ethnicity, and county.',
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
        name: 'Life Expectancy by State',
        item: 'https://whenwillidiecalculator.com/life-expectancy-by-state',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy by State in the United States',
    description:
      'Life expectancy by state in the United States — ranked from highest to lowest. See how your state compares and what drives the differences using CDC data.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-state',
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

      <nav style={{ fontSize: 13, color: '#9a8f7a', marginBottom: 18 }}>
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          Home
        </Link>{' '}
        <span style={{ color: '#9a8f7a' }}>›</span> Life Expectancy by State
      </nav>

      <h1 style={H1_STYLE}>Life Expectancy by State in the United States</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Life expectancy in the United States varies meaningfully by state — often by as much as
        around 7 years between the highest and lowest states. Hawaii consistently ranks highest and
        Mississippi consistently ranks lowest in CDC summaries. These gaps reflect big differences
        in healthcare access, obesity and smoking rates, poverty, and environmental conditions. If
        you want to estimate your personal timeline, start with our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>{' '}
        — it takes about 60 seconds.
      </p>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>Life Expectancy by State (Approx. 2021)</h2>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#9a8f7a', marginBottom: 16 }}>
        Source: CDC National Center for Health Statistics (approximate 2021 figures). US average:
        {` ${US_AVG.toFixed(1)} years.`}
      </p>

      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Rank</th>
              <th style={thStyle}>State</th>
              <th style={thStyle}>Life Expectancy (Years)</th>
              <th style={thStyle}>vs US Average (+/−)</th>
            </tr>
          </thead>
          <tbody>
            {states.map((row, idx) => {
              const isTop5 = row.rank <= 5;
              const isBottom5 = row.rank >= 46 && row.rank <= 50;
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = isTop5 ? '#eaf6ee' : isBottom5 ? '#fdecec' : baseBg;
              return (
                <tr key={`${row.rank}-${row.state}`} style={{ background: bg }}>
                  <td style={tdStyle}>{row.rank}</td>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.state}</td>
                  <td style={tdStyle}>{row.years.toFixed(1)}</td>
                  <td
                    style={{
                      ...tdStyle,
                      fontWeight: 600,
                      color: row.years - US_AVG >= 0 ? '#1a5c2a' : '#7a1a1a',
                    }}
                  >
                    {formatDelta(row.years)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <h2 style={H2_STYLE}>What Drives Differences in State Life Expectancy?</h2>
      <p style={P_STYLE}>
        State life expectancy rankings are a snapshot of population-level trends — not a verdict on
        any individual. Still, the patterns are consistent. Smoking rates remain one of the biggest
        drivers of early mortality; states with higher tobacco use tend to see more cardiovascular
        disease, cancer, and chronic lung disease. Obesity and physical inactivity compound risk
        through diabetes, hypertension, and heart disease — and these are shaped by food
        environments, walkability, and safe places to be active.
      </p>
      <p style={P_STYLE}>
        Healthcare access matters too. Preventive care (blood pressure checks, diabetes screening,
        cancer screening, vaccinations) catches risk early — but insurance coverage and clinic
        availability vary widely, especially across rural areas. Poverty and income inequality
        influence stress load, housing stability, nutrition, and the ability to consistently access
        care. In some regions, the opioid crisis has also reduced life expectancy through overdose
        deaths, particularly among working-age adults.
      </p>
      <p style={P_STYLE}>
        Finally, “place” includes the built environment: transportation, air quality, occupational
        risk, and how quickly emergencies can be treated. The empowering takeaway is that these
        factors are not fixed — policy can improve systems, and individuals can still move the
        needle through the core habits in our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        . For the modeling assumptions, see{' '}
        <Link
          href="/methodology"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          how our calculator works
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>Highest and Lowest Life Expectancy States</h2>

      <h3 style={H3_STYLE}>States with the Highest Life Expectancy</h3>
      <p style={P_STYLE}>
        Hawaii tends to lead the rankings. Researchers often point to a combination of dietary
        patterns, daily activity, social connection, and lower smoking rates. Other high-ranking
        states like California, Minnesota, and Massachusetts also share strengths such as stronger
        preventive healthcare systems, higher education levels, and environments that support
        healthier defaults.
      </p>

      <h3 style={H3_STYLE}>States with the Lowest Life Expectancy</h3>
      <p style={P_STYLE}>
        Mississippi, West Virginia, Alabama, and Kentucky are frequently near the bottom. This is
        not about personal character — it reflects systemic issues: higher poverty rates, fewer
        healthcare resources in some areas, higher chronic disease burden, and higher rates of
        smoking and obesity. The encouraging news is that these trends can improve with sustained
        public health investment and local programs that make healthy choices easier.
      </p>

      <h2 style={H2_STYLE}>How to Improve Your Life Expectancy Regardless of Where You Live</h2>
      <p style={P_STYLE}>
        State averages matter — but individuals are not averages. Your choices compound over years.
        Quitting smoking, moving more, improving sleep quality, moderating alcohol, managing stress,
        and improving diet quality can all shift your personal trajectory. If you want to understand
        how these inputs stack together (and how they differ by sex), see{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy differences between men and women
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
        <div style={{ fontSize: 14, color: '#9a8f7a', lineHeight: 1.6 }}>
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
          href="https://www.cdc.gov/nchs/data-visualization/state-life-expectancy/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC National Center for Health Statistics — State Life Expectancy data
        </a>
        . Data reflects approximate 2021 figures; check CDC for the latest updates.
      </p>
    </main>
  );
}

