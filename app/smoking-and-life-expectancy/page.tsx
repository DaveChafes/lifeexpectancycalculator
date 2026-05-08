import Link from 'next/link';

export const metadata = {
  title: 'Smoking and Life Expectancy: How Much Does It Cost You?',
  description:
    'How much does smoking reduce life expectancy? Research shows daily smokers lose an average of 10 years. See the data by smoking status, age of quitting, and what recovery looks like.',
  keywords: [
    'smoking and life expectancy',
    'how much does smoking reduce life expectancy',
    'smoking life expectancy years lost',
    'quitting smoking life expectancy',
    'smoker life expectancy',
    'cigarettes life expectancy',
  ],
  openGraph: {
    title: 'Smoking and Life Expectancy | Life Expectancy Calculator',
    description:
      'Daily smokers lose an average of 10 years of life. See the research, the recovery curve, and what quitting adds back.',
    url: 'https://whenwillidiecalculator.com/smoking-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/smoking-and-life-expectancy',
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

const smokingStatusRows = [
  {
    status: 'Never smoker',
    yearsLost: '0',
    notes: 'Baseline',
  },
  {
    status: 'Former smoker (quit before 40)',
    yearsLost: '~1 year',
    notes: 'Recovers ~9 of 10 lost years',
  },
  {
    status: 'Former smoker (quit at 40–49)',
    yearsLost: '~3 years',
    notes: 'Still significant recovery',
  },
  {
    status: 'Former smoker (quit at 50–59)',
    yearsLost: '~5 years',
    notes: 'Meaningful but partial recovery',
  },
  {
    status: 'Former smoker (quit at 60+)',
    yearsLost: '~6–7 years',
    notes: 'Recovery still occurs',
  },
  {
    status: 'Occasional smoker',
    yearsLost: '~3 years',
    notes: 'Less than daily but still significant',
  },
  {
    status: 'Light daily smoker (1–10/day)',
    yearsLost: '~5 years',
    notes: 'Dose-response relationship',
  },
  {
    status: 'Moderate daily smoker (11–20/day)',
    yearsLost: '~8 years',
    notes: '—',
  },
  {
    status: 'Heavy daily smoker (20+/day)',
    yearsLost: '~10+ years',
    notes: 'Strongest evidence base',
  },
];

const quitMilestones = [
  { when: '20 minutes:', text: 'heart rate drops toward normal' },
  { when: '12 hours:', text: 'carbon monoxide levels normalize' },
  {
    when: '2 weeks–3 months:',
    text: 'circulation improves, lung function begins recovering',
  },
  { when: '1 year:', text: 'excess coronary artery disease risk drops by ~50%' },
  { when: '5 years:', text: 'stroke risk approaches that of a never-smoker' },
  {
    when: '10 years:',
    text: 'lung cancer risk drops to roughly half that of a continuing smoker',
  },
  {
    when: '15 years:',
    text: 'coronary artery disease risk approaches that of a never-smoker',
  },
];

export default function SmokingAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many years does smoking take off your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Large prospective cohort studies commonly cite about 10 years of life expectancy lost for daily smokers compared with never-smokers. Occasional or lighter smoking is associated with smaller but still meaningful reductions — often around 3 years for occasional smoking in population summaries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does quitting smoking add years back to your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Quitting earlier tends to recover more of the lost life expectancy — people who quit before age 40 often regain much of the roughly 10-year deficit — while quitting later still adds meaningful years compared with continuing to smoke.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long after quitting smoking does life expectancy improve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some physiological benefits begin within minutes to hours (heart rate, carbon monoxide). Cardiovascular and cancer risks decline over months to years — with major milestones often cited around 1 year for heart disease risk reduction and up to roughly 10–15 years for lung cancer and coronary disease risk to move closer to never-smoker levels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is occasional smoking still harmful to life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Population studies generally find no safe level of smoking for longevity. Occasional smoking typically carries smaller risks than heavy daily smoking, but it can still reduce life expectancy compared with not smoking.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the leading cause of preventable death in the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tobacco use is widely cited by US public health agencies as one of the leading preventable causes of death because it contributes heavily to cancer, cardiovascular disease, and chronic lung disease.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does smoking affect life expectancy compared to other risk factors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Smoking is among the largest single modifiable drivers of premature mortality at the population level — often comparable to or larger than many individual lifestyle risks because it damages multiple organ systems simultaneously. Combining cessation with blood pressure control, exercise, and healthy diet typically yields additive benefits.',
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
        name: 'Smoking and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/smoking-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Smoking and Life Expectancy: How Much Does It Cost You?',
    description:
      'How much does smoking reduce life expectancy? Research shows daily smokers lose an average of 10 years. See the data by smoking status, age of quitting, and what recovery looks like.',
    url: 'https://whenwillidiecalculator.com/smoking-and-life-expectancy',
    publisher: {
      '@type': 'Organization',
      name: 'Life Expectancy Calculator',
      url: 'https://whenwillidiecalculator.com',
    },
  };

  const tdNotesStyle = { ...tdStyle, whiteSpace: 'normal' as const };

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
        <span style={{ color: '#6b5e4e' }}>›</span> Smoking and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Smoking and Life Expectancy: How Much Does It Cost You?</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Smoking is the single largest modifiable risk factor for early death in the United States.
        Daily smokers lose an average of about 10 years of life compared to people who never smoke —
        a finding that has held up across decades of large cohort studies. But the story isn&apos;t just
        about loss: it&apos;s also about recovery. People who quit smoking before age 40 recover most of
        that lost decade. Even quitting at 60 adds meaningful years. This page covers what the research
        shows, how the numbers break down by smoking status, and what quitting does to your trajectory.
        For a personalized estimate, try our{' '}
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
              Years lost (daily smoker)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~10 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years lost (occasional smoker)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~3 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years recovered (quit before 40)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~9 of 10 years
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              US smokers who die from smoking-related illness
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~50%
            </div>
          </div>
        </div>
      </div>

      <h2 style={H2_STYLE}>How Much Does Smoking Reduce Life Expectancy?</h2>
      <p style={P_STYLE}>
        The most widely cited figure comes from large prospective cohort studies — including the Million
        Women Study in the UK and the Cancer Prevention Study in the US — which consistently find that
        daily smokers lose approximately 10 years of life expectancy compared to never-smokers. The
        mechanism is cumulative: smoking damages the cardiovascular system, causes chronic obstructive
        pulmonary disease (COPD), and is causally linked to at least 12 types of cancer. The damage
        compounds over decades, which is why the 10-year figure applies most strongly to lifelong heavy
        smokers. Light or occasional smokers see smaller but still significant reductions — roughly 3
        years in population studies. There is no safe level of smoking for life expectancy, but the
        dose-response relationship is real: fewer cigarettes per day is associated with less harm than
        more.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy by Smoking Status</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
          <thead>
            <tr>
              <th style={thStyle}>Smoking Status</th>
              <th style={thStyle}>Estimated Years Lost</th>
              <th style={{ ...thStyle, whiteSpace: 'normal' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {smokingStatusRows.map((row, idx) => (
              <tr
                key={row.status}
                style={{ background: idx % 2 === 0 ? '#fffdf7' : '#f7f2e8' }}
              >
                <td style={{ ...tdStyle, fontWeight: 600, whiteSpace: 'normal' }}>{row.status}</td>
                <td style={tdStyle}>{row.yearsLost}</td>
                <td style={tdNotesStyle}>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 12, marginBottom: 0 }}>
        Estimates based on large cohort studies including the Million Women Study (Peto et al.) and US
        Cancer Prevention Study (CPS-II). Individual variation is real — these are population averages.
      </p>

      <h2 style={H2_STYLE}>What Happens to Your Body When You Quit</h2>
      <p style={P_STYLE}>
        The encouraging truth is that quitting starts a repair process almost immediately — not someday
        far in the future. Within minutes to hours, cardiovascular strain begins to ease as heart rate
        stabilizes and carbon monoxide clears from your blood. Over the next weeks and months, circulation
        and lung function typically trend upward, which often translates into easier breathing and more
        stamina for daily activities. The biggest payoffs accumulate over years: excess coronary risk
        falls sharply by the first anniversary, stroke risk keeps improving toward never-smoker levels,
        and lung cancer risk declines substantially — with continued gains over a decade or more. None of
        this erases the past, but it reframes what comes next: each smoke-free day is an investment in
        function, energy, and odds. The milestones below sketch a typical recovery arc from major public
        health summaries — use them as motivation, and ask your clinician how they apply to your health
        history.
      </p>

      <h3 style={{ ...H3_STYLE, marginTop: 12 }}>Recovery milestones after you quit</h3>
      <div
        style={{
          border: '1px solid #e8dfc8',
          borderRadius: 14,
          padding: '16px 20px',
          background: '#fffdf7',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {quitMilestones.map((m) => (
          <div
            key={m.when}
            style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
          >
            <span style={{ color: '#c9a84c', fontWeight: 700, flexShrink: 0 }}>{m.when}</span>
            <span style={{ fontSize: 15, color: '#4a3f2f', lineHeight: 1.7 }}>{m.text}</span>
          </div>
        ))}
      </div>

      <h2 style={H2_STYLE}>The Quitting Recovery Curve — Years Added Back by Age of Quitting</h2>
      <p style={P_STYLE}>
        The earlier you quit, the more you recover — but recovery at any age is real and meaningful.
        A 30-year-old who quits recovers nearly all of the 10 years they were on track to lose. A
        50-year-old who quits still adds 4–6 years compared to continuing. A 60-year-old adds 3–4 years.
        These are not small numbers — they represent thousands of weeks of life. Our life expectancy
        calculator shows this in real time: move the smoking slider from Daily to None and watch the
        years and weeks update instantly.
      </p>

      <h2 style={H2_STYLE}>Smoking and Specific Causes of Death</h2>
      <p style={P_STYLE}>
        Smoking doesn&apos;t kill through one pathway — it accelerates multiple causes simultaneously.
        Lung cancer: smokers are 15–30 times more likely to develop it than never-smokers.
        Cardiovascular disease: smoking doubles the risk of heart attack and significantly raises stroke
        risk. COPD: smoking causes approximately 85% of COPD cases. Other cancers causally linked to
        smoking: mouth, throat, esophagus, stomach, kidney, bladder, pancreas, cervix, and acute myeloid
        leukemia. This multi-pathway damage is why the life expectancy impact is so large — and why
        quitting produces recovery across multiple systems simultaneously. For people with existing heart
        disease, quitting is the single highest-impact intervention available. See{' '}
        <Link
          href="/life-expectancy-with-heart-disease"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy with heart disease
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>How to Quit: What the Evidence Says Works</h2>
      <p style={P_STYLE}>
        Willpower alone has a low success rate — about 3–5% of unassisted quit attempts succeed long-term.
        Combination approaches work significantly better. The most evidence-backed methods: nicotine
        replacement therapy (NRT) — patches, gum, lozenges — doubles quit rates compared to placebo.
        Prescription medications (varenicline/Cytisine) show the strongest single-agent evidence.
        Behavioral counseling combined with pharmacotherapy roughly triples success rates. The practical
        recommendation from most public health bodies: use medication plus counseling, not willpower
        alone. Resources: the CDC&apos;s smoking cessation page (
        <a
          href="https://www.cdc.gov/tobacco/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          cdc.gov/tobacco
        </a>
        ),{' '}
        <a
          href="tel:+18007847869"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          1-800-QUIT-NOW
        </a>{' '}
        (free coaching in every US state), and your primary care provider who can prescribe cessation
        medications. Framing note: quitting is hard because nicotine is genuinely addictive — struggling
        doesn&apos;t mean weakness, it means the substance is doing what it&apos;s designed to do.
      </p>

      <h2 style={H2_STYLE}>Smoking and Life Expectancy: The Bottom Line</h2>
      <p style={P_STYLE}>
        Smoking costs an average of 10 years. Quitting recovers most of them, especially before age 50.
        Every year of continued smoking after a quit attempt costs more than the year before. The weeks
        recovered by quitting — often thousands — are the same weeks that matter most: the ones with
        grandchildren, travel, good health, and presence. Our life expectancy calculator lets you see your
        specific number and what quitting adds back in real time.
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
          href="https://www.cdc.gov/tobacco/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Tobacco
        </a>
      </p>
      <p style={P_STYLE}>
        Million Women Study / Peto et al.: Peto R et al., large UK cohort studies on smoking mortality.
      </p>
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
        Read about{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link
          href="/life-expectancy-with-heart-disease"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy with heart disease
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
