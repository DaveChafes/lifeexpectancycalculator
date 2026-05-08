'use client';

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from 'react';

export interface CalculatorProps {
  onSubmit: (inputs: { birthDate: string; sex: 'male' | 'female' }) => void;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export interface CustomSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

type CustomSelectInnerProps = CustomSelectProps & {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
  isOpen,
  onOpen,
  onClose,
}: CustomSelectInnerProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen, onClose]);

  const selectedLabel = options.find((o) => o.value === value)?.label;
  const showPlaceholder = value === '' || selectedLabel === undefined;

  function toggle() {
    if (isOpen) onClose();
    else onOpen();
  }

  const triggerStyle: CSSProperties = {
    width: '100%',
    backgroundColor: '#fffdf7',
    border: `1px solid ${isOpen ? '#c9a84c' : '#d4c9b0'}`,
    borderRadius: '8px',
    color: showPlaceholder ? '#5a4e3f' : '#1a1612',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.15s ease',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    textAlign: 'left',
  };

  const listStyle: CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    right: 0,
    backgroundColor: '#fffdf7',
    border: '1px solid #d4c9b0',
    borderRadius: '8px',
    boxShadow: '0 4px 16px rgba(26, 22, 18, 0.08)',
    maxHeight: '200px',
    overflowY: 'auto',
    zIndex: 50,
    animation: 'calc-custom-select-fade 0.15s ease forwards',
    opacity: 1,
  };

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '100%' }}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        style={triggerStyle}
        className="calc-select-trigger"
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {showPlaceholder ? placeholder : selectedLabel}
        </span>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
          aria-hidden
          style={{
            flexShrink: 0,
            marginLeft: '8px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <path fill="#6b5e4e" d="M6 8L1 3h10z" />
        </svg>
      </button>
      {isOpen ? (
        <div className="calc-custom-select-scroll" role="listbox" style={listStyle}>
          {options.map((opt) => {
            const selected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onChange(opt.value);
                  onClose();
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 14px',
                  color: selected ? '#c9a84c' : '#1a1612',
                  fontWeight: selected ? 600 : 400,
                  cursor: 'pointer',
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'inherit',
                  textAlign: 'left',
                  boxSizing: 'border-box',
                }}
                className="calc-select-option"
                onMouseEnter={(e) => {
                  if (!selected) e.currentTarget.style.backgroundColor = '#f0e8d4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

function isValidBirthDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [y, mo, day] = value.split('-').map(Number);
  const birth = new Date(y, mo - 1, day);
  if (
    birth.getFullYear() !== y ||
    birth.getMonth() !== mo - 1 ||
    birth.getDate() !== day
  ) {
    return false;
  }
  const min = new Date(1924, 0, 1);
  min.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  birth.setHours(0, 0, 0, 0);
  return birth >= min && birth <= today;
}

const labelStyle: CSSProperties = {
  fontSize: '10px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#5a4e3f',
  fontWeight: 500,
  marginBottom: '6px',
  display: 'block',
};

export default function Calculator({ onSubmit }: CalculatorProps) {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [sex, setSex] = useState<'male' | 'female' | null>(null);
  const [openSelect, setOpenSelect] = useState<'month' | 'day' | 'year' | null>(
    null
  );
  const [ctaHover, setCtaHover] = useState(false);

  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const list: number[] = [];
    for (let y = currentYear; y >= 1924; y--) list.push(y);
    return list;
  }, [currentYear]);

  const maxSelectableDay =
    selectedMonth !== '' && selectedYear !== ''
      ? daysInMonth(parseInt(selectedMonth, 10), parseInt(selectedYear, 10))
      : 31;

  useEffect(() => {
    if (selectedMonth === '' || selectedYear === '' || selectedDay === '') return;
    const max = daysInMonth(parseInt(selectedMonth, 10), parseInt(selectedYear, 10));
    if (parseInt(selectedDay, 10) > max) setSelectedDay('');
  }, [selectedMonth, selectedYear, selectedDay]);

  const birthDate = useMemo(() => {
    if (selectedMonth === '' || selectedDay === '' || selectedYear === '') return '';
    const d = String(parseInt(selectedDay, 10)).padStart(2, '0');
    return `${selectedYear}-${selectedMonth}-${d}`;
  }, [selectedMonth, selectedDay, selectedYear]);

  const birthDateValid = birthDate !== '' && isValidBirthDate(birthDate);
  const canSubmit = birthDateValid && sex !== null;

  useEffect(() => {
    if (!canSubmit) setCtaHover(false);
  }, [canSubmit]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || sex === null || birthDate === '') return;
    onSubmit({ birthDate, sex });
  }

  const monthOptions = useMemo(
    () =>
      MONTH_NAMES.map((name, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: name,
      })),
    []
  );

  const dayOptions = useMemo(
    () =>
      Array.from({ length: maxSelectableDay }, (_, i) => {
        const n = i + 1;
        return { value: String(n), label: String(n) };
      }),
    [maxSelectableDay]
  );

  const yearOptions = useMemo(
    () => years.map((y) => ({ value: String(y), label: String(y) })),
    [years]
  );

  const headlineStyle: CSSProperties = {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: 'clamp(28px, 8vw, 48px)',
    fontWeight: 700,
    color: '#1a1612',
    letterSpacing: '-0.01em',
    lineHeight: 1.15,
    textAlign: 'center',
    margin: 0,
  };

  const subHeadStyle: CSSProperties = {
    fontSize: 'clamp(14px, 3.8vw, 16px)',
    color: '#6b5e4e',
    textAlign: 'center',
    margin: 0,
  };

  const dataLineStyle: CSSProperties = {
    fontSize: 'clamp(12px, 3.4vw, 13px)',
    color: '#6b5e4e',
    textAlign: 'center',
    margin: 0,
  };

  const innerColumnStyle: CSSProperties = {
    width: '100%',
    maxWidth: '420px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const dobRowStyle: CSSProperties = {
    display: 'flex',
    gap: '8px',
    width: '100%',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  };

  const sexRowStyle: CSSProperties = {
    display: 'flex',
    gap: '8px',
    width: '100%',
  };

  const sexButtonBase: CSSProperties = {
    flex: 1,
    height: '46px',
    borderRadius: '8px',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    border: '1px solid #d4c9b0',
    backgroundColor: '#fffdf7',
    color: '#5a4e3f',
    fontWeight: 400,
  };

  const trustStyle: CSSProperties = {
    fontSize: '12px',
    color: '#7a6e5f',
    textAlign: 'center',
    margin: 0,
  };

  const formColumnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const ctaEnabled: CSSProperties = {
    width: '100%',
    height: '52px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    letterSpacing: '0.02em',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#c9a84c',
    color: '#1a1200',
  };

  const ctaDisabled: CSSProperties = {
    ...ctaEnabled,
    fontWeight: 400,
    backgroundColor: '#d4c4a0',
    color: '#8a7a5a',
    cursor: 'not-allowed',
    transform: 'none',
  };

  const ctaStyle: CSSProperties =
    !canSubmit
      ? ctaDisabled
      : {
          ...ctaEnabled,
          ...(ctaHover
            ? { backgroundColor: '#b8943d', transform: 'scale(1.01)' }
            : { transform: 'none' }),
        };

  return (
    <>
      <style>{`
        @keyframes calc-custom-select-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .calc-custom-select-scroll::-webkit-scrollbar { width: 4px; }
        .calc-custom-select-scroll::-webkit-scrollbar-track { background: #f7f2e8; }
        .calc-custom-select-scroll::-webkit-scrollbar-thumb {
          background: #d4c9b0;
          border-radius: 2px;
        }

        .calc-select-trigger {
          padding: 13px 14px;
          font-size: 15px;
        }
        .calc-select-option {
          font-size: 15px;
        }

        @media (max-width: 480px) {
          .calc-select-trigger {
            padding: 10px 10px;
            font-size: 14px;
          }
          .calc-select-option {
            font-size: 14px;
          }
        }
      `}</style>
      <div
        style={{
          backgroundColor: '#f7f2e8',
          minHeight: 'calc(100vh - 56px)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '80px',
          paddingBottom: '48px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div className="calculator-form-enter" style={innerColumnStyle}>
          <h1 style={headlineStyle}>How much time do you have?</h1>
          <p style={subHeadStyle}>
            See your life in weeks, years, and moments — and what changes everything.
            Based on real actuarial data. Takes 60 seconds.
          </p>
          <p style={dataLineStyle}>
            Based on U.S. Social Security Administration and CDC actuarial data.
          </p>

          <form onSubmit={handleSubmit} style={formColumnStyle}>
            <div>
              <label style={labelStyle} id="calc-dob-label">
                DATE OF BIRTH
              </label>
              <div
                role="group"
                aria-labelledby="calc-dob-label"
                style={dobRowStyle}
              >
                <div style={{ flex: 2.5, minWidth: 0 }}>
                  <CustomSelect
                    placeholder="Month"
                    options={monthOptions}
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    isOpen={openSelect === 'month'}
                    onOpen={() => setOpenSelect('month')}
                    onClose={() => setOpenSelect(null)}
                  />
                </div>
                <div style={{ flex: 1.5, minWidth: 0 }}>
                  <CustomSelect
                    placeholder="Day"
                    options={dayOptions}
                    value={selectedDay}
                    onChange={setSelectedDay}
                    isOpen={openSelect === 'day'}
                    onOpen={() => setOpenSelect('day')}
                    onClose={() => setOpenSelect(null)}
                  />
                </div>
                <div style={{ flex: 2, minWidth: 0 }}>
                  <CustomSelect
                    placeholder="Year"
                    options={yearOptions}
                    value={selectedYear}
                    onChange={setSelectedYear}
                    isOpen={openSelect === 'year'}
                    onOpen={() => setOpenSelect('year')}
                    onClose={() => setOpenSelect(null)}
                  />
                </div>
              </div>
            </div>

            <div>
              <span style={labelStyle}>BIOLOGICAL SEX</span>
              <div style={sexRowStyle}>
                <button
                  type="button"
                  onClick={() => setSex('male')}
                  style={{
                    ...sexButtonBase,
                    ...(sex === 'male'
                      ? {
                          backgroundColor: '#c9a84c',
                          border: '1px solid #c9a84c',
                          color: '#2a1f00',
                          fontWeight: 700,
                        }
                      : {}),
                  }}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setSex('female')}
                  style={{
                    ...sexButtonBase,
                    ...(sex === 'female'
                      ? {
                          backgroundColor: '#c9a84c',
                          border: '1px solid #c9a84c',
                          color: '#2a1f00',
                          fontWeight: 700,
                        }
                      : {}),
                  }}
                >
                  Female
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              style={ctaStyle}
              onMouseEnter={() => canSubmit && setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
            >
              See My Time →
            </button>

            <p style={trustStyle}>
              All calculations happen in your browser. No personal data is collected or
              stored.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
