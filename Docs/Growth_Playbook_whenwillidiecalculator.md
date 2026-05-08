# Growth Playbook — whenwillidiecalculator.com
### Operational reference for ongoing SEO, content, monetization, and distribution
### Updated: May 2025 — Post-launch edition

---

## STATUS SNAPSHOT

**Site:** whenwillidiecalculator.com
**Display name:** Life Expectancy Calculator
**Tagline:** "See how much time you have — and make it count."
**Stack:** Next.js 14, Tailwind CSS, Vercel, SSA + CDC actuarial data
**Analytics:** Google Analytics 4 ✅ | Google Search Console ✅ | Bing Webmaster ✅ | Microsoft Clarity ✅
**Monetization:** AdSense (not yet applied) | Mediavine target at 10K sessions | Affiliate (Phase 2)
**Pages live:** / | /about | /methodology | /privacy | /perspective

---

## PART 1 — IMMEDIATE ACTIONS (Do These First)

### Apply for Google AdSense
- Wait until GSC shows the site is indexed (check Coverage report — pages should show as "Valid")
- Go to adsense.google.com → Add site → whenwillidiecalculator.com
- Once approved, go to Vercel → Settings → Environment Variables → update NEXT_PUBLIC_ADSENSE_ID with real publisher ID → Redeploy
- Also update /public/ads.txt with real publisher ID

### Submit to Directories (One-Time, High Value)
These generate backlinks and referral traffic:
- **Product Hunt** — post as "Life Expectancy Calculator" with the life grid as the hero visual
- **r/InternetIsBeautiful** — post a genuine description of the life grid visualization
- **r/dataisbeautiful** — post a screenshot of the life grid with context
- **r/longevity** — introduce the tool with a focus on the lifestyle sliders
- **Indie Hackers** — post as a solo founder project in the Tools section
- **Hacker News** — "Show HN: A life expectancy visualizer built on SSA actuarial data"

### Check Bing Webmaster Verification
Bing was pending DNS propagation. Log in and confirm the domain is verified and sitemap is submitted.

---

## PART 2 — SEO STRATEGY

### Current Keyword Targets

**Primary cluster (40,500 monthly searches each — Low competition):**
life expectancy calculator, lifespan calculator, age expectancy calculator, life span calculator, compute life expectancy, determine life expectancy, estimate life expectancy, expected lifespan calculator, life expectancy estimator, lifespan expectancy calculator

**Personal intent cluster:**
how long will I live (3,600), how long will I live calculator (1,300), when will I die calculator (1,300), death calculator (3,600), my life expectancy (320), calculate my life expectancy (320), free life expectancy calculator (480), online life expectancy calculator (1,600)

**Supporting page cluster:**
life expectancy by country (14,800), life expectancy by state, men life expectancy (14,800), average age expectancy (18,100), social security life expectancy calculator (6,600)

### SEO Architecture

**Money page:** whenwillidiecalculator.com (homepage/tool)
Every supporting page links back to the homepage with anchor text variations of "life expectancy calculator."

**Hub and spoke model:**
- Hub: homepage tool
- Spokes: /about, /methodology, /perspective (built), + future supporting pages

**Next supporting pages to build (Phase 2 — months 2-4):**
Priority order:
1. /life-expectancy-by-country/ — data table, highly linkable, journalists cite it
2. /life-expectancy-by-state/ — CDC state data, ranks for US state queries
3. /life-expectancy-men/ — male-specific data and factors
4. /life-expectancy-women/ — female-specific data
5. /social-security-life-expectancy/ — explains SSA table, targets 6,600/mo keyword
6. /average-life-expectancy-usa/ — annual update page, high volume
7. /how-to-live-longer/ — evergreen pillar page, backlink magnet

### Monthly GSC Review Checklist

Run this every month:
- Export Queries + Pages data (90-day window) from GSC
- Identify queries with 500+ impressions and under 3% CTR — these are your biggest quick wins
- Update title/meta on low-CTR pages and test new angles
- Look for new queries triggering impressions — build dedicated content for winners
- Check index coverage errors — fix any 404s immediately

**Claude GSC prompt to use monthly:**
"Here is my Google Search Console data for the past 28 days [attach CSV]. Identify: (1) queries with high impressions but low CTR, (2) keyword cannibalization between pages, (3) long-tail queries I have impressions for but no dedicated page. Give me 3-5 specific action items with the exact query data."

### Schema Markup (Already Implemented)
- ✅ WebApplication schema on homepage
- ✅ FAQPage schema on homepage
- ✅ Organization schema
- ✅ Sitemap at /sitemap.xml
- ✅ robots.txt
- ✅ llms.txt for AI crawlers

When adding new supporting pages, add Article + FAQPage schema to each.

---

## PART 3 — CONTENT ROADMAP

### Phase 1 (Now — Month 2): Features
Items still to build on the existing tool:
- ⬜ Contextual health resources (appear near slider when user selects negative option)
- ⬜ /longevity-stack/ affiliate page (Phase 2)
- ⬜ Condition-specific modifiers (diabetes, heart disease) — Phase 3

### Phase 2 (Months 2-4): Supporting Pages
Build in this order. Each page:
- Minimum 800 words of original content
- H2s phrased as questions (helps AEO)
- Internal link back to the calculator (anchor text: "life expectancy calculator")
- FAQ section with FAQ schema
- Links to SSA + CDC as sources

**Page template structure:**
- H1: [Primary keyword]
- H2: What is [topic]?
- H2: [Keyword] in the United States
- H2: How [topic] affects your life expectancy
- H2: Use our Life Expectancy Calculator
- H2: Frequently Asked Questions
- H2: Data Sources

### Phase 3 (Months 4-6): Cluster Expansion
- Condition-specific: /life-expectancy-with-diabetes/, /life-expectancy-with-heart-disease/
- Lifestyle: /smoking-and-life-expectancy/, /bmi-life-expectancy/, /exercise-longevity/
- Demographic: /life-expectancy-by-age/, /life-expectancy-by-race/
- Country-specific pages

---

## PART 4 — MONETIZATION PLAN

### Revenue Stack (In Order of Build Priority)

**1. Google AdSense (apply now)**
Current ad placements:
- After share card on homepage (rectangle)
- Within SEO content section on homepage (horizontal)
- Bottom of /about page (horizontal)
- Mid-content on /methodology page (rectangle)
- Mid-content on /perspective page (horizontal)
- Bottom of /perspective page (rectangle)

Expected RPM: $3-8 page RPM until Mediavine

**2. Journey by Mediavine (target: month 3-6)**
- Threshold: 10,000 sessions in trailing 30 days
- Domain must be at least 4 months old
- GA4 must be installed ✅
- Expected RPM jump: $5 AdSense → $12-18 Mediavine Journey
- At 25K sessions: $200-450/month

**3. Mediavine Main Program (target: month 6-18)**
- Threshold: 50,000 sessions in trailing 30 days
- Expected RPM: $15-30
- At 100K sessions: $1,500-3,000/month

**4. Affiliate Marketing — /longevity-stack/ page (Phase 2)**
Products to research and personally vet before recommending:
- Supplements: AG1, Momentous, Life Extension
- Wearables: Whoop, Oura Ring, Garmin
- Books: Outlive (Peter Attia), Lifespan (David Sinclair)
- Health testing: InsideTracker, Levels (CGM), Function Health
- Sleep/meditation: Calm, Eight Sleep

**Framing rule:** Only recommend products you've researched and believe genuinely help. The About page copy already sets this expectation: "If I share resources or recommendations down the road, it'll be because I believe they could help someone (including myself)."

Never say "nothing to sell" — that closes doors. The current About page is correctly worded.

---

## PART 5 — DISTRIBUTION PLAYBOOK

### The Viral Mechanics Already Built
The site has several share-optimized features:
- Pre-written tweet: "I'm estimated to live until [YEAR]. That's [X,XXX] weeks — and I'm not wasting them."
- Facebook share button
- Copy link button
- /perspective page with 20 personalized flip cards (additional sharing moment)

### Reddit Strategy (Highest ROI Channel)
**r/InternetIsBeautiful** — best subreddit for tool launches
- Post title formula: "I built a life expectancy visualizer that shows your life as a grid of months — each circle is one month, golden ones are already lived"
- Lead with the visual (screenshot of the life grid)
- Be genuine — mention it's a solo project, built on SSA data
- Best time to post: Tuesday-Thursday, 9am-12pm EST

**r/dataisbeautiful** — for the visualization angle
- Post the life grid as an OC (original content) data visualization
- Include methodology in the comments

**r/longevity** — for the lifestyle slider angle
- Focus on the "what changes your number" feature
- Mention the SSA/CDC data credibility

**r/getmotivated** — for the perspective angle
- Lead with the weeks remaining stat
- Frame as a tool for gaining clarity

### TikTok Strategy (Emerging Channel)
- Film yourself using the tool for the first time, reacting genuinely to your own result
- Show the life grid animation — it's highly visual and works well on video
- Hashtags: #longevity #huberman #makeitcount #lifeexpectancy #perspective
- One good TikTok video can drive 10,000+ sessions

### Press Outreach (Month 2-3)
Journalists who covered Death Clock (deathclock.co) are natural targets — they've already written about this category. Search for their articles and pitch a "here's a free educational alternative built on government data" angle.

Key differentiators to pitch:
- Built on SSA/CDC public domain data (credible, not AI guessing)
- Free, no account required, no data stored
- Educational framing, not morbid
- Life grid visualization (unique visual hook)

---

## PART 6 — WEEKLY GROWTH LOOP

Run this every Monday (2-3 hours):

1. **GSC check** — any new impressions? Any queries to target?
2. **GA4 check** — traffic sources, top pages, bounce rate on calculator
3. **Clarity check** — where are users dropping off? Which sliders get used most?
4. **One content action** — either write a supporting page OR update existing copy based on GSC data
5. **One distribution action** — one Reddit post, one TikTok, or one outreach email

The compounding effect: each week of SEO work adds to the last. At 6 months of consistent weekly loops, organic traffic is meaningfully compounding.

---

## PART 7 — MILESTONE TRACKER

| Milestone | Target | Status |
|---|---|---|
| Site live | Day 1 | ✅ Done |
| GSC verified + sitemap submitted | Day 1 | ✅ Done |
| GA4 installed | Day 1 | ✅ Done |
| Bing Webmaster | Day 1 | ✅ Pending verification |
| Microsoft Clarity | Day 1 | ✅ Done |
| AdSense applied | Week 2 | ⬜ Not yet |
| First Reddit post | Week 2 | ⬜ Not yet |
| Contextual health resources | Week 2-3 | ⬜ In progress |
| 5 supporting pages built | Month 2 | ⬜ Not yet |
| 1,000 monthly sessions | Month 1-2 | ⬜ Not yet |
| Journey by Mediavine (10K sessions) | Month 3-6 | ⬜ Not yet |
| /longevity-stack/ affiliate page | Month 3 | ⬜ Not yet |
| 10,000 monthly sessions | Month 3-6 | ⬜ Not yet |
| Mediavine main (50K sessions) | Month 6-12 | ⬜ Not yet |
| 50,000 monthly sessions | Month 6-12 | ⬜ Not yet |
| 500,000 monthly sessions | Month 12-18 | ⬜ Not yet |

---

## PART 8 — TOOL STACK

| Task | Free Tool | Paid Option |
|---|---|---|
| Keyword research | Google Search Console, Google Trends | Ahrefs ($99/mo) |
| Traffic analytics | Google Analytics 4 | — |
| Heatmaps / session recordings | Microsoft Clarity | Hotjar |
| Rank tracking | Google Search Console | Ahrefs, Mangools |
| Schema validation | Rich Results Test (search.google.com/test/rich-results) | — |
| Site speed | PageSpeed Insights | WebPageTest |
| Backlink monitoring | GSC Links report | Ahrefs |
| AI citation tracking | Peec AI (free tier) | ZipTie, Profound |
| Content optimization | Claude (this project) | Surfer SEO |
| Ad management | Google AdSense → Mediavine | — |

---

*This playbook is specific to whenwillidiecalculator.com. Update it after each major milestone or strategic shift. Keep it in the Claude project so every session has full context.*
