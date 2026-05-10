import Link from 'next/link';

export const metadata = {
  title: 'BMI and Life Expectancy: What the Research Shows',
  description:
    'How does BMI affect life expectancy? Research shows obesity can reduce lifespan by 5–10 years. See the data by BMI category and what moves the needle most.',
  keywords: [
    'bmi life expectancy',
    'bmi and life expectancy',
    'obesity life expectancy',
    'overweight life expectancy',
    'bmi impact on lifespan',
    'healthy weight life expectancy',
  ],
  openGraph: {
    title: 'BMI and Life Expectancy | Life Expectancy Calculator',
    description:
      'How BMI affects life expectancy by category — evidence-based, empowering, focused on what changes outcomes.',
    url: 'https://whenwillidiecalculator.com/bmi-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/bmi-life-expectancy',
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

const bmiTableRows = [
  {
    category: 'Underweight',
    range: 'Below 18.5',
    yearsLost: '~2 years',
    mechanism: 'Malnutrition, immune suppression, bone loss',
    highlight: false,
  },
  {
    category: 'Healthy weight',
    range: '18.5–24.9',
    yearsLost: '0 (baseline)',
    mechanism: '—',
    highlight: true,
  },
  {
    category: 'Overweight',
    range: '25.0–29.9',
    yearsLost: '~1 year',
    mechanism: 'Early metabolic changes',
    highlight: false,
  },
  {
    category: 'Obese Class I',
    range: '30.0–34.9',
    yearsLost: '~2–3 years',
    mechanism: 'Cardiovascular, metabolic disease',
    highlight: false,
  },
  {
    category: 'Obese Class II',
    range: '35.0–39.9',
    yearsLost: '~5 years',
    mechanism: 'Cardiovascular, diabetes, cancer',
    highlight: false,
  },
  {
    category: 'Obese Class III',
    range: '40+',
    yearsLost: '~7–10 years',
    mechanism: 'Multiple compounding pathways',
    highlight: false,
  },
];

export default function BmiLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does obesity reduce life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Population studies often cite on the order of 5–10 years of reduced life expectancy for severe obesity (BMI 40+) compared with healthy-weight ranges, with smaller effects for overweight and moderate obesity. The Global BMI Mortality Collaboration (Lancet 2016) summarizes dose-response patterns across millions of participants — individual outcomes still vary widely.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is BMI an accurate measure of health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI is a useful population screening tool that correlates with body fat for many people, but it does not distinguish muscle from fat, account for fat distribution, or capture fitness. Waist circumference and cardiometabolic markers add important context beyond BMI alone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can losing weight add years to your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Research suggests that even modest, sustained weight loss (often cited around 5–10% of body weight) can improve blood pressure, lipids, blood sugar, and inflammation — risk factors tied to longevity. Larger BMI shifts toward a healthier range are associated with greater average gains in population data.',
        },
      },
      {
        '@type': 'Question',
        name: 'What BMI is considered healthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CDC and WHO commonly define a healthy BMI range as 18.5–24.9. Below 18.5 is underweight; 25–29.9 is overweight; 30+ is obesity, with higher classes at 35 and 40. These cutoffs are guides for screening, not individual diagnoses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does being slightly overweight really affect life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overweight (BMI 25–29.9) is associated with a smaller average mortality penalty than obesity in many analyses — on the order of roughly one year in broad summaries — but effects vary by age, fitness, waist size, and underlying health. Severe obesity carries much larger average reductions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is more important for longevity — BMI or fitness level?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both matter, but cardiorespiratory fitness is a strong independent predictor of survival. Studies find that overweight or obese people who are fit often fare better than normal-weight sedentary people — though this does not mean excess weight is harmless; the best outcomes typically combine healthier weight with regular activity.',
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
        name: 'BMI and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/bmi-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BMI and Life Expectancy: What the Research Shows',
    description:
      'How does BMI affect life expectancy? Research shows obesity can reduce lifespan by 5–10 years. See the data by BMI category and what moves the needle most.',
    url: 'https://whenwillidiecalculator.com/bmi-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> BMI and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>BMI and Life Expectancy: What the Research Shows</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Body mass index is one of the most studied predictors of longevity — and the relationship is
        real but more nuanced than a single number suggests. Severe obesity is clearly associated with
        significantly shorter life expectancy. Moderate overweight shows smaller effects. And being
        underweight carries its own risks that are often underappreciated. The most important finding
        from the research: even modest improvements in BMI produce meaningful health benefits. This
        page covers what the evidence shows across BMI categories. For a personalized estimate that
        includes BMI alongside your other lifestyle factors, try our{' '}
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
          This page provides general educational information based on population research. BMI is an
          imperfect measure — it does not account for muscle mass, bone density, or fat distribution.
          Results are population averages, not individual predictions. Please speak with your
          healthcare provider for personalized guidance.
        </p>
      </div>

      <div style={{ ...boxStyle, marginTop: 24 }}>
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
              Healthy BMI range
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>18.5–24.9</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years lost (severe obesity BMI 35+)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>up to ~7 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans with obesity (BMI 30+)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~42%</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Years lost (underweight BMI under 18.5)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~2 years</div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>What Is BMI and Why Does It Matter for Life Expectancy?</h2>
      <p style={P_STYLE}>
        BMI is calculated as weight in kilograms divided by height in meters squared. It&apos;s a
        population-level screening tool — not a diagnostic measurement — that correlates reasonably well
        with body fat percentage across large groups. Its limitations are real: a muscular athlete may
        have a high BMI without excess fat, and an older adult may have a &quot;normal&quot; BMI while carrying
        dangerous visceral fat. Despite these limitations, BMI remains one of the most consistent
        predictors of mortality risk in large epidemiological studies because excess adiposity —
        particularly visceral fat around the organs — drives the mechanisms that shorten life: chronic
        inflammation, insulin resistance, cardiovascular strain, and cancer risk. The Global BMI
        Mortality Collaboration (Lancet 2016), analyzing 239 studies and 10.6 million people, found
        clear dose-response relationships between BMI and all-cause mortality.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy by BMI Category — a data table</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>BMI Category</th>
              <th style={thStyle}>BMI Range</th>
              <th style={thStyle}>Estimated Years Lost</th>
              <th style={thStyle}>Primary Risk Mechanism</th>
            </tr>
          </thead>
          <tbody>
            {bmiTableRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = row.highlight ? '#eaf6ee' : baseBg;
              return (
                <tr key={row.category} style={{ background: bg }}>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.range}</td>
                  <td style={tdStyle}>{row.yearsLost}</td>
                  <td style={tdStyle}>{row.mechanism}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginBottom: 0 }}>
        Estimates based on Global BMI Mortality Collaboration, Lancet 2016, and associated longitudinal
        studies. Individual variation is significant.
      </p>

      <h2 style={H2_STYLE}>How Obesity Shortens Life — The Mechanisms</h2>
      <p style={P_STYLE}>
        Excess body fat — particularly visceral fat stored around the abdominal organs — doesn&apos;t just
        sit passively. It actively secretes inflammatory cytokines that drive chronic low-grade
        inflammation throughout the body. This inflammation accelerates atherosclerosis (arterial plaque
        buildup), drives insulin resistance leading to Type 2 diabetes, raises blood pressure, and
        creates a hormonal environment that promotes certain cancers — particularly colorectal, breast,
        endometrial, kidney, and esophageal. Obese individuals also face higher rates of sleep apnea,
        which compounds cardiovascular and metabolic risk. The dose-response is real: more excess fat,
        more inflammation, more risk across multiple systems simultaneously. This multi-pathway damage is
        why severe obesity carries such a significant life expectancy reduction — and why even partial
        weight loss produces benefits across all these systems at once. Related: see{' '}
        <Link
          href="/life-expectancy-with-diabetes"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy with diabetes
        </Link>{' '}
        and{' '}
        <Link
          href="/life-expectancy-with-heart-disease"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy with heart disease
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>The Underweight Risk — Often Overlooked</h2>
      <p style={P_STYLE}>
        Being underweight (BMI below 18.5) is associated with roughly 2 years of lost life expectancy in
        population studies — a figure that surprises many people. The mechanisms differ from obesity:
        underweight is associated with malnutrition, reduced immune function, bone density loss (raising
        fracture risk), and muscle wasting. In older adults, low BMI is a particularly strong predictor
        of poor outcomes — unintentional weight loss in people over 65 is associated with significantly
        higher mortality. The underweight risk is also confounded by underlying illness — some people
        are underweight because they are already sick, which makes the relationship complex. The
        practical takeaway: the goal is not &quot;as thin as possible&quot; — it is healthy weight with adequate
        muscle mass and nutrition.
      </p>

      <h2 style={H2_STYLE}>The &quot;Obesity Paradox&quot; — What It Is and What It Actually Means</h2>
      <p style={P_STYLE}>
        Some studies have found that moderately overweight people (BMI 25–29.9) have similar or even
        slightly better survival than normal-weight people in certain populations — particularly older
        adults. This has been called the &quot;obesity paradox.&quot; The most likely explanation is methodological
        rather than biological: normal-weight older adults often include people who lost weight due to
        illness, pulling down the survival statistics for that category. When studies control for
        unintentional weight loss and pre-existing illness, the survival advantage of moderate overweight
        largely disappears. The practical message: don&apos;t use the obesity paradox to justify carrying
        excess weight. The evidence for maintaining a healthy weight across the lifespan is strong. The
        paradox is a statistical artifact, not a green light.
      </p>

      <h2 style={H2_STYLE}>What Moves the Needle — BMI and Life Expectancy</h2>

      <h3 style={H3_STYLE}>Even modest weight loss helps</h3>
      <p style={P_STYLE}>
        Research consistently shows that a 5–10% reduction in body weight produces meaningful
        improvements in blood pressure, cholesterol, blood sugar, and inflammatory markers — even if
        BMI doesn&apos;t shift from one category to another. A person with a BMI of 34 who loses 10% of their
        body weight may still be in the obese range, but their cardiovascular and metabolic risk
        markers improve substantially. The goal doesn&apos;t have to be reaching a &quot;healthy&quot; BMI — it can
        simply be moving in the right direction. Our life expectancy calculator uses BMI as one of
        seven lifestyle inputs — move the slider and watch the years update in real time.
      </p>

      <h3 style={H3_STYLE}>Exercise modifies the BMI-mortality relationship</h3>
      <p style={P_STYLE}>
        Fitness level significantly modifies the relationship between BMI and mortality. Studies
        consistently find that overweight or obese individuals who are physically active have
        substantially better survival outcomes than normal-weight sedentary individuals. This doesn&apos;t
        mean exercise cancels out excess weight — but it does mean that adding regular physical activity
        is beneficial regardless of whether weight loss follows. The combination of improved fitness
        and even modest weight loss produces the strongest outcomes. For the research on exercise and
        longevity specifically, see{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        .
      </p>

      <h3 style={H3_STYLE}>Where fat is stored matters as much as how much</h3>
      <p style={P_STYLE}>
        Waist circumference is a better predictor of cardiovascular and metabolic risk than BMI alone.
        Visceral fat — the fat stored around abdominal organs — is metabolically active and dangerous in
        ways that subcutaneous fat (fat under the skin) is not. Two people with identical BMIs but
        different waist-to-height ratios can have meaningfully different risk profiles. A waist
        circumference above 40 inches for men or 35 inches for women is associated with elevated
        cardiovascular risk regardless of BMI category.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles BMI</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes BMI as one of seven lifestyle modifiers. The BMI
        slider runs from 15 to 45 and applies year-based adjustments drawn from the Global BMI Mortality
        Collaboration and associated research: healthy range (18.5–24.9) is the zero-adjustment
        baseline; underweight subtracts approximately 2 years; overweight subtracts approximately 1 year;
        obese Class I subtracts 2–3 years; severe obesity subtracts up to 7 years. These are conservative
        population-level estimates — individual variation is real and significant.
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
          href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)30175-1/fulltext"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Global BMI Mortality Collaboration, Lancet 2016
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.cdc.gov/healthyweight/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CDC Healthy Weight
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
        For evidence-based habits that support longevity, read{' '}
        <Link href="/how-to-live-longer" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          how to live longer
        </Link>
        . For condition-specific context, see{' '}
        <Link
          href="/life-expectancy-with-diabetes"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy with diabetes
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
          href="/smoking-and-life-expectancy"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          smoking and life expectancy
        </Link>
        .
      </p>
    </main>
  );
}
