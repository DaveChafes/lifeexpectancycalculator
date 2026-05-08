'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [homeHover, setHomeHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkStyle = (href: string) => ({
    fontSize: '13px',
    fontWeight: pathname === href ? 600 : 400,
    color: pathname === href ? '#fbbf24' : '#d1d5db',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  });

  return (
    <>
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
            whiteSpace: 'nowrap',
          }}
          onClick={() => {
            setMobileMenuOpen(false);
            if (pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              return;
            }
            router.push('/');
          }}
        >
          <span className="sm:hidden" style={{ fontSize: '13px' }}>
            Life Expectancy Calculator
          </span>
          <span className="hidden sm:inline">Life Expectancy Calculator</span>
        </button>

        {/* Desktop links (unchanged layout) */}
        <div
          className="hidden sm:flex"
          style={{
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <a
            href="/"
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (typeof window !== 'undefined') {
                sessionStorage.removeItem('lifeCalcResult');
              }
              window.location.href = '/';
            }}
            style={{
              ...navLinkStyle('/'),
              fontWeight: 400,
              color: homeHover ? '#fcd34d' : '#fbbf24',
            }}
          >
            <Home size={16} color={homeHover ? '#fcd34d' : '#fbbf24'} aria-hidden />
            <span style={{ color: homeHover ? '#fcd34d' : '#fbbf24' }}>Home</span>
          </a>

          {[
            { href: '/about', label: 'About' },
            { href: '/methodology', label: 'Methodology' },
            { href: '/privacy', label: 'Privacy' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={navLinkStyle(href)}>
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile right controls: Home + hamburger */}
        <div className="sm:hidden" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            type="button"
            aria-label="Home"
            onClick={() => {
              setMobileMenuOpen(false);
              if (typeof window !== 'undefined') {
                sessionStorage.removeItem('lifeCalcResult');
              }
              window.location.href = '/';
            }}
            style={{
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              padding: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#fbbf24',
              fontSize: '13px',
              fontWeight: 400,
            }}
          >
            <Home size={20} color="#fbbf24" aria-hidden />
            <span style={{ color: '#fbbf24' }}>Home</span>
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((v) => !v)}
            style={{
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              padding: 0,
              color: '#d1d5db',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Overlay behind dropdown */}
      {mobileMenuOpen && (
        <button
          type="button"
          className="sm:hidden"
          aria-label="Close menu overlay"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 30,
            background: 'transparent',
            border: 'none',
            padding: 0,
          }}
        />
      )}

      {/* Mobile dropdown */}
      <div
        className="sm:hidden"
        style={{
          position: 'fixed',
          top: 56,
          left: 0,
          right: 0,
          zIndex: 40,
          background: '#0f0f0f',
          borderBottom: '1px solid #1f2937',
          overflow: 'hidden',
          maxHeight: mobileMenuOpen ? 200 : 0,
          transition: mobileMenuOpen
            ? 'max-height 250ms ease-out'
            : 'max-height 200ms ease-in',
        }}
      >
        {[
          { href: '/about', label: 'About' },
          { href: '/methodology', label: 'Methodology' },
          { href: '/privacy', label: 'Privacy' },
        ].map(({ href, label }, idx, arr) => (
          <button
            key={href}
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              router.push(href);
            }}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              padding: '16px 24px',
              fontSize: '14px',
              color: '#d1d5db',
              cursor: 'pointer',
              borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #1f2937',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

