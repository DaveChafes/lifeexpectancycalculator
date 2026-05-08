import { useEffect, useMemo, useState } from 'react';

type StickyLifespanBarProps = {
  estimatedAge: number;
  baseAge: number;
  estimatedDeathYear: number;
  weeksRemaining: number;
  isVisible: boolean;
  onPillClick: () => void;
};

function formatYMDUntil(target: Date, now: Date): { years: number; months: number; days: number } {
  if (target.getTime() <= now.getTime()) return { years: 0, months: 0, days: 0 };

  let years = target.getFullYear() - now.getFullYear();
  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();

  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years: Math.max(0, years), months: Math.max(0, months), days: Math.max(0, days) };
}

export default function StickyLifespanBar({
  estimatedAge,
  baseAge: _baseAge,
  estimatedDeathYear,
  weeksRemaining,
  isVisible,
  onPillClick,
}: StickyLifespanBarProps) {
  const opacity = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none';
  const deltaYears = Math.round(estimatedAge - _baseAge);

  const [nowMs, setNowMs] = useState(() => Date.now());
  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(id);
  }, [isVisible]);

  const targetDate = useMemo(
    () => new Date(estimatedDeathYear, 11, 31, 23, 59, 59),
    [estimatedDeathYear]
  );
  const countdown = useMemo(
    () => formatYMDUntil(targetDate, new Date(nowMs)),
    [targetDate, nowMs]
  );

  return (
    <>
      {/* Desktop sticky bar */}
      <div
        className={`hidden sm:flex fixed top-[56px] left-0 right-0 z-40 bg-[#f0e8d5] border-b border-amber-400/40 transition-opacity duration-200 ${opacity}`}
        aria-hidden={!isVisible}
        data-delta-years={deltaYears}
      >
        <div className="w-full max-w-[720px] mx-auto px-6 min-h-[72px] flex items-center">
          <div className="flex items-center gap-6 w-full">
            <div className="flex flex-col justify-center">
              <div className="text-3xl font-bold text-amber-700 leading-none">
                {Math.round(estimatedAge)}
              </div>
              <div className="text-xs text-stone-500 mt-1">Est. Lifespan</div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="text-sm text-stone-600">
                Estimated to live until{' '}
                <span className="font-bold text-amber-700">{estimatedDeathYear}</span>
              </div>
              <div className="text-xs text-stone-500 mt-1">
                {weeksRemaining.toLocaleString()} weeks remaining — make them count.
              </div>
            </div>

            <div className="hidden lg:block text-xs text-stone-500 whitespace-nowrap">
              {countdown.years} yrs, {countdown.months} months, {countdown.days} days remaining
            </div>
          </div>
        </div>
      </div>

      {/* Mobile floating pill */}
      <button
        type="button"
        onClick={onPillClick}
        className={`flex sm:hidden z-40 rounded-full px-6 py-3 bg-[#f0e8d5] border border-amber-500 shadow-lg shadow-amber-500/10 transition-opacity duration-200 ${opacity}`}
        style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)' }}
        aria-hidden={!isVisible}
      >
        <div className="flex flex-col items-center text-center leading-tight">
          <div className="text-lg font-bold text-amber-700">{Math.round(estimatedAge)}</div>
          <div className="text-xs text-stone-500">Until {estimatedDeathYear}</div>
        </div>
      </button>
    </>
  );
}

