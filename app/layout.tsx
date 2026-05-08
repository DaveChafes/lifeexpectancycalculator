import type { Metadata, Viewport } from 'next';
import { Lora } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: 'Life Expectancy Calculator — How Much Time Do You Have?',
    template: '%s | Life Expectancy Calculator',
  },
  description:
    'See how much time you have — and make it count. Based on SSA & CDC actuarial data. Interactive sliders show how smoking, BMI, exercise & more affect your estimated lifespan.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  keywords: [
    'life expectancy calculator',
    'how long will I live',
    'lifespan calculator',
    'life expectancy estimator',
    'life in weeks',
    'when will I die calculator',
    'longevity calculator',
  ],
  authors: [{ name: 'Life Expectancy Calculator' }],
  creator: 'Life Expectancy Calculator',
  metadataBase: new URL('https://whenwillidiecalculator.com'),
  openGraph: {
    title: 'Life Expectancy Calculator — How Much Time Do You Have?',
    description:
      'See how much time you have — and make it count. Based on real SSA & CDC actuarial data.',
    type: 'website',
    locale: 'en_US',
    url: 'https://whenwillidiecalculator.com',
    siteName: 'Life Expectancy Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Expectancy Calculator — How Much Time Do You Have?',
    description: 'See how much time you have — and make it count.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com',
  },
  verification: {
    google: 'vUrNWVHpNTVsXfVH5lxQPy5nUfpYkdCxV-HaPF83yQI',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R1799YQGHN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R1799YQGHN');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wnwa2e0sjb");
        `}
      </Script>
      <body
        style={{ backgroundColor: '#f7f2e8', minHeight: '100vh' }}
        className={`${lora.variable} antialiased`}
      >
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flexShrink: 0 }}>
            <NavBar />
          </div>
          <div style={{ height: '56px', flexShrink: 0 }} aria-hidden />
          <div style={{ flex: '1 0 auto' }}>{children}</div>
          <div style={{ flexShrink: 0 }}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
