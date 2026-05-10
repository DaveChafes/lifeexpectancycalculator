import Link from 'next/link';

export const metadata = {
  title: 'Life Expectancy by Race and Ethnicity in the US',
  description:
    'Life expectancy by race and ethnicity in the United States — CDC data showing gaps, causes, and what drives differences across population groups.',
  keywords: [
    'life expectancy by race',
    'life expectancy by ethnicity',
    'racial life expectancy gap',
    'black white life expectancy gap',
    'hispanic life expectancy',
    'asian american life expectancy',
  ],
  openGraph: {
    title: 'Life Expectancy by Race and Ethnicity | Life Expectancy Calculator',
    description:
      'CDC data on life expectancy by race and ethnicity in the US — gaps, causes, and what drives differences.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-race',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-by-race',
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

/* Mirrored from app/life-expectancy-by-state/page.tsx (unused on this page — no H3 sections). */
/* eslint-disable @typescript-eslint/no-unused-vars */
const H3_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#1a1612',
  margin: '24px 0 8px 0',
};
/* eslint-enable @typescript-eslint/no-unused-vars */

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

const raceRows = [
  { group: 'Asian American', years: 83.5, rowKey: 'asian' },
  { group: 'Hispanic / Latino', years: 77.7, rowKey: 'default' },
  { group: 'White (non-Hispanic)', years: 76.4, rowKey: 'default' },
  { group: 'US Average', years: 76.4, rowKey: 'usAvg' },
  { group: 'Black (non-Hispanic)', years: 70.8, rowKey: 'default' },
  { group: 'American Indian / Alaska Native', years: 65.2, rowKey: 'aian' },
] as const;

function deltaDisplayAndColor(
  years: number,
  rowKey: string
): { text: string; color: string } {
  if (rowKey === 'usAvg') {
    return { text: '—', color: '#4a3f2f' };
  }
  const d = Number((years - US_AVG).toFixed(1));
  if (Object.is(d, -0) || d === 0) {
    return { text: '+0.0', color: '#4a3f2f' };
  }
  if (d > 0) {
    return { text: `+${d.toFixed(1)}`, color: '#1a5c2a' };
  }
  return { text: d.toFixed(1), color: '#7a1a1a' };
}

export default function LifeExpectancyByRacePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which racial or ethnic group has the highest life expectancy in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In CDC period life expectancy summaries (approximate 2021 figures), Asian Americans have the highest average life expectancy among major racial and ethnic groups tracked — roughly 83.5 years in commonly cited estimates. These are population averages; individual outcomes vary widely within every group.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Black Americans have lower life expectancy than white Americans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The gap is driven primarily by structural and systemic factors — not biology — including socioeconomic inequality, differences in healthcare access and quality, higher burdens of chronic conditions in some communities when care is delayed, residential segregation and environmental exposures, and chronic stress linked to discrimination. Historical policies such as redlining also shaped neighborhood conditions that still influence health today.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Hispanic paradox in life expectancy research?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Hispanic paradox refers to the observation that Hispanic and Latino Americans often live longer on average than non-Hispanic white Americans despite lower average income and more inconsistent healthcare access in the aggregate. Researchers propose multiple explanations: stronger family and social support, dietary patterns, lower smoking rates in some subgroups, and a healthy immigrant effect. The pattern is real in national data but the causes are multifactorial.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do Asian Americans live longer on average?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'National averages for Asian Americans reflect several converging influences in population data: lower smoking and alcohol use in many subgroups, higher average educational attainment linked to income and care access, dietary patterns associated with lower cardiovascular risk, and social cohesion. The category is highly heterogeneous — Southeast Asian subgroups, for example, often have very different outcomes than the aggregate suggests.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are racial life expectancy gaps getting smaller or larger?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trends vary by period and measure. Some gaps narrowed in certain decades, while others widened again after shocks like the COVID-19 pandemic, which disproportionately affected some communities. Public health researchers emphasize that gaps are not fixed — they respond to policy, healthcare investment, and social conditions — and individuals can still improve personal trajectories through evidence-based habits and care.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can individuals do to improve their life expectancy regardless of race?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The strongest individual levers are consistent across groups: not smoking, regular physical activity, blood pressure management, quality sleep, healthy diet patterns, moderate alcohol use, and preventive care such as screenings and vaccinations. Population averages describe group trends; personal habits and timely treatment can shift individual outcomes substantially relative to any group average.',
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
        name: 'Life Expectancy by Race and Ethnicity',
        item: 'https://whenwillidiecalculator.com/life-expectancy-by-race',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy by Race and Ethnicity in the United States',
    description:
      'Life expectancy by race and ethnicity in the United States — CDC data showing gaps, causes, and what drives differences across population groups.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-race',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Life Expectancy by Race and Ethnicity
      </nav>

      <h1 style={H1_STYLE}>Life Expectancy by Race and Ethnicity in the United States</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Life expectancy in the United States varies significantly by race and ethnicity — gaps that
        reflect decades of research into how systemic factors, healthcare access, socioeconomic
        conditions, and chronic stress shape health outcomes across population groups. These
        differences are not explained by biology. They are explained by history, policy, and
        environment — which means they are also changeable. This page presents CDC data on life
        expectancy by race and ethnicity, explains what drives the gaps, and connects the findings to
        what individuals can do regardless of where they start. For a personalized estimate based on
        your habits, try our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <div
        style={{
          borderLeft: '3px solid #c9a84c',
          paddingLeft: 16,
          background: '#fffdf7',
          borderRadius: 8,
          padding: '14px 16px',
        }}
      >
        <p style={{ ...P_STYLE, marginBottom: 0, fontSize: 15 }}>
          The data on this page reflects population-level averages from CDC research. These figures
          describe group trends — they do not determine any individual&apos;s lifespan. Individual
          lifestyle choices, healthcare access, and circumstances vary enormously within every group.
          This page is intended to inform, not to limit anyone&apos;s sense of what is possible.
        </p>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>Life Expectancy by Race and Ethnicity (CDC Data)</h2>

      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Group</th>
              <th style={thStyle}>Life Expectancy</th>
              <th style={thStyle}>vs US Average (+/−)</th>
            </tr>
          </thead>
          <tbody>
            {raceRows.map((row, idx) => {
              const { text: deltaText, color: deltaColor } = deltaDisplayAndColor(row.years, row.rowKey);
              const isAsian = row.rowKey === 'asian';
              const isAian = row.rowKey === 'aian';
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = isAsian ? '#eaf6ee' : isAian ? '#fdecec' : baseBg;
              return (
                <tr key={row.group} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.group}</td>
                  <td style={tdStyle}>{row.years.toFixed(1)} years</td>
                  <td style={{ ...tdStyle, fontWeight: 600, color: deltaColor }}>{deltaText}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 16, marginBottom: 0 }}>
        Source: CDC National Center for Health Statistics, 2021 data. Figures reflect period life
        expectancy estimates. The COVID-19 pandemic affected all groups but had disproportionate
        impacts on some — these figures reflect that period.
      </p>

      <h2 style={H2_STYLE}>What Drives These Gaps?</h2>
      <p style={P_STYLE}>
        The life expectancy gaps between racial and ethnic groups in the US are not primarily
        biological. Research consistently points to structural and systemic drivers. Socioeconomic
        factors — income, wealth, housing stability, food security — shape access to nutritious food,
        safe environments for physical activity, and the ability to consistently access preventive
        healthcare. Residential segregation has concentrated poverty and environmental hazards in ways
        that compound health risk over generations. Healthcare access and quality disparities mean
        that conditions like hypertension, diabetes, and cancer are caught later and treated less
        consistently in some communities. Chronic stress from discrimination and economic precarity
        has measurable physiological effects — elevating cortisol, raising blood pressure, and
        accelerating biological aging. The Black-white gap specifically reflects centuries of
        structural inequality with direct health consequences: from redlining that shaped neighborhood
        environments to disparities in pain management and maternal care that persist in research today.
        The American Indian / Alaska Native gap reflects the ongoing health consequences of historical
        trauma, poverty, and geographic isolation from healthcare infrastructure.
      </p>

      <h2 style={H2_STYLE}>The Hispanic Paradox</h2>
      <p style={P_STYLE}>
        One of the most studied findings in health research is the &quot;Hispanic paradox&quot; — the
        observation that Hispanic and Latino Americans live longer on average than non-Hispanic white
        Americans, despite having lower average incomes and less consistent healthcare access.
        Researchers have proposed several explanations: stronger social and family networks that buffer
        stress and support health behaviors, dietary patterns that provide metabolic protection, lower
        smoking rates in some subgroups, and a &quot;healthy immigrant effect&quot; where people who
        immigrate tend to be healthier than average at the time of arrival. The paradox is real in the
        data but complex in its causes — and it highlights that socioeconomic disadvantage does not
        automatically translate to worse health outcomes when protective factors are strong.
      </p>

      <h2 style={H2_STYLE}>Asian American Life Expectancy — Why the Gap Is So Large</h2>
      <p style={P_STYLE}>
        Asian Americans have the highest life expectancy of any racial or ethnic group tracked by the
        CDC — roughly 83.5 years on average, about 7 years above the national average. This reflects
        several converging factors: lower rates of smoking and alcohol use across many Asian American
        subgroups, strong educational attainment that correlates with income and healthcare access,
        dietary patterns associated with lower cardiovascular risk, and strong social cohesion.
        However, &quot;Asian American&quot; is a highly heterogeneous category — it includes groups with
        very different socioeconomic profiles, immigration histories, and health outcomes. Vietnamese
        Americans, Hmong Americans, and other Southeast Asian subgroups often have significantly worse
        outcomes than the aggregate suggests. The aggregate figure masks substantial within-group
        variation.
      </p>

      <h2 style={H2_STYLE}>What Individuals Can Do Regardless of Group Average</h2>
      <p style={P_STYLE}>
        Population averages describe starting points — they do not set ceilings. The lifestyle factors
        that most affect individual life expectancy operate independently of race and ethnicity: not
        smoking adds roughly 10 years regardless of group membership. Regular exercise adds 2–3 years.
        Quality sleep, stress management, healthy weight, and diet quality each contribute additional
        years. A Black American who doesn&apos;t smoke, exercises regularly, sleeps well, and manages
        their blood pressure is on a trajectory that significantly outperforms the group average —
        and likely outperforms the US average entirely. The systemic factors that drive group gaps are
        real and worth addressing at a policy level. At the individual level, the habits that protect
        health are available to everyone. Our life expectancy calculator lets you see how your specific
        habits stack up — use it as a baseline for what you can change.
      </p>

      <h2 style={H2_STYLE}>Closing the Gap — What the Research Says Works</h2>
      <p style={P_STYLE}>
        Research on health equity interventions consistently points to several approaches that narrow
        racial life expectancy gaps: expanding access to preventive care (blood pressure screening,
        diabetes screening, cancer screening) in underserved communities; reducing environmental health
        hazards through housing and zoning policy; community health worker programs that improve care
        navigation; and addressing chronic stress through economic stability programs. At the individual
        level, the most impactful single action across all groups is the same: not smoking. Followed
        by regular physical activity, blood pressure management, and consistent preventive care. The
        gap between the highest and lowest groups in the US — roughly 18 years between Asian Americans
        and American Indian / Alaska Native populations — represents a massive opportunity for both
        policy and individual action.
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
          CDC NCHS — Life expectancy
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/healthequity/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Health Equity
        </a>
      </p>

      <p style={P_STYLE}>
        Related:{' '}
        <Link href="/life-expectancy-by-state" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy by state
        </Link>
        ,{' '}
        <Link
          href="/average-life-expectancy-usa"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          average life expectancy in the USA
        </Link>
        ,{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        , and{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy: men vs women
        </Link>
        .
      </p>
    </main>
  );
}
