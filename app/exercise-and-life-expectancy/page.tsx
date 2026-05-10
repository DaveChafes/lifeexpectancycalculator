import Link from 'next/link';

export const metadata = {
  title: 'Exercise and Life Expectancy: How Much Does It Add?',
  description:
    'How much does exercise add to life expectancy? Research shows regular activity adds 2–4 years. See the data by activity level and what type of exercise matters most.',
  keywords: [
    'exercise and life expectancy',
    'exercise life expectancy years',
    'physical activity longevity',
    'how much does exercise extend life',
    'exercise mortality risk',
    'sedentary life expectancy',
  ],
  openGraph: {
    title: 'Exercise and Life Expectancy | Life Expectancy Calculator',
    description:
      'How much does exercise add to your life? Research shows 2–4 years — see the data by activity level and exercise type.',
    url: 'https://whenwillidiecalculator.com/exercise-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/exercise-and-life-expectancy',
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

const activityRows = [
  {
    level: 'Sedentary',
    weekly: 'Less than 30 min',
    yearsAdded: '0 (baseline)',
    riskReduction: '—',
    highlight: false,
  },
  {
    level: 'Lightly active',
    weekly: '30–74 min moderate',
    yearsAdded: '+1.8 years',
    riskReduction: '~10%',
    highlight: false,
  },
  {
    level: 'Meets guidelines',
    weekly: '150 min moderate',
    yearsAdded: '+3.4 years',
    riskReduction: '~31%',
    highlight: true,
  },
  {
    level: 'Double guidelines',
    weekly: '300 min moderate',
    yearsAdded: '+4.2 years',
    riskReduction: '~37%',
    highlight: false,
  },
  {
    level: 'Very active',
    weekly: '450+ min moderate',
    yearsAdded: '+4.5 years',
    riskReduction: '~39%',
    highlight: false,
  },
];

export default function ExerciseAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many years does exercise add to your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Large cohort studies suggest meeting WHO guidelines (about 150 minutes per week of moderate activity) is associated with roughly 3 additional years of life expectancy versus being sedentary, with higher volumes associated with up to about 4 years in some analyses. Even below-guideline activity is linked to meaningful gains compared with inactivity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the minimum amount of exercise for longevity benefits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Research indicates the largest mortality reduction comes from moving from zero activity to some activity. Roughly half of guideline levels (for example, about 75 minutes per week of moderate activity) is still associated with substantial benefit versus sedentary behavior in population studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is walking enough to extend life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — brisk walking counts as moderate activity and is one of the most evidence-backed ways to improve longevity. Consistency at a conversational-but-working pace (often called Zone 2) captures much of the mortality benefit seen in epidemiologic studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does strength training improve life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Strength training is associated with lower all-cause mortality independent of aerobic activity in many analyses, likely through preserved muscle mass, better metabolic health, and reduced injury and disability risk. Guidelines commonly recommend muscle-strengthening activities at least two days per week alongside aerobic work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it too late to start exercising after 50?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — studies find mortality benefits when people become active in midlife or later, even after earlier sedentary periods. Strength, balance, and aerobic training remain valuable for function and survival as people age.',
        },
      },
      {
        '@type': 'Question',
        name: 'What type of exercise is best for longevity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The strongest long-term evidence supports regular moderate aerobic activity (such as brisk walking, cycling, or easy jogging) plus resistance training a few times per week. High-intensity interval training can be time-efficient, but moderate continuous activity has the broadest epidemiologic support.',
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
        name: 'Exercise and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/exercise-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Exercise and Life Expectancy: How Much Does It Add?',
    description:
      'How much does exercise add to life expectancy? Research shows regular activity adds 2–4 years. See the data by activity level and what type of exercise matters most.',
    url: 'https://whenwillidiecalculator.com/exercise-and-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Exercise and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Exercise and Life Expectancy: How Much Does It Add?</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Exercise is the closest thing to a longevity polypill that exists. Regular physical activity
        adds an estimated 2–4 years of life expectancy in large population studies — and the benefits
        extend well beyond lifespan into healthspan, the years of life spent in good health. The
        relationship between exercise and mortality is one of the most replicated findings in
        epidemiology: physically active people die later and spend more of their later years
        functional and independent. This page covers what the research shows by activity level, what
        types of exercise matter most, and how to get most of the benefit with the least time
        investment. For a personalized estimate, try our{' '}
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
              Years added (active vs sedentary)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~2–4 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Weekly activity for most benefit
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              150 min moderate
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Mortality risk reduction (active vs sedentary)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~30–35%</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans meeting activity guidelines
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~24%</div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>How Much Does Exercise Actually Add to Life Expectancy?</h2>
      <p style={P_STYLE}>
        The most cited study on exercise and life expectancy is Moore et al. (PLOS Medicine, 2012),
        which analyzed data from over 650,000 adults and found that people who met the WHO physical
        activity guideline (150 minutes of moderate activity per week) lived an average of 3.4 years
        longer than inactive people. More activity produced more benefit up to a point — people doing
        twice the recommended amount lived about 4.2 years longer. Even small amounts of activity
        helped: people who did half the recommended amount still lived 1.8 years longer than completely
        sedentary individuals. The relationship is dose-response but with diminishing returns — you
        capture most of the mortality benefit at relatively modest activity levels. Going from zero to
        some exercise is the biggest single jump. Going from moderate to very active produces smaller
        additional gains.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy by Activity Level</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Activity Level</th>
              <th style={thStyle}>Weekly Activity</th>
              <th style={thStyle}>Years Added vs Sedentary</th>
              <th style={thStyle}>Mortality Risk Reduction</th>
            </tr>
          </thead>
          <tbody>
            {activityRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = row.highlight ? '#eaf6ee' : baseBg;
              return (
                <tr key={row.level} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.level}</td>
                  <td style={tdStyle}>{row.weekly}</td>
                  <td style={tdStyle}>{row.yearsAdded}</td>
                  <td style={tdStyle}>{row.riskReduction}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginTop: 16, marginBottom: 0 }}>
        Based on Moore SC et al., PLOS Medicine 2012 (650,000+ adults). Moderate activity = brisk
        walking, cycling, swimming at conversational pace.
      </p>

      <h2 style={H2_STYLE}>Why Exercise Extends Life — The Mechanisms</h2>
      <p style={P_STYLE}>
        Exercise doesn&apos;t just burn calories — it produces systemic biological adaptations that
        slow aging across multiple pathways. Cardiovascular: regular aerobic exercise strengthens the
        heart muscle, improves arterial flexibility, lowers resting blood pressure, and raises HDL
        cholesterol. Metabolic: exercise improves insulin sensitivity, reducing risk of Type 2 diabetes
        and metabolic syndrome. Inflammatory: physically active people have lower levels of chronic
        inflammatory markers (CRP, IL-6) that drive cardiovascular disease, cancer, and
        neurodegeneration. Cellular: exercise stimulates mitochondrial biogenesis (more
        energy-producing organelles per cell) and is associated with longer telomeres — a marker of
        biological aging. Neurological: exercise increases BDNF (brain-derived neurotrophic factor),
        which supports cognitive function and reduces dementia risk. These parallel pathways explain
        why exercise is associated with reduced mortality from cardiovascular disease, cancer,
        diabetes, and neurodegenerative disease simultaneously — it addresses multiple root causes at
        once.
      </p>

      <h2 style={H2_STYLE}>What Type of Exercise Matters Most?</h2>

      <h3 style={H3_STYLE}>Zone 2 Cardio (Moderate Aerobic)</h3>
      <p style={P_STYLE}>
        Zone 2 cardio — exercise at a pace where you can hold a conversation but are breathing
        noticeably harder — is the most studied activity for longevity outcomes. Brisk walking,
        cycling, swimming, and jogging at an easy pace all qualify. Most of the mortality benefit in
        large studies comes from this intensity range. The 150-minute weekly recommendation is based on
        Zone 2 equivalents. For longevity, consistency at moderate intensity outperforms occasional
        high-intensity efforts.
      </p>

      <h3 style={H3_STYLE}>Strength Training</h3>
      <p style={P_STYLE}>
        Muscle mass declines with age — a process called sarcopenia — and lower muscle mass is
        associated with higher mortality, particularly in older adults. Strength training 2–3 times
        per week preserves muscle mass, improves metabolic health, reduces injury risk, and is
        associated with lower all-cause mortality independent of aerobic activity. Research increasingly
        supports combining aerobic and resistance training for the strongest longevity outcomes. Peter
        Attia and other longevity researchers emphasize that grip strength and leg strength are among
        the best predictors of longevity in middle-aged and older adults.
      </p>

      <h3 style={H3_STYLE}>High-Intensity Interval Training (HIIT)</h3>
      <p style={P_STYLE}>
        HIIT produces cardiovascular and metabolic adaptations in less time than Zone 2 cardio —
        making it a time-efficient option. However, the mortality data is less robust for HIIT
        specifically compared to moderate continuous exercise, partly because fewer long-term studies
        exist. For people with limited time, HIIT is a reasonable approach. For people with the time, a
        combination of Zone 2 cardio and strength training has the strongest evidence base for
        longevity.
      </p>

      <h2 style={H2_STYLE}>The Sedentary Penalty — What Inactivity Actually Costs</h2>
      <p style={P_STYLE}>
        Being completely sedentary is not a neutral baseline — it is an active risk factor. Large
        studies find that sedentary individuals have 30–35% higher all-cause mortality than active peers.
        Prolonged sitting specifically — independent of whether someone exercises — is associated with
        elevated cardiovascular and metabolic risk. Office workers who sit for 8+ hours daily but
        exercise for 30 minutes have better outcomes than those who don&apos;t exercise, but worse
        outcomes than those who both exercise and break up sitting with regular movement. The practical
        implication: even standing up and walking for 2 minutes every hour produces measurable
        reductions in the metabolic harm of prolonged sitting. Exercise and reducing sedentary time are
        separate but complementary interventions.
      </p>

      <h2 style={H2_STYLE}>How Little Exercise Do You Actually Need?</h2>
      <p style={P_STYLE}>
        The good news from the research is that you don&apos;t need to do very much to capture most of
        the mortality benefit. Going from zero activity to 30 minutes of brisk walking three times per
        week moves you out of the &quot;sedentary&quot; mortality risk category. The data from Moore et
        al. shows that half the recommended amount (75 minutes per week) still adds nearly 2 years
        compared to doing nothing. The law of diminishing returns means the first 150 minutes per week
        of moderate activity gives you the biggest bang for your buck — roughly 3.4 additional years.
        Everything beyond that adds smaller incremental gains. If you&apos;re currently sedentary, a
        20-minute daily walk is not a consolation prize — it is most of the available mortality benefit.
      </p>

      <h2 style={H2_STYLE}>Exercise and Life Expectancy After 50</h2>
      <p style={P_STYLE}>
        The mortality benefit of exercise does not diminish with age — if anything, it becomes more
        important. Studies consistently find that becoming physically active in middle age or later
        produces meaningful longevity benefits even for people who were sedentary earlier in life. A
        50-year-old who starts exercising regularly can still capture most of the mortality benefit
        compared to a lifelong exerciser. Muscle preservation through strength training becomes
        increasingly critical after 50 as sarcopenia accelerates. Balance and flexibility training
        reduces fall risk — a major cause of mortality in older adults. It is never too late to start.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Exercise</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes exercise as one of seven lifestyle modifiers. The
        options — Sedentary, Light, Active, Very Active — map to the activity levels in the research:
        sedentary subtracts approximately 3 years from the base estimate; light is the neutral baseline;
        active adds approximately 2 years; very active adds approximately 3 years. These adjustments
        are based on Moore et al. (PLOS Medicine 2012) and associated research. Move the exercise slider
        and watch the years update in real time.
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
          href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1001335"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Moore SC et al., PLOS Medicine 2012
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/physicalactivity/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Physical Activity Guidelines
        </a>
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
        Related:{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link href="/bmi-life-expectancy" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          BMI and life expectancy
        </Link>
        ,{' '}
        <Link
          href="/smoking-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          smoking and life expectancy
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
