import PerspectivePageClient from '@/components/PerspectivePageClient';

export const metadata = {
  title: 'Your Life in Perspective — 33 Facts That Make Time Feel Real',
  description:
    'How many weekends do you have left? Sunrises? Meals with loved ones? 33 personalized perspective facts based on your life expectancy. Flip each card to go deeper.',
  keywords: [
    'life perspective',
    'time remaining',
    'how many weekends left',
    'life in perspective',
    'mortality perspective',
  ],
  openGraph: {
    title: 'Your Life in Perspective — 33 Facts That Make Time Feel Real',
    description: 'How many weekends do you have left? 33 personalized perspective facts based on your life expectancy.',
    type: 'website',
    url: 'https://whenwillidiecalculator.com/perspective',
  },
  alternates: {
    canonical: 'https://whenwillidiecalculator.com/perspective',
  },
};

export default function PerspectivePage() {
  return <PerspectivePageClient />;
}

