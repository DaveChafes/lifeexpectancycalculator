import Link from 'next/link';
import { CountryTable, type CountryRow } from './CountryTable';

export const metadata = {
  title: 'Life Expectancy by Country',
  description:
    'Life expectancy by country — ranked from highest to lowest using CIA World Factbook public domain data. See how the US compares to Japan, Australia, the UK, and 180+ countries worldwide.',
  keywords: [
    'life expectancy by country',
    'countries with highest life expectancy',
    'life expectancy world ranking',
    'average life expectancy by country',
    'global life expectancy comparison',
  ],
  openGraph: {
    title: 'Life Expectancy by Country | Life Expectancy Calculator',
    description: 'Life expectancy by country ranked highest to lowest — CIA World Factbook data.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-country',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/life-expectancy-by-country',
  },
};

const WORLD_AVG = 73.4;

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

const countries: CountryRow[] = [
  { rank: 1, country: 'Monaco', years: 89.4, region: 'Europe' },
  { rank: 2, country: 'Japan', years: 85.0, region: 'Asia' },
  { rank: 3, country: 'Singapore', years: 84.9, region: 'Asia' },
  { rank: 4, country: 'Macau', years: 84.7, region: 'Asia' },
  { rank: 5, country: 'San Marino', years: 84.0, region: 'Europe' },
  { rank: 6, country: 'Iceland', years: 83.9, region: 'Europe' },
  { rank: 7, country: 'Hong Kong', years: 83.7, region: 'Asia' },
  { rank: 8, country: 'Andorra', years: 83.7, region: 'Europe' },
  { rank: 9, country: 'Switzerland', years: 83.6, region: 'Europe' },
  { rank: 10, country: 'South Korea', years: 83.5, region: 'Asia' },
  { rank: 11, country: 'Israel', years: 83.5, region: 'Asia' },
  { rank: 12, country: 'Luxembourg', years: 83.4, region: 'Europe' },
  { rank: 13, country: 'Australia', years: 83.2, region: 'Oceania' },
  { rank: 14, country: 'Sweden', years: 83.1, region: 'Europe' },
  { rank: 15, country: 'Malta', years: 83.0, region: 'Europe' },
  { rank: 16, country: 'Italy', years: 82.9, region: 'Europe' },
  { rank: 17, country: 'Norway', years: 82.8, region: 'Europe' },
  { rank: 18, country: 'Spain', years: 82.7, region: 'Europe' },
  { rank: 19, country: 'New Zealand', years: 82.6, region: 'Oceania' },
  { rank: 20, country: 'Ireland', years: 82.5, region: 'Europe' },
  { rank: 21, country: 'France', years: 82.4, region: 'Europe' },
  { rank: 22, country: 'Finland', years: 82.4, region: 'Europe' },
  { rank: 23, country: 'Netherlands', years: 82.3, region: 'Europe' },
  { rank: 24, country: 'Canada', years: 82.2, region: 'North America' },
  { rank: 25, country: 'Austria', years: 82.2, region: 'Europe' },
  { rank: 26, country: 'Cyprus', years: 82.0, region: 'Europe' },
  { rank: 27, country: 'Belgium', years: 82.0, region: 'Europe' },
  { rank: 28, country: 'Germany', years: 81.9, region: 'Europe' },
  { rank: 29, country: 'Greece', years: 81.8, region: 'Europe' },
  { rank: 30, country: 'Portugal', years: 81.7, region: 'Europe' },
  { rank: 31, country: 'Denmark', years: 81.5, region: 'Europe' },
  { rank: 32, country: 'United Kingdom', years: 81.5, region: 'Europe' },
  { rank: 33, country: 'Slovenia', years: 81.3, region: 'Europe' },
  { rank: 34, country: 'Chile', years: 80.5, region: 'South America' },
  { rank: 35, country: 'Costa Rica', years: 80.3, region: 'North America' },
  { rank: 36, country: 'Cuba', years: 79.8, region: 'Caribbean' },
  { rank: 37, country: 'United States', years: 79.1, region: 'North America' },
  { rank: 38, country: 'Czech Republic', years: 78.9, region: 'Europe' },
  { rank: 39, country: 'Poland', years: 78.4, region: 'Europe' },
  { rank: 40, country: 'Croatia', years: 78.3, region: 'Europe' },
  { rank: 41, country: 'Albania', years: 78.0, region: 'Europe' },
  { rank: 42, country: 'China', years: 77.9, region: 'Asia' },
  { rank: 43, country: 'Vietnam', years: 75.6, region: 'Asia' },
  { rank: 44, country: 'Brazil', years: 75.5, region: 'South America' },
  { rank: 45, country: 'Mexico', years: 75.1, region: 'North America' },
  { rank: 46, country: 'Thailand', years: 74.7, region: 'Asia' },
  { rank: 47, country: 'Argentina', years: 74.6, region: 'South America' },
  { rank: 48, country: 'Sri Lanka', years: 74.4, region: 'Asia' },
  { rank: 49, country: 'Turkey', years: 74.2, region: 'Asia' },
  { rank: 50, country: 'Colombia', years: 73.9, region: 'South America' },
  { rank: 51, country: 'Peru', years: 73.6, region: 'South America' },
  { rank: 52, country: 'El Salvador', years: 73.0, region: 'North America' },
  { rank: 53, country: 'Philippines', years: 72.8, region: 'Asia' },
  { rank: 54, country: 'Indonesia', years: 72.5, region: 'Asia' },
  { rank: 55, country: 'Bolivia', years: 72.0, region: 'South America' },
  { rank: 56, country: 'Egypt', years: 71.8, region: 'Africa' },
  { rank: 57, country: 'India', years: 70.2, region: 'Asia' },
  { rank: 58, country: 'Myanmar', years: 69.1, region: 'Asia' },
  { rank: 59, country: 'Pakistan', years: 68.9, region: 'Asia' },
  { rank: 60, country: 'Bangladesh', years: 68.6, region: 'Asia' },
  { rank: 61, country: 'Nepal', years: 68.4, region: 'Asia' },
  { rank: 62, country: 'Kenya', years: 68.0, region: 'Africa' },
  { rank: 63, country: 'Ghana', years: 67.5, region: 'Africa' },
  { rank: 64, country: 'Tanzania', years: 67.1, region: 'Africa' },
  { rank: 65, country: 'Sudan', years: 66.5, region: 'Africa' },
  { rank: 66, country: 'Uganda', years: 65.8, region: 'Africa' },
  { rank: 67, country: 'Haiti', years: 64.9, region: 'Caribbean' },
  { rank: 68, country: 'Cameroon', years: 63.8, region: 'Africa' },
  { rank: 69, country: 'Zimbabwe', years: 63.0, region: 'Africa' },
  { rank: 70, country: 'Ethiopia', years: 62.9, region: 'Africa' },
  { rank: 71, country: 'Mozambique', years: 58.0, region: 'Africa' },
  { rank: 72, country: 'Sierra Leone', years: 56.0, region: 'Africa' },
  { rank: 73, country: 'Chad', years: 55.5, region: 'Africa' },
  { rank: 74, country: 'Nigeria', years: 55.2, region: 'Africa' },
  { rank: 75, country: 'Central African Republic', years: 54.1, region: 'Africa' },
];

export default function LifeExpectancyByCountryPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which country has the highest life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Monaco ranks among the highest in CIA World Factbook estimates, at approximately 89.4 years in the most recently available figures.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does Japan have such high life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Japan’s high life expectancy is commonly linked to low smoking rates, strong preventive healthcare, high daily activity, and dietary patterns that emphasize fish, vegetables, and lower ultra-processed intake. Social cohesion and walkable environments also help.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does the US rank lower than other wealthy countries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The US faces higher obesity rates, higher firearms mortality, fragmented access to preventive care, opioid-related mortality, and a higher chronic disease burden. These are population-level patterns shaped by systems and policy — not a verdict on individuals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the world average life expectancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A commonly cited CIA World Factbook global estimate is about 73.4 years, though it varies slightly by year and methodology.',
        },
      },
      {
        '@type': 'Question',
        name: 'Has global life expectancy been increasing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Over the long run, global life expectancy has risen dramatically due to sanitation, vaccines, antibiotics, safer childbirth, and improved nutrition. Short-term setbacks can occur from conflict, epidemics, and economic shocks.',
        },
      },
      {
        '@type': 'Question',
        name: "Can I outlive my country's average?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Country averages are population-level statistics. Individual outcomes can be meaningfully higher with non-smoking, regular exercise, healthy sleep, and consistent preventive care.',
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
        name: 'Life Expectancy by Country',
        item: 'https://whenwillidiecalculator.com/life-expectancy-by-country',
      },
    ],
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Life Expectancy by Country (World Rankings)',
    description:
      'Life expectancy by country — ranked from highest to lowest using CIA World Factbook public domain data.',
    url: 'https://whenwillidiecalculator.com/life-expectancy-by-country',
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
        <span style={{ color: '#6b5e4e' }}>›</span> Life Expectancy by Country
      </nav>

      <h1 style={H1_STYLE}>Life Expectancy by Country (World Rankings)</h1>

      <p style={{ ...P_STYLE, textAlign: 'center', maxWidth: 680, margin: '0 auto 24px auto' }}>
        Global life expectancy varies by more than 35 years between the longest- and shortest-lived
        countries. Geography, income, healthcare systems, diet, smoking rates, and conflict all shape
        where a country lands. But within any country, individual choices remain powerful. If you want
        a personal estimate that shows how habits stack, start with our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <div
        style={{
          border: '1px solid #e8dfc8',
          borderRadius: 14,
          padding: '18px 18px',
          background: '#fffdf7',
          marginTop: 10,
        }}
      >
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
              Highest
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              Monaco 89.4 yrs
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              World Average
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              {WORLD_AVG.toFixed(1)} yrs
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, color: '#6b5e4e', fontWeight: 700, letterSpacing: '0.02em' }}>
              Lowest
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#1a1612', marginTop: 6 }}>
              Central African Republic 54.1 yrs
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ ...H2_STYLE, marginTop: 24 }}>Life Expectancy by Country — Full Rankings</h2>

      <p style={{ ...P_STYLE, fontSize: 14, color: '#6b5e4e', marginBottom: 16 }}>
        Source: CIA World Factbook (public domain). Figures reflect the most recently available
        estimates; check the CIA World Factbook for updates.
      </p>

      <CountryTable countries={countries} worldAvg={WORLD_AVG} />

      <h2 style={H2_STYLE}>What Countries Have the Highest Life Expectancy?</h2>
      <p style={P_STYLE}>
        Monaco, Japan, Singapore, Switzerland, and Australia commonly sit near the top of global
        rankings. While each has unique demographics and geography, high-performing countries often
        share a few themes: broad access to healthcare, strong preventive care, and lower rates of
        smoking. Dietary patterns also matter — Mediterranean-style eating in parts of Europe and
        traditional Asian diets tend to emphasize fish, vegetables, legumes, and smaller portions of
        ultra-processed foods. Many of these places also support healthier defaults through walkable
        environments, public transit, and social cohesion that reduces isolation over time.
      </p>

      <h3 style={H3_STYLE}>Common threads</h3>
      <p style={P_STYLE}>
        Across top-ranked countries, the biggest repeatable patterns are prevention-first healthcare,
        lower tobacco exposure, and environments that make daily movement easier. Those systems
        compound for decades, shifting population averages upward.
      </p>

      <h2 style={H2_STYLE}>Why Does the United States Rank Lower Than Expected?</h2>
      <p style={P_STYLE}>
        The United States ranks around the mid-30s in many recent estimates despite being one of the
        wealthiest nations. The drivers are not “willpower” — they’re systems-level: higher obesity
        rates, higher firearms mortality, uneven preventive care access due to a fragmented healthcare
        system, opioid-related deaths, and a higher chronic disease burden. Fewer paid sick days can
        also reduce routine care and early intervention. None of this is a verdict on any individual.
        If you want to see how your habits affect your personal estimate, use our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>
        .
      </p>

      <h2 style={H2_STYLE}>What Drives the Gap Between the Highest and Lowest Countries?</h2>
      <p style={P_STYLE}>
        The difference between the top and bottom countries is shaped by extreme poverty, conflict,
        and infectious disease burden — especially in parts of sub-Saharan Africa. Access to clean
        water and consistent nutrition, maternal and child health services, and basic primary care
        all have outsized effects on population averages. Where HIV/AIDS, malaria, tuberculosis, and
        preventable childhood illness are more common, mortality is pulled earlier in life, lowering
        national life expectancy. The hopeful part is that these gaps have narrowed dramatically over
        the past 50 years as vaccines, sanitation, and treatment access have expanded.
      </p>

      <h2 style={H2_STYLE}>How Your Personal Choices Compare to Country-Level Trends</h2>
      <p style={P_STYLE}>
        Country averages are population statistics — they don’t define your ceiling. A non-smoking,
        regularly exercising American with good sleep and preventive care can outlive the average
        person in many higher-ranked countries. The national average is a floor, not a ceiling. Start
        with our{' '}
        <Link href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}>
          life expectancy calculator
        </Link>{' '}
        and explore practical strategies in{' '}
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
        {faqJsonLd.mainEntity.map((q: { name: string; acceptedAnswer: { text: string } }) => (
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
              {q.acceptedAnswer.text}
            </p>
          </details>
        ))}
      </div>

      <h2 style={H2_STYLE}>Data Sources</h2>
      <p style={P_STYLE}>
        <a
          href="https://www.cia.gov/the-world-factbook/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          CIA World Factbook (public domain)
        </a>
      </p>

      <p style={{ ...P_STYLE, marginTop: 18 }}>
        Related: see{' '}
        <Link
          href="/life-expectancy-by-state"
          style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: 600 }}
        >
          life expectancy by state
        </Link>{' '}
        and{' '}
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

