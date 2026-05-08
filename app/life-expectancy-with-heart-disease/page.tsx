import Link from 'next/link';

export const metadata = {
  title: 'Life Expectancy with Heart Disease',
  description:
    'Life expectancy with heart disease — what the research shows by condition type, age, and treatment. Empowering, evidence-based information on how lifestyle and care affect outcomes.',
  keywords: [
    'life expectancy with heart disease',
    'heart disease life expectancy',
    'life expectancy after heart attack',
    'coronary artery disease life expectancy',
    'heart failure life expectancy',
    'how long can you live with heart disease',
  ],
  openGraph: {
    title: 'Life Expectancy with Heart Disease | Life Expectancy Calculator',
    description:
      'Life expectancy with heart disease by condition type — evidence-based, empowering, and focused on what moves outcomes.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-with-heart-disease',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-with-heart-disease',
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

const P_STYLE = {
  fontSize: 16,
  color: '#4a3f2f',
  lineHeight: 1.8,
  margin: '0 0 16px 0',
};

/* Tokens mirrored from app/life-expectancy-by-state/page.tsx (unused on this page — no table/H3 sections). */
/* eslint-disable @typescript-eslint/no-unused-vars */
const H3_STYLE = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#1a1612',
  margin: '24px 0 8px 0',
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
/* eslint-enable @typescript-eslint/no-unused-vars */

export default function LifeExpectancyWithHeartDiseasePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the life expectancy for someone with heart disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Life expectancy with heart disease varies widely by condition type, severity, age at diagnosis, treatment quality, and lifestyle factors like smoking, exercise, and medication adherence. Many people with well-managed coronary artery disease live for decades with good quality of life; advanced heart failure can carry a more serious prognosis but remains highly variable with modern therapies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you live a long life with heart disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — many people live long, active lives after a heart disease diagnosis, especially when care is timely and secondary prevention is strong. Survival after heart attacks has improved substantially with faster treatment and evidence-based medications. Cardiac rehabilitation, not smoking, regular exercise, and following prescribed therapies are associated with better long-term outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the life expectancy after a heart attack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Long-term outlook after a heart attack depends on how much heart muscle is damaged, age and overall health, and how consistently someone follows secondary prevention. Research suggests that people who engage in cardiac rehabilitation, take guideline-directed medications, quit smoking, exercise, and improve diet can add meaningful years compared with peers who do not adopt those practices.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors most affect life expectancy with heart disease?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Major drivers include type and stage of disease, left ventricular function, blood pressure and cholesterol control, smoking status, physical activity, diet quality, medication adherence, diabetes control, and mental health. Participation in cardiac rehabilitation and access to modern treatments for heart failure and arrhythmias also materially influence survival and quality of life.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does cardiac rehabilitation improve life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Studies consistently associate cardiac rehabilitation with lower mortality after cardiac events — often on the order of roughly 20–25% relative risk reductions in meta-analyses — alongside improvements in fitness and confidence with exercise. Programs combine supervised activity, education, and support to help people rebuild habits safely.',
        },
      },
      {
        '@type': 'Question',
        name: 'What lifestyle changes help most after a heart disease diagnosis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The strongest evidence-backed levers include quitting smoking, participating in cardiac rehabilitation when recommended, taking prescribed medications consistently, moving regularly (as cleared by your clinician), adopting a Mediterranean-style dietary pattern, managing blood pressure and lipids to goal, addressing depression or anxiety, and maintaining a healthier weight when appropriate.',
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
        name: 'Life Expectancy with Heart Disease',
        item: 'https://whenwillidiecalculator.com/life-expectancy-with-heart-disease',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy with Heart Disease: What the Research Shows',
    description:
      'Life expectancy with heart disease — what the research shows by condition type, age, and treatment. Empowering, evidence-based information on how lifestyle and care affect outcomes.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-with-heart-disease',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Life Expectancy with Heart Disease
      </nav>

      <h1 style={H1_STYLE}>Life Expectancy with Heart Disease: What the Research Shows</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Heart disease is the leading cause of death in the United States — but it covers a wide spectrum
        of conditions with very different prognoses. A person with well-managed coronary artery disease
        caught early can live a near-normal lifespan. Advanced heart failure carries a more serious
        prognosis. The most important variables are: type and severity of the condition, age at
        diagnosis, treatment quality, and — critically — lifestyle factors that remain in the
        individual&apos;s control. This page covers what the research shows for common heart conditions.
        For a personalized baseline estimate, try our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <div
        style={{
          borderLeft: '3px solid #c9a84c',
          background: '#fffdf7',
          borderRadius: 8,
          padding: '14px 16px',
        }}
      >
        <p style={{ ...P_STYLE, marginBottom: 0, fontSize: 15 }}>
          This page provides general educational information based on population research. It is not
          medical advice and cannot predict any individual&apos;s outcome. Heart disease prognosis varies
          enormously based on individual factors. Please speak with your cardiologist or healthcare
          provider for personalized guidance.
        </p>
      </div>

      <h2 style={H2_STYLE}>Heart Disease Is Not One Condition</h2>
      <p style={P_STYLE}>
        &quot;Heart disease&quot; is an umbrella term covering coronary artery disease (CAD), heart failure,
        arrhythmias (including atrial fibrillation), valvular heart disease, and congenital conditions.
        Each has a different mechanism, trajectory, and prognosis. CAD — narrowing of the arteries — is
        the most common and, when caught early and managed well, often compatible with decades of
        good-quality life. Heart failure is more serious but also highly variable depending on ejection
        fraction, cause, and response to treatment. Arrhythmias like atrial fibrillation increase stroke
        risk but are manageable with medication and procedures. Prognosis depends heavily on which
        condition, how advanced, and what treatment is available and followed.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy After a Heart Attack</h2>
      <p style={P_STYLE}>
        A heart attack (myocardial infarction) is a medical emergency, but survival rates have improved
        dramatically over recent decades. In-hospital survival rates for heart attacks now exceed 90% in
        many settings due to faster treatment (door-to-balloon times), stenting, and clot-busting
        medication. Long-term outcomes after a heart attack vary by severity of damage, age, and subsequent
        lifestyle and medication adherence. Studies suggest that people who survive a heart attack and
        follow evidence-based secondary prevention — medications (statins, beta-blockers, ACE inhibitors),
        cardiac rehabilitation, smoking cessation, exercise, and dietary changes — can live many additional
        years. A 60-year-old who survives a moderate heart attack and follows their treatment plan has a
        meaningfully different trajectory than one who doesn&apos;t. The post-event choices matter
        enormously.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy with Coronary Artery Disease (CAD)</h2>
      <p style={P_STYLE}>
        CAD is the most common form of heart disease, caused by plaque buildup in the arteries. Mild to
        moderate CAD, managed with medication and lifestyle changes, is often compatible with a
        near-normal lifespan — particularly when diagnosed before a major event. Interventions like
        stenting and bypass surgery can restore blood flow and significantly extend functional life. The
        key variables: how many vessels are affected, degree of blockage, left ventricular function, and
        whether the patient follows secondary prevention. Non-smoking, regular exercise, a heart-healthy
        diet, and medication adherence are the primary levers individuals control. Research consistently
        shows that cardiac rehabilitation programs — structured post-diagnosis exercise and education —
        improve both longevity and quality of life.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy with Heart Failure</h2>
      <p style={P_STYLE}>
        Heart failure (HF) means the heart isn&apos;t pumping efficiently — not that it has stopped.
        Prognosis varies significantly by type. HF with reduced ejection fraction (HFrEF, sometimes called
        systolic heart failure) has historically had more serious outcomes, but modern treatments —
        including SGLT2 inhibitors, sacubitril/valsartan, and device therapies — have meaningfully improved
        survival in recent years. HF with preserved ejection fraction (HFpEF) is harder to treat but also
        variable in trajectory. Five-year survival rates for heart failure have improved substantially —
        some studies show over 50% five-year survival, and many patients live a decade or more with good
        management. Stage and NYHA functional class at diagnosis matter enormously. The empowering message:
        treatment advances in heart failure have been among the most significant in cardiology over the
        past decade.
      </p>

      <h2 style={H2_STYLE}>Factors That Most Affect Life Expectancy with Heart Disease</h2>
      <p style={P_STYLE}>
        Individual outcomes hinge on both medical care and daily habits you can influence with support
        from your care team:
      </p>
      <ul style={{ paddingLeft: 20, color: '#4a3f2f', lineHeight: 2, margin: '0 0 16px 0' }}>
        <li>
          <strong>Smoking cessation</strong> — the single most impactful modifiable factor; continuing to
          smoke after a cardiac event significantly worsens prognosis
        </li>
        <li>
          <strong>Cardiac rehabilitation</strong> — structured programs reduce mortality by 20–25% in
          studies
        </li>
        <li>
          <strong>Medication adherence</strong> — statins, beta-blockers, and ACE inhibitors have strong
          evidence bases for reducing repeat events
        </li>
        <li>
          <strong>Exercise</strong> — even moderate regular activity improves cardiac function and survival
        </li>
        <li>
          <strong>Diet quality</strong> — Mediterranean-pattern diet associated with reduced cardiovascular
          events
        </li>
        <li>
          <strong>Blood pressure and cholesterol control</strong> — hitting treatment targets matters
        </li>
        <li>
          <strong>Mental health</strong> — depression is an independent risk factor for worse cardiac
          outcomes; treating it improves prognosis
        </li>
        <li>
          <strong>Weight management</strong> — reducing obesity burden on the heart
        </li>
      </ul>

      <h2 style={H2_STYLE}>How Our Life Expectancy Calculator Handles Heart Disease</h2>
      <p style={P_STYLE}>
        Our calculator uses SSA and CDC actuarial base tables and applies lifestyle modifiers drawn from
        peer-reviewed research. It does not include a direct &quot;heart disease&quot; input — because prognosis
        varies so widely by type and management that a single modifier would be misleading. What it does
        capture: smoking status, exercise level, BMI, diet quality, and stress — the lifestyle factors
        most associated with cardiovascular outcomes. If you have heart disease and are managing it well
        with lifestyle changes, those inputs will reflect your improved trajectory. For a baseline estimate
        adjusted for your habits, try the{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>What You Can Do Regardless of Diagnosis</h2>
      <p style={P_STYLE}>
        A heart disease diagnosis changes the math — but it doesn&apos;t eliminate agency. The research on
        secondary prevention is clear: people who quit smoking, complete cardiac rehabilitation, take their
        medications, exercise regularly, and eat a heart-healthy diet live longer and have better quality
        of life than those who don&apos;t. These aren&apos;t heroic interventions — they&apos;re consistent
        daily defaults. The gap between best-case and worst-case management of the same diagnosis can be
        measured in years. For more on the habits with the strongest evidence base, see{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
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
          href="https://www.cdc.gov/heartdisease/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Heart Disease
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.heart.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          American Heart Association
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
        Read about{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        ,{' '}
        <Link
          href="/average-life-expectancy-usa"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          average life expectancy in the USA
        </Link>
        , and{' '}
        <Link
          href="/life-expectancy-men-vs-women"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy differences between men and women
        </Link>
        .
      </p>
    </main>
  );
}
