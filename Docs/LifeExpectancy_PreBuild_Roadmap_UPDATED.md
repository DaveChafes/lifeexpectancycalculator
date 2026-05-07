# Life Expectancy Calculator — Complete Pre-Build Roadmap
### "See how much time you have — and make it count."
### From Idea to 500K Monthly Users

---

## THE THESIS (READ THIS FIRST)

This tool exists because most people walk around with a vague sense that life is short — but they never actually *look* at it. When you see your remaining weeks as individual squares on a grid, something shifts. That shift is what this calculator was built to create.

**The product is not a death calculator. It is a perspective tool.**

The emotional arc is: curiosity → perspective → motivation → action. Every design decision filters through that arc. If a feature creates anxiety without creating agency, it doesn't belong here. If a feature creates perspective and shows the user what they can *do*, it belongs prominently.

**North star:** Every person who uses this tool should leave with a clearer sense of what their time is worth — and at least one thing they want to change.

---

## PART 1 — PRODUCT DESIGN

### The Core Experience (What The User Feels, Step by Step)

**Step 1 — The Hook (Above the Fold)**
- Headline: *"How much time do you have?"*
- Sub-headline: *"See your life in weeks, years, and moments — and discover what changes everything. Based on real actuarial data. Takes 60 seconds."*
- Just THREE inputs: Age, Sex, Country (US only at launch)
- One CTA button: **"See My Life Expectancy →"**
- Small trust note below button: "All calculations happen in your browser. No personal data is collected or stored."
- Design tone: Deep dark background, warm amber accents, clean and premium. Apple Health meets a thoughtful life journal.

**Step 2 — The Result (The Perspective Shift)**
- Animated number counts up to their estimated lifespan age
- Below it: "You are estimated to live until **[YEAR]**"
- Below that: "That's approximately **[X] years, [X] months, and [X] days** — make them count." The words "make them count" in amber.
- A live ticking countdown (days/hours/minutes/seconds) labeled "Time remaining (live)"
- The horizontal Life Bar — filled portion labeled "Years lived", remaining portion labeled "Time to make count"
- This result appears in under 1 second after a brief 400ms "Calculating your timeline..." moment

**Step 3 — The Choices Layer (The "What If I Changed?" Moment)**
Section title: *"See how your choices protect your time"*
Sub-text: *"Every slider updates your estimated lifespan in real time. Small changes add up to years."*

Sliders for: Smoking, BMI, Exercise, Alcohol, Sleep, Stress, Diet

The live delta badge shows BOTH years AND weeks: "+2 yrs · +104 weeks" — the weeks number hits harder than years alone.

The emotional moment this section is designed to create: a user drags the Smoking slider from Daily → None and watches "+10 yrs · +520 weeks" animate onto their screen. That moment gets screenshot. That screenshot gets shared.

Below all sliders, a small motivational note:
*"The choices above represent some of the most well-studied factors in longevity research. Even one meaningful change can add years — and thousands of weeks — to your life."*

**Step 4 — The Comparison (The Social Hook)**
Section: *"How do you compare?"*
- Bar chart: your result vs. US average for your age/sex, Japan average, non-smoker average, smoker average
- The highlighted stat: "You're on track to outlive **[X]%** of [men/women] your age — and your choices above can push that number higher."
- The second half of that sentence is critical — it connects comparison to agency.

**Step 5 — The Life Grid (The Gut Punch)**
Section: *"Your Life in Weeks"*
Sub-text: *"Each square is one week of your life. The golden ones are already gone. What will you do with the rest?"*

- 52 columns × estimated lifespan rows
- Lived weeks: amber/gold
- Current week: bright white with a glow
- Remaining weeks: dark gray outlined squares — these are the weeks still to be written
- Below the grid: "You have lived [X,XXX] weeks. You have approximately [X,XXX] weeks remaining."

This is the single most emotionally resonant moment in the product. It is also the most shareable visual.

**Step 6 — The Share Card**
Pre-written share text for X/Twitter:
*"I just found out I have approximately [X,XXX] weeks left. Puts things in perspective. Calculate yours → whenwillidiecalculator.com #lifeexpectancy #makeitcount"*

The share card itself shows:
- "Estimated to live until [YEAR]"
- "That's approximately [X,XXX] weeks remaining."
- "On track to outlive [X]% of [men/women] my age"
- "Making every week count." (in amber)

---

## PART 2 — PSYCHOLOGY & ENGAGEMENT MECHANICS

### Why Users Stay

**1. The Perspective Shift, Not the Death Shock**
The original Death Clock worked on shock. This tool works on perspective. Shock creates a spike and a close. Perspective creates a scroll, a share, and a return visit. Perspective is more durable and more valuable.

**2. Variable Reward (The Slider Effect)**
Each slider is a mini-reveal. The user doesn't know if changing their sleep adds 1 year or 3 until they move it. That uncertainty creates compulsive interaction. Every new data point is a small reward.

**3. Agency, Not Fatalism**
The framing throughout is: "here is what you can change." The tool shows users they have more control over their timeline than they probably assumed. That feeling of agency is what drives sharing — people share things that make them feel empowered, not things that make them feel doomed.

**4. The Curiosity Gap in Layers**
- Layer 1: What's my number? (gets them in)
- Layer 2: What changes my number? (keeps them scrolling)
- Layer 3: How do I compare? (social hook)
- Layer 4: What does my life look like as a grid? (the gut punch)

**5. The Weeks Insight**
Showing time in weeks instead of years is a deliberate psychological choice. Eighty years feels like a long time. 4,160 weeks feels finite. That finiteness is clarifying, not depressing — it's the whole point.

**6. Personalization = Ownership**
The moment a user moves a slider, they have invested in the result. Psychologically they now own it. Owned things get shared.

### Why Users Leave (Avoid These)
- Morbid tone without empowerment — perspective without agency is just anxiety
- Long forms before showing a result (the Living to 100 mistake)
- Plain numbers with no visualization
- Slow load time
- Not mobile optimized
- Making it feel like a medical tool

---

## PART 3 — COMMERCIAL GUIDELINES & LEGAL

### Non-Negotiable Requirements

**Disclaimer (below the tool, always visible):**
> *"This calculator provides estimates based on U.S. Social Security Administration and CDC actuarial data for educational purposes only. Results are statistical averages and do not predict any individual's lifespan. This is not medical advice. All calculations are performed locally in your browser — no personal data is collected or stored."*

**Privacy Policy page** — required by AdSense:
- Disclose: cookies used, AdSense collects data for ad personalization, no health data stored
- State clearly that all calculations are client-side

**AdSense Compliance — This Project Is Fully Compliant Because:**
- Data from public-domain government sources (SSA + CDC)
- Framed as educational, not medical
- No harmful health claims
- Family-safe content
- No deceptive ad placement

**What Would Violate AdSense:**
- Claiming the calculator predicts death with certainty
- Promoting supplements or treatments for longevity
- Medical misinformation

**No Personal Data Stored:**
All calculations happen client-side. No age, sex, or lifestyle data is ever sent to a server. This keeps the tool entirely outside HIPAA territory.

---

## PART 4 — SEO STRATEGY

### One-Page Launch SEO

**Page Title:** `Life Expectancy Calculator — See How Much Time You Have`

**Meta Description:** `See how much time you have — and make it count. Based on SSA & CDC actuarial data. Interactive sliders show how smoking, BMI, exercise & more affect your estimated lifespan.`

**H1:** `Life Expectancy Calculator`

**Supporting copy sections on the main page (below the tool):**
1. *How This Calculator Works* (~150 words — SSA/CDC data explained)
2. *What Affects Life Expectancy?* (~200 words — empowering framing, not clinical)
3. *Average Life Expectancy in the United States* (~100 words — current CDC data)
4. *Frequently Asked Questions* (8 questions with FAQ schema)
5. *Data Sources* (links to SSA + CDC)

**Schema to add at launch:**
- WebApplication
- FAQPage
- Organization

**The Growth Path After Launch:**
At 10K+ monthly sessions, add supporting pages to compound organic traffic. That's Phase 2 — not needed for launch.

---

## PART 5 — THE ROADMAP TO 500K MONTHLY USERS

### Phase 1: Build & Launch (Weeks 1–6)
**Goal: Ship a working MVP**

- [ ] Domain registered: whenwillidiecalculator.com
- [ ] Set up Next.js project in Cursor using the build prompts
- [ ] Build the core calculator (SSA JSON data + base math)
- [ ] Build the result display (animated number + life bar)
- [ ] Build the sliders (lifestyle modifiers, live updates)
- [ ] Build the life grid visualization
- [ ] Build the comparison charts
- [ ] Write all supporting copy (600–800 words, 8 FAQs)
- [ ] Add Privacy Policy + About + Methodology pages
- [ ] Deploy on Vercel (free tier)
- [ ] Connect Google Analytics 4
- [ ] Submit to Google Search Console
- [ ] Apply for AdSense (after 2–4 weeks live and indexed)

**Success metric:** Site is live, tool works on mobile, first 100 real visitors.

---

### Phase 2: The Shareable Mechanic (Weeks 7–10)
**Goal: Make it ready to spread**

- [ ] Build the shareable result card (dynamic OG image via @vercel/og)
- [ ] Add X/Twitter and Facebook share buttons with pre-written copy
- [ ] Fine-tune mobile experience — test on 3 real devices
- [ ] Submit to Product Hunt
- [ ] Post in r/InternetIsBeautiful
- [ ] Post the life grid visual in r/dataisbeautiful

**Success metric:** 1,000+ sessions from Reddit/social. First organic share not by you.

---

### Phase 3: Organic Growth Engine (Months 3–6)
**Goal: 10,000–50,000 monthly sessions, qualify for Journey by Mediavine**

Traffic compounds from three sources:

1. **SEO** — Tool page ranks for long-tail terms. Add 5 supporting pages:
   - /life-expectancy-by-country/
   - /life-expectancy-by-state/
   - /life-expectancy-men/ and /life-expectancy-women/
   - /social-security-life-expectancy/

2. **Social/Viral** — Each Reddit post, TikTok, or X/Twitter share drives spikes. One good post = 10,000 sessions in a day. You need 3–5 over 6 months.

3. **Direct/Referral** — Teachers share it with students. People send it to friends after turning 40, losing a parent, making New Year's resolutions. The tool earns bookmark traffic.

**Monetization milestone:** Apply for Journey by Mediavine at 10K sessions. RPM goes from ~$5 (AdSense) to ~$12–18 immediately.

**Success metric:** 10,000 monthly sessions, first Mediavine check.

---

### Phase 4: Scaling (Months 6–18)
**Goal: 50,000–500,000 monthly sessions**

- Add condition-specific modifiers (diabetes, heart disease, COPD)
- Build 20–40 supporting content pages around the long-tail keyword cluster
- Pursue 1–2 press mentions (journalists who covered Death Clock or longevity topics)
- Build backlinks through data tables (journalists cite actuarial data)
- Upgrade to Mediavine main at 50K sessions (RPM jumps to $15–30)
- Consider a TikTok account showing real reactions to the life grid

**The math at 500K monthly sessions:**
- Mediavine RPM: ~$20 average for this niche
- Revenue: 500,000 × $20 / 1,000 = **$10,000/month**
- Timeline: 12–18 months with good execution and 1–2 viral moments

---

## PART 6 — WHAT MAKES THIS ACHIEVABLE

**You don't need:**
- A marketing budget
- A medical reviewer
- 100 blog posts
- A team

**You do need:**
- A tool that's genuinely worth using (the product is the marketing)
- One viral moment (one good Reddit or TikTok post)
- Patience for SEO to compound (3–6 months)
- The share card built properly (the weeks stat is the multiplier)

**The comparison that holds:**
HeightComparison.com gets ~1.8M monthly visits with a single interactive page. Your topic has broader appeal (everyone has a lifespan), deeper engagement mechanics (sliders, comparisons, grid), and a stronger shareable moment (the weeks number creates genuine perspective). The ceiling is higher. The path is the same.

---

## ELEVATOR PITCH

When someone asks what you built:

*"It's a life expectancy visualizer. You put in your age and lifestyle habits, and it shows you exactly how much time you have left — broken down into weeks on a grid. Then it shows you how much time you can add by changing specific habits. Most people find it genuinely motivating. It's built on SSA and CDC actuarial data — the same tables used by financial planners and insurers."*

---

## NEXT STEP

Open Cursor. Paste Prompt 1. Build the thing.

Every other decision gets easier once something real exists.
