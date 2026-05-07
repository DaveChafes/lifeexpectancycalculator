import maleTable from '@/lib/lifetables/ssa-2022-male.json';
import femaleTable from '@/lib/lifetables/ssa-2022-female.json';

type Sex = 'male' | 'female';

type LifeTableRow = {
  age: number;
  qx: number;
  lx: number;
  ex: number;
};

const MALE = maleTable as LifeTableRow[];
const FEMALE = femaleTable as LifeTableRow[];

const DAYS_PER_YEAR = 365.2425;

// Converts a birth date string to current age in years (decimal)
export function getAgeFromBirthDate(birthDate: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) return NaN;
  const [y, month, day] = birthDate.split('-').map(Number);
  const birthUtc = Date.UTC(y, month - 1, day);
  const now = new Date();
  const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const msPerDay = 86_400_000;
  const days = (todayUtc - birthUtc) / msPerDay;
  return days / 365.25;
}

function getTable(sex: Sex): LifeTableRow[] {
  return sex === 'male' ? MALE : FEMALE;
}

function clampAge(age: number): number {
  return Math.min(99, Math.max(1, Math.round(age)));
}

function rowForAge(table: LifeTableRow[], age: number): LifeTableRow {
  const a = clampAge(age);
  const row = table.find((r) => r.age === a);
  if (!row) {
    throw new Error(`Missing SSA row for age ${a}`);
  }
  return row;
}

function interpolateLx(table: LifeTableRow[], age: number): number {
  if (age <= 0) return table[0]?.lx ?? 100000;
  const maxAge = table[table.length - 1]!.age;
  if (age >= maxAge) return 0;

  const lo = Math.floor(age);
  const hi = Math.ceil(age);
  if (lo === hi) {
    const r = table.find((x) => x.age === lo);
    return r?.lx ?? 0;
  }
  const rLo = table.find((x) => x.age === lo);
  const rHi = table.find((x) => x.age === hi);
  if (!rLo || !rHi) return 0;
  const t = age - lo;
  return rLo.lx + t * (rHi.lx - rLo.lx);
}

export function getBaseLifeExpectancy(
  sex: Sex,
  birthDate: string
): {
  estimatedDeathAge: number;
  estimatedDeathYear: number;
  yearsRemaining: number;
  currentAge: number;
  weeksLived: number;
  weeksRemaining: number;
  exactDeathDate: Date;
} {
  const currentAge = getAgeFromBirthDate(birthDate);
  if (!Number.isFinite(currentAge)) {
    throw new Error('Invalid birthDate');
  }

  const table = getTable(sex);
  const ageIdx = Math.min(
    table[table.length - 1]!.age,
    Math.max(0, Math.floor(currentAge))
  );
  const row = table.find((r) => r.age === ageIdx);
  if (!row) {
    throw new Error(`Missing SSA row for age ${ageIdx}`);
  }

  const estimatedDeathAge = Math.floor(currentAge) + row.ex;
  const yearsRemaining = estimatedDeathAge - currentAge;
  const estimatedDeathYear =
    new Date().getFullYear() + Math.round(yearsRemaining);

  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const weeksLived = Math.floor(
    (Date.now() - new Date(birthDate).getTime()) / weekMs
  );
  const weeksRemaining = Math.round(yearsRemaining * 52.1775);

  const msDay = 24 * 60 * 60 * 1000;
  const exactDeathDate = new Date(
    Date.now() + yearsRemaining * 365.25 * msDay
  );

  return {
    estimatedDeathAge,
    estimatedDeathYear,
    yearsRemaining,
    currentAge,
    weeksLived,
    weeksRemaining,
    exactDeathDate,
  };
}

export function getCountdown(
  estimatedDeathAge: number,
  currentAge: number
): { years: number; months: number; days: number; totalDays: number } {
  const spanYears = Math.max(0, estimatedDeathAge - currentAge);
  const totalDays = Math.round(spanYears * DAYS_PER_YEAR);
  let remaining = totalDays;
  const years = Math.floor(remaining / 365);
  remaining -= years * 365;
  const months = Math.floor(remaining / 30);
  const days = remaining - months * 30;
  return { years, months, days, totalDays };
}

export function getPercentileVsPeers(
  adjustedDeathAge: number,
  sex: Sex,
  currentAge: number
): number {
  const age = clampAge(currentAge);
  const table = getTable(sex);
  const lA = interpolateLx(table, age);
  if (lA <= 0) return 0;

  const deathAge = Math.max(age, adjustedDeathAge);
  const lD = interpolateLx(table, deathAge);
  const fractionOutlived = (lA - lD) / lA;
  const pct = Math.round(100 * fractionOutlived);
  return Math.min(100, Math.max(0, pct));
}

const JAPAN_LE: Record<Sex, number> = {
  male: 81.05,
  female: 87.14,
};

/** Non-smoker uplift vs population table death age (years). */
const NONSMOKER_PREMIUM = 5;

export function getDemographicComparisons(
  adjustedDeathAge: number,
  sex: Sex,
  currentAge: number
): { label: string; age: number; isUser: boolean }[] {
  const age = clampAge(currentAge);
  const row = rowForAge(getTable(sex), age);
  const usDeathAge = Math.round(age + row.ex);
  const nonSmokerDeathAge = usDeathAge + NONSMOKER_PREMIUM;
  const smokerDeathAge = nonSmokerDeathAge - 10;

  return [
    { label: 'You', age: Math.round(adjustedDeathAge), isUser: true },
    { label: 'U.S. average', age: usDeathAge, isUser: false },
    { label: 'Japan average', age: JAPAN_LE[sex], isUser: false },
    { label: 'Non-smoker (avg)', age: nonSmokerDeathAge, isUser: false },
    { label: 'Smoker (avg)', age: smokerDeathAge, isUser: false },
  ];
}
