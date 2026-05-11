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
    default: 'Life Expectancy Calculator — See How Much Time You Have',
    template: '%s | Life Expectancy Calculator',
  },
  description:
    'Free life expectancy calculator based on SSA & CDC actuarial data. Enter your age and lifestyle habits to see your estimated lifespan in years, weeks, and a life grid. Takes 60 seconds.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'life expectancy calculator',
    'how long will I live',
    'lifespan calculator',
    'life expectancy estimator',
    'life in weeks',
    'longevity calculator',
    'when will I die calculator',
    'how many weeks do I have left',
    'SSA life expectancy',
    'CDC life expectancy',
  ],
  openGraph: {
    title: 'Life Expectancy Calculator — See How Much Time You Have',
    description:
      'Free life expectancy calculator based on SSA & CDC actuarial data. See your estimated lifespan in years, weeks, and a life grid.',
    type: 'website',
    locale: 'en_US',
    url: 'https://whenwillidiecalculator.com',
    siteName: 'Life Expectancy Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Expectancy Calculator — See How Much Time You Have',
    description:
      'Free life expectancy calculator based on SSA & CDC actuarial data. See your estimated lifespan in years, weeks, and a life grid.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
