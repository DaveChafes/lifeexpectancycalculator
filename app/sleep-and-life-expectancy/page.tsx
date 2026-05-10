import Link from 'next/link';

export const metadata = {
  title: 'Sleep and Life Expectancy: How Much Does Sleep Matter?',
  description:
    'How does sleep affect life expectancy? Research shows both too little and too much sleep increase mortality risk. See the data and what the optimal sleep window looks like.',
  keywords: [
    'sleep and life expectancy',
    'sleep life expectancy',
    'how does sleep affect longevity',
    'lack of sleep life expectancy',
    'optimal sleep longevity',
    'sleep duration mortality',
  ],
  openGraph: {
    title: 'Sleep and Life Expectancy | Life Expectancy Calculator',
    description:
      'How sleep duration affects life expectancy — the U-shaped curve, optimal range, and what poor sleep actually costs you.',
    url: 'https://whenwillidiecalculator.com/sleep-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/sleep-and-life-expectancy',
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

const sleepRows = [
  {
    duration: 'Under 5 hours',
    category: 'Very short',
    impact: '~−2 to −3 years',
    mortality: '+15% all-cause mortality',
    highlight: false,
  },
  {
    duration: '5–6 hours',
    category: 'Short',
    impact: '~−1 to −2 years',
    mortality: '+12% all-cause mortality',
    highlight: false,
  },
  {
    duration: '6–7 hours',
    category: 'Below optimal',
    impact: '~−0.5 years',
    mortality: '+7% all-cause mortality',
    highlight: false,
  },
  {
    duration: '7–8 hours',
    category: 'Optimal',
    impact: '0 (baseline)',
    mortality: 'Lowest mortality risk',
    highlight: true,
  },
  {
    duration: '8–9 hours',
    category: 'Slightly long',
    impact: 'Neutral',
    mortality: 'Similar to optimal',
    highlight: false,
  },
  {
    duration: '9+ hours',
    category: 'Long',
    impact: 'Variable',
    mortality: '+30% (partly confounded)',
    highlight: false,
  },
];

export default function SleepAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does sleep affect life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Population studies link both short and long sleep with higher all-cause mortality in a U-shaped pattern, with the lowest risk commonly observed around roughly 7–8 hours per night. Short sleep is thought to act partly through cardiovascular, metabolic, immune, and neurocognitive pathways; long sleep associations are often partly confounded by underlying illness.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many hours of sleep is optimal for longevity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Meta-analyses typically identify the lowest mortality risk near about 7–8 hours of sleep per night for adults, though individual needs vary. Consistency of schedule and sleep quality also matter alongside duration.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does sleeping too much shorten your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Studies find higher mortality among people reporting more than about 9 hours of sleep, but this relationship is often less clearly causal than short sleep because illness and medications can increase time in bed. Long sleep should prompt discussion with a clinician rather than panic.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens to your body when you chronically under-sleep?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chronic short sleep is associated with higher blood pressure, impaired glucose regulation, altered appetite hormones, elevated stress hormones, reduced immune function, and worse next-day cognition. Over years, these pathways can contribute to cardiovascular disease, diabetes, and other conditions linked to earlier mortality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can improving sleep quality add years to your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While randomized trials rarely measure lifespan directly, improving sleep duration and quality can improve blood pressure, glucose control, mood, and daytime functioning on timescales of weeks to months. Given sleep’s role in major chronic diseases, better sleep is a plausible lever for improving long-term health trajectories.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the single most important thing to improve sleep?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sleep specialists often emphasize a consistent wake time every day (including weekends) to stabilize circadian timing and build predictable sleep pressure. Morning light exposure and a cool, dark bedroom are also high-yield supports for many people.',
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
        name: 'Sleep and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/sleep-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sleep and Life Expectancy: How Much Does Sleep Matter?',
    description:
      'How does sleep affect life expectancy? Research shows both too little and too much sleep increase mortality risk. See the data and what the optimal sleep window looks like.',
    url: 'https://whenwillidiecalculator.com/sleep-and-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Sleep and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Sleep and Life Expectancy: How Much Does Sleep Matter?</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Sleep is one of the most underrated factors in longevity — and one of the most actionable.
        Research consistently shows that both too little and too much sleep are associated with
        higher mortality, producing a U-shaped curve with the sweet spot at 7–8 hours per night.
        Chronic sleep deprivation raises risk for cardiovascular disease, diabetes, obesity, and immune
        dysfunction — all major drivers of early death. The good news: sleep quality is modifiable,
        and improvements produce measurable health benefits relatively quickly. This page covers what
        the research shows and what you can do about it. For a personalized estimate that includes
        sleep as a factor, try our{' '}
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
              Optimal sleep duration
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>7–8 hours</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years lost (chronic under 6hrs)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~2 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans sleeping under 7hrs
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~35%</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Mortality risk increase (under 6hrs)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~12%</div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>The U-Shaped Curve — Why Both Too Little and Too Much Sleep Matter</h2>
      <p style={P_STYLE}>
        The relationship between sleep duration and mortality is not linear — it follows a U-shape.
        People sleeping less than 6 hours per night have significantly higher mortality than those
        sleeping 7–8 hours. But people sleeping more than 9 hours also have elevated mortality risk —
        though this association is partly confounded by underlying illness that causes both long sleep
        and poor health. The Cappuccini et al. meta-analysis (Sleep, 2010), analyzing data from 1.3
        million people across 16 studies, found that short sleep (under 6 hours) was associated with a
        12% increase in all-cause mortality, and long sleep (over 9 hours) with a 30% increase. The long
        sleep association is likely less causal than the short sleep one — sick people sleep more,
        pulling up mortality in that category. The short sleep association is more clearly causal:
        sleep deprivation directly drives biological mechanisms that shorten life.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy by Sleep Duration</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Sleep Duration</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Estimated Impact</th>
              <th style={thStyle}>Mortality Risk Change</th>
            </tr>
          </thead>
          <tbody>
            {sleepRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = row.highlight ? '#eaf6ee' : baseBg;
              return (
                <tr key={row.duration} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.duration}</td>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.impact}</td>
                  <td style={tdStyle}>{row.mortality}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 16, marginBottom: 0 }}>
        Based on Cappuccini et al., Sleep 2010 meta-analysis (1.3 million participants). Long sleep
        association is partly confounded by underlying illness.
      </p>

      <h2 style={H2_STYLE}>How Sleep Deprivation Shortens Life — The Mechanisms</h2>
      <p style={P_STYLE}>
        Sleep is not passive downtime — it is when the body performs critical maintenance. During deep
        sleep, the brain&apos;s glymphatic system clears metabolic waste products including amyloid beta,
        a protein associated with Alzheimer&apos;s disease. Growth hormone is released, driving cellular
        repair. The immune system consolidates its response to pathogens and produces cytokines that
        regulate inflammation. Chronic sleep deprivation disrupts all of these processes simultaneously.
        The cardiovascular consequences are well documented: poor sleep raises blood pressure, increases
        arterial inflammation, and elevates cortisol — all accelerating atherosclerosis. Metabolic
        consequences include impaired insulin sensitivity and increased appetite (particularly for
        high-calorie foods), driving weight gain and diabetes risk. Immune consequences include reduced
        vaccine efficacy and higher susceptibility to infection. The compounding effect of these parallel
        pathways explains why chronic short sleep is associated with higher mortality across multiple
        cause-of-death categories simultaneously.
      </p>

      <h2 style={H2_STYLE}>What Moves the Needle on Sleep Quality</h2>

      <h3 style={H3_STYLE}>Consistent wake time</h3>
      <p style={P_STYLE}>
        The single most evidence-backed sleep intervention is a consistent wake time — getting up at the
        same time every day, including weekends. This anchors the circadian rhythm more reliably than
        bedtime consistency. A fixed wake time builds sleep pressure (adenosine accumulation) that
        makes falling asleep easier the following night. Most sleep researchers consider this the
        foundational habit before any other sleep intervention.
      </p>

      <h3 style={H3_STYLE}>Light exposure</h3>
      <p style={P_STYLE}>
        Morning light exposure within 30–60 minutes of waking sets the circadian clock and improves
        sleep quality that night. Evening light exposure — particularly blue light from screens —
        suppresses melatonin and delays sleep onset. Reducing screen brightness after sunset and
        getting outdoor light in the morning are low-cost interventions with strong mechanistic support.
      </p>

      <h3 style={H3_STYLE}>Temperature</h3>
      <p style={P_STYLE}>
        Core body temperature drops during sleep onset — and a cool bedroom (around 65–68°F / 18–20°C)
        facilitates this drop. Sleep quality degrades in warm environments. Cooling the sleep
        environment is one of the most consistent findings in sleep research for improving sleep depth and
        continuity.
      </p>

      <h3 style={H3_STYLE}>Alcohol and sleep</h3>
      <p style={P_STYLE}>
        Alcohol is widely misunderstood as a sleep aid. While it reduces sleep onset time, it
        significantly disrupts sleep architecture — suppressing REM sleep and causing fragmented sleep
        in the second half of the night. People who drink before bed often sleep more hours but wake
        feeling less rested. For sleep quality specifically, reducing or eliminating alcohol before bed
        produces rapid improvements.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Sleep</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes sleep as one of seven lifestyle modifiers. The
        options — Under 6hrs, 6–8hrs, 8+hrs — map to the research categories: poor sleep (under 6 hours)
        subtracts approximately 2 years from the base estimate; 6–8 hours is the neutral baseline; 8+
        hours adds approximately 1 year based on associations between optimal sleep and reduced
        mortality. These adjustments are based on Cappuccini et al. (Sleep 2010) and associated
        research.
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
          href="https://academic.oup.com/sleep/article/33/5/585/2454458"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Cappuccini et al., Sleep 2010
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/sleep/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Sleep
        </a>
      </p>

      <p style={P_STYLE}>
        Related:{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link
          href="/stress-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          stress and life expectancy
        </Link>
        ,{' '}
        <Link
          href="/exercise-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          exercise and life expectancy
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
