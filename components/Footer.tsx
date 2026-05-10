import Link from 'next/link';

const WRAP_STYLE: React.CSSProperties = {
  background: '#f0e8d8',
  borderTop: '1px solid #e8dfc8',
  padding: '32px 24px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const LEARN_MORE_WRAP_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
};

const LEARN_MORE_HEADING_STYLE: React.CSSProperties = {
  margin: 0,
  fontSize: '12px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#c9a84c',
  fontWeight: 700,
};

const LEARN_MORE_LINKS_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  fontSize: '14px',
  alignItems: 'center',
};

const LEARN_MORE_LINK_STYLE: React.CSSProperties = {
  color: '#6b5e4e',
  textDecoration: 'none',
};

const SITE_NAME_STYLE: React.CSSProperties = {
  fontFamily: 'var(--font-lora), Georgia, serif',
  fontSize: '16px',
  fontWeight: 600,
  color: '#4a3f2f',
  margin: 0,
};

const TAGLINE_STYLE: React.CSSProperties = {
  fontSize: '13px',
  color: '#6b5e4e',
  fontStyle: 'italic',
  margin: 0,
};

const NAV_STYLE: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '24px',
  fontSize: '13px',
};

const LINK_STYLE: React.CSSProperties = {
  color: '#6b5e4e',
  textDecoration: 'none',
};

const DIVIDER_STYLE: React.CSSProperties = {
  height: 1,
  background: '#e8dfc8',
  width: '100%',
  maxWidth: 560,
  margin: '0 auto',
};

const MUTED_STYLE: React.CSSProperties = {
  fontSize: '12px',
  color: '#7a6e5f',
  margin: 0,
  lineHeight: 1.6,
};

const DATA_NOTE_STYLE: React.CSSProperties = {
  fontSize: '11px',
  color: '#7a6e5f',
  margin: 0,
  lineHeight: 1.6,
};

export default function Footer() {
  return (
    <footer style={WRAP_STYLE}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <p style={SITE_NAME_STYLE}>Life Expectancy Calculator</p>
        <p style={TAGLINE_STYLE}>See how much time you have — and make it count.</p>
      </div>

      <nav style={NAV_STYLE} aria-label="Footer navigation">
        <Link href="/" style={LINK_STYLE} className="footer-link">
          Home
        </Link>
        <Link href="/about" style={LINK_STYLE} className="footer-link">
          About
        </Link>
        <Link href="/methodology" style={LINK_STYLE} className="footer-link">
          Methodology
        </Link>
        <Link href="/privacy" style={LINK_STYLE} className="footer-link">
          Privacy Policy
        </Link>
      </nav>

      <div style={LEARN_MORE_WRAP_STYLE} aria-label="Learn more links">
        <p style={LEARN_MORE_HEADING_STYLE}>
          LEARN MORE
        </p>
        <div style={LEARN_MORE_LINKS_STYLE}>
          <Link href="/life-expectancy-by-state" style={LEARN_MORE_LINK_STYLE}>
            Life Expectancy by State
          </Link>
          <Link href="/life-expectancy-men-vs-women" style={LEARN_MORE_LINK_STYLE}>
            Life Expectancy: Men vs Women
          </Link>
          <Link href="/life-expectancy-by-country" style={LEARN_MORE_LINK_STYLE}>
            Life Expectancy by Country
          </Link>
          <Link href="/average-life-expectancy-usa" style={LEARN_MORE_LINK_STYLE}>
            Average Life Expectancy USA
          </Link>
          <Link href="/social-security-life-expectancy" style={LEARN_MORE_LINK_STYLE}>
            Social Security Life Expectancy
          </Link>
          <Link href="/life-expectancy-with-heart-disease" style={LEARN_MORE_LINK_STYLE}>
            Life Expectancy with Heart Disease
          </Link>
          <Link href="/smoking-and-life-expectancy" style={LEARN_MORE_LINK_STYLE}>
            Smoking and Life Expectancy
          </Link>
          <Link href="/life-expectancy-with-diabetes" style={LEARN_MORE_LINK_STYLE}>
            Life Expectancy with Diabetes
          </Link>
          <Link href="/bmi-life-expectancy" style={LEARN_MORE_LINK_STYLE}>
            BMI and Life Expectancy
          </Link>
          <Link href="/how-to-live-longer" style={LEARN_MORE_LINK_STYLE}>
            How to Live Longer
          </Link>
        </div>
      </div>

      <div style={DIVIDER_STYLE} />

      <p style={MUTED_STYLE}>
        © 2025 Life Expectancy Calculator. For educational and entertainment purposes only.
      </p>
      <p style={DATA_NOTE_STYLE}>
        Data sourced from U.S. Social Security Administration and CDC National Center for
        Health Statistics. Public domain data.
      </p>
    </footer>
  );
}

