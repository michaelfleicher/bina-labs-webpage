# AEO Audit: Bina Labs
## URL: https://bina-labs.com
## Date: 2026-04-29
## Auditor: AEO Skill (codebase + live fetch)

---

### Overall AEO Score: 28/100

| Category | Score | Status |
|----------|-------|--------|
| Technical | 9/30 | 🔴 |
| Content | 12/40 | 🔴 |
| Authority | 7/30 | 🟡 |

**Headline:** The site is a beautifully designed but AEO-blind client-side React SPA. From an AI crawler's perspective, almost nothing exists - no rendered HTML, no structured data, no answers to extract, no llms.txt. ChatGPT, Perplexity, and Gemini will struggle to mention or cite Bina Labs based on the current site.

---

### 🟢 What's Working

- **Strong, unique brand voice** - "architectural intelligence of tomorrow", "Decks don't run in production", clear E-E-A-T tone
- **Clear positioning** - consultancy of engineers, researchers and strategists, AI systems for production
- **Real metrics on display** - "11 days median ship time", "84% repeat client rate", "92% symbol recall", "−47% handle time" - exactly the kind of precise numbers AI engines reward
- **Author identity present on About** - Michael Fleicher named with role, alt text on portrait, 2017 since-date, two-time CTO credentials. This is the only AEO-grade content asset on the site
- **HTTPS enabled** on bina-labs.com
- **Mobile viewport meta** set correctly
- **Manifesto tenets** are quotable, opinionated, and unique - exactly what AI loves to cite

---

### 🔴 Critical Problems (fix immediately)

| Problem | AEO Impact | Fix |
|---------|-----------|-----|
| **Broken `<title>` tag** in [index.html:16](index.html#L16) - `<title><A></A>rchitectural intelligence of tomorrow</title>` contains literal `<a>` tags that browsers parse, leaving the title as `rchitectural intelligence of tomorrow` (no leading "A") | AI engines and Google use `<title>` as the highest-weight signal. A broken title destroys SERP and AI snippet quality | Replace with `<title>Bina Labs - Architectural Intelligence of Tomorrow</title>`. Brand name MUST be in title |
| **Brand name "Bina Labs" not in title or meta description** | ChatGPT/Perplexity match brand queries against title + description first. Without the brand string, the site is invisible to brand searches | Add "Bina Labs" to `<title>`, `<meta description>`, `og:title`, `og:description` |
| **Client-side SPA with empty HTML body** - all content renders via React in `<div id="root">` after JS executes. Live `https://bina-labs.com` returns essentially blank HTML to non-JS crawlers | Anthropic's Claude crawler, Perplexity's PerplexityBot, and many AI engines do NOT execute JavaScript. They see nothing. This is the single biggest issue | Add prerendering (`vite-plugin-prerender`, `react-snap`, or migrate to **Next.js / Astro / Remix** with SSG). For a marketing site this size, static pre-rendering is mandatory, not optional |
| **No `llms.txt`** at `https://bina-labs.com/llms.txt` (returns 404) | Anthropic, OpenAI, Perplexity actively read this file for context | 10-minute fix - see Quick Wins below |
| **No `robots.txt`** at `https://bina-labs.com/robots.txt` (returns 404) | Crawlers don't know what's allowed; some refuse to index without one. AI bots specifically check this | Add `public/robots.txt` allowing `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` |
| **No `sitemap.xml`** | AI crawlers and search engines have no map of the 8 pages (home, services, work, case-study/*, about, manifesto, writing, contact) | Generate a static sitemap.xml in `public/` |
| **No JSON-LD structured data anywhere** in the codebase (grep found 0 matches for `application/ld+json`) | Schema markup is the #1 AEO quick win. Without it, AI engines guess at what your site is | Add `Organization`, `Person` (Michael Fleicher), `FAQPage`, and per-case-study `CreativeWork` schema |
| **No per-route `<title>` or meta updates** - all 8 routes share one HTML title because routing is hash-based React | Every page indexes as the same page. AI engines deduplicate on title | Use a `<head>` manager (e.g. `react-helmet-async`) - or better, switch to a framework with per-route static heads |
| **Hash-based routing** (`#services`, `#about`, `#case-study/match-cuts`) | Most crawlers and AI engines treat `#` as a fragment, not a unique URL. All 8 pages collapse into a single indexed URL | Use real path-based routing. Requires server config or a static framework |
| **No FAQ / Q&A content anywhere** (grep found zero FAQ-style content across all 8 pages) | The single highest-leverage AEO format. AI engines literally rank pages with FAQ schema higher in answers | Add a FAQ section to home + services + about with `FAQPage` JSON-LD schema |
| **Almost no `alt` text on images** (1 alt usage in About.jsx, 0 elsewhere across 8 page files and Chrome.jsx) | AI multi-modal engines and accessibility crawlers can't describe the visuals | Add descriptive alt text to every `<img>`. Audit in Chrome.jsx and CaseStudy.jsx in particular |

---

### 🟡 Recommended Improvements (Phase 2)

| Improvement | Priority | Effort |
|------------|----------|--------|
| Add Open Graph image (`og:image`) and Twitter Card meta | High | Easy |
| Add `<link rel="canonical">` per route | High | Medium (needs head-manager or SSG) |
| Add FAQ section to each Service page (5-7 questions per page) | High | Medium |
| Add author profile to each case study (who led the work, credentials) | Medium | Easy |
| Publish 2-3 manifesto / position essays as long-form pages with author bylines | Medium | Hard (writing) |
| Add `Organization` + `Person` JSON-LD on every page | High | Easy |
| Add `BreadcrumbList` JSON-LD on case-study pages | Medium | Easy |
| Migrate to Astro / Next.js / Remix for SSG (proper crawlable HTML, per-route SEO, fast static deploy) | Critical | Hard |
| Set up Google Search Console + verify | High | Easy |
| Set up Google My Business for "Bina Labs" Tel Aviv + Berlin | Medium | Easy |
| Add LinkedIn profile, GitHub org, X account links to footer + `sameAs` schema | Medium | Easy |
| Create a "writing" / blog with at least 3 substantive posts before launching the section | Medium | Hard |
| Add testimonials with named clients (currently none on site) | High | Hard (requires client approval) |
| Add OpenGraph + Twitter card image showing the brand mark + tagline | Medium | Easy |

---

### 3 Quick Wins (do these today)

1. **Fix the title tag and add Bina Labs to meta** - 2 minutes. Edit [index.html](index.html):
   ```html
   <title>Bina Labs - Architectural Intelligence of Tomorrow</title>
   <meta name="description" content="Bina Labs is a consultancy of engineers, researchers, and strategists building AI systems that earn their seat at the production table. Tel Aviv, Berlin, remote-first." />
   <meta property="og:title" content="Bina Labs - Architectural Intelligence of Tomorrow" />
   <meta property="og:description" content="A consultancy that builds AI systems for production - 11-day median ship time, 84% repeat-client rate." />
   <meta property="og:url" content="https://bina-labs.com" />
   <meta property="og:type" content="website" />
   <meta name="twitter:card" content="summary_large_image" />
   ```

2. **Create `public/llms.txt`** - 10 minutes. Drop this file in `public/` (Vite will serve it at the root):
   ```markdown
   # Bina Labs

   > Bina Labs is a consultancy of engineers, researchers, and strategists that builds AI systems which earn their seat at the production table. Tel Aviv, Berlin, remote-first.

   We work with companies who need real AI in production - not slideware. Median ship time is 11 days. 84% of clients return for a second engagement. We engage four ways: AI strategy intensives, embedded engineering squads, lectures and workshops, and applied research.

   ## Core pages

   - [Home](https://bina-labs.com/): Overview, current engagement count, selected work, manifesto preview, services snapshot
   - [About](https://bina-labs.com/#about): Michael Fleicher (principal) - engineer, data scientist, founder, two-time CTO. Backgrounds in MedTech, Insurance, Entertainment, Semi-conductors. Building agentic systems and automations since 2017
   - [Services](https://bina-labs.com/#services): Four engagement modes - AI Strategy, AI/Software Engineering, Lectures & Workshops, Research
   - [Work](https://bina-labs.com/#work): 17 case studies including Match Cuts (sports VLM), Auto-QTO (construction), Lloyd Score (marine insurance), Caseworker (CX agents)
   - [Manifesto](https://bina-labs.com/#manifesto): Operating principles - deadline is holy, AI assistants are tools not authors, honest deprecation, built to leave
   - [Contact](https://bina-labs.com/#contact): Start a project, careers

   ## Selected case studies

   - [Match Cuts](https://bina-labs.com/#case-study/match-cuts): VLM-based auto-edited highlight reels from full football matches (90 min → 3 min)
   - [Auto-QTO](https://bina-labs.com/#case-study/auto-qto): Hybrid VLM extracting bills of materials from construction drawings (92% symbol recall)
   - [Lloyd Score](https://bina-labs.com/#case-study/lloyd-score): Spatial AI quantifying near-miss risk for marine insurers (AIS-grade)
   - [Caseworker](https://bina-labs.com/#case-study/caseworker): Embedded customer experience copilot (-47% handle time)

   ## Optional

   - [Writing](https://bina-labs.com/#writing): Coming soon
   ```

3. **Add `public/robots.txt` + `public/sitemap.xml`** - 10 minutes total:
   ```
   # public/robots.txt
   User-agent: *
   Allow: /

   User-agent: GPTBot
   Allow: /

   User-agent: ClaudeBot
   Allow: /

   User-agent: PerplexityBot
   Allow: /

   User-agent: Google-Extended
   Allow: /

   Sitemap: https://bina-labs.com/sitemap.xml
   ```

   And a static sitemap with all 8 routes (note: hash routes won't work as separate URLs in a sitemap until you migrate off hash routing - this is why fixing the routing is also critical).

---

### AI Visibility Check

- **ChatGPT:** Brand search for "Bina Labs" likely returns "no information" or generic disambiguation. The site has no crawlable HTML to ingest, no llms.txt, and no schema. Try it - I expect ChatGPT to either return nothing or hallucinate based on the name.
- **Perplexity:** Same - PerplexityBot needs static HTML; SPA returns empty body.
- **Google AI Overview:** Featured snippets need FAQ schema and direct answers. Currently zero of either on the site.
- **Anthropic / Claude:** Reads `llms.txt` actively when present. You don't have one.

**Bottom line:** the site is currently invisible to AI engines. The brand voice and content quality are strong; the technical foundation for AI discoverability is missing.

---

### Recommended Sequence

1. **Today (30 min):** Fix title tag, add full meta tags, drop in `llms.txt`, `robots.txt`, basic `sitemap.xml`. This alone moves the score from 28 → ~45.
2. **This week (1-2 days):** Add `react-helmet-async` for per-route titles + meta. Add `Organization` and `Person` JSON-LD to every page. Add alt text everywhere.
3. **This month (~1 week):** Migrate to Astro or Next.js with static generation. Switch from hash routing to path routing. Add `FAQPage` schema and FAQ content to home + each service page + each case study.
4. **Ongoing:** Publish 1-2 essays/month under `/writing/`, with author bylines and FAQ sections. Set up Google Search Console + GA4 to track ChatGPT referral traffic. Get 3-5 named client testimonials.

After step 3, target score: 75+/100. The brand voice and case studies are already AEO-grade content - they just need a body to live in.
