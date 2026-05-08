'use client';

import AdUnit from '@/components/AdUnit';
import Calculator from '@/components/Calculator';
import PerspectiveFacts from '@/components/PerspectiveFacts';
import Result from '@/components/Result';
import ShareCard from '@/components/ShareCard';
import Sliders from '@/components/Sliders';
import {
  getBaseLifeExpectancy,
  getDemographicComparisons,
  getPercentileVsPeers,
} from '@/lib/calculator';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useMemo, useState } from 'react';

const ComparisonChart = dynamic(() => import('@/components/ComparisonChart'), {
  ssr: false,
});
const LifeGrid = dynamic(() => import('@/components/LifeGrid'), { ssr: false });

function getStructuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Life Expectancy Calculator',
      description:
        'See how much time you have — and make it count. Based on SSA and CDC actuarial data with interactive lifestyle modifiers.',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      url: 'https://whenwillidiecalculator.com',
      author: {
        '@type': 'Organization',
        name: 'Life Expectancy Calculator',
        url: 'https://whenwillidiecalculator.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How accurate is this life expectancy calculator?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "This calculator provides statistical estimates based on the SSA 2022 Period Life Table and CDC actuarial data. Results are population averages and do not predict any individual's lifespan.",
          },
        },
        {
          '@type': 'Question',
          name: 'What data does this calculator use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The calculator uses the U.S. Social Security Administration 2022 Period Life Table and CDC National Center for Health Statistics data — the same sources used by financial planners and insurers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does this calculator store my personal data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All calculations happen locally in your browser. Your birth date, sex, and lifestyle inputs are never sent to a server or stored anywhere.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the average life expectancy in the US?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'According to CDC data, the average American man lives to approximately 74.8 years and the average American woman to approximately 80.2 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does seeing life in weeks feel different than seeing it in years?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Years feel abstract. Weeks feel countable and finite. When you see your remaining weeks as individual squares on a grid, the finiteness of time becomes vivid in a way that tends to shift priorities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the single biggest thing I can do to add years to my life?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you smoke, quitting is consistently the highest-impact change available — adding up to 10 years in population studies. Beyond that, regular exercise, quality sleep, and a healthy BMI have the largest measurable effects.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Life Expectancy Calculator',
      url: 'https://whenwillidiecalculator.com',
      description: 'A free life expectancy visualization tool based on public actuarial data.',
    },
  ];
}

const H2_STYLE = {
  fontFamily: 'var(--font-lora), serif',
  fontSize: '24px',
  fontWeight: 700 as const,
  color: '#1a1612',
  marginBottom: '12px',
  marginTop: 0,
};

const P_STYLE = {
  fontSize: '15px',
  color: '#4a3f2f',
  lineHeight: 1.8,
  margin: 0,
};

export default function Home() {
  const [step, setStep] = useState<'input' | 'result'>('input');
  const [loading, setLoading] = useState(false);
  const [birthDate, setBirthDate] = useState<string>('');
  const [sex, setSex] = useState<'male' | 'female' | null>(null);
  const [baseResult, setBaseResult] = useState<ReturnType<
    typeof getBaseLifeExpectancy
  > | null>(null);
  const [adjustedDeathAge, setAdjustedDeathAge] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{ factor: string; years: number }[]>(
    []
  );
  const [comparisons, setComparisons] = useState<
    { label: string; age: number; isUser: boolean }[]
  >([]);
  const [percentile, setPercentile] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = sessionStorage.getItem('lifeCalcResult');
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as {
        birthDate?: string;
        sex?: 'male' | 'female';
        estimatedDeathAge?: number;
      };
      if (!parsed.birthDate || !parsed.sex) return;

      setBirthDate(parsed.birthDate);
      setSex(parsed.sex);

      const result = getBaseLifeExpectancy(parsed.sex, parsed.birthDate);
      setBaseResult(result);
      setAdjustedDeathAge(parsed.estimatedDeathAge ?? result.estimatedDeathAge);
      setComparisons(
        getDemographicComparisons(result.estimatedDeathAge, parsed.sex, result.currentAge)
      );
      setPercentile(getPercentileVsPeers(result.estimatedDeathAge, parsed.sex, result.currentAge));
      setStep('result');
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = useCallback(
    (inputs: { birthDate: string; sex: 'male' | 'female' }) => {
      setLoading(true);
      setBirthDate(inputs.birthDate);
      setSex(inputs.sex);
      const result = getBaseLifeExpectancy(inputs.sex, inputs.birthDate);
      setBaseResult(result);
      setAdjustedDeathAge(result.estimatedDeathAge);
      setComparisons(
        getDemographicComparisons(result.estimatedDeathAge, inputs.sex, result.currentAge)
      );
      setPercentile(
        getPercentileVsPeers(result.estimatedDeathAge, inputs.sex, result.currentAge)
      );

      if (typeof window !== 'undefined') {
        sessionStorage.setItem(
          'lifeCalcResult',
          JSON.stringify({
            years: result.yearsRemaining,
            weeks: result.weeksRemaining,
            birthDate: inputs.birthDate,
            sex: inputs.sex,
            estimatedDeathAge: result.estimatedDeathAge,
            estimatedDeathYear: result.estimatedDeathYear,
            currentAge: result.currentAge,
            weeksRemaining: result.weeksRemaining,
          })
        );
      }

      setTimeout(() => {
        setLoading(false);
        setStep('result');
      }, 400);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleModifiersChange = useCallback(
    (newDeathAge: number, newBreakdown: { factor: string; years: number }[]) => {
      setAdjustedDeathAge(newDeathAge);
      setBreakdown(newBreakdown);
      if (sex && baseResult) {
        setComparisons(
          getDemographicComparisons(newDeathAge, sex, baseResult.currentAge)
        );
        setPercentile(getPercentileVsPeers(newDeathAge, sex, baseResult.currentAge));
      }
    },
    [sex, baseResult]
  );

  const handleReset = useCallback(() => {
    setLoading(false);
    setStep('input');
    setBaseResult(null);
    setAdjustedDeathAge(null);
    setBreakdown([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const displayDeathAge =
    baseResult != null ? adjustedDeathAge ?? baseResult.estimatedDeathAge : 0;

  const exactDeathDate = useMemo(() => {
    if (!baseResult) return new Date();
    const msDay = 86400000;
    const yRem = Math.max(0, displayDeathAge - baseResult.currentAge);
    return new Date(Date.now() + yRem * 365.25 * msDay);
  }, [baseResult, displayDeathAge]);

  void breakdown;

  if (loading) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
        <main
          style={{
            backgroundColor: '#f7f2e8',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div className="calc-loading-spinner" aria-label="Loading" />
            <div style={{ color: '#9a8f7a', fontSize: 14 }}>
              Calculating your timeline...
            </div>
          </div>
        </main>
      </>
    );
  }

  if (step === 'input') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
        <main style={{ backgroundColor: '#f7f2e8', minHeight: '100vh' }}>
          <Calculator onSubmit={handleSubmit} />
        </main>
      </>
    );
  }

  if (step === 'result' && baseResult !== null && sex !== null) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
        />
        <main
          style={{ backgroundColor: '#f7f2e8', minHeight: '100vh', paddingTop: '0' }}
        >
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '64px',
            }}
          >
            <section>
              <Result
                birthDate={birthDate}
                sex={sex}
                estimatedDeathAge={adjustedDeathAge ?? baseResult.estimatedDeathAge}
                estimatedDeathYear={baseResult.estimatedDeathYear}
                yearsRemaining={baseResult.yearsRemaining}
                weeksRemaining={baseResult.weeksRemaining}
                currentAge={baseResult.currentAge}
                exactDeathDate={exactDeathDate}
                onReset={handleReset}
              />
            </section>

          <section>
            <Sliders
              baseDeathAge={baseResult.estimatedDeathAge}
              onModifiersChange={handleModifiersChange}
            />
          </section>

          <section>
            <ComparisonChart
              comparisons={comparisons}
              percentileVsPeers={percentile}
              sex={sex}
            />
          </section>

          <section>
            <LifeGrid
              birthDate={birthDate}
              estimatedDeathAge={adjustedDeathAge ?? baseResult.estimatedDeathAge}
            />
          </section>

          <section>
            <PerspectiveFacts
              yearsRemaining={baseResult.yearsRemaining}
              weeksRemaining={baseResult.weeksRemaining}
            />
          </section>

          <section>
            <ShareCard
              estimatedDeathAge={adjustedDeathAge ?? baseResult.estimatedDeathAge}
              estimatedDeathYear={baseResult.estimatedDeathYear}
              percentileVsPeers={percentile}
              sex={sex}
              currentAge={baseResult.currentAge}
              weeksRemaining={baseResult.weeksRemaining}
            />
          </section>

          <section>
            <AdUnit slotId="slot-after-share" format="rectangle" />
          </section>

          <section
            style={{
              borderTop: '1px solid #e8dfc8',
              paddingTop: '60px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
            }}
          >
            <div>
              <h2 style={H2_STYLE}>How This Calculator Works</h2>
              <p style={P_STYLE}>
                This tool begins with your date of birth and biological sex, then pulls
                forward-looking longevity estimates from the{' '}
                <strong>U.S. Social Security Administration 2022 Period Life Table</strong>{' '}
                alongside supporting <strong>CDC-style actuarial framing</strong> for how
                survival curves behave at each age. For your exact attained age, it reads
                the table&apos;s remaining life expectancy and converts that into an
                estimated lifespan endpoint you can reason about in years and weeks.
                Below the headline estimate, lifestyle sliders apply{' '}
                <strong>evidence-informed directional adjustments</strong>—not a diagnosis,
                but a transparent way to see how choices stack. Everything runs{' '}
                <strong>entirely in your browser</strong>: your inputs are not uploaded,
                stored on a server, or linked to an account. That keeps the experience fast,
                private, and easy to revisit whenever you want to rethink a habit.
              </p>
            </div>

            <div>
              <h2 style={H2_STYLE}>What Affects Life Expectancy?</h2>
              <p style={P_STYLE}>
                Longevity is partly genetics and luck, but many levers are{' '}
                <strong>choices you can practice</strong>.{' '}
                <strong>Smoking</strong> remains one of the largest modifiable risks people
                consistently see in population data—daily use can subtract many years of
                healthy life compared with not smoking.{' '}
                <strong>Exercise</strong> helps maintain cardiovascular fitness, muscle,
                balance, and metabolic health; even moving from sedentary patterns toward
                regular activity is meaningful. <strong>BMI</strong> captures weight
                relative to height—underweight and higher BMI bands both correlate with
                elevated risk in large cohort studies. <strong>Sleep</strong> supports
                recovery and regulation; chronic short sleep is associated with worse
                outcomes over decades. <strong>Stress</strong> operates through behavior,
                sleep, blood pressure, and adherence—managing it is less about perfection and
                more about sustainable coping. <strong>Diet quality</strong> shifts risk
                gradually via inflammation, blood sugar, and weight trajectory.{' '}
                <strong>Alcohol</strong> is dose-dependent: light patterns differ sharply
                from heavy use. You don&apos;t need to optimize everything at once—small,
                consistent shifts compound.
              </p>
            </div>

            <div>
              <h2 style={H2_STYLE}>Average Life Expectancy in the United States</h2>
              <p style={P_STYLE}>
                According to recent CDC summaries (national Vital Statistics perspectives),
                <strong> life expectancy at birth in the United States</strong> has often
                clustered near roughly{' '}
                <strong>74–76 years for men</strong> and roughly{' '}
                <strong>79–81 years for women</strong>, with year-to-year movement driven by
                infant mortality trends, accidental deaths, cardiometabolic disease,
                respiratory illness seasons, and other population-wide pressures. These
                averages hide enormous individual variation: education, neighborhood,
                healthcare access, behaviors, and genetics all widen the spread. Your
                personal trajectory can land meaningfully above or below the national mean
                depending on the choices you sustain over time.
              </p>
            </div>

            <div>
              <h2 style={H2_STYLE}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    How accurate is this life expectancy calculator?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    It&apos;s a statistical estimate based on SSA period life-table
                    mechanics plus transparent slider adjustments—not a prediction of your
                    individual death date. Real outcomes depend on genetics, accidents,
                    healthcare, and countless factors models cannot see.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    What data does this calculator use?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    The baseline curve comes from the SSA 2022 period life table for U.S.
                    mortality expectations by age and sex. Supporting educational framing
                    references CDC-published national longevity summaries for broad context.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    Does this calculator store my personal data?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    No. Calculations execute locally in your browser session; we don&apos;t
                    send your birth date or selections to a backend database as part of this
                    flow.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    Why does smoking affect life expectancy so much?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    Smoking accelerates cardiovascular disease, cancer risk, and chronic
                    lung damage across decades of exposure. Population studies repeatedly
                    show large survival gaps between smokers and otherwise similar groups.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    What is the average life expectancy in the US?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    Published CDC summaries commonly cite averages near roughly 74.8 years
                    for men and 80.2 years for women at the national level, varying by data
                    year and methodology—check the latest published tables for precision.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    How does BMI affect life expectancy?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    BMI is an imperfect but widely tracked marker correlated with diabetes,
                    hypertension, sleep apnea, and joint wear. Very low BMI and higher BMI
                    bands both associate with elevated mortality risk in population data,
                    though individual muscle and metabolic health matter too.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    Why does seeing life in weeks feel different than seeing it in years?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    Years compress time into large chunks; weeks make the same horizon feel
                    countable—similar to calendar grids that reveal how finite a human lifespan
                    is. Many people find weeks motivating for prioritizing relationships,
                    health, and creative work.
                  </p>
                </details>

                <details
                  style={{
                    border: '1px solid #e8dfc8',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    background: '#fffdf7',
                  }}
                >
                  <summary
                    style={{
                      cursor: 'pointer',
                      fontWeight: 600,
                      color: '#4a3f2f',
                      fontSize: '15px',
                    }}
                  >
                    What is the single biggest thing I can do to add years to my life?
                  </summary>
                  <p style={{ ...P_STYLE, marginTop: '12px' }}>
                    If you smoke, quitting is often the highest-impact lever available in
                    population studies—paired with sleep, movement, blood-pressure-friendly
                    nutrition, and steady healthcare for risks you can measure (like blood
                    pressure and glucose).
                  </p>
                </details>
              </div>
            </div>

            <section>
              <AdUnit slotId="slot-content" format="horizontal" />
            </section>

            <div>
              <h2 style={H2_STYLE}>Data Sources</h2>
              <p style={P_STYLE}>
                <a
                  href="https://www.ssa.gov/oact/STATS/table4c6.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c9a84c', fontWeight: 600 }}
                >
                  Social Security Administration — Period Life Tables
                </a>
                : official cohort survival statistics used for baseline longevity lookups by
                age and sex.
              </p>
              <p style={{ ...P_STYLE, marginTop: '12px' }}>
                <a
                  href="https://www.cdc.gov/nchs/fastats/life-expectancy.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#c9a84c', fontWeight: 600 }}
                >
                  CDC National Center for Health Statistics — Life Expectancy
                </a>
                : national summaries that contextualize how average lifespans move over time.
              </p>
            </div>

            <p
              style={{
                fontSize: '12px',
                color: '#bfb49a',
                textAlign: 'center',
                marginTop: '40px',
                lineHeight: 1.6,
              }}
            >
              This calculator provides estimates based on U.S. Social Security Administration
              and CDC actuarial data for educational and entertainment purposes only. Results
              are statistical averages and do not predict your individual lifespan. This is not
              medical advice. All calculations are performed locally in your browser. No
              personal data is collected or stored.
            </p>
          </section>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
      />
      <main style={{ backgroundColor: '#f7f2e8', minHeight: '100vh' }}>
        <Calculator onSubmit={handleSubmit} />
      </main>
    </>
  );
}
