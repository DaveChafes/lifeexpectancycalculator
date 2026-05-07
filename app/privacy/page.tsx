export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for the Life Expectancy Calculator. No personal data is collected or stored.',
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        background: '#f7f2e8',
        maxWidth: 720,
        margin: '0 auto',
        padding: '60px 24px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 36,
          fontWeight: 700,
          color: '#1a1612',
          margin: '0 0 8px 0',
        }}
      >
        Privacy Policy
      </h1>

      <p style={{ fontSize: 13, color: '#9a8f7a', lineHeight: 1.8, margin: '0 0 24px 0' }}>
        Last updated: January 2025
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        What Data We Collect
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        We collect no personal data. All calculations — your birth date, biological sex, and
        lifestyle inputs — are processed entirely within your browser. Nothing is sent to our
        servers or stored anywhere.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Cookies and Advertising
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        This site uses Google AdSense to display advertisements. Google AdSense uses cookies
        to serve ads based on your prior visits to this and other websites. You can opt out
        of personalized advertising by visiting Google&apos;s Ads Settings. For more
        information see Google&apos;s Privacy Policy.
      </p>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: '12px 0 0 0' }}>
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#c9a84c', textDecoration: 'none' }}
          className="supporting-link"
        >
          Google Privacy Policy
        </a>
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Analytics
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        This site uses Google Analytics to understand aggregate traffic patterns — how many
        people visit, which pages are viewed, and general geographic regions. This data is
        anonymized and aggregated. No personally identifiable information is collected.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Third-Party Links
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        This site links to the Social Security Administration and CDC websites. We are not
        responsible for the privacy practices of those sites.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Contact
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        If you have questions about this privacy policy, you can reach us through the About
        page.
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#1a1612',
          margin: '40px 0 12px 0',
        }}
      >
        Changes to This Policy
      </h2>
      <p style={{ fontSize: 16, color: '#4a3f2f', lineHeight: 1.8, margin: 0 }}>
        We may update this policy from time to time. The date at the top of this page
        reflects the most recent update.
      </p>
    </main>
  );
}
