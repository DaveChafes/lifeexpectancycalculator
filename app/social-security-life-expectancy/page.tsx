import Link from 'next/link';

export const metadata = {
  title: 'Social Security Life Expectancy Calculator',
  description:
    'How the Social Security Administration calculates life expectancy — and what it means for your retirement planning. SSA Period Life Table data by age and sex.',
  keywords: [
    'social security life expectancy',
    'social security life expectancy calculator',
    'ssa life expectancy table',
    'social security break even age',
    'when to claim social security',
    'life expectancy retirement planning',
  ],
  openGraph: {
    title: 'Social Security Life Expectancy | Life Expectancy Calculator',
    description:
      'How SSA calculates life expectancy and what it means for your retirement. Break-even age, claiming strategy, and SSA table data.',
    url: 'https://whenwillidiecalculator.com/social-security-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/social-security-life-expectancy',
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

const boxStyle = {
  border: '1px solid #e8dfc8',
  borderRadius: 14,
  padding: '18px 18px',
  background: '#fffdf7',
};

const ssaTableRows = [
  { age: 0, maleEx: 74.8, maleLife: 74.8, femaleEx: 80.2, femaleLife: 80.2 },
  { age: 25, maleEx: 51.2, maleLife: 76.2, femaleEx: 56.8, femaleLife: 81.8 },
  { age: 30, maleEx: 46.5, maleLife: 76.5, femaleEx: 51.0, femaleLife: 81.0 },
  { age: 35, maleEx: 41.9, maleLife: 76.9, femaleEx: 46.2, femaleLife: 81.2 },
  { age: 40, maleEx: 37.2, maleLife: 77.2, femaleEx: 41.3, femaleLife: 81.3 },
  { age: 45, maleEx: 32.7, maleLife: 77.7, femaleEx: 36.6, femaleLife: 81.6 },
  { age: 50, maleEx: 28.4, maleLife: 78.4, femaleEx: 31.9, femaleLife: 81.9 },
  { age: 55, maleEx: 24.2, maleLife: 79.2, femaleEx: 27.4, femaleLife: 82.4 },
  { age: 60, maleEx: 20.4, maleLife: 80.4, femaleEx: 23.1, femaleLife: 83.1 },
  { age: 62, maleEx: 18.9, maleLife: 80.9, femaleEx: 21.5, femaleLife: 83.5 },
  { age: 65, maleEx: 17.1, maleLife: 82.1, femaleEx: 19.2, femaleLife: 84.2 },
  { age: 67, maleEx: 15.6, maleLife: 82.6, femaleEx: 17.6, femaleLife: 84.6 },
  { age: 70, maleEx: 14.0, maleLife: 84.0, femaleEx: 15.5, femaleLife: 85.5 },
  { age: 75, maleEx: 11.2, maleLife: 86.2, femaleEx: 12.5, femaleLife: 87.5 },
  { age: 80, maleEx: 8.7, maleLife: 88.7, femaleEx: 9.6, femaleLife: 89.6 },
];

const CLAIM_HIGHLIGHT_AGES = new Set([62, 65, 67]);

export default function SocialSecurityLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Social Security life expectancy table?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Social Security Administration publishes an annual Period Life Table with mortality and life expectancy statistics by age and sex. It includes columns such as qx (one-year death probability), lx (survivors from an initial cohort), and ex (expected additional years of life). Financial planners and policymakers use it as a population-level baseline for longevity modeling.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the SSA calculate life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the Period Life Table, life expectancy at a given age is represented by ex — the average number of additional years of life expected for people who have reached that age, based on current period mortality rates. It reflects population averages for that snapshot year, not an individualized forecast.',
        },
      },
      {
        '@type': 'Question',
        name: 'At what age should I claim Social Security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no universal best age. You can claim as early as 62 (with a reduced benefit) or delay up to 70 (with a higher benefit). The best choice depends on your expected longevity, health, other income sources, tax situation, and spouse benefits — topics to discuss with a qualified financial planner.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the break-even age for Social Security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Break-even age is when cumulative benefits from delaying claiming surpass cumulative benefits from claiming early. It varies by benefit amounts and rules, but many analyses land roughly between ages 78 and 82. SSA period life expectancy tables provide population averages that help frame — but do not replace — personalized planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Social Security use my personal health to calculate benefits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Your Social Security retirement benefit formula is based on earnings history and claiming age — not private health data. SSA life expectancy tables are statistical summaries for the population; they do not incorporate individual medical records or lifestyle.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I use life expectancy to plan my retirement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use longevity assumptions to stress-test claiming timing, portfolio withdrawals, long-term care risk, and insurance needs. Many planners pair SSA-style averages with conservative tail assumptions (for example, planning to advanced ages) because underestimating longevity can be financially costly.',
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
        name: 'Social Security Life Expectancy',
        item: 'https://whenwillidiecalculator.com/social-security-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Social Security Life Expectancy: What the SSA Data Means for Your Retirement',
    description:
      'How the Social Security Administration calculates life expectancy — and what it means for your retirement planning. SSA Period Life Table data by age and sex.',
    url: 'https://whenwillidiecalculator.com/social-security-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Social Security Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>
        Social Security Life Expectancy: What the SSA Data Means for Your Retirement
      </h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        The Social Security Administration publishes life expectancy tables used by financial planners,
        insurers, and policymakers to model retirement outcomes. Understanding what these tables say —
        and what they don&apos;t — can meaningfully affect when you claim Social Security benefits and how
        you plan your retirement income. This page explains how the SSA Period Life Table works, what
        your life expectancy looks like by age and sex, and how to think about the break-even age for
        claiming. For a personalized estimate that factors in your lifestyle habits, try our{' '}
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
              SSA Male Life Expectancy at Birth
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              74.8 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              SSA Female Life Expectancy at Birth
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              80.2 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Full Retirement Age (FRA)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>67</div>
            <div style={{ fontSize: 13, color: '#6b5e4e', marginTop: 2 }}>(born 1960 or later)</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Typical Break-Even Age
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~78–82 years
            </div>
          </div>
        </div>
      </div>

      <h2 style={H2_STYLE}>What Is the SSA Period Life Table?</h2>
      <p style={P_STYLE}>
        The SSA publishes a Period Life Table annually — the most recent comprehensive version is the
        2022 table. It contains three key columns for each age from 0 to 110, separately for males and
        females: qx (the probability of dying within one year at that age), lx (the number of survivors
        out of 100,000 starting at birth), and ex (the expected number of additional years of life
        remaining). Our life expectancy calculator uses ex directly — it looks up your age and sex,
        reads the ex value, and adds it to your current age to produce your estimated lifespan. The
        table reflects population averages and does not account for individual lifestyle factors — which
        is why our calculator adds lifestyle sliders on top of the base estimate.
      </p>

      <h2 style={H2_STYLE}>SSA Life Expectancy by Age and Sex</h2>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginBottom: 16 }}>
        Source: SSA 2022 Period Life Table (public domain).
      </p>

      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
          <thead>
            <tr>
              <th style={thStyle}>Current Age</th>
              <th style={thStyle}>Male (additional years)</th>
              <th style={thStyle}>Male (estimated lifespan)</th>
              <th style={thStyle}>Female (additional years)</th>
              <th style={thStyle}>Female (estimated lifespan)</th>
            </tr>
          </thead>
          <tbody>
            {ssaTableRows.map((row, idx) => {
              const isClaimAge = CLAIM_HIGHLIGHT_AGES.has(row.age);
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = isClaimAge ? '#fdf6e3' : baseBg;
              return (
                <tr key={row.age} style={{ background: bg }}>
                  <td style={tdStyle}>{row.age}</td>
                  <td style={tdStyle}>{row.maleEx.toFixed(1)}</td>
                  <td style={tdStyle}>{row.maleLife.toFixed(1)}</td>
                  <td style={tdStyle}>{row.femaleEx.toFixed(1)}</td>
                  <td style={tdStyle}>{row.femaleLife.toFixed(1)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 12, marginBottom: 0 }}>
        Ages 62, 65, and 67 highlighted — key Social Security claiming decision points.
      </p>

      <h2 style={H2_STYLE}>How Life Expectancy Affects Your Social Security Claiming Decision</h2>
      <p style={P_STYLE}>
        You can claim Social Security as early as age 62 (reduced benefit) or delay up to age 70
        (maximum benefit — roughly 8% more per year of delay past full retirement age). The break-even
        analysis — the age at which delaying pays off more than claiming early — typically falls between
        78 and 82 years depending on your full retirement age and benefit amount. If the SSA table says
        a 62-year-old man has an additional 18.9 years of life expectancy (to about age 81), he sits
        right at the break-even zone. For a 62-year-old woman with 21.5 additional years (to about
        83.5), delaying is statistically more likely to pay off. Important framing: these are averages
        — your personal health, lifestyle, and financial situation all matter. A smoker with poor health
        may rationally claim early; a healthy non-smoker may benefit from maximum delay. This is not
        financial advice — consult a financial planner for personalized guidance.
      </p>

      <h2 style={H2_STYLE}>Break-Even Age: When Delayed Claiming Pays Off</h2>
      <p style={P_STYLE}>
        The break-even age is the point at which the cumulative benefit from delaying Social Security
        equals what you would have received by claiming early. A rough rule: if you expect to live past
        your early-to-mid 80s, delaying to 70 tends to produce more lifetime income. If you have reason
        to expect a shorter lifespan — serious health conditions, family history — claiming earlier may
        make more sense. The SSA table gives population averages; your life expectancy calculator
        estimate (especially with lifestyle adjustments) gives a more personalized starting point for this
        conversation.
      </p>

      <h3 style={H3_STYLE}>Simple Break-Even Example</h3>
      <div style={boxStyle}>
        <p style={{ ...P_STYLE, marginBottom: 0 }}>
          If your full retirement age benefit is $2,000/month at 67, claiming at 62 gives you
          $1,400/month. Delaying to 70 gives you $2,480/month. Break-even: approximately age 80. If you
          live past 80, delaying wins. If you live to the SSA average for a 62-year-old man (~81),
          it&apos;s essentially a wash — lifestyle factors tip the decision.
        </p>
      </div>

      <h2 style={H2_STYLE}>What the SSA Table Doesn&apos;t Tell You</h2>
      <p style={P_STYLE}>
        The SSA Period Life Table is a population average. It doesn&apos;t know if you smoke, how much you
        exercise, your BMI, your sleep quality, or your stress levels. Research consistently shows that
        lifestyle factors can shift individual life expectancy by 10–15 years relative to the population
        average. A 60-year-old non-smoker who exercises regularly may have a realistic life expectancy
        5–8 years above the SSA table average for their age and sex. That changes the break-even math
        significantly. Our life expectancy calculator applies evidence-based lifestyle adjustments on top
        of the SSA base estimate — giving you a more personalized number to plug into your retirement
        planning.
      </p>

      <h2 style={H2_STYLE}>Social Security Life Expectancy and Retirement Planning</h2>
      <p style={P_STYLE}>
        Life expectancy is one input into a larger retirement planning picture that includes your savings
        rate, investment returns, healthcare costs, inflation, Social Security benefit amount, and
        spending needs. Financial planners often recommend planning to age 90 or 95 as a conservative
        assumption — not because most people live that long, but because the risk of outliving your money
        is more damaging than the risk of leaving some behind. The SSA table gives you the median; prudent
        planning accounts for the possibility of being on the longer end of the distribution. Related:
        see how life expectancy differs between{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          men and women
        </Link>{' '}
        — the gap is meaningful for couples planning joint retirement income.
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
          href="https://www.ssa.gov/oact/STATS/table4c6.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          SSA 2022 Period Life Table
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.ssa.gov/benefits/retirement/planner/agereduction.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          SSA Retirement Planner
        </a>
      </p>

      <p style={P_STYLE}>
        Explore{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy for men vs women
        </Link>
        ,{' '}
        <Link
          href="/average-life-expectancy-usa"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          average life expectancy in the USA
        </Link>
        , and{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        .
      </p>
    </main>
  );
}
