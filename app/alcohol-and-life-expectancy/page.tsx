import Link from 'next/link';

export const metadata = {
  title: 'Alcohol and Life Expectancy: What the Research Shows',
  description:
    'How does alcohol affect life expectancy? Heavy drinking costs 4–5 years. See the data by consumption level, the cancer risk, and what the latest research says about safe amounts.',
  keywords: [
    'alcohol and life expectancy',
    'alcohol life expectancy',
    'drinking life expectancy',
    'how does alcohol affect longevity',
    'alcohol mortality risk',
    'heavy drinking life expectancy',
  ],
  openGraph: {
    title: 'Alcohol and Life Expectancy | Life Expectancy Calculator',
    description:
      'How alcohol affects life expectancy by consumption level — the latest research, cancer risk, and what safe drinking actually means.',
    url: 'https://whenwillidiecalculator.com/alcohol-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/alcohol-and-life-expectancy',
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

const alcoholRows = [
  {
    level: 'None',
    definition: 'No alcohol',
    impact: '0 (baseline per latest research)',
    risk: '—',
    rowKey: 'none' as const,
  },
  {
    level: 'Light',
    definition: '1–2 drinks/week',
    impact: '~−0.5 years',
    risk: 'Minimal, slight cancer risk',
    rowKey: 'default' as const,
  },
  {
    level: 'Moderate',
    definition: '3–14 drinks/week',
    impact: '~−1 to −2 years',
    risk: 'Cancer, cardiovascular at higher end',
    rowKey: 'default' as const,
  },
  {
    level: 'Heavy',
    definition: '15–21 drinks/week',
    impact: '~−3 to −4 years',
    risk: 'Liver disease, cardiovascular, cancer',
    rowKey: 'default' as const,
  },
  {
    level: 'Very heavy',
    definition: '22+ drinks/week',
    impact: '~−4 to −5 years',
    risk: 'Multiple compounding pathways',
    rowKey: 'veryheavy' as const,
  },
];

export default function AlcoholAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does heavy drinking reduce life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Heavy alcohol use is associated with substantially higher all-cause mortality in large studies — on the order of roughly 4–5 fewer years of life expectancy compared with low-risk drinking patterns in some summaries, driven by liver disease, cancer, cardiovascular disease, injuries, and mental health complications. Exact estimates vary by cohort and definition of heavy use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is moderate drinking safe for life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recent global analyses that include cancer risk often find no net protective effect of moderate drinking when compared with abstention, after addressing common biases like sick quitters. Moderate drinking is not risk-free; the magnitude of harm is smaller than for heavy drinking but not necessarily zero at the population level.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does alcohol cause cancer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — ethanol is classified as a Group 1 carcinogen by IARC, with causal links to multiple cancers including cancers of the oral cavity, pharynx, larynx, esophagus, liver, colorectum, and breast. Risk increases with dose, but even lower average consumption can carry small increases for some cancers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the safest amount of alcohol to drink?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Major recent analyses such as the GBD 2016 alcohol work published in The Lancet (2018) concluded that the level of alcohol consumption minimizing overall health loss may be zero drinks. National guidelines differ; some agencies now emphasize lower weekly limits than in the past.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does red wine have longevity benefits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Older observational data suggested cardiovascular benefits, but more rigorous analyses and inclusion of cancer outcomes have weakened the case for net benefit from moderate wine. Resveratrol would require impractically large wine intake to match doses studied in cells; overall diet and lifestyle patterns explain much of prior paradoxes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can quitting alcohol add years back to your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reducing or stopping heavy drinking can lower blood pressure, liver injury progression, cancer risk over time, and injury risk — often improving survival and quality of life. The earlier heavy use is reduced, the more opportunity there is to prevent complications, though not all past damage is reversible.',
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
        name: 'Alcohol and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/alcohol-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Alcohol and Life Expectancy: What the Research Shows',
    description:
      'How does alcohol affect life expectancy? Heavy drinking costs 4–5 years. See the data by consumption level, the cancer risk, and what the latest research says about safe amounts.',
    url: 'https://whenwillidiecalculator.com/alcohol-and-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Alcohol and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Alcohol and Life Expectancy: What the Research Shows</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Alcohol&apos;s relationship with health and longevity has been debated for decades — and the
        research has shifted significantly in recent years. Earlier studies suggested moderate drinking
        might be protective for the heart. More recent large-scale analyses, including the GBD 2016
        Alcohol Collaborators study in The Lancet, found that when cancer risk is included, the safest
        amount of alcohol for overall health appears to be none. Heavy drinking clearly shortens life —
        costs of 4–5 years are well documented. But even moderate drinking carries measurable risks. This
        page presents the current evidence honestly. For a personalized estimate that includes alcohol as
        a factor, try our{' '}
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
              Years lost (heavy drinking)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~4–5 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Cancer types causally linked to alcohol
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>7</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Global deaths attributable to alcohol annually
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1612', marginTop: 6, lineHeight: 1.25 }}>
              ~3 million (WHO)
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans who drink heavily
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~6%</div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>Life Expectancy by Alcohol Consumption Level</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Consumption Level</th>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>Estimated Impact</th>
              <th style={thStyle}>Primary Risk</th>
            </tr>
          </thead>
          <tbody>
            {alcoholRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg =
                row.rowKey === 'none' ? '#eaf6ee' : row.rowKey === 'veryheavy' ? '#fdecec' : baseBg;
              return (
                <tr key={row.level} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.level}</td>
                  <td style={tdStyle}>{row.definition}</td>
                  <td style={tdStyle}>{row.impact}</td>
                  <td style={tdStyle}>{row.risk}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 16, marginBottom: 0 }}>
        Based on GBD 2016 Alcohol Collaborators, Lancet 2018, and Wood et al., Lancet 2018. Estimates
        reflect all-cause mortality including cancer risk.
      </p>

      <h2 style={H2_STYLE}>The Shift in Research — Why &quot;Moderate Drinking Is Good for You&quot; Is Outdated</h2>
      <p style={P_STYLE}>
        For decades, observational studies suggested that moderate drinkers had lower cardiovascular
        mortality than abstainers — producing headlines about red wine being heart-healthy. More
        rigorous recent analyses have largely overturned this finding. The problem with early studies:
        abstainers included people who quit drinking due to illness, pulling up mortality in the
        &quot;non-drinker&quot; comparison group. When studies control for &quot;sick quitters&quot; and
        include cancer mortality alongside cardiovascular mortality, the protective effect of moderate
        alcohol largely disappears. The GBD 2016 Alcohol Collaborators study — one of the most
        comprehensive analyses ever conducted, covering 195 countries — concluded that the safest level
        of alcohol consumption for overall health is zero drinks per week. This doesn&apos;t mean one
        drink will meaningfully harm you. It means that at a population level, no protective threshold
        has been established that outweighs the cancer risk alcohol carries at any consumption level.
      </p>

      <h2 style={H2_STYLE}>Alcohol and Cancer — The Most Underappreciated Risk</h2>
      <p style={P_STYLE}>
        Alcohol is a Group 1 carcinogen — the highest classification used by the International Agency for
        Research on Cancer (IARC). It is causally linked to seven cancer types: mouth, pharynx, larynx,
        esophagus, liver, colorectal, and breast cancer. The mechanism is direct: alcohol is metabolized
        to acetaldehyde, a toxic compound that damages DNA and prevents repair. This damage accumulates
        with each drink and does not require heavy consumption — even light drinking is associated with
        a small but real increase in breast cancer risk, for example. Cancer is the primary reason recent
        research has moved away from the &quot;moderate drinking is protective&quot; narrative. When
        cardiovascular benefits and cancer harms are both included in the analysis, the net effect of any
        alcohol consumption is neutral to negative for most people.
      </p>

      <h2 style={H2_STYLE}>How Alcohol Shortens Life — The Mechanisms</h2>
      <p style={P_STYLE}>
        Beyond cancer, alcohol affects longevity through several pathways. Liver disease: chronic heavy
        drinking causes fatty liver, alcoholic hepatitis, and cirrhosis — conditions that significantly
        shorten life when advanced. Cardiovascular: while light drinking may have modest blood pressure
        benefits in some studies, heavy drinking raises blood pressure, causes cardiomyopathy (weakened
        heart muscle), and is associated with atrial fibrillation. Neurological: alcohol is neurotoxic
        at high doses — heavy drinkers show accelerated cognitive decline and higher dementia risk. Sleep:
        alcohol disrupts REM sleep and sleep architecture, compounding metabolic and cardiovascular risk
        over time. Mental health: alcohol dependence dramatically increases depression and suicide risk.
        Accidents and violence: alcohol is involved in approximately half of all traffic fatalities and a
        significant proportion of violent injuries in the US — a major source of premature death
        particularly in younger adults.
      </p>

      <h2 style={H2_STYLE}>What the Research Actually Recommends</h2>
      <p style={P_STYLE}>
        The clearest recommendation from current evidence: if you don&apos;t drink, don&apos;t start. If
        you drink, less is better than more — and there is no consumption level at which alcohol is
        actively beneficial when all health outcomes are considered together. The Canadian Centre on
        Substance Use and Addiction updated its guidelines in 2023 to recommend no more than 2 standard
        drinks per week as the threshold above which health risks become clearly significant. This is a
        substantial shift from older guidelines. For people who enjoy alcohol, the goal is not
        perfection — it is honest awareness of the trade-off and informed choice about where to set
        personal limits.
      </p>

      <h2 style={H2_STYLE}>Alcohol and the &quot;French Paradox&quot;</h2>
      <p style={P_STYLE}>
        The French Paradox — the observation that France has relatively low cardiovascular disease despite
        high saturated fat consumption and moderate wine drinking — was long used to argue for red
        wine&apos;s protective effects. More recent analysis attributes the paradox primarily to
        differences in diet composition, portion sizes, and how cardiovascular deaths were classified
        rather than to alcohol. The resveratrol in red wine, often cited as the active longevity
        ingredient, would require quantities of wine far exceeding what anyone drinks to produce
        measurable effects. The French Paradox is an interesting epidemiological puzzle — but it is not a
        reliable argument for drinking wine as a health strategy.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Alcohol</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes alcohol as one of seven lifestyle modifiers. None is the
        zero-adjustment baseline per current research; light drinking subtracts approximately 0.5 years;
        moderate drinking subtracts approximately 1 year; heavy drinking subtracts approximately 4–5
        years. These adjustments are based on GBD 2016 Alcohol Collaborators (Lancet 2018) and Wood et
        al. (Lancet 2018). Move the alcohol slider to see how your current consumption level affects your
        estimate in real time.
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
          href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)31310-2/fulltext"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          GBD 2016 Alcohol Collaborators, Lancet 2018
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)30134-X/fulltext"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Wood et al., Lancet 2018
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.who.int/news-room/fact-sheets/detail/alcohol"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          WHO Alcohol
        </a>
      </p>

      <p style={P_STYLE}>
        Related:{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link
          href="/smoking-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          smoking and life expectancy
        </Link>
        ,{' '}
        <Link
          href="/stress-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          stress and life expectancy
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
