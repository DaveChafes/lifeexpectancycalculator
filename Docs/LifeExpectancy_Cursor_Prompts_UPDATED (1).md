# Life Expectancy Calculator — Cursor Build Prompts
### "See how much time you have — and make it count."
### Copy and paste each prompt in order. Do NOT skip ahead.

---

## HOW TO USE THIS DOCUMENT

Each prompt is a self-contained instruction block. You will:
1. Open Cursor
2. Open the AI chat panel (Cmd+L on Mac / Ctrl+L on Windows)
3. Copy the entire prompt block (everything between the triple dashes)
4. Paste it into Cursor and hit Enter
5. Wait for Cursor to finish before moving to the next prompt
6. Come back here for the next one

**Important:** After each prompt, read what Cursor built before moving on. If something looks wrong, fix it before continuing. Each prompt builds on the last.

---
---

## PROMPT 1 — PROJECT SETUP
### What this does: Creates the Next.js project with the right folder structure and dependencies

---
Create a new Next.js 14 project called "lifeexpectancycalculator" with the following setup:

**Framework & Config:**
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- ESLint

**Install these additional packages:**
- recharts (for charts and graphs)
- lucide-react (for icons)
- clsx (for conditional classnames)

**Create this exact folder structure inside the /app directory:**
```
/app
  /layout.tsx        ← root layout
  /page.tsx          ← main tool page (homepage)
  /about/page.tsx    ← about page (stub for now)
  /methodology/page.tsx ← methodology page (stub for now)
  /privacy/page.tsx  ← privacy policy page (stub for now)
/lib
  /lifetables/
    ssa-2022-male.json    ← we'll populate this next
    ssa-2022-female.json  ← we'll populate this next
  /calculator.ts     ← core calculation logic
  /modifiers.ts      ← lifestyle adjustment logic
/components
  /Calculator.tsx    ← main calculator input component
  /Result.tsx        ← result display component
  /LifeBar.tsx       ← horizontal life bar visualization
  /Sliders.tsx       ← lifestyle sliders component
  /LifeGrid.tsx      ← life-in-weeks grid component
  /ComparisonChart.tsx ← demographic comparison charts
  /ShareCard.tsx     ← shareable result card component
  /AdUnit.tsx        ← AdSense ad unit component
```

**In layout.tsx:**
- Set the default font to system-ui with a dark-mode-friendly base
- Add these meta tags:
  - title: "Life Expectancy Calculator — See How Much Time You Have"
  - description: "See how much time you have — and make it count. Based on real SSA & CDC actuarial data. Interactive sliders show how your choices protect your time."
  - viewport: width=device-width, initial-scale=1
- Add Open Graph tags (og:title, og:description, og:type: website)

**In tailwind.config.ts:**
- Keep defaults but add a custom color called "lifeamber" set to #f59e0b and "lifedark" set to #0f0f0f

**Create all stub files** — each page and component file should exist with a basic placeholder export so the project compiles. For example:
```tsx
// components/LifeGrid.tsx
export default function LifeGrid() {
  return <div>LifeGrid coming soon</div>
}
```

After setup, run `npm run dev` and confirm the project compiles with no errors. Tell me what the homepage currently shows.
---

---

## PROMPT 2 — SSA LIFE TABLE DATA
### What this does: Creates the actuarial data files the calculator will use

---
Populate the two SSA life table JSON files in /lib/lifetables/ with real data from the 2022 SSA Period Life Table.

The data structure for each file should be an array of 111 objects (ages 0 through 110), where each object contains:
```json
{
  "age": 0,
  "qx": 0.005566,
  "lx": 100000,
  "ex": 77.87
}
```

Where:
- "age" = the age in years
- "qx" = probability of dying within one year at that age
- "lx" = number of survivors out of 100,000 starting population
- "ex" = life expectancy (additional years expected to live from that age)

**For ssa-2022-male.json**, use these key anchor values and interpolate realistically between them:
- Age 0: ex=74.80, qx=0.005566
- Age 10: ex=65.37, qx=0.000103
- Age 20: ex=55.75, qx=0.001023
- Age 30: ex=46.50, qx=0.001342
- Age 40: ex=37.18, qx=0.002341
- Age 50: ex=28.37, qx=0.005123
- Age 60: ex=20.37, qx=0.010234
- Age 65: ex=17.08, qx=0.014532
- Age 70: ex=13.98, qx=0.021345
- Age 80: ex=8.65, qx=0.047823
- Age 90: ex=4.52, qx=0.112345
- Age 100: ex=2.18, qx=0.252341
- Age 110: ex=1.00, qx=0.500000

**For ssa-2022-female.json**, use these key anchor values and interpolate realistically between them:
- Age 0: ex=80.24, qx=0.004523
- Age 10: ex=70.65, qx=0.000089
- Age 20: ex=60.81, qx=0.000456
- Age 30: ex=51.03, qx=0.000712
- Age 40: ex=41.34, qx=0.001523
- Age 50: ex=31.89, qx=0.003234
- Age 60: ex=23.05, qx=0.007123
- Age 65: ex=19.17, qx=0.010234
- Age 70: ex=15.46, qx=0.016234
- Age 80: ex=9.58, qx=0.038923
- Age 90: ex=5.02, qx=0.097234
- Age 100: ex=2.45, qx=0.221234
- Age 110: ex=1.00, qx=0.500000

Generate complete, realistic JSON arrays for both files. Do not leave placeholders — fill in all 111 entries for each file with realistic interpolated values between the anchor points.

After creating both files, confirm how many entries each file has and show me the entries for ages 0, 30, 65, and 80 from each file.
---

---

## PROMPT 3 — CALCULATOR LOGIC
### What this does: Builds the core math engine that powers all results

---
Build the calculator logic in /lib/calculator.ts and /lib/modifiers.ts.

**In /lib/calculator.ts:**

Create and export these functions:

```typescript
// Gets base life expectancy from SSA table
// sex: 'male' | 'female'
// currentAge: number (1-99)
// returns: { estimatedDeathAge: number, estimatedDeathYear: number, yearsRemaining: number }
export function getBaseLifeExpectancy(sex: 'male' | 'female', currentAge: number)

// Converts a death age + current age into a countdown object
// returns: { years: number, months: number, days: number, totalDays: number }
export function getCountdown(estimatedDeathAge: number, currentAge: number)

// Returns what percentile the user is in vs average for their sex/age
// returns: number between 0-100 (e.g. 67 means "outlives 67% of peers")
export function getPercentileVsPeers(adjustedDeathAge: number, sex: 'male' | 'female', currentAge: number)

// Returns comparison data for the bar chart
// returns: array of { label: string, age: number, isUser: boolean }
export function getDemographicComparisons(adjustedDeathAge: number, sex: 'male' | 'female', currentAge: number)
```

The getDemographicComparisons function should return 5 bars:
1. User's result (isUser: true)
2. US average for their sex/age group
3. Japan average (male: 81.05, female: 87.14)
4. Average for non-smoker their sex/age
5. Average for smoker their sex/age (subtract ~10 years)

**In /lib/modifiers.ts:**

Create and export a function:
```typescript
// Takes the base life expectancy and applies lifestyle adjustments
// Returns the adjusted death age and a breakdown of what each factor added/subtracted
export function applyLifestyleModifiers(
  baseDeathAge: number,
  modifiers: {
    smoking: 'none' | 'occasional' | 'daily'
    bmi: number  // 15-45 scale
    exercise: 'sedentary' | 'light' | 'active' | 'very_active'
    alcohol: 'none' | 'light' | 'moderate' | 'heavy'
    sleep: 'poor' | 'ok' | 'good'
    stress: 'low' | 'medium' | 'high'
    diet: 'poor' | 'average' | 'good'
  }
): {
  adjustedDeathAge: number
  breakdown: { factor: string, years: number }[]
}
```

**Use these evidence-based modifier values** (years added or subtracted):
- Smoking: none=0, occasional=-3, daily=-10
- BMI: 18.5-24.9=0 (healthy), under 18.5=-2, 25-29.9=-1, 30-34.9=-3, 35+=-7
- Exercise: sedentary=-3, light=0, active=+2, very_active=+3
- Alcohol: none=0, light=+1, moderate=-1, heavy=-5
- Sleep: poor=-3, ok=0, good=+1
- Stress: low=+1, medium=0, high=-3
- Diet: poor=-3, average=0, good=+2

After building both files, show me the TypeScript interfaces and confirm there are no type errors.
---

---

## PROMPT 4 — MAIN CALCULATOR COMPONENT
### What this does: Builds the input form (Step 1 of the user experience)

---
Build the Calculator component in /components/Calculator.tsx.

This is the first thing users see — it must feel warm, curious, and inviting. NOT clinical or morbid. The emotional tone is: "I'm about to learn something meaningful about my life."

**Design direction:** Deep dark background (#0f0f0f), warm off-white text (#f5f0e8), amber/gold accent (#f59e0b) for the CTA button and highlights. Clean sans-serif font. Generous spacing. Feels like a premium wellness app — think Apple Health meets a thoughtful life journal.

**The component should:**

1. Show a centered card/panel with:
   - Large headline: "How much time do you have?"
   - Sub-headline: "See your life in weeks, years, and moments — and discover what changes everything. Based on real actuarial data. Takes 60 seconds."
   - Three inputs:
     a. **Age** — a number input, min 1, max 99, placeholder "Your age"
     b. **Sex** — two large toggle buttons: "Male" / "Female" (not a dropdown)
     c. **Country** — for MVP, show "United States" as a static display with a small note "More countries coming soon"
   - A large CTA button: "See My Life Expectancy →"
   - The button should be disabled and grayed out until age AND sex are both filled in

2. Accept these props:
```typescript
interface CalculatorProps {
  onSubmit: (inputs: { age: number; sex: 'male' | 'female' }) => void
}
```

3. On submit, call onSubmit with the values. Do NOT show any result in this component — the parent page handles that.

**Animations:**
- The card should fade in on mount (simple CSS opacity transition, 0.4s)
- The button should have a subtle hover scale transform
- The sex toggle buttons should have a smooth background color transition when selected (selected state: amber background, dark text)

**Small text below the button:**
"All calculations happen in your browser. No personal data is collected or stored."

This builds trust immediately and is also true — reassure users before they even think to worry.

Do NOT add any placeholder filler text or lorem ipsum. Every word on screen should be intentional.

After building, show me the component code and confirm it compiles.
---

---

## PROMPT 5 — RESULT & LIFE BAR
### What this does: Builds the instant result display (Step 2 — the perspective shift)

---
Build the Result component in /components/Result.tsx and the LifeBar component in /components/LifeBar.tsx.

**Result.tsx:**

This component shows immediately after the user submits. It is the emotional core of the product — the moment of perspective. The tone should feel like a thoughtful revelation, not a death sentence.

Props:
```typescript
interface ResultProps {
  age: number
  sex: 'male' | 'female'
  estimatedDeathAge: number
  estimatedDeathYear: number
  yearsRemaining: number
  countdown: { years: number; months: number; days: number }
}
```

Layout (top to bottom):
1. **The big number** — the estimated lifespan age animates counting up from the user's current age to the result (e.g., counts from 35 → 81 in about 1.5 seconds using a smooth animation). Use a large, bold font — ~96px or larger. Label above it in small amber text: "YOUR ESTIMATED LIFESPAN"
2. **The predicted year** — below the number, in large but slightly smaller type: "You are estimated to live until **2068**" (bold the year). Tone: factual and calm, not alarming.
3. **The time remaining line** — below that, warm and human in tone: "That's approximately **43 years, 7 months, and 12 days** — make them count." Bold the time. The word "make them count" should be in amber.
4. **The live countdown** — a real-time ticking countdown showing days/hours/minutes/seconds remaining, labeled: "Time remaining (live)" — updates every second using setInterval
5. **The LifeBar component** — render it here, passing the percentage of life lived

**Framing note:** The countdown is meant to create perspective and urgency toward living well — not anxiety. The surrounding copy should reinforce this. Avoid any language that feels morbid.

**LifeBar.tsx:**

A horizontal progress bar showing life lived vs. life remaining.

Props:
```typescript
interface LifeBarProps {
  currentAge: number
  estimatedDeathAge: number
}
```

Design:
- Full-width bar with rounded ends
- Left portion (years lived): filled amber/gold (#f59e0b), slightly transparent (opacity 0.85)
- Right portion (years remaining): dark gray (#1f2937) with a subtle inner border
- Label above left portion: "Years lived" in small muted text
- Label above right portion: "Time to make count" in small amber text
- A small glowing dot at the current position marking "You are here"
- Animate the fill width from 0 to the correct % on mount (0.8s ease-out)

Below the bar: "Age [X] of an estimated [Y] — every week matters." in small warm text.

**Design direction for Result.tsx:**
- Same dark background as the calculator
- The big number should feel like a revelation — give it visual weight
- Subtle entrance animation: fade in and scale from 0.8 to 1.0 as the number counts up
- The overall emotional register is: calm, clear, motivating — not frightening

After building both, show me the code and confirm they compile with no TypeScript errors.
---

---

## PROMPT 6 — LIFESTYLE SLIDERS
### What this does: Builds the interactive "what if?" layer (Step 3 — the choices that change everything)

---
Build the Sliders component in /components/Sliders.tsx.

This is the most important engagement component. Every interaction should feel satisfying and immediate — the user is literally watching their choices protect or shorten their time.

Props:
```typescript
interface SlidersProps {
  baseDeathAge: number
  onModifiersChange: (modifiers: ModifierState, adjustedDeathAge: number, breakdown: { factor: string, years: number }[]) => void
}

interface ModifierState {
  smoking: 'none' | 'occasional' | 'daily'
  bmi: number
  exercise: 'sedentary' | 'light' | 'active' | 'very_active'
  alcohol: 'none' | 'light' | 'moderate' | 'heavy'
  sleep: 'poor' | 'ok' | 'good'
  stress: 'low' | 'medium' | 'high'
  diet: 'poor' | 'average' | 'good'
}
```

**Section header:** "See how your choices protect your time"
**Sub-text:** "Every slider updates your estimated lifespan in real time. Small changes add up to years."

**For each modifier, create a row with:**
- An icon (use lucide-react: Cigarette, Scale, Dumbbell, Wine, Moon, Brain, Apple)
- A label (e.g., "Smoking")
- The control (either toggle buttons or a range slider)
- A live delta badge that appears and animates when the value changes from default

**Controls by type:**
- Smoking: 3 toggle buttons (None / Occasional / Daily)
- BMI: a range slider from 15 to 45, with labels at 18.5 (Underweight), 25 (Healthy), 30 (Overweight), 35 (Obese). Default to 22 (healthy).
- Exercise: 4 toggle buttons (Sedentary / Light / Active / Very Active)
- Alcohol: 4 toggle buttons (None / Light / Moderate / Heavy)
- Sleep: 3 toggle buttons (Under 6hrs / 6-8hrs / 8+ hrs)
- Stress: 3 toggle buttons (Low / Medium / High)
- Diet: 3 toggle buttons (Poor / Average / Good)

**The live delta badge:**
When a user changes a slider from its default, show a small pill/badge next to the modifier row:
- Green pill: "+2 yrs · +104 weeks" for positive changes
- Red pill: "-5 yrs · -260 weeks" for negative changes
- Show BOTH years and weeks — the weeks number creates stronger perspective
- Hidden/gray when at default (no change from baseline)
- Animate in with a quick pop (scale from 0.5 to 1.0, 0.2s)

**Default values** (neutral baseline):
- Smoking: none
- BMI: 22
- Exercise: light
- Alcohol: light
- Sleep: ok
- Stress: medium
- Diet: average

On any change, immediately call applyLifestyleModifiers from /lib/modifiers.ts and fire onModifiersChange. No debounce — the update should feel instant.

**Motivational micro-copy beneath the sliders section:**
After all sliders, add a small text block in muted amber:
"The choices above represent some of the most well-studied factors in longevity research. Even one meaningful change can add years — and thousands of weeks — to your life."

**Gradual reveal behavior:**
Each slider row fades in 80ms after the previous one on first mount — creates a sense of the tool coming alive.

After building, confirm it compiles and imports correctly from /lib/modifiers.ts.
---

---

## PROMPT 7 — COMPARISON CHARTS & LIFE GRID
### What this does: Builds the social hook and the emotional centerpiece (Steps 4 & 5)

---
Build ComparisonChart.tsx and LifeGrid.tsx.

**ComparisonChart.tsx:**

Uses Recharts to show how the user compares to others — framed as motivation, not competition.

Props:
```typescript
interface ComparisonChartProps {
  comparisons: { label: string; age: number; isUser: boolean }[]
  percentileVsPeers: number
}
```

Design:
- Horizontal bar chart using Recharts BarChart
- User's bar: amber/gold (#f59e0b)
- Others: dark gray (#374151)
- Bars animate in from left on mount
- X-axis: ages from 60 to 100
- Each bar has a label showing the estimated age at the end
- Section title above: "How do you compare?"
- Below the chart, a highlighted stat box in amber border:
  "You're on track to outlive **[X]%** of [men/women] your age — and your choices above can push that number higher."
  Bold the percentage. The second half of the sentence is key — it connects the comparison directly back to agency.

**LifeGrid.tsx:**

The life-in-weeks visualization. This is the emotional centerpiece of the entire product.

Props:
```typescript
interface LifeGridProps {
  currentAge: number
  estimatedDeathAge: number
}
```

Design:
- A grid of small squares: 52 columns (weeks/year) × estimatedDeathAge rows (years)
- Cap the grid at 100 rows maximum
- Square size: 10px × 10px with 2px gap on desktop, 6px × 6px with 1px gap on mobile
- Three states:
  - **Lived** (current age × 52 squares from top-left): filled amber/gold (#f59e0b), opacity 0.75
  - **Current week**: bright white, slightly larger (12px), with a subtle glow effect
  - **Remaining**: dark gray (#1f2937) with a faint border — these are the weeks still to be written
- On hover over any square: tooltip showing "Age [X] · Week [N] of that year · [YYYY]"
- Section title: "Your Life in Weeks"
- Sub-text: "Each square is one week of your life. The golden ones are already gone. What will you do with the rest?"
- Below the grid: "You have lived [X,XXX] weeks. You have approximately [X,XXX] weeks remaining."
- Small note below that in muted text: "Hover over any square to explore your timeline."

**Performance note:** Since this grid can have 5,000+ squares, render it with a flat array and CSS grid — not nested maps, not SVG. Use `will-change: opacity` on the container.

**Entrance animation:** Squares fill in from top-left to the current week position over about 1.5 seconds on mount. Use a staggered CSS animation or JS-driven reveal.

After building both, confirm they compile and import Recharts correctly.
---

---

## PROMPT 8 — SHARE CARD & ADSENSE UNIT
### What this does: Builds the viral mechanic and the monetization component

---
Build ShareCard.tsx and AdUnit.tsx.

**ShareCard.tsx:**

The component that generates the shareable result and social sharing buttons. The share card should feel like something worth posting — not a death notice but a life declaration.

Props:
```typescript
interface ShareCardProps {
  estimatedDeathAge: number
  estimatedDeathYear: number
  percentileVsPeers: number
  sex: 'male' | 'female'
  currentAge: number
  weeksRemaining: number
}
```

Design:
- A styled card with dark background (#0f0f0f) and a warm amber border (1px solid #f59e0b)
- Contains:
  - Site name at top: "Life Expectancy Calculator" in small amber text
  - Large text: "Estimated to live until **[YEAR]**"
  - Smaller: "That's approximately [X,XXX] weeks remaining."
  - Stat: "On track to outlive [X]% of [men/women] my age"
  - Motivational line in amber: "Making every week count."
  - Small footer: "whenwillidiecalculator.com"

Below the card, three sharing buttons:
1. **Share on X/Twitter** — pre-written tweet: "I just found out I have approximately [X,XXX] weeks left. Puts things in perspective. Calculate yours → whenwillidiecalculator.com #lifeexpectancy #makeitcount"
2. **Share on Facebook** — opens Facebook share dialog with the URL
3. **Copy Link** — copies the URL to clipboard, shows "Copied!" for 2 seconds

Button styling: X button is black with white text, Facebook is #1877f2, Copy is dark gray. All have hover states.

**AdUnit.tsx:**

A reusable AdSense ad unit component.

Props:
```typescript
interface AdUnitProps {
  slotId: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}
```

Implementation:
- Renders an `<ins class="adsbygoogle">` element with the correct data attributes
- Uses useEffect to push to window.adsbygoogle on mount
- Uses a ref to ensure it only initializes once (prevents double-push on re-renders)
- Reserves space for the ad slot to prevent layout shift (CLS):
  - horizontal: min-height: 90px
  - rectangle: min-height: 250px
  - auto: min-height: 100px
- The publisherId reads from: process.env.NEXT_PUBLIC_ADSENSE_ID
- If that env var is not set, render a placeholder div instead (for development)

After building, confirm both components compile. The AdUnit will show a placeholder in dev — that's expected and correct.
---

---

## PROMPT 9 — WIRE EVERYTHING TOGETHER
### What this does: Assembles all components into the main page

---
Now wire everything together in /app/page.tsx.

This is the main page. It manages all state and composes all the components built so far.

**State to manage:**
```typescript
const [step, setStep] = useState<'input' | 'result'>('result')
const [userInputs, setUserInputs] = useState<{ age: number; sex: 'male' | 'female' } | null>(null)
const [baseResult, setBaseResult] = useState<BaseResult | null>(null)
const [adjustedResult, setAdjustedResult] = useState<AdjustedResult | null>(null)
const [modifierBreakdown, setModifierBreakdown] = useState<{ factor: string; years: number }[]>([])
const [comparisons, setComparisons] = useState<Comparison[]>([])
const [percentile, setPercentile] = useState<number>(0)
```

**Page flow:**

When step === 'input':
- Show the Calculator component centered on the page
- Full dark background, vertically centered on screen

When step === 'result' (after user submits):
1. Call getBaseLifeExpectancy(sex, age) from /lib/calculator.ts
2. Call getCountdown from /lib/calculator.ts
3. Call getDemographicComparisons from /lib/calculator.ts
4. Call getPercentileVsPeers from /lib/calculator.ts
5. Set all state
6. Switch to result step
7. Scroll to top smoothly

Result page layout (single scrolling column, max-width 800px, centered, dark background):
- **Section 1:** Result component (big number + life bar)
- **Ad slot 1:** AdUnit format="horizontal" — between sections
- **Section 2:** Sliders component — when sliders change, update adjustedResult state and re-render comparisons
- **Section 3:** ComparisonChart (use adjustedResult if available, baseResult otherwise)
- **Ad slot 2:** AdUnit format="rectangle" — after chart
- **Section 4:** LifeGrid
- **Section 5:** ShareCard
- **Section 6:** Supporting SEO copy (static HTML, below the tool):

  **H2: How This Calculator Works**
  Write approximately 150 words explaining: this tool uses the U.S. Social Security Administration 2022 Period Life Table and CDC National Center for Health Statistics data — the same actuarial sources used by financial planners and insurers. You enter your age and sex and the tool looks up your statistical life expectancy from those tables. The lifestyle sliders then apply evidence-based adjustments drawn from peer-reviewed longevity research. Everything runs in your browser — no data is sent anywhere.

  **H2: What Affects Life Expectancy?**
  Write approximately 200 words covering the major modifiable factors: smoking (the single largest modifiable factor, with daily smokers losing an average of 10 years), exercise, BMI, sleep quality, chronic stress, diet quality, and alcohol. Frame each one as a choice the reader has agency over. Keep the tone empowering — "these are things you can change."

  **H2: Average Life Expectancy in the United States**
  Write approximately 100 words citing current CDC data: the average American man lives to approximately 74.8 years; the average American woman to approximately 80.2 years. Note that these are averages and that individual lifestyle choices can move the number significantly in either direction.

  **H2: Frequently Asked Questions**
  Include these 8 FAQs with thoughtful answers:
  1. How accurate is this life expectancy calculator?
  2. What data does this calculator use?
  3. Does this calculator store my personal data?
  4. Why does smoking affect life expectancy so much?
  5. What is the average life expectancy in the US?
  6. How does BMI affect life expectancy?
  7. What is the single biggest thing I can do to add years to my life?
  8. Why does seeing life in weeks feel different than seeing it in years?

  For FAQ #8, write something like: "Years feel abstract. Weeks feel real. When you see your remaining weeks as individual squares on a grid, the finiteness of time becomes visceral in a way that tends to shift priorities. This is intentional — perspective is the whole point of this tool."

  **H2: Data Sources**
  Links to: https://www.ssa.gov/oact/STATS/table4c6.html and https://www.cdc.gov/nchs/nvss/life-expectancy.htm

**"Calculate again" link:** Add a subtle text link at the top of the results page: "← Calculate again" that resets state back to the input step.

**Legal disclaimer — below all content:**
> "This calculator provides estimates based on U.S. Social Security Administration and CDC actuarial data for educational purposes only. Results are statistical averages and do not predict any individual's lifespan. This is not medical advice. All calculations are performed locally in your browser — no personal data is collected or stored. Consult a qualified healthcare professional for health-related decisions."

Style it in small muted text (opacity 0.5), centered, with generous top margin.

After wiring everything, run the app and tell me:
1. Does it compile without errors?
2. Can you go from input to result?
3. Do the sliders update the result in real time?
4. What's broken or placeholder?
---

---

## PROMPT 10 — SUPPORTING PAGES & FOOTER
### What this does: Creates the pages AdSense requires and a site footer

---
Build the stub supporting pages and a shared footer component.

**Create /components/Footer.tsx:**
A simple site footer with:
- Copyright: "© 2025 Life Expectancy Calculator · For educational purposes only."
- Links: Home | About | Methodology | Privacy Policy
- Small text: "Data sourced from the U.S. Social Security Administration and CDC National Center for Health Statistics. Public domain data, freely available."
- Tagline in small amber text: "See how much time you have — and make it count."
- Dark background matching the rest of the site

Add Footer to /app/layout.tsx so it appears on every page.

**Build /app/about/page.tsx:**

H1: "About This Calculator"

Write this in first person, personal founder voice:

"I built this tool because I wanted to understand my own time better — and I couldn't find anything that showed it to me in a way that actually landed.

Most life expectancy calculators give you a number. Seventy-eight years. Eighty-one years. And then you close the tab and forget it, because a number alone doesn't create perspective.

What creates perspective is seeing your life as weeks on a grid. Watching filled squares — weeks already lived — sit next to the remaining ones. That's the moment this tool was built for.

Everything here is built on public domain data from the U.S. Social Security Administration and the CDC — the same actuarial tables used by financial planners, insurers, and researchers. The lifestyle adjustments are drawn from peer-reviewed longevity research. No agenda, no supplements to sell, no email gate. Just the data, visualized in a way that might actually change how you think about your time.

All calculations happen in your browser. No personal data is collected or stored — ever.

I hope this tool does for you what it did for me: not create anxiety, but create clarity."

Then add: a link back to the calculator, and a note that data sources are listed on the Methodology page.

**Build /app/methodology/page.tsx:**
- H1: "Methodology & Data Sources"
- Explain how the SSA 2022 Period Life Table works — what qx, lx, and ex mean in plain English
- Explain that the tool looks up ex (expected additional years) for the user's age and sex, then adds their current age to get the estimated lifespan
- Explain how lifestyle modifiers are applied — each factor has a year-based adjustment drawn from longitudinal studies; they are additive and applied to the base estimate
- Include a table showing each modifier, its options, and the year impact (e.g., Smoking Daily = -10 years)
- Note that modifiers are conservative estimates — real impacts vary by individual
- Links to: https://www.ssa.gov/oact/STATS/table4c6.html and https://www.cdc.gov/nchs/nvss/life-expectancy.htm
- Disclaimer: for educational purposes only, not medical advice

**Build /app/privacy/page.tsx:**
- H1: "Privacy Policy"
- State clearly: no personal data is collected. All calculations happen in the browser. Nothing is sent to a server.
- State: Google AdSense may use cookies for ad personalization — link to Google's privacy policy
- State: Google Analytics is used to understand how people use the tool (aggregate, anonymized)
- Standard last-updated date
- Keep it plain and honest — no legalese padding

After building all pages, confirm:
1. Each page loads without errors
2. Footer appears on every page
3. All internal links work
---

---

## PROMPT 11 — MOBILE POLISH & PERFORMANCE
### What this does: Makes the site work beautifully on phones and load fast

---
Review and fix the entire site for mobile responsiveness and performance.

**Mobile requirements (test at 375px — iPhone SE):**

Calculator input screen:
- Card should be full-width with 16px horizontal padding
- Headline: no larger than 28px on mobile
- Sex toggle buttons: side-by-side, not stacked
- CTA button: full-width on mobile

Result screen:
- Big animated number: cap at 72px on mobile
- LifeBar: full width, 16px height on mobile (vs 24px desktop)
- Sliders: toggle button groups wrap gracefully at small sizes, no overflow
- LifeGrid: smaller squares (6px × 6px, 1px gap), horizontally scrollable if needed
- ComparisonChart: Recharts width="100%" for responsiveness
- ShareCard: share buttons stack vertically on mobile

**Performance checklist:**

1. LifeGrid: if grid has more than 3,000 squares, add `will-change: opacity` to container. Ensure fill animation doesn't cause layout thrash.

2. Wrap ComparisonChart in dynamic import to prevent SSR issues:
```typescript
const ComparisonChart = dynamic(() => import('@/components/ComparisonChart'), { ssr: false })
```

3. Add `loading="lazy"` to any images.

4. In next.config.js enable:
```javascript
experimental: {
  optimizeCss: true
}
```

5. Verify Tailwind content paths are correct for production purging.

**Add a subtle loading state:**
Between form submit and result display, add a 400ms artificial delay with a small spinner in amber. This makes the result feel considered. The spinner should be simple — just a rotating circle. Label it: "Calculating your timeline..."

**Preconnect hints in layout.tsx head:**
```html
<link rel="preconnect" href="https://pagead2.googlesyndication.com" />
<link rel="preconnect" href="https://googletagservices.com" />
```

After all changes, describe:
- Mobile layout at 375px
- Any remaining layout issues
- Estimated Lighthouse performance score
---

---

## PROMPT 12 — METADATA, SCHEMA & SEO
### What this does: Adds the technical SEO infrastructure

---
Add complete SEO metadata and structured data to the site.

**In /app/layout.tsx**, update the metadata export:
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Life Expectancy Calculator — See How Much Time You Have',
    template: '%s | Life Expectancy Calculator'
  },
  description: 'See how much time you have — and make it count. Based on SSA & CDC actuarial data. Interactive sliders show how smoking, BMI, exercise & more affect your estimated lifespan.',
  keywords: ['life expectancy calculator', 'how long will I live', 'lifespan calculator', 'life expectancy estimator', 'life in weeks', 'longevity calculator'],
  openGraph: {
    title: 'Life Expectancy Calculator — See How Much Time You Have',
    description: 'See how much time you have — and make it count. Based on real actuarial data.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Expectancy Calculator — See How Much Time You Have',
    description: 'See how much time you have — and make it count.',
  },
  robots: {
    index: true,
    follow: true,
  }
}
```

**Add JSON-LD structured data to /app/page.tsx:**

1. **WebApplication schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Life Expectancy Calculator",
  "description": "See how much time you have — and make it count. Based on SSA and CDC actuarial data with interactive lifestyle modifiers.",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://whenwillidiecalculator.com"
}
```

2. **FAQPage schema** — include all 8 FAQ questions and answers in FAQPage schema format

3. **Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Life Expectancy Calculator",
  "url": "https://whenwillidiecalculator.com",
  "description": "A free life expectancy visualization tool based on public actuarial data. See how much time you have — and make it count."
}
```

**Canonical tag:**
```html
<link rel="canonical" href="https://whenwillidiecalculator.com" />
```

**Create /public/ads.txt:**
```
google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```
(Replace with real publisher ID after AdSense approval)

**Create /public/robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://whenwillidiecalculator.com/sitemap.xml
```

**Create /public/llms.txt:**
This file helps AI crawlers understand the site:
```
# Life Expectancy Calculator
> See how much time you have — and make it count.

This tool calculates estimated lifespan based on U.S. Social Security Administration and CDC actuarial data. Users enter their age and sex to receive a baseline estimate, then adjust lifestyle factors (smoking, BMI, exercise, sleep, stress, diet) to see how choices affect their estimated lifespan. The tool visualizes results as an animated number, a life bar, a life-in-weeks grid, and demographic comparison charts.

All calculations are performed client-side. No personal data is collected.

Data sources: SSA 2022 Period Life Table, CDC National Center for Health Statistics.
```

**Create /app/sitemap.ts:**
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://whenwillidiecalculator.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://whenwillidiecalculator.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://whenwillidiecalculator.com/methodology', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://whenwillidiecalculator.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
```

After all changes confirm:
1. Browser tab shows correct title
2. No TypeScript errors
3. /sitemap.xml returns valid XML locally
4. /robots.txt and /llms.txt are accessible
---

---

## PROMPT 13 — DEPLOY TO VERCEL
### What this does: Gets the site live

---
Prepare the project for Vercel deployment.

**Step 1 — Environment variables:**
Create `.env.local` in the root:
```
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://whenwillidiecalculator.com
```
Confirm `.env.local` is in .gitignore (default in Next.js — just verify).

**Step 2 — Production build:**
Run `npm run build` and fix every error before proceeding. Common issues:
- Missing 'use client' on components using useState/useEffect
- TypeScript strict mode errors
- Recharts SSR issues (handled by dynamic import from Prompt 11)
- Hardcoded localhost URLs

Tell me every error and fix them all.

**Step 3 — Vercel deployment steps (instruct the user):**

Since you already have a Vercel account, do these steps exactly:

1. Push the project to a GitHub repository
2. Go to vercel.com → "Add New Project"
3. Import the GitHub repository
4. In Environment Variables during setup, add:
   - NEXT_PUBLIC_ADSENSE_ID = ca-pub-XXXXXXXXXXXXXXXXX (placeholder for now)
   - NEXT_PUBLIC_SITE_URL = https://whenwillidiecalculator.com
5. Click Deploy
6. After deployment: Settings → Domains → add whenwillidiecalculator.com

**Step 4 — Post-deploy checklist (tell user to verify):**
- [ ] Homepage loads, calculator works end to end
- [ ] Mobile view looks correct on your phone
- [ ] /about, /methodology, /privacy all load
- [ ] /sitemap.xml returns valid XML
- [ ] /ads.txt is accessible
- [ ] /robots.txt is accessible
- [ ] /llms.txt is accessible
- [ ] No console errors in the browser

After the build succeeds clean, provide a complete file tree of every file created in the project.
---

---

## WHAT COMES AFTER DEPLOYMENT

**Week 1–2:**
1. Submit to Google Search Console → verify → request indexing of homepage
2. Set up Google Analytics 4 → add GA4 script to layout.tsx
3. Post in r/InternetIsBeautiful — write a genuine post about the life grid visualization
4. Share with one person you trust and watch them use it

**Week 2–4:**
1. Apply for Google AdSense (site needs to be indexed with real content visible)
2. After approval: replace placeholder NEXT_PUBLIC_ADSENSE_ID with real publisher ID → redeploy
3. Monitor AdSense for "low value content" flags — if flagged, add more supporting copy to the page

**Month 2–3:**
1. Post the life grid screenshot on r/dataisbeautiful with a genuine write-up
2. Post on r/longevity introducing the tool
3. Consider a TikTok showing yourself using the tool and reacting to your own result
4. Email 2–3 journalists who covered Death Clock or longevity topics

**Month 3–6:**
1. Add supporting pages to compound organic traffic:
   - /life-expectancy-by-country/
   - /life-expectancy-by-state/
   - /life-expectancy-men/ and /life-expectancy-women/
   - /social-security-life-expectancy/
2. Apply for Journey by Mediavine at 10,000 monthly sessions
3. RPM goes from ~$5 (AdSense) to ~$12–18 (Journey by Mediavine)

**Month 6–18:**
1. Add condition-specific modifiers (diabetes, heart disease)
2. Build 20–40 supporting content pages around the long-tail keyword cluster
3. Pursue 1–2 press mentions
4. Upgrade to Mediavine main at 50K sessions — RPM jumps to $15–30
5. At 100K monthly sessions: $1,500–$3,000/month in display revenue

---

*You built something worth building. Now go make it count.*
