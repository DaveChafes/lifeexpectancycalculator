import Link from 'next/link';

export const metadata = {
  title: 'Diet and Life Expectancy: What You Eat and How Long You Live',
  description:
    'How does diet affect life expectancy? Research shows dietary quality can add or subtract 2–3 years. See what the Mediterranean diet, ultra-processed foods, and specific nutrients do to your lifespan.',
  keywords: [
    'diet and life expectancy',
    'diet life expectancy',
    'food and longevity',
    'mediterranean diet life expectancy',
    'ultra processed food life expectancy',
    'healthy diet longevity',
  ],
  openGraph: {
    title: 'Diet and Life Expectancy | Life Expectancy Calculator',
    description:
      'How dietary quality affects life expectancy — Mediterranean diet, ultra-processed foods, and what the research actually shows.',
    url: 'https://whenwillidiecalculator.com/diet-and-life-expectancy',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/diet-and-life-expectancy',
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

const dietRows = [
  {
    quality: 'Poor',
    description: 'High ultra-processed, low vegetables/fiber',
    impact: '~−2 to −3 years',
    mechanism: 'Cardiovascular, metabolic, cancer',
    rowKey: 'poor' as const,
  },
  {
    quality: 'Average',
    description: 'Mixed — typical Western diet',
    impact: '0 (baseline)',
    mechanism: '—',
    rowKey: 'average' as const,
  },
  {
    quality: 'Good',
    description: 'Mostly whole foods, varied, adequate fiber',
    impact: '+1 to +2 years',
    mechanism: 'Cardiovascular, metabolic protection',
    rowKey: 'default' as const,
  },
  {
    quality: 'Excellent',
    description: 'Mediterranean or similar pattern, consistently',
    impact: '+2 to +3 years',
    mechanism: 'Multi-pathway protection',
    rowKey: 'excellent' as const,
  },
];

export default function DietAndLifeExpectancyPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does diet affect life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Summaries of dietary quality and mortality often suggest differences on the order of roughly 2–3 years of life expectancy between poor and high-quality dietary patterns at the population level, with smaller but meaningful gradients between average and good diets. Effects vary by baseline risk, adherence, and what outcomes are modeled.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the healthiest diet for longevity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Mediterranean dietary pattern has some of the strongest evidence from cohort studies and trials like PREDIMED for cardiovascular outcomes. More broadly, patterns rich in vegetables, fiber, legumes, whole grains, nuts, fish, and healthy fats — and lower in ultra-processed foods and excess sodium — consistently associate with better survival in large studies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do ultra-processed foods really shorten your life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Large prospective cohorts, including analyses from NutriNet-Santé, link higher ultra-processed food intake with higher all-cause and cardiovascular mortality after adjustment for many confounders. Mechanisms may include inflammation, microbiome changes, and metabolic effects, though causality is still an active research area.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Mediterranean diet actually proven to extend life?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Randomized trials such as PREDIMED showed meaningful reductions in major cardiovascular events with Mediterranean-style diets versus a low-fat control. All-cause mortality effects are harder to power in single trials, but combined epidemiologic evidence supports lower mortality risk with higher adherence to Mediterranean-like patterns.',
        },
      },
      {
        '@type': 'Question',
        name: 'What single dietary change has the biggest impact on longevity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No single food dominates outcomes; the most consistent levers are increasing vegetables and fiber, replacing ultra-processed foods with whole foods, and improving fat quality (for example, more olive oil and nuts, less trans fat). These changes overlap strongly with Mediterranean-style patterns.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can improving diet quality add years back after decades of poor eating?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Risk evolves over time — improving diet can improve blood pressure, lipids, glycemic control, and weight trajectories even after long periods of poorer eating, though not all prior risk is reversible. Earlier change generally offers more benefit, but later improvements still matter for complications and quality of life.',
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
        name: 'Diet and Life Expectancy',
        item: 'https://whenwillidiecalculator.com/diet-and-life-expectancy',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Diet and Life Expectancy: What You Eat and How Long You Live',
    description:
      'How does diet affect life expectancy? Research shows dietary quality can add or subtract 2–3 years. See what the Mediterranean diet, ultra-processed foods, and specific nutrients do to your lifespan.',
    url: 'https://whenwillidiecalculator.com/diet-and-life-expectancy',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Diet and Life Expectancy
      </nav>

      <h1 style={H1_STYLE}>Diet and Life Expectancy: What You Eat and How Long You Live</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Diet is one of the most studied — and most debated — factors in longevity research. The overall
        finding is clear: dietary quality matters, with poor diets associated with roughly 2–3 fewer
        years of life expectancy and high-quality diets associated with meaningful longevity benefits. The
        specific details are more nuanced: no single food is a magic bullet, and no single food is
        uniquely deadly. The research consistently points to overall dietary patterns rather than
        individual nutrients. This page covers what the evidence shows about diet and longevity, which
        patterns have the strongest evidence, and what practical changes move the needle most. For a
        personalized estimate, try our{' '}
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
              Years added (excellent vs poor diet)
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~2–3 years</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Global deaths linked to poor diet annually
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1612', marginTop: 6, lineHeight: 1.25 }}>
              ~11 million (GBD)
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Americans eating recommended vegetables/fruit
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>~12%</div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Mediterranean diet cardiovascular risk reduction
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#1a1612', marginTop: 6, lineHeight: 1.25 }}>
              ~30% (PREDIMED)
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>How Much Does Diet Actually Affect Life Expectancy?</h2>
      <p style={P_STYLE}>
        The Global Burden of Disease study estimates that poor diet is responsible for approximately 11
        million deaths per year worldwide — making it one of the leading modifiable risk factors for
        premature mortality. In the US specifically, diets high in sodium, low in whole grains, and low
        in fruits and vegetables account for a significant proportion of cardiovascular deaths. Sofi et
        al. (BMJ, 2008) found that high adherence to a Mediterranean dietary pattern was associated with
        significantly reduced all-cause mortality, cardiovascular mortality, and cancer mortality. The
        magnitude of the diet effect on life expectancy — roughly 2–3 years between poor and excellent
        dietary quality — is meaningful but smaller than smoking (10 years) and larger than most people
        expect from a factor they make decisions about three times a day.
      </p>

      <h2 style={H2_STYLE}>Life Expectancy Impact by Dietary Quality</h2>
      <div style={tableWrapStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640 }}>
          <thead>
            <tr>
              <th style={thStyle}>Dietary Quality</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Estimated Impact</th>
              <th style={thStyle}>Primary Mechanism</th>
            </tr>
          </thead>
          <tbody>
            {dietRows.map((row, idx) => {
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg =
                row.rowKey === 'excellent' ? '#eaf6ee' : row.rowKey === 'poor' ? '#fdecec' : baseBg;
              return (
                <tr key={row.quality} style={{ background: bg }}>
                  <td style={{ ...tdStyle, fontWeight: 600 }}>{row.quality}</td>
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
        Based on Sofi F et al., BMJ 2008, and Global Burden of Disease dietary analysis. Individual
        variation is significant.
      </p>

      <h2 style={H2_STYLE}>The Mediterranean Diet — Why It Has the Strongest Evidence</h2>
      <p style={P_STYLE}>
        The Mediterranean diet has the most robust longevity evidence of any dietary pattern — built on
        multiple large randomized controlled trials and prospective cohort studies. The PREDIMED trial
        (Spain, 7,000+ participants) found that a Mediterranean diet supplemented with olive oil or nuts
        reduced major cardiovascular events by approximately 30% compared to a low-fat control diet.
        The dietary pattern emphasizes olive oil as the primary fat, abundant vegetables, fruits,
        legumes, whole grains, fish, moderate nuts, and limited red meat and processed foods. It is not a
        rigid prescription — it is a pattern of food choices. The mechanisms behind its longevity
        benefits include: reduced LDL oxidation, lower chronic inflammation, improved gut microbiome
        diversity, better insulin sensitivity, and lower blood pressure. No single component explains the
        benefit — it is the overall pattern that produces the effect.
      </p>

      <h2 style={H2_STYLE}>Ultra-Processed Foods — The Emerging Research</h2>
      <p style={P_STYLE}>
        Ultra-processed foods — industrially manufactured products containing ingredients not typically
        found in home cooking (emulsifiers, artificial flavors, color additives, modified starches) — have
        become a major focus of nutrition and longevity research. Large prospective studies, including
        analyses from the NutriNet-Santé cohort in France, have found that higher ultra-processed food
        consumption is associated with higher all-cause mortality, cardiovascular mortality, and cancer
        risk — independent of nutrient content. The mechanism is not fully established but likely
        involves disruption of the gut microbiome, promotion of chronic inflammation, and the effects of
        additives on metabolic processes. Ultra-processed foods now make up approximately 60% of calories
        in the average American diet. Reducing them — rather than obsessing over specific nutrients — is
        one of the most practical dietary changes with evidence-based longevity support.
      </p>

      <h2 style={H2_STYLE}>What the Research Actually Agrees On</h2>
      <p style={P_STYLE}>
        Despite the noise in nutrition research, several findings are highly consistent across studies
        and dietary frameworks. More vegetables and fiber: universally associated with better health
        outcomes across virtually all dietary research. Less ultra-processed food: consistent association
        with worse outcomes across multiple large cohort studies. Adequate protein: increasingly recognized
        as important for muscle preservation, particularly after 50. Less added sugar: strong evidence
        for reducing metabolic disease risk. Healthy fats over trans fats: well established. What
        doesn&apos;t have strong evidence: specific superfoods, supplement megadosing, extreme
        macronutrient ratios, or any single dietary intervention that overrides overall pattern quality.
        The practical summary: eat mostly whole foods, plenty of vegetables, adequate protein, and limit
        packaged products with long ingredient lists.
      </p>

      <h2 style={H2_STYLE}>How Our Calculator Handles Diet</h2>
      <p style={P_STYLE}>
        Our life expectancy calculator includes diet quality as one of seven lifestyle modifiers. Poor
        diet subtracts approximately 2–3 years from the base estimate; average diet is the neutral baseline;
        good diet adds approximately 2 years. These adjustments are based on Sofi et al. (BMJ 2008) and
        Global Burden of Disease dietary analyses. The modifier reflects overall dietary pattern quality
        rather than any specific food or nutrient. Move the diet slider and watch the years update in
        real time.
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
          href="https://www.bmj.com/content/337/bmj.a1344"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          Sofi F et al., BMJ 2008
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.nejm.org/doi/full/10.1056/NEJMoa1200303"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          PREDIMED trial
        </a>
      </p>
      <p style={P_STYLE}>
        <a
          href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)30041-8/fulltext"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          GBD Diet Collaborators
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
