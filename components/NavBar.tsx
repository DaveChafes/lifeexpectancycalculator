'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#f0e8d8',
        borderBottom: '1px solid #e8dfc8',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: '15px',
          fontWeight: 700,
          color: '#1a1612',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        Life Expectancy Calculator
      </Link>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {[
          { href: '/perspective', label: 'Perspective' },
          { href: '/about', label: 'About' },
          { href: '/methodology', label: 'Methodology' },
          { href: '/privacy', label: 'Privacy' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: '13px',
              fontWeight: pathname === href ? 600 : 400,
              color: pathname === href ? '#c9a84c' : '#9a8f7a',
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

