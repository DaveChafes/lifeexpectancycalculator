'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home } from 'lucide-react';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#0f0f0f',
        borderBottom: '1px solid #1f2937',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <button
        type="button"
        style={{
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          padding: 0,
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: '15px',
          fontWeight: 700,
          color: '#f9fafb',
          letterSpacing: '-0.01em',
        }}
        onClick={() => {
          if (pathname === '/' && typeof window !== 'undefined' && sessionStorage.getItem('lifeCalcResult')) {
            window.dispatchEvent(new Event('lifeCalc:logoClick'));
            return;
          }
          router.push('/');
        }}
      >
        Life Expectancy Calculator
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {[
          { href: '/', label: 'Home', icon: <Home size={16} aria-hidden /> },
          { href: '/about', label: 'About' },
          { href: '/methodology', label: 'Methodology' },
          { href: '/privacy', label: 'Privacy' },
        ].map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: '13px',
              fontWeight: pathname === href ? 600 : 400,
              color: pathname === href ? '#fbbf24' : '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {icon ?? null}
            {icon ? null : label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

