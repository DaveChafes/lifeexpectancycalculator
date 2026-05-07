'use client';

import clsx from 'clsx';
import { useEffect, useRef, type CSSProperties } from 'react';

export interface AdUnitProps {
  slotId: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

function minHeightForFormat(format: AdUnitProps['format']): number {
  switch (format) {
    case 'horizontal':
      return 90;
    case 'rectangle':
      return 250;
    case 'auto':
    default:
      return 100;
  }
}

export default function AdUnit({
  slotId,
  format = 'auto',
  className,
}: AdUnitProps) {
  const initializedRef = useRef(false);
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const minH = minHeightForFormat(format);

  useEffect(() => {
    if (!clientId || initializedRef.current) return;
    initializedRef.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      initializedRef.current = false;
    }
  }, [clientId]);

  const wrapperStyle: CSSProperties = {
    width: '100%',
    minHeight: minH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (!clientId) {
    return (
      <div
        className={clsx(className)}
        style={{
          ...wrapperStyle,
          border: '1px dashed #d4c9b0',
          background: '#fffdf7',
          color: '#9a8f7a',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      >
        Ad unit — {format}
      </div>
    );
  }

  const insProps =
    format === 'auto'
      ? ({ 'data-full-width-responsive': 'true' } as const)
      : ({} as const);

  return (
    <div className={clsx(className)} style={{ ...wrapperStyle, minHeight: minH }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: minH }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        {...insProps}
      />
    </div>
  );
}
