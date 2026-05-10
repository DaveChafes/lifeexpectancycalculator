import Link from 'next/link';

export const metadata = {
  title: 'Stress and Life Expectancy: What Chronic Stress Actually Costs',
  description:
    'How does chronic stress affect life expectancy? Research shows high stress subtracts 2–3 years. See the mechanisms, the data, and what actually reduces stress-related mortality risk.',
  keywords: [
    'stress and life expectancy',
    'chronic stress life expectancy',
    'stress longevity',
    'does stress shorten your life',
    'stress mortality risk',
    'how stress affects lifespan',
  ],
  openGraph: {
    title: 'Stress and Life Expectancy | Life Expectancy Calculator',
    description:
      'How chronic stress shortens life — the mechanisms, the data, and what moves the needle.',
    url: 'https://whenwillidiecalculator.com/stress-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/stress-and-life-expectancy',
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

const stressRows = [
  {
    level: 'Low',
    description: 'Manageable, good recovery',
    impact: '+1 year vs average',
    mechanism: 'Lower cortisol, better sleep, stronger immune function',
    rowKey: 'low' as const,
  },
  {
    level: 'Medium',
    description: 'Typical daily stress',
    impact: '0 (baseline)',
    mechanism: '—',
    rowKey: 'medium' as const,
  },
  {
    level: 'High',
    description: 'Chronic, poorly managed',
    impact: '−2 to −3 years',
    mechanism: 'Cardiovascular, immune, metabolic pathways',
    rowKey: 'high' as const,
  },
  {
    level: 'Severe / Traumatic',
    description: 'PTSD, chronic trauma',
    impact: '−3 to −5 years',
    mechanism: 'Multiple compounding pathways',
    rowKey: 'severe' as const,
  },
];

export default function StressAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does stress really shorten your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chronic stress is associated with higher all-cause mortality in large cohort studies, partly through cardiovascular disease, metabolic dysregulation, immune changes, and mental health conditions. Acute stress is normal; sustained activation of stress systems over years is the pattern most linked to earlier death in population data.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many years does chronic stress take off your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Estimates vary by measurement and population, but high chronic stress and job strain have been associated with mortality differences on the order of roughly 2–3 years in some summaries, with larger impacts possible in severe trauma-related conditions. Individual trajectories depend heavily on genetics, support, sleep, activity, and care access.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Whitehall II study?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Whitehall II is a long-running cohort study of British civil servants that has produced influential findings on how work stress, socioeconomic position, and cardiometabolic risk relate to disease and mortality. Kivimäki et al. (BMJ, 2012) is a widely cited analysis linking job strain to cardiovascular mortality within this cohort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is social isolation as bad as smoking for life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some meta-analyses and commentaries compare the mortality risk of poor social connection to well-known hazards; Holt-Lunstad’s work is often summarized as large increases in mortality risk for social disconnection. Exact equivalence to a specific number of cigarettes varies by analysis, but the consensus is that isolation is a major, modifiable risk factor.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most effective way to reduce chronic stress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Evidence supports regular physical activity, sleep improvement, structured mindfulness or breathing practices, psychotherapy when indicated, and strengthening social ties. The best intervention is one you can sustain; exercise and social connection have especially broad effects across multiple biological pathways.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you reverse the damage from years of chronic stress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Biology is not destiny. Risk markers linked to stress — such as blood pressure, inflammation, sleep, and mood — often improve when people adopt consistent exercise, better sleep routines, social connection, and evidence-based mental health treatment. Full reversal is not guaranteed, but meaningful risk reduction is realistic for many people.',
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
        name: 'Stress and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/stress-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stress and Life Expectancy: What Chronic Stress Actually Costs',
    description:
      'How does chronic stress affect life expectancy? Research shows high stress subtracts 2–3 years. See the mechanisms, the data, and what actually reduces stress-related mortality risk.',
    url: 'https://whenwillidiecalculator.com/stress-and-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Stress and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Stress and Life Expectancy: What Chronic Stress Actually Costs</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Stress is one of the most studied — and most misunderstood — factors in longevity research.
        Acute stress is normal and even adaptive. Chronic stress, sustained over months and years, is a
        genuine mortality risk factor — associated with higher rates of cardiovascular disease, immune
        dysfunction, accelerated biological aging, and mental health conditions that compound physical
        risk. The Whitehall II study, one of the longest-running occupational health studies in the
        world, found that chronic work stress was associated with significantly higher mortality. This
        page covers what the research shows, why stress shortens life, and what interventions actually
        help. For a personalized estimate, try our{' '}
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
              Years lost (chronic high stress)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~2–3 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Mortality risk increase (high vs low stress)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~20–30%</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Social isolation mortality risk
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1612', marginTop: 6, lineHeight: 1.35 }}>
              equivalent to smoking 15 cigarettes/day
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans reporting high stress
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~27% (APA)</div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>How Chronic Stress Affects Life Expectancy</h2>
      <p style={P_STYLE}>
        The distinction between acute and chronic stress is critical. Acute stress — a job interview, a
        near-miss while driving — triggers the fight-or-flight response, which is adaptive and
        self-limiting. Cortisol and adrenaline spike, heart rate increases, attention sharpens, then the
        system returns to baseline. Chronic stress — financial precarity, relationship conflict, job
        insecurity, caregiving burden, discrimination — keeps this system partially activated for
        months or years. The Whitehall II study (Kivimäki et al., BMJ 2012), following over 10,000 civil
        servants for decades, found that people with high job strain had significantly higher rates of
        cardiovascular disease and premature death. The mechanisms: chronically elevated cortisol raises
        blood pressure, promotes visceral fat accumulation, impairs immune function, disrupts sleep,
        and accelerates telomere shortening — a cellular marker of biological aging. Stress doesn&apos;t
        just feel bad. It leaves measurable biological marks.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy Impact by Stress Level</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Stress Level</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Estimated Impact</th>
              <th style={thStyle}>Primary Mechanism</th>
            </tr>
          </thead>
          <tbody>
            {stressRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg =
                row.rowKey === 'low' ? '#eaf6ee' : row.rowKey === 'high' ? '#fdecec' : baseBg;
              return (
                <tr key={row.level} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.level}</td>
                  <td style={tdStyle}>{row.description}</td>
                  <td style={tdStyle}>{row.impact}</td>
                  <td style={tdStyle}>{row.mechanism}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 16, marginBottom: 0 }}>
        Based on Kivimäki et al., BMJ 2012 (Whitehall II study) and associated research. Individual
        variation is significant.
      </p>

      <h2 style={H2_STYLE}>How Stress Shortens Life — The Biological Mechanisms</h2>
      <p style={P_STYLE}>
        Chronic stress activates the HPA (hypothalamic-pituitary-adrenal) axis, producing sustained
        cortisol elevation. Cortisol is essential in short bursts — it mobilizes energy, reduces
        inflammation acutely, and sharpens focus. Chronically elevated, it does the opposite: it
        promotes visceral fat accumulation (the most metabolically dangerous fat), raises blood pressure,
        suppresses immune function, and disrupts sleep architecture. Cardiovascular consequences are the
        most studied: chronic stress doubles the risk of heart attack in some analyses, through arterial
        inflammation, elevated blood pressure, and increased clotting tendency. Telomere shortening —
        the erosion of protective caps on chromosomes that occurs with each cell division — is
        accelerated by chronic stress, effectively aging cells faster than the calendar would suggest.
        Mental health consequences compound physical ones: depression, which stress strongly predicts, is
        an independent mortality risk factor associated with 10–20 years of reduced life expectancy in
        severe cases.
      </p>

      <h2 style={H2_STYLE}>Social Connection — The Most Underrated Longevity Factor</h2>
      <p style={P_STYLE}>
        Social isolation and loneliness are among the strongest mortality risk factors identified in
        recent research — with some analyses finding that chronic loneliness carries a mortality risk
        equivalent to smoking 15 cigarettes per day. Strong social connections buffer the physiological
        stress response, improve immune function, promote health behaviors, and provide meaning and
        purpose. The mechanisms overlap significantly with stress: social support reduces cortisol
        response to stressors, lowers blood pressure, and improves sleep. Julianne Holt-Lunstad&apos;s
        meta-analyses, covering 308,000 participants, found that people with adequate social relationships
        had a 50% greater likelihood of survival compared to those with poor social connections. Longevity
        research increasingly identifies social connection not as a nice-to-have but as a core
        biological need with measurable mortality consequences when unmet.
      </p>

      <h2 style={H2_STYLE}>What Actually Reduces Chronic Stress — Evidence-Based Approaches</h2>

      <h3 style={H3_STYLE}>Exercise</h3>
      <p style={P_STYLE}>
        Exercise is the most evidence-backed stress intervention with longevity implications. It reduces
        cortisol over time, improves sleep, raises mood through endorphin and BDNF release, and provides
        a reliable physiological downregulation signal. Even 20–30 minutes of moderate activity produces
        measurable cortisol reduction. See{' '}
        <Link href="/exercise-and-life-expectancy" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          exercise and life expectancy
        </Link>{' '}
        for the full research.
      </p>

      <h3 style={H3_STYLE}>Mindfulness and deliberate downregulation</h3>
      <p style={P_STYLE}>
        Mindfulness-based stress reduction (MBSR) has the strongest evidence base among psychological
        stress interventions — with studies showing reductions in cortisol, blood pressure, and
        inflammatory markers. Even simple deliberate breathing (4-7-8 breathing, box breathing)
        produces measurable parasympathetic activation within minutes. The key mechanism: voluntary slow
        breathing directly activates the vagus nerve, triggering the rest-and-digest response that
        counteracts chronic fight-or-flight activation.
      </p>

      <h3 style={H3_STYLE}>Social connection</h3>
      <p style={P_STYLE}>
        Investing in existing relationships is one of the highest-ROI stress interventions available.
        Frequency of social contact matters more than depth — regular low-effort contact (a quick call,
        a shared meal) produces measurable stress buffering. Loneliness is a modifiable risk factor, not
        a fixed state.
      </p>

      <h3 style={H3_STYLE}>Sleep</h3>
      <p style={P_STYLE}>
        Stress and sleep have a bidirectional relationship — stress disrupts sleep, and poor sleep
        amplifies stress reactivity. Improving sleep quality (
        <Link href="/sleep-and-life-expectancy" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          see sleep and life expectancy
        </Link>
        ) directly reduces cortisol and stress sensitivity. Addressing sleep is often the most direct
        route to breaking the stress-sleep cycle.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Stress</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes stress as one of seven lifestyle modifiers. Low stress
        adds approximately 1 year to the base estimate; medium stress is the neutral baseline; high
        stress subtracts approximately 2–3 years. These adjustments are based on Kivimäki et al. (BMJ
        2012) and associated cardiovascular and mortality research. Move the stress slider and watch the
        years update in real time — then consider which of the interventions above is most accessible
        for your situation.
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
          href="https://www.bmj.com/content/345/bmj.e7015"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Kivimäki et al., BMJ 2012
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1000316"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Holt-Lunstad meta-analysis
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/mentalhealth/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Mental Health
        </a>
      </p>

      <p style={P_STYLE}>
        Related:{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link
          href="/sleep-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          sleep and life expectancy
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
