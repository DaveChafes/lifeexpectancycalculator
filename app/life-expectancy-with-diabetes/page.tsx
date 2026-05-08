import Link from 'next/link';

export const metadata = {
  title: 'Life Expectancy with Diabetes: What the Research Shows',
  description:
    'Life expectancy with diabetes — what research shows for Type 1 and Type 2, how management affects outcomes, and what lifestyle changes move the needle most.',
  keywords: [
    'life expectancy with diabetes',
    'diabetes life expectancy',
    'type 2 diabetes life expectancy',
    'type 1 diabetes life expectancy',
    'how does diabetes affect life expectancy',
    'diabetes years lost',
  ],
  openGraph: {
    title: 'Life Expectancy with Diabetes | Life Expectancy Calculator',
    description:
      'Life expectancy with Type 1 and Type 2 diabetes — empowering, evidence-based, focused on what management and lifestyle achieve.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-with-diabetes',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-with-diabetes',
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

const boxStyle = {
  border: '1px solid #e8dfc8',
  borderRadius: 14,
  padding: '18px 18px',
  background: '#fffdf7',
};

export default function LifeExpectancyWithDiabetesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many years does diabetes take off your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Population studies often cite roughly 6–10 years of reduced life expectancy for Type 2 diabetes diagnosed in midlife when control and cardiovascular risk factors are suboptimal — but this reflects averages that include wide variation. Well-managed diabetes, especially when caught early, can narrow this gap substantially.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you live a long life with Type 2 diabetes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many people with Type 2 diabetes live long lives when glycemic control, blood pressure, cholesterol, weight, smoking status, and fitness are actively managed. Intensive early treatment and sustained healthy habits are associated with fewer complications and better long-term survival.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the life expectancy for someone with Type 1 diabetes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type 1 diabetes outcomes have improved markedly with modern insulin therapy, CGMs, pumps, and closed-loop systems. Many analyses show people with good glycemic control and strong cardiovascular risk management can approach life expectancies much closer to the general population than in earlier eras.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most important thing someone with diabetes can do for their life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single magic step — durable gains usually come from a bundle: glycemic control in target range, blood pressure management (often including ACE inhibitors or ARBs for kidney protection), cholesterol lowering (commonly statins), not smoking, regular physical activity, and high-quality nutrition aligned with your care team.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does prediabetes affect life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Prediabetes signals higher risk for developing Type 2 diabetes and cardiovascular disease, but it is also one of the most modifiable stages. Structured lifestyle programs can substantially reduce progression to Type 2 diabetes, which helps protect long-term health and longevity.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does exercise affect life expectancy with diabetes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Regular exercise improves insulin sensitivity, supports weight management, lowers cardiovascular risk, and helps blood pressure and lipid profiles — all pathways that influence complications and survival. Many guidelines emphasize roughly 150 minutes per week of moderate activity as a practical target when medically appropriate.',
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
        name: 'Life Expectancy with Diabetes',
        item: 'https://whenwillidiecalculator.com/life-expectancy-with-diabetes',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy with Diabetes: What the Research Shows',
    description:
      'Life expectancy with diabetes — what research shows for Type 1 and Type 2, how management affects outcomes, and what lifestyle changes move the needle most.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-with-diabetes',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Life Expectancy with Diabetes
      </nav>

      <h1 style={H1_STYLE}>Life Expectancy with Diabetes: What the Research Shows</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        A diabetes diagnosis raises real questions about life expectancy — and the research gives real,
        nuanced answers. The honest picture: unmanaged or poorly managed diabetes significantly shortens
        life, primarily through cardiovascular disease, kidney disease, and other complications. But
        well-managed diabetes — especially Type 2 caught early — can be compatible with a near-normal
        lifespan. The gap between best-case and worst-case management of the same diagnosis can be 10 or
        more years. This page covers what the evidence shows for both Type 1 and Type 2 diabetes, and
        which factors matter most. For a personalized baseline, try our{' '}
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
          This page provides general educational information based on population research. It is not medical
          advice and cannot predict any individual&apos;s outcome. Please speak with your endocrinologist or
          healthcare provider for personalized guidance.
        </p>
      </div>

      <div style={{ ...boxStyle, marginTop: 18 }}>
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
              Americans with diabetes
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~37 million
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans with prediabetes
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~96 million
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Type 2 as share of cases
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              ~90–95%
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years lost (poorly managed T2)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              up to ~10 years
            </div>
          </div>
        </div>
      </div>

      <h2 style={H2_STYLE}>Type 1 vs Type 2 Diabetes — Different Conditions, Different Trajectories</h2>
      <p style={P_STYLE}>
        Type 1 diabetes is an autoimmune condition where the pancreas produces little or no insulin — it
        typically appears in childhood or young adulthood and requires lifelong insulin therapy. Type 2
        diabetes involves insulin resistance and relative insulin deficiency — it&apos;s strongly associated
        with lifestyle factors and typically develops in adulthood, though rates in younger people are
        rising. Historically, Type 1 carried a more significant life expectancy reduction. Modern insulin
        delivery (pumps, continuous glucose monitors, closed-loop systems) has dramatically improved
        outcomes — people with well-managed Type 1 now live into their 70s and 80s in many cases. Type 2
        prognosis depends enormously on when it&apos;s caught, how well blood sugar is managed, and whether
        cardiovascular risk factors (blood pressure, cholesterol, weight, smoking) are also controlled.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy with Type 2 Diabetes</h2>
      <p style={P_STYLE}>
        Large population studies suggest that Type 2 diabetes diagnosed in midlife and poorly managed is
        associated with roughly 6–10 years of lost life expectancy, primarily through cardiovascular
        complications. However, this figure reflects population averages that include people with poor
        control, multiple complications, and compounding risk factors. People who achieve good glycemic
        control (HbA1c in target range), manage blood pressure and cholesterol, don&apos;t smoke, exercise
        regularly, and maintain a healthy weight can substantially narrow or close this gap. The UKPDS (UK
        Prospective Diabetes Study) and subsequent research have shown that intensive early management of
        Type 2 significantly reduces complications and mortality over decades. A Type 2 diagnosis is not a
        sentence — it is a signal to manage the modifiable risk factors aggressively.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy with Type 1 Diabetes</h2>
      <p style={P_STYLE}>
        Type 1 diabetes historically carried a significant life expectancy reduction — early studies
        showed gaps of 15–20 years. Modern management has dramatically changed this. People with Type 1 who
        use continuous glucose monitors (CGMs) and insulin pumps, maintain target HbA1c levels, and manage
        cardiovascular risk factors now have life expectancies approaching those of the general population
        in many studies. A 2019 analysis in JAMA found that younger people with Type 1 diabetes who achieved
        good control had mortality rates approaching those without diabetes. The key variables: time in
        range (the percentage of hours blood glucose stays in target), kidney function preservation, and
        cardiovascular risk management. Technology has been a major equalizer — CGMs and closed-loop
        systems have made sustained good control far more achievable than it was a generation ago.
      </p>

      <h2 style={H2_STYLE}>How Diabetes Affects Life Expectancy — The Mechanisms</h2>
      <p style={P_STYLE}>
        Diabetes reduces life expectancy primarily through three pathways. Cardiovascular disease: high
        blood glucose accelerates atherosclerosis — people with diabetes have 2–4 times the cardiovascular
        risk of those without. Kidney disease (diabetic nephropathy): chronic high glucose damages the
        kidneys&apos; filtering system; kidney failure significantly shortens life. Neuropathy and infection
        risk: nerve damage and impaired immune response raise the risk of infections and complications that
        compound over time. The empowering counterpoint: all three pathways are modifiable. Blood sugar
        control slows progression across all three. Blood pressure control (especially with ACE inhibitors
        or ARBs) specifically protects the kidneys. Statins and cardiovascular medications dramatically
        reduce event risk. The complications of diabetes are not inevitable — they are the result of
        sustained exposure to uncontrolled blood glucose over time.
      </p>

      <h2 style={H2_STYLE}>What Moves the Needle Most for People with Diabetes</h2>
      <p style={P_STYLE}>
        Small, consistent choices stack into large differences in complications and longevity — especially
        when they&apos;re coordinated with your care team:
      </p>
      <ul style={{ paddingLeft: 20, color: '#4a3f2f', lineHeight: 2, margin: '0 0 16px 0' }}>
        <li>
          <strong>Blood sugar control</strong> — keeping HbA1c in target range is the primary lever for
          preventing all three major complication pathways
        </li>
        <li>
          <strong>Blood pressure management</strong> — target below 130/80 mmHg; ACE inhibitors and ARBs
          have specific kidney-protective effects
        </li>
        <li>
          <strong>Cholesterol management</strong> — statins reduce cardiovascular events significantly in
          people with diabetes
        </li>
        <li>
          <strong>Not smoking</strong> — smokers with diabetes have dramatically worse outcomes; quitting is
          the highest-impact single action
        </li>
        <li>
          <strong>Regular exercise</strong> — improves insulin sensitivity, cardiovascular health, and
          weight; 150 minutes/week of moderate activity is the evidence-based target
        </li>
        <li>
          <strong>Weight management</strong> — even modest weight loss (5–10% of body weight) significantly
          improves glycemic control in Type 2
        </li>
        <li>
          <strong>Dietary quality</strong> — lower refined carbohydrate, higher fiber, Mediterranean-pattern
          diets show strongest evidence
        </li>
        <li>
          <strong>Regular monitoring and screening</strong> — annual kidney function, eye exams, and foot
          checks catch complications early when they&apos;re most treatable
        </li>
      </ul>

      <h2 style={H2_STYLE}>Prediabetes — The Most Actionable Window</h2>
      <p style={P_STYLE}>
        Prediabetes affects approximately 96 million American adults — most of whom don&apos;t know it.
        It&apos;s the most actionable stage because progression to Type 2 is not inevitable. The
        CDC-recognized National Diabetes Prevention Program (DPP) shows that lifestyle intervention (modest
        weight loss of 5–7% body weight and 150 minutes of weekly activity) reduces progression from
        prediabetes to Type 2 by 58% — and by 71% in people over 60. Catching and acting on prediabetes is
        arguably the highest-ROI health intervention available to the roughly one in three American adults
        who have it. A routine blood test (fasting glucose or HbA1c) is all it takes to find out where you
        stand.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Diabetes</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator uses SSA and CDC actuarial base tables with lifestyle modifiers —
        it doesn&apos;t have a direct diabetes input because prognosis varies so widely by type, duration,
        and management quality. What it does capture are the lifestyle factors most associated with diabetes
        outcomes: BMI, exercise, diet quality, and smoking status. If you&apos;re managing your diabetes well
        and those inputs reflect your actual habits, your estimate will reflect a more optimistic trajectory
        than the population average for people with diabetes.
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
          href="https://www.cdc.gov/diabetes/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Diabetes
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.diabetes.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          American Diabetes Association
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
        Explore{' '}
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
