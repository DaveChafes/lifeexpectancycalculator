export function buildResultShareTweetText(
  estimatedDeathYear: number,
  weeksRemaining: number
): string {
  return `I'm estimated to live until ${estimatedDeathYear}. That's ${weeksRemaining.toLocaleString('en-US')} weeks — and I'm not wasting them. Calculate yours → whenwillidiecalculator.com #lifeexpectancy #makeitcount`;
}

export function openResultShareOnTwitter(
  estimatedDeathYear: number,
  weeksRemaining: number
): void {
  const tweetText = buildResultShareTweetText(estimatedDeathYear, weeksRemaining);
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`,
    '_blank',
    'noopener,noreferrer'
  );
}
