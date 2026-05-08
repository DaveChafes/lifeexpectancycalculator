'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FactCardProps {
  front: string;
  back: string;
}

function FactCard({ front, back }: FactCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        cursor: 'pointer',
        perspective: '1000px',
        height: '180px',
        flex: '1',
        minWidth: '280px',
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
              fontSize: '13px',
              color: '#6b5e4e',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            Perspective
          </div>
          <div
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontSize: '20px',
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
              color: '#7a6e5f',
              marginTop: '8px',
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
              fontSize: '15px',
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

interface PerspectiveFactsProps {
  yearsRemaining: number;
  weeksRemaining: number;
}

export default function PerspectiveFacts({
  yearsRemaining,
  weeksRemaining,
}: PerspectiveFactsProps) {
  const weekendsRemaining = Math.round((weeksRemaining / 7) * 2);
  const mealsRemaining = Math.round(yearsRemaining * 365 * 3);

  const facts = [
    {
      front: `${weekendsRemaining.toLocaleString()} weekends remaining`,
      back: `That's ${weekendsRemaining.toLocaleString()} opportunities to rest, explore, and be with people you love. Most people spend them on autopilot. You don't have to.`,
    },
    {
      front: `${mealsRemaining.toLocaleString()} more meals with the people you love`,
      back: `Research shows shared meals are the strongest predictor of family closeness and happiness. Every one is a chance to be present.`,
    },
  ];

  return (
    <section style={{ width: '100%' }}>
      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: '28px',
          fontWeight: 700,
          color: '#1a1612',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        Put Your Time in Perspective
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#6b5e4e',
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        Flip each card to see what your time really means.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {facts.map((fact, i) => (
          <FactCard key={i} front={fact.front} back={fact.back} />
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Link
          href="/perspective"
          style={{
            fontSize: '15px',
            color: '#c9a84c',
            fontWeight: 600,
            textDecoration: 'none',
            borderBottom: '1px solid #c9a84c',
            paddingBottom: '2px',
          }}
        >
          → See all 32 perspective facts
        </Link>
      </div>
    </section>
  );
}

