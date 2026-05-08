type StickyLifespanBarProps = {
  estimatedAge: number;
  baseAge: number;
  isVisible: boolean;
  onPillClick: () => void;
};

function DeltaBadge({ delta }: { delta: number }) {
  if (delta === 0) return null;
  const positive = delta > 0;
  return (
    <span className={`text-xs font-semibold ${positive ? 'text-green-400' : 'text-red-400'}`}>
      {positive ? '+' : ''}
      {delta} yrs
    </span>
  );
}

export default function StickyLifespanBar({
  estimatedAge,
  baseAge,
  isVisible,
  onPillClick,
}: StickyLifespanBarProps) {
  const delta = Math.round(estimatedAge - baseAge);
  const opacity = isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none';

  return (
    <>
      {/* Desktop sticky bar */}
      <div
        className={`hidden sm:flex fixed top-14 left-0 right-0 z-40 h-11 bg-[#111111] border-b border-amber-500/30 transition-opacity duration-200 ${opacity}`}
        aria-hidden={!isVisible}
      >
        <div className="w-full max-w-[800px] mx-auto px-6 flex items-center justify-center gap-4">
          <div className="text-xs text-gray-400 flex-1">Estimated Lifespan</div>
          <div className="text-lg font-bold text-amber-400">{Math.round(estimatedAge)}</div>
          <div className="flex-1 flex justify-start">
            <DeltaBadge delta={delta} />
          </div>
        </div>
      </div>

      {/* Mobile floating pill */}
      <button
        type="button"
        onClick={onPillClick}
        className={`flex sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 rounded-full px-5 py-2 bg-[#1a1a1a] border border-amber-500 shadow-lg shadow-amber-500/10 items-center gap-3 transition-opacity duration-200 ${opacity}`}
        aria-hidden={!isVisible}
      >
        <span className="text-xs text-gray-400">Est. lifespan:</span>
        <span className="text-base font-bold text-amber-400">{Math.round(estimatedAge)}</span>
        <DeltaBadge delta={delta} />
      </button>
    </>
  );
}

