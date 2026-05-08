'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AdUnit from '@/components/AdUnit';
import ShareCard from '@/components/ShareCard';

interface FactCardProps {
  front: string;
  back: React.ReactNode;
}

function FactCard({ front, back }: FactCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        cursor: 'pointer',
        perspective: '1000px',
        height: '200px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: '#fffdf7',
            border: '1px solid #e8dfc8',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '8px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              color: '#9a8f7a',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Perspective
          </div>
          <div
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#1a1612',
              lineHeight: 1.3,
            }}
          >
            {front}
          </div>
          <div
            style={{
              fontSize: '11px',
              color: '#bfb49a',
              marginTop: '4px',
            }}
          >
            tap to flip
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#c9a84c',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: '#2a1f00',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}
          >
            {back}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PerspectivePageClient() {
  const router = useRouter();
  const [params, setParams] = useState<{
    years: number;
    weeks: number;
    birthDate?: string;
    sex?: string;
    estimatedDeathAge?: number;
    estimatedDeathYear?: number;
    currentAge?: number;
    weeksRemaining?: number;
  } | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lifeCalcResult');
    if (stored) {
      try {
        setParams(
          JSON.parse(stored) as {
            years: number;
            weeks: number;
            birthDate?: string;
            sex?: string;
            estimatedDeathAge?: number;
            estimatedDeathYear?: number;
            currentAge?: number;
            weeksRemaining?: number;
          }
        );
      } catch {
        setParams(null);
      }
    }
  }, []);

  const years = params?.years ?? 40;
  const weeks = params?.weeks ?? 2080;

  const weekendsRemaining = Math.round((weeks / 7) * 2);
  const sunrisesRemaining = Math.round(years * 365);
  const electionsRemaining = Math.floor(years / 4);
  const mealsRemaining = Math.round(years * 365 * 3);
  const fullMoonsRemaining = Math.round(years * 12.37);
  const booksRemaining = Math.round(years * 52);
  const albumsRemaining = Math.round(years * 365);
  const superBowlsRemaining = Math.round(years);
  const worldCupsRemaining = Math.floor(years / 4);
  const olympicsRemaining = Math.floor(years / 4);
  const seasonsRemaining = Math.round(years * 4);
  const yearsSleeingRemaining = Math.round(years * 0.33);
  const mondaysRemaining = Math.round(weeks);
  const daylightDaysRemaining = Math.round(years * 365);
  const minutesRemaining = Math.round(years * 365 * 24 * 60);
  const workingHoursRemaining = Math.round(years * 48 * 40);
  const wakingHoursRemaining = Math.round(years * 365 * 16);
  const workingPercent = Math.round((workingHoursRemaining / wakingHoursRemaining) * 100);
  const nonWorkingPercent = 100 - workingPercent;

  const facts = [
    // Health change cards (always first)
    {
      front: 'Quit smoking. Your heart notices in 12 months.',
      back: (
        <div>
          <div>
            Quitting smoking cuts your risk of heart disease in half within just 1 year. Within 15
            years, your risk matches someone who never smoked.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: CDC, Benefits of Quitting Smoking
          </div>
        </div>
      ),
    },
    {
      front: "22 minutes a day. That's all it takes.",
      back: (
        <div>
          <div>
            Just 150 minutes of moderate exercise per week — 22 minutes a day — reduces all-cause
            mortality risk by up to 31%. You don&apos;t need to run a marathon. You need to move.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: American Heart Association, 2022
          </div>
        </div>
      ),
    },
    {
      front: 'Your sleep is your longevity. Guard it.',
      back: (
        <div>
          <div>
            Sleeping under 6 hours per night is linked to a 13% higher mortality risk. Fixing your
            sleep costs nothing and starts working the first night.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: Sleep Medicine Reviews, Cappuccio et al.
          </div>
        </div>
      ),
    },
    {
      front: 'Loneliness is as dangerous as smoking.',
      back: (
        <div>
          <div>
            Chronic loneliness carries a 26% increased risk of early death — roughly the same
            mortality impact as smoking 15 cigarettes a day.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: Holt-Lunstad et al., Perspectives on Psychological Science, 2015
          </div>
        </div>
      ),
    },
    {
      front: "The Mediterranean diet doesn't count calories. It just works.",
      back: (
        <div>
          <div>
            Switching to a Mediterranean diet is associated with up to 25% lower risk of
            cardiovascular death — no calorie counting, just different foods.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: New England Journal of Medicine, PREDIMED Study
          </div>
        </div>
      ),
    },
    {
      front: "Stress doesn't just feel bad. It ages your DNA.",
      back: (
        <div>
          <div>
            Chronic high stress accelerates cellular aging by shortening telomeres — the biological
            equivalent of fraying the ends of your DNA. Meditation and social connection are the two
            best-studied reversals.
          </div>
          <div style={{ fontSize: '12px', color: '#6b5d3a', opacity: 0.85, marginTop: '10px' }}>
            Source: Blackburn &amp; Epel, The Telomere Effect
          </div>
        </div>
      ),
    },
    // Historical cards
    {
      front: 'Ancient Romans lived to 35. Or did they?',
      back: `Ancient Romans had a life expectancy of ~35 — but that's almost entirely infant mortality skewing the average. Survive to 30 and you'd likely see 60+. Life expectancy numbers hide as much as they reveal.`,
    },
    {
      front: '400 weeks. One moon landing.',
      back: `The Apollo program — JFK's speech to Neil Armstrong's boot on the moon — took 400 weeks. That's 7 years and 8 months. One focused decade changed human history.`,
    },
    // Fun fact cards
    {
      front: "Your great-grandparents were supposed to die at 47.",
      back: `A person born in 1900 in the US had a life expectancy of 47. Born today: 77. That's 30 extra years — about 1,560 weeks, or 360 months — won entirely through sanitation, vaccines, and medicine. You inherited those bonus years. Use them.`,
    },
    {
      front: "Japan lives 7 years longer. Here's why.",
      back: `Japan leads the world at ~84 years average. The US sits at ~77. That 7-year gap — 364 weeks, roughly 3 years and 5 months — is largely explained by diet, daily walking, and lower obesity rates. The difference isn't genetic. It's behavioral.`,
    },
    {
      front: "You're watching your life away.",
      back: `The average American spends ~9 weeks per year watching TV. Over a 40-year adult life, that's 360 weeks — nearly 7 years — on the couch.`,
    },
    {
      front: '122 years old. 2 lbs of chocolate per week.',
      back: `Jeanne Calment lived to 122 — the oldest verified human ever. She ate 2 lbs of chocolate per week, rode a bicycle until 100, and credited her longevity to one thing: 'no stress.'`,
    },
    {
      front: `${weekendsRemaining.toLocaleString()} weekends remaining`,
      back: `That's ${weekendsRemaining.toLocaleString()} opportunities to rest, explore, and be with people you love. Most people spend them on autopilot. You don't have to.`,
    },
    {
      front: `${sunrisesRemaining.toLocaleString()} sunrises remaining`,
      back: `Each one is a reset. A new chance to start something. Most people sleep through them. The ones you catch tend to stay with you.`,
    },
    {
      front: `${electionsRemaining} presidential elections remaining`,
      back: `${electionsRemaining} chances to shape the country your children and grandchildren inherit. Each one matters more than it feels like it does in the moment.`,
    },
    {
      front: `${mealsRemaining.toLocaleString()} more meals with the people you love`,
      back: `Research shows shared meals are the strongest predictor of family closeness and happiness. Every one is a chance to be fully present.`,
    },
    {
      front: `${fullMoonsRemaining.toLocaleString()} full moons remaining`,
      back: `Humans have looked up at the same moon for 300,000 years. Every culture, every civilization, every person you've ever loved has seen it. You get ${fullMoonsRemaining.toLocaleString()} more looks.`,
    },
    {
      front: `${booksRemaining.toLocaleString()} books you could read`,
      back: `At one book per week, you could read ${booksRemaining.toLocaleString()} books you've never opened. Every great idea, love story, and piece of wisdom ever recorded is waiting.`,
    },
    {
      front: `${albumsRemaining.toLocaleString()} albums you could discover`,
      back: `At one album a day, ${albumsRemaining.toLocaleString()} entire musical worlds are still waiting for you. Whole genres you've never heard. Artists who will change how you feel.`,
    },
    {
      front: `${superBowlsRemaining} more Super Bowls`,
      back: `${superBowlsRemaining} more chances for your team to finally win it. Or to watch someone else's team break their heart instead. Either way — you'll be there.`,
    },
    {
      front: `${worldCupsRemaining} more World Cups`,
      back: `The most watched event on Earth — ${worldCupsRemaining} more times. Billions of people pausing their lives to watch the same thing at the same moment. That's something.`,
    },
    {
      front: `${olympicsRemaining} more Summer Olympics`,
      back: `${olympicsRemaining} more moments of watching humans do the impossible. World records that seem unbreakable will be broken. Athletes who don't exist yet will become legends.`,
    },
    {
      front: `${seasonsRemaining.toLocaleString()} seasons remaining`,
      back: `${Math.round(seasonsRemaining / 4).toLocaleString()} more springs, ${Math.round(seasonsRemaining / 4).toLocaleString()} summers, ${Math.round(seasonsRemaining / 4).toLocaleString()} autumns, ${Math.round(seasonsRemaining / 4).toLocaleString()} winters. Each one distinct. Each one unrepeatable.`,
    },
    {
      front: `${yearsSleeingRemaining} years you'll spend sleeping`,
      back: `About a third of your remaining life will be spent unconscious. Sleep isn't wasted time — it's when your brain consolidates memory, repairs cells, and processes emotion. Protect it.`,
    },
    {
      front: `${mondaysRemaining.toLocaleString()} Monday mornings remaining`,
      back: `${mondaysRemaining.toLocaleString()} fresh starts. Most people dread them. But every Monday is a clean slate — a chance to be a slightly better version of who you were last week.`,
    },
    {
      front: `${daylightDaysRemaining.toLocaleString()} more days of sunlight`,
      back: `Get outside. Sunlight regulates your circadian rhythm, boosts serotonin, and reduces cortisol. The research on time outdoors and longevity is unambiguous: it adds years.`,
    },
    {
      front: `${minutesRemaining.toLocaleString()} minutes remaining in your life`,
      back: `The average person spends less than 5% of their waking minutes in deep conversation with people they love. What would change if you doubled that?`,
    },
    {
      front: `${workingHoursRemaining.toLocaleString()} hours you'll spend working`,
      back: `That's roughly ${workingPercent}% of your remaining waking life. Work matters — but the other ${nonWorkingPercent}% is where your actual life happens. Don't let it slip by unnoticed.`,
    },
    {
      front: `Quantum computers will solve in seconds what today's computers cannot solve in the age of the universe`,
      back: `You are alive at the exact moment this technology is becoming real. Problems in medicine, climate, and materials science that seem impossible today will be solved in your lifetime.`,
    },
    {
      front: `Humans will likely set foot on Mars within your lifetime`,
      back: `For all of human history, Mars was a light in the sky. You may live to see a human being stand on it. That has never happened before in 300,000 years of human existence.`,
    },
    {
      front: `You were born in the safest, healthiest, most prosperous era in human history`,
      back: `A person alive today has a higher life expectancy, lower chance of dying in war, and more access to knowledge than any human who ever lived. You won the lottery of time. Use it.`,
    },
    {
      front: `World population when your estimated time ends: ~${Math.round((8.1 + years * 0.07) * 10) / 10} billion`,
      back: `Every one of those people will have their own version of this moment — looking at their own grid, counting their own weeks. What will you have contributed to that world?`,
    },
  ];

  return (
    <main style={{ backgroundColor: '#f7f2e8', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={() => router.push('/')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            color: '#9a8f7a',
            padding: 0,
            textDecoration: 'none',
            display: 'block',
            marginBottom: '32px',
          }}
        >
          ← Back to your results
        </button>

        <h1
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontSize: '40px',
            fontWeight: 700,
            color: '#1a1612',
            marginBottom: '8px',
            textAlign: 'center',
          }}
        >
          Your Time in Perspective
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#9a8f7a',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: 1.7,
          }}
        >
          {params
            ? `Based on your estimated ${Math.round(years)} years remaining. Flip each card to go deeper.`
            : `Based on an average remaining lifespan. Calculate yours for personalized facts.`}
        </p>

        {!params ? (
          <p style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Link href="/" style={{ color: '#c9a84c', fontWeight: 600, textDecoration: 'none' }}>
              → Calculate your personalized facts
            </Link>
          </p>
        ) : (
          <div style={{ marginBottom: '40px' }} />
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {facts.slice(0, 10).map((fact, i) => (
            <FactCard key={i} front={fact.front} back={fact.back} />
          ))}
        </div>

        <AdUnit slotId="slot-perspective-mid" format="horizontal" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
            margin: '40px 0',
          }}
        >
          {facts.slice(10).map((fact, i) => (
            <FactCard key={i + 10} front={fact.front} back={fact.back} />
          ))}
        </div>

        <AdUnit slotId="slot-perspective-bottom" format="rectangle" />

        {params && (
          <div style={{ marginTop: '48px', marginBottom: '24px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontSize: '24px',
                fontWeight: 700,
                color: '#1a1612',
                textAlign: 'center',
                marginBottom: '24px',
              }}
            >
              Share your perspective
            </h2>
            <ShareCard
              estimatedDeathAge={Math.round(params.years + (new Date().getFullYear() - 1990))}
              estimatedDeathYear={new Date().getFullYear() + Math.round(params.years)}
              percentileVsPeers={50}
              sex={params.sex as 'male' | 'female'}
              currentAge={Math.round(
                (Date.now() - new Date(params.birthDate ?? '1990-01-01').getTime()) /
                  (365.25 * 24 * 60 * 60 * 1000)
              )}
              weeksRemaining={params.weeks}
            />
          </div>
        )}

        <p
          style={{
            fontSize: '12px',
            color: '#bfb49a',
            textAlign: 'center',
            marginTop: '48px',
            lineHeight: 1.6,
          }}
        >
          All figures are estimates based on your calculated remaining lifespan. Population
          projections based on UN medium variant. Sports facts assume current formats continue.
        </p>
      </div>
    </main>
  );
}

