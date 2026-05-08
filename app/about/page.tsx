export const metadata = {
  title: 'About',
  description:
    'Why I built the Life Expectancy Calculator — a free perspective tool based on SSA and CDC actuarial data that shows your life in weeks, not just years.',
  openGraph: {
    title: 'About | Life Expectancy Calculator',
    description:
      'Why I built the Life Expectancy Calculator — a free perspective tool based on SSA and CDC actuarial data.',
    url: 'https://whenwillidiecalculator.com/about',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/about',
  },
};

import AdUnit from '@/components/AdUnit';

export default function AboutPage() {
  return (
    <main
      style={{
        background: '#f7f2e8',
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'About the Life Expectancy Calculator',
            description:
              'Why the Life Expectancy Calculator was built and how it uses SSA and CDC actuarial data to create genuine perspective about time.',
            url: 'https://whenwillidiecalculator.com/about',
            publisher: {
              '@type': 'Organization',
              name: 'Life Expectancy Calculator',
              url: 'https://whenwillidiecalculator.com',
            },
          }),
        }}
      />
      <h1
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 36,
          fontWeight: 700,
          color: '#1a1612',
          margin: '0 0 8px 0',
        }}
      >
        About This Calculator
      </h1>

      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '0 0 16px 0' }}>
        I built this tool because I wanted to understand my own time better — and I
        couldn&apos;t find anything that showed it to me in a way that actually landed.
        Most calculators give you a number. A number alone doesn&apos;t create perspective.
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '0 0 16px 0' }}>
        What creates perspective is seeing your life as weeks on a grid. When you see the
        golden squares — weeks already lived — sitting next to the empty ones still to be
        written, something shifts. That&apos;s the moment this tool was built for.
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '0 0 16px 0' }}>
        Everything here is built on public domain data from the U.S. Social Security
        Administration and the CDC — the same actuarial tables used by financial planners,
        insurers, and researchers. The lifestyle adjustments are drawn from peer-reviewed
        longevity research. I built this as a solo project because I thought it was worth
        building — the calculator is free and always will be. If I share resources or
        recommendations down the road, it&apos;ll be because I believe they could help someone
        (including myself).
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        All calculations happen in your browser. No personal data is collected or stored —
        ever. I hope this tool does for you what it did for me: not create anxiety, but
        create clarity.
      </p>

      <a
        href="/"
        style={{
          display: 'inline-block',
          color: '#c9a84c',
          textDecoration: 'none',
          fontWeight: 600,
          marginTop: 32,
        }}
      >
        → Try the calculator
      </a>

      <p style={{ fontSize: 13, color: '#9a8f7a', lineHeight: 1.8, marginTop: 12 }}>
        Data sources are listed on the Methodology page.
      </p>

      <div style={{ marginTop: '48px' }}>
        <AdUnit slotId="slot-about-bottom" format="horizontal" />
      </div>
    </main>
  );
}
