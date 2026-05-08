'use client';

import { useMemo, useState, type CSSProperties } from 'react';

export type CountryRow = {
  rank: number;
  country: string;
  years: number;
  region: string;
};

export function CountryTable({
  countries,
  worldAvg,
}: {
  countries: CountryRow[];
  worldAvg: number;
}) {
  const [filter, setFilter] = useState<'All' | 'Europe' | 'Asia' | 'Oceania' | 'Americas' | 'Africa'>(
    'All'
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return countries;
    if (filter === 'Americas') {
      return countries.filter(
        (c) =>
          c.region === 'North America' || c.region === 'South America' || c.region === 'Caribbean'
      );
    }
    return countries.filter((c) => c.region === filter);
  }, [countries, filter]);

  const buttonRowStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
    marginBottom: 12,
  };

  const btnBase: CSSProperties = {
    height: 34,
    padding: '0 14px',
    borderRadius: 999,
    fontSize: 13,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    fontFamily: 'inherit',
    border: '1px solid #d4c9b0',
    background: 'transparent',
    color: '#4a3f2f',
    fontWeight: 600,
  };

  function formatDelta(y: number): string {
    const d = Number((y - worldAvg).toFixed(1));
    if (Object.is(d, -0)) return '+0.0';
    return `${d >= 0 ? '+' : ''}${d.toFixed(1)}`;
  }

  return (
    <div>
      <div style={buttonRowStyle} aria-label="Region filter">
        {(['All', 'Europe', 'Asia', 'Oceania', 'Americas', 'Africa'] as const).map((opt) => {
          const selected = filter === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              style={{
                ...btnBase,
                ...(selected
                  ? {
                      background: '#c9a84c',
                      border: '1px solid #c9a84c',
                      color: '#1a1200',
                    }
                  : {}),
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <div
        style={{
          width: '100%',
          overflowX: 'auto',
          border: '1px solid #e8dfc8',
          borderRadius: 12,
          background: '#fffdf7',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderBottom: '1px solid #e8dfc8',
                  fontSize: 13,
                  color: '#4a3f2f',
                  background: '#fffdf7',
                  whiteSpace: 'nowrap',
                }}
              >
                Rank
              </th>
              <th
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderBottom: '1px solid #e8dfc8',
                  fontSize: 13,
                  color: '#4a3f2f',
                  background: '#fffdf7',
                  whiteSpace: 'nowrap',
                }}
              >
                Country
              </th>
              <th
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderBottom: '1px solid #e8dfc8',
                  fontSize: 13,
                  color: '#4a3f2f',
                  background: '#fffdf7',
                  whiteSpace: 'nowrap',
                }}
              >
                Region
              </th>
              <th
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderBottom: '1px solid #e8dfc8',
                  fontSize: 13,
                  color: '#4a3f2f',
                  background: '#fffdf7',
                  whiteSpace: 'nowrap',
                }}
              >
                Life Expectancy (Years)
              </th>
              <th
                style={{
                  textAlign: 'left',
                  padding: '12px 14px',
                  borderBottom: '1px solid #e8dfc8',
                  fontSize: 13,
                  color: '#4a3f2f',
                  background: '#fffdf7',
                  whiteSpace: 'nowrap',
                }}
              >
                vs World Avg (+/−)
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => {
              const isTop5 = row.rank <= 5;
              const isBottom5 = row.rank >= 71 && row.rank <= 75;
              const baseBg = idx % 2 === 0 ? '#fffdf7' : '#f7f2e8';
              const bg = isTop5 ? '#eaf6ee' : isBottom5 ? '#fdecec' : baseBg;
              return (
                <tr key={`${row.rank}-${row.country}`} style={{ background: bg }}>
                  <td
                    style={{
                      padding: '12px 14px',
                      borderBottom: '1px solid #efe6d2',
                      fontSize: 14,
                      color: '#1a1612',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.rank}
                  </td>
                  <td
                    style={{
                      padding: '12px 14px',
                      borderBottom: '1px solid #efe6d2',
                      fontSize: 14,
                      color: '#1a1612',
                      whiteSpace: 'nowrap',
                      fontWeight: 600,
                    }}
                  >
                    {row.country}
                  </td>
                  <td
                    style={{
                      padding: '12px 14px',
                      borderBottom: '1px solid #efe6d2',
                      fontSize: 14,
                      color: '#1a1612',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.region}
                  </td>
                  <td
                    style={{
                      padding: '12px 14px',
                      borderBottom: '1px solid #efe6d2',
                      fontSize: 14,
                      color: '#1a1612',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.years.toFixed(1)}
                  </td>
                  <td
                    style={{
                      padding: '12px 14px',
                      borderBottom: '1px solid #efe6d2',
                      fontSize: 14,
                      color: row.years - worldAvg >= 0 ? '#1a5c2a' : '#7a1a1a',
                      whiteSpace: 'nowrap',
                      fontWeight: 600,
                    }}
                  >
                    {formatDelta(row.years)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

