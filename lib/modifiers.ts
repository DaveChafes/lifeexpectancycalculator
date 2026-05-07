export type LifestyleModifiers = {
  smoking: 'none' | 'occasional' | 'daily';
  bmi: number;
  exercise: 'sedentary' | 'light' | 'active' | 'very_active';
  alcohol: 'none' | 'light' | 'moderate' | 'heavy';
  sleep: 'poor' | 'ok' | 'good';
  stress: 'low' | 'medium' | 'high';
  diet: 'poor' | 'average' | 'good';
};

function smokingYears(smoking: LifestyleModifiers['smoking']): number {
  switch (smoking) {
    case 'none':
      return 0;
    case 'occasional':
      return -3;
    case 'daily':
      return -10;
  }
}

function bmiYears(bmi: number): number {
  if (bmi < 18.5) return -2;
  if (bmi < 25) return 0;
  if (bmi < 30) return -1;
  if (bmi < 35) return -3;
  return -7;
}

function exerciseYears(exercise: LifestyleModifiers['exercise']): number {
  switch (exercise) {
    case 'sedentary':
      return -3;
    case 'light':
      return 0;
    case 'active':
      return 2;
    case 'very_active':
      return 3;
  }
}

function alcoholYears(alcohol: LifestyleModifiers['alcohol']): number {
  switch (alcohol) {
    case 'none':
      return 0;
    case 'light':
      return 0;
    case 'moderate':
      return -1;
    case 'heavy':
      return -5;
  }
}

function sleepYears(sleep: LifestyleModifiers['sleep']): number {
  switch (sleep) {
    case 'poor':
      return -3;
    case 'ok':
      return 0;
    case 'good':
      return 1;
  }
}

function stressYears(stress: LifestyleModifiers['stress']): number {
  switch (stress) {
    case 'low':
      return 1;
    case 'medium':
      return 0;
    case 'high':
      return -3;
  }
}

function dietYears(diet: LifestyleModifiers['diet']): number {
  switch (diet) {
    case 'poor':
      return -3;
    case 'average':
      return 0;
    case 'good':
      return 2;
  }
}

export function applyLifestyleModifiers(
  baseDeathAge: number,
  modifiers: LifestyleModifiers
): {
  adjustedDeathAge: number;
  breakdown: { factor: string; years: number }[];
} {
  const factors: { factor: string; years: number }[] = [
    { factor: 'Smoking', years: smokingYears(modifiers.smoking) },
    { factor: 'BMI', years: bmiYears(modifiers.bmi) },
    { factor: 'Exercise', years: exerciseYears(modifiers.exercise) },
    { factor: 'Alcohol', years: alcoholYears(modifiers.alcohol) },
    { factor: 'Sleep', years: sleepYears(modifiers.sleep) },
    { factor: 'Stress', years: stressYears(modifiers.stress) },
    { factor: 'Diet', years: dietYears(modifiers.diet) },
  ];

  const delta = factors.reduce((s, f) => s + f.years, 0);
  const adjustedDeathAge = Math.round(baseDeathAge + delta);

  return { adjustedDeathAge, breakdown: factors };
}
