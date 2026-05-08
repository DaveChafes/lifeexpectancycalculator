import Link from 'next/link';

export const metadata = {
  title: 'How to Live Longer: 10 Evidence-Based Habits',
  description:
    'How to live longer — 10 evidence-based habits backed by longevity research. Practical, actionable, and ranked by how many years each habit adds. Based on SSA actuarial data and peer-reviewed studies.',
  keywords: [
    'how to live longer',
    'how to increase life expectancy',
    'longevity habits',
    'evidence based longevity',
    'how to live to 100',
    'habits that add years to your life',
  ],
  openGraph: {
    title: 'How to Live Longer: 10 Evidence-Based Habits | Life Expectancy Calculator',
    description:
      '10 evidence-based habits ranked by how many years each adds to your life. Practical and actionable.',
    url: 'https://whenwillidiecalculator.com/how-to-live-longer',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/how-to-live-longer',
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

const habitCardStyle = {
  border: '1px solid #e8dfc8',
  borderRadius: 14,
  padding: '20px 20px',
  background: '#fffdf7',
  marginBottom: 20,
};

const pillStyle = {
  display: 'inline-block',
  border: '1px solid #c9a84c',
  color: '#c9a84c',
  borderRadius: 20,
  padding: '2px 10px',
  fontSize: 13,
  fontWeight: 700,
};

export default function HowToLiveLongerPage() {
  // Keep style constants identical to the state page pattern.
  void tableWrapStyle;
  void thStyle;
  void tdStyle;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the single most important thing I can do to live longer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you smoke, quitting is consistently one of the highest-impact levers. If you do not smoke, regular exercise is often the next strongest, broadest intervention for longevity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I add years to my life after age 50?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The body responds to improved habits at any age. Quitting smoking, becoming more active, improving sleep, and treating high blood pressure can reduce risk quickly and compound over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does exercise actually extend your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In large cohort studies, physically active people often live 2–4 years longer on average. A baseline of about 150 minutes per week of moderate activity captures much of the benefit, with additional benefit up to a point.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does diet matter more than exercise for longevity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'They reinforce each other. Exercise has broad effects across cardiovascular, metabolic, and cognitive health. Diet strongly influences weight trajectory, blood pressure, lipids, inflammation, and diabetes risk. For most people, doing both at “pretty good” levels beats optimizing either alone.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do the longest-lived people in the world have in common?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Populations with exceptional longevity tend to share daily movement, strong social connection, a sense of purpose, less smoking, and diets built around minimally processed foods. The commonality is consistency over decades, not hacks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there scientific evidence that you can live past 100?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Centenarians exist in every population. Genetics plays a role, but many centenarians also share low smoking exposure, frequent daily movement, and strong social ties. The evidence supports shifting probabilities, not guarantees.',
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
        name: 'How to Live Longer',
        item: 'https://whenwillidiecalculator.com/how-to-live-longer',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Live Longer: 10 Evidence-Based Habits',
    description:
      'How to live longer — 10 evidence-based habits backed by longevity research. Practical, actionable, and ranked by how many years each habit adds.',
    url: 'https://whenwillidiecalculator.com/how-to-live-longer',
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
        <span style={{ color: '#6b5e4e' }}>›</span> How to Live Longer
      </nav>

      <h1 style={H1_STYLE}>How to Live Longer: 10 Evidence-Based Habits</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        The research on longevity converges on a surprisingly consistent set of habits. This
        isn&apos;t about extreme biohacking or expensive interventions — it&apos;s about the
        fundamentals that compound over decades. Below are 10 habits ranked approximately by how
        many years of life expectancy they&apos;re associated with in longitudinal population
        studies. The estimates come from the same research base that informs our life expectancy
        calculator. None of these are guarantees — but the direction of the evidence is clear and
        consistent.
      </p>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          1. Don&apos;t Smoke (or Quit if You Do) — Up to +10 Years{' '}
          <span style={pillStyle}>+10 yrs</span>
        </h2>
        <p style={P_STYLE}>
          In large cohort studies, daily smokers lose an average of about a decade compared with
          never-smokers. That headline number can feel abstract, but it&apos;s remarkably consistent
          across populations: smoking doesn&apos;t just increase the risk of one disease — it raises
          risk across many causes of death. The good news is just as consistent: quitting helps at
          any age, and quitting earlier recovers more of the lost gap. People who quit before age 40
          often regain most of the survival difference compared with never-smokers.
        </p>
        <p style={P_STYLE}>
          Mechanistically, smoking accelerates atherosclerosis (plaque buildup), increases clotting,
          and damages blood vessels — all of which increase cardiovascular risk. It also raises
          cancer risk across a dozen organs and progressively impairs lung function, making it
          harder to stay active as you age. A practical first step is to set a quit date and treat
          quitting as a short project with support: nicotine replacement therapy plus behavioral
          coaching consistently outperforms willpower alone and roughly doubles quit success rates.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          2. Exercise Regularly — Up to +3 Years <span style={pillStyle}>+3 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Physical activity is one of the most reliable predictors of longevity in population data.
          People who move consistently tend to live 2–4 years longer on average, and the biggest jump
          happens when you go from sedentary to “some.” You don&apos;t need to be an athlete. About
          150 minutes per week of moderate-intensity activity (roughly the WHO recommendation) is
          enough to capture most of the mortality benefit, with additional gains up to a point as
          fitness rises.
        </p>
        <p style={P_STYLE}>
          Exercise improves cardiovascular function, insulin sensitivity, blood pressure regulation,
          muscle mass, bone density, and even cognitive health. It&apos;s the closest thing medicine
          has to a multi-system intervention that helps nearly everyone. A practical first step is a
          schedule you can repeat: a 30-minute brisk walk five days per week. If that feels too big,
          start with 10 minutes after meals — the key is consistency. Once it&apos;s automatic, add
          strength training twice per week to preserve muscle with age.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          3. Maintain a Healthy Weight — Up to +3 Years <span style={pillStyle}>+3 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Body weight is a proxy for many risk pathways. In large cohort datasets, severe obesity
          (often defined as BMI 35+) is associated with roughly 5–7 fewer years of life, while
          moderate obesity (BMI 30–35) is associated with a smaller but still meaningful reduction.
          Underweight can also be a risk marker. The practical takeaway is not that you must hit a
          perfect number — it&apos;s that moving toward a healthier range usually improves blood
          pressure, glucose control, sleep quality, and mobility.
        </p>
        <p style={P_STYLE}>
          Excess adipose tissue isn&apos;t inert; it acts like an endocrine organ, driving chronic
          inflammation, insulin resistance, cardiovascular strain, and increasing risk for sleep
          apnea and some cancers. A good first step is to aim for a 5–10% reduction from current
          weight if you&apos;re above a healthy range. That level of change produces measurable
          improvements even before you reach a “goal weight.” Pair it with habits that stick: a
          protein-forward breakfast, fewer liquid calories, and a consistent walking routine.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          4. Sleep 7–8 Hours — Up to +2 Years <span style={pillStyle}>+2 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Sleep is often treated like a luxury, but the data treats it like infrastructure.
          Population studies repeatedly find a U-shaped relationship between sleep duration and
          mortality: chronic short sleep (under ~6 hours) is associated with higher risk, and very
          long sleep (over ~9 hours) can also correlate with worse outcomes, often because of
          underlying illness. For most adults, the sweet spot for long-term health is around 7–8
          hours of quality sleep.
        </p>
        <p style={P_STYLE}>
          Mechanistically, sleep is when the brain clears metabolic waste, hormones and inflammation
          are regulated, and tissue repair occurs. Chronic sleep deprivation raises risk for
          cardiovascular disease, diabetes, obesity, and immune dysregulation — and it makes every
          other habit harder. A practical first step is to anchor your schedule to a consistent wake
          time. Wake time drives circadian stability; stability improves sleep depth. Then protect
          the last hour before bed with a simple rule: dim lights, no work, and no scrolling.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          5. Limit Alcohol — Up to +2 Years <span style={pillStyle}>+2 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Alcohol is one of the most misunderstood longevity variables. Heavy drinking is clearly
          harmful and is associated with multiple lost years of life in long-term datasets. The
          “moderate drinking is healthy” story has weakened as newer studies have adjusted for
          confounders. For longevity specifically, the safest amount appears to be little or none,
          and if you do drink, fewer drinks and fewer days is better than the reverse.
        </p>
        <p style={P_STYLE}>
          Alcohol increases blood pressure, disrupts sleep architecture even when you feel
          “unaffected,” adds empty calories, and is classified as a carcinogen linked to multiple
          cancer types. A practical first step is to reduce drinking days per week before trying to
          reduce quantity per session. Many people find it easier to go from, say, five days a week
          to two or three, then re-evaluate. Replace the ritual: sparkling water, tea, or a nonalcoholic
          option can preserve the “wind down” habit without the physiology.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          6. Manage Stress — Up to +2 Years <span style={pillStyle}>+2 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Chronic high stress is associated with shorter lifespan in longitudinal research, often
          through cardiovascular pathways. What matters isn&apos;t only objective stressors — it&apos;s
          also perceived stress and the duration of physiological activation. Two people can face the
          same circumstances and experience very different biological stress loads depending on sleep,
          social support, and coping habits. The goal isn&apos;t “no stress.” It&apos;s learning to
          come down from stress more reliably.
        </p>
        <p style={P_STYLE}>
          Mechanistically, chronic cortisol elevation raises blood pressure, worsens glucose control,
          suppresses immune function, and can accelerate cellular aging markers. The first step can
          be surprisingly small: 10 minutes per day of deliberate downregulation — slow breathing,
          meditation, walking in nature, or a low-stakes conversation with someone you trust. When
          done daily, these practices produce measurable changes in heart rate variability and
          reactivity within weeks. Pick one technique and make it non-negotiable, like brushing your
          teeth.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          7. Build Strong Social Connections — Up to +3 Years <span style={pillStyle}>+3 yrs</span>
        </h2>
        <p style={P_STYLE}>
          Longevity isn&apos;t only physiology — it&apos;s also belonging. Social isolation is
          consistently linked to higher mortality risk, with some analyses comparing its risk
          magnitude to smoking. Strong social connection correlates with longer life, better mental
          health, and better adherence to healthy routines. People with supportive relationships tend
          to sleep better, recover from illness faster, and take fewer “health risks” on autopilot.
        </p>
        <p style={P_STYLE}>
          Mechanistically, social bonds buffer stress hormones, reduce depression (an independent
          risk factor), and create accountability. The first step is not “make 10 new friends.” It&apos;s
          to increase the frequency of contact with existing relationships. Schedule one recurring
          weekly touchpoint: a walk, a call, a meal. Put it on the calendar like a medical
          appointment. Over time, frequency beats intensity — and consistency builds the kind of
          social safety net that protects you when life gets hard.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          8. Eat a Mostly Whole-Food Diet — Up to +2 Years <span style={pillStyle}>+2 yrs</span>
        </h2>
        <p style={P_STYLE}>
          For diet, the evidence is strongest at the pattern level. Dietary approaches closest to
          Mediterranean and DASH patterns show the most consistent longevity associations: more
          vegetables, legumes, whole grains, fiber, and healthy fats; less ultra-processed food and
          added sugar. It&apos;s not about a single superfood. It&apos;s about what you eat every
          day. Over decades, those daily defaults shape weight trajectory, blood pressure, lipids,
          and diabetes risk.
        </p>
        <p style={P_STYLE}>
          Mechanistically, dietary quality influences inflammation, the gut microbiome, insulin
          sensitivity, and vascular function. A practical first step is one meaningful swap: replace
          one ultra-processed item you eat daily with a whole-food alternative. Examples: Greek yogurt
          instead of dessert, fruit instead of a snack bar, or beans instead of chips at lunch.
          Don&apos;t overhaul everything. Make one swap easy and automatic, then stack the next.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          9. Get Preventive Healthcare — Years Vary <span style={pillStyle}>varies</span>
        </h2>
        <p style={P_STYLE}>
          Preventive care doesn&apos;t “add years” in a uniform way because it depends on what it
          finds. But its upside is enormous because the biggest killers are often detectable earlier
          than most people act. Hypertension, high cholesterol, pre-diabetes, and some cancers can be
          treated far more effectively early than late. Blood pressure control alone is one of the
          highest-return interventions in all of medicine, yet many people don&apos;t know their
          numbers.
        </p>
        <p style={P_STYLE}>
          Mechanistically, prevention lowers the probability of catastrophic events (heart attacks,
          strokes) and catches disease in treatable stages. The first step is straightforward: if you
          haven&apos;t had a physical in the past two years, schedule one. Know your blood pressure,
          fasting glucose or A1c, lipids, and family history. Ask about age-appropriate screening
          (colorectal cancer, breast cancer) and vaccinations. The goal isn&apos;t medical anxiety —
          it&apos;s to keep small problems small.
        </p>
      </div>

      <div style={habitCardStyle}>
        <h2 style={{ ...H2_STYLE, marginTop: 0 }}>
          10. Maintain Strong Purpose and Mental Health — Up to +2 Years{' '}
          <span style={pillStyle}>+2 yrs</span>
        </h2>
        <p style={P_STYLE}>
          A sense of purpose is not a soft variable in the data. Multiple longitudinal studies find
          that people who report stronger purpose tend to live longer, even after adjusting for other
          factors. On the flip side, untreated depression is associated with higher mortality across
          multiple causes. The “mechanism” isn&apos;t just motivation — it&apos;s physiology. Purpose
          and mental health affect sleep, stress response, social connection, and adherence to habits
          like exercise and medication.
        </p>
        <p style={P_STYLE}>
          A practical first step is to identify one activity that gives you a sense of contribution —
          mentoring, volunteering, building something, caring for someone — and do it consistently.
          If depression or anxiety is present, treat it like any other medical issue: talk to a
          professional, consider evidence-based therapy, and reduce shame. Mental health is a
          multiplier: when it improves, most other habits get easier to sustain.
        </p>
      </div>

      <div
        style={{
          border: '1px solid #c9a84c',
          borderRadius: 14,
          padding: '18px 18px',
          background: '#fffdf7',
          marginTop: 10,
          color: '#4a3f2f',
          lineHeight: 1.8,
        }}
      >
        These habits don&apos;t just add years in parallel — they compound. A non-smoking, regularly
        exercising, well-sleeping American who manages stress and maintains social connections can
        realistically add 10–15 years beyond the national average. Our life expectancy calculator
        lets you see how your current habits stack up — and what changing each one would add.
      </div>

      <h2 style={H2_STYLE}>What Longevity Researchers Emphasize Most</h2>
      <p style={P_STYLE}>
        Researchers in this field often emphasize exercise as the single most impactful lever,
        especially when it combines aerobic fitness and strength. Popular frameworks discuss the
        “four horsemen” of chronic disease — cardiovascular disease, cancer, neurodegenerative
        disease, and metabolic disease — and the idea that the habits above address all four by
        improving cardiorespiratory capacity, muscle mass, insulin sensitivity, sleep quality, and
        stress regulation. This is educational context, not a personal endorsement of any one author.
        The consistent takeaway across researchers is simpler than it sounds: build a body that can
        handle decades, not just the next month.
      </p>

      <h2 style={H2_STYLE}>The Blue Zones Approach</h2>
      <p style={P_STYLE}>
        The five commonly cited Blue Zones — Okinawa (Japan), Sardinia (Italy), Ikaria (Greece),
        Nicoya Peninsula (Costa Rica), and Loma Linda (California) — share patterns that look
        suspiciously like the list above. They move daily as part of routine life, eat plant-forward
        diets, maintain strong community bonds, and often have a sense of purpose that organizes the
        day. Some include moderate alcohol, others don&apos;t. The key insight is systemic: none of
        these populations optimized habits in isolation — the lifestyle made the habits easy to keep.
      </p>

      <h2 style={H2_STYLE}>How to Start Without Overhauling Everything</h2>
      <p style={P_STYLE}>
        Don&apos;t try to implement all 10 habits at once. Behavior-change research consistently
        shows that one habit at a time — with a specific implementation intention (“I will walk for
        30 minutes after work on Monday, Wednesday, and Friday”) — sticks better than broad lifestyle
        overhauls. Start with whichever habit has the highest potential impact for you personally.
        For most people, that&apos;s smoking (if applicable) or exercise. Use our calculator to see
        your baseline first, then change one lever and watch how the estimate moves.
      </p>
      <h3 style={H3_STYLE}>A simple starting template</h3>
      <p style={P_STYLE}>
        If you want something concrete, try this two-week plan: pick one habit, choose one cue, and
        define one minimum action. Example: “After I finish dinner (cue), I will walk for 10 minutes
        (minimum action).” If you feel good, walk longer — but don&apos;t make “longer” the rule.
        The minimum is what builds identity and makes the habit automatic. Once it&apos;s stable,
        layer on the next habit from the list above.
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
      <p style={{ ...P_STYLE, marginTop: 12 }}>
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
          href="https://www.who.int/data/gho"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          WHO Global Health Observatory
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

