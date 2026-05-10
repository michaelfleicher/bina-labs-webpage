# AEO Audit: Bina Labs
## URL: https://bina-labs.com
## Date: 2026-05-10

---

### Overall AEO Score: 81/100

| Category | Score | Status |
|----------|-------|--------|
| Technical | 28/30 | 🟢 |
| Content | 37/40 | 🟢 |
| Authority | 16/30 | 🟡 |

This is a strong AEO baseline, well above what most B2B consultancy sites ship. The technical and content layers are excellent. The gap is authority signals outside the site (citations, reviews, PR), which is the typical weak spot for boutique B2B firms.

---

### 🟢 What's working well

- **`llms.txt` exists at root** and is well-structured: H1, blockquote summary, H2 sections with annotated link lists, Optional section. Anthropic, OpenAI, and Perplexity will read this verbatim.
- **`robots.txt` explicitly allow-lists every major AI crawler** (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended). Most sites accidentally block these.
- **Schema saturation is exceptional**. Every audited page carries multiple JSON-LD blocks:
  - `Organization` with founder, areaServed, email
  - `Person` (Michael Fleicher) with `knowsAbout`, `sameAs` LinkedIn, `hasOccupation`, `address`
  - `FAQPage` on home, about, services, and every case study (9 / 5 / 7 / 6 Q&As respectively)
  - `Service` with `priceCurrency` and explicit price offers - rare and AI-friendly
  - `CreativeWork` on case studies with author, datePublished, mentions
  - `BreadcrumbList` on inner pages
- **Pricing transparency in FAQ + Schema**. Direct numeric answers ("Fixed-scope sprints from $10k", "$20k per month", "$7k per month") are exactly what AI engines prefer to cite.
- **First-person voice in FAQ answers** ("we embed", "we use", "we have shipped"). Reads conversational, not corporate.
- **HTTPS, HSTS, canonical URLs, mobile viewport, OG/Twitter cards** all present and correct.
- **Vercel CDN with cache hits** - fast TTFB.

---

### 🔴 Critical issues (fix immediately)

| Issue | Impact | Fix |
|-------|--------|-----|
| **`llms.txt` lists 4 case studies that don't have dedicated pages** (Field Atlas, Telemetra, AskTable, Reachpoint - all link to `/work` index, not a real URL). | AI engines following the links land on the same generic page and may downgrade trust in the file. | Either create dedicated `/work/<slug>` pages for those four, or remove them from `llms.txt` until they exist. |
| **`/sitemap.xml` returns 404** (only `/sitemap-index.xml` works). | Some legacy crawlers and several AI bot variants probe the literal `/sitemap.xml` path first. | Add a redirect: `/sitemap.xml` → `/sitemap-index.xml` in `vercel.json`, or generate both. |
| **No reviews, testimonials, or named-client quotes visible in HTML or schema** (only client names appear in case-study prose). | AI engines weigh `Review` / `AggregateRating` schema heavily for trust. Text-only mentions are weak signals. | Add 3-5 named client testimonials with `Review` schema on `/about` or `/work`. Even short LinkedIn quotes attributed by name + role + company. |

---

### 🟡 Recommended improvements (phase 2)

| Improvement | Priority | Effort |
|-------------|----------|--------|
| **H1 on homepage is brand-poetic, not service-explicit.** "Architectural intelligence of tomorrow" reads beautifully but contains zero service keywords. AI engines parse the H1 as the highest-weight signal for "what is this site". | High | Easy |
| Add a visible H2 directly under the H1: e.g. "AI consulting and engineering studio building production AI systems for founders and engineering teams - Tel Aviv, Berlin, remote." | High | Easy |
| **No `Writing` content yet** - `llms.txt` flags it as coming soon. Until you publish, AI engines have nothing recent to cite from you besides case studies. | High | Hard |
| Publish 2-3 high-substance essays (1500+ words each) on topics where you want to be cited: "How to scope an AI pilot", "When AI projects should die", "Evals before agents". Each with `Article` + `FAQPage` schema. | High | Hard |
| **Case-study coverage is uneven**. 4 case studies have full pages with rich `CreativeWork` + FAQ schema. 8+ others are name-only on `/work`. AI engines will only cite the 4 with real pages. | Medium | Medium |
| Build out the remaining case studies to the same standard, even if shorter (300-500 words + 4 FAQ Q&As is enough). | Medium | Medium |
| **No `sameAs` for the company itself.** The `Person` schema has LinkedIn for Michael, but the `Organization` schema has no `sameAs` array. | Medium | Easy |
| Add `sameAs` to Organization JSON-LD with: company LinkedIn, GitHub org, X/Twitter, Crunchbase. Even one or two raises citation confidence. | Medium | Easy |
| **No Google Business Profile** (assumed, since Bina Labs is fully digital and remote-first). | Low | Easy |
| Create a GBP for the Tel Aviv address listed in schema. It's free, and AI engines pull citations from it for local-intent queries ("AI consultancy Tel Aviv"). | Low | Easy |
| **`og:image`** uses a single default for every page. Per-page social images would lift CTR from AI-engine answer cards. | Low | Medium |
| Generate per-page OG images (case study hero, services thumbnail, manifesto card). | Low | Medium |
| **No `datePublished` / `dateModified`** on most pages outside case studies. AI engines penalize undated content as potentially stale. | Medium | Easy |
| Add `dateModified` to the FAQPage and Service schemas on home / services / about. |  |  |

---

### 3 first steps (Quick Wins, high ROI)

1. **Fix the `llms.txt` ↔ sitemap mismatch (15 min).** Either delete the 4 phantom case studies from `llms.txt` lines 21-24, or stub real pages at those URLs. AI engines test link integrity from `llms.txt` and a 4-out-of-8 broken hit rate is a trust hit. *Expected impact: +1-2 points on the file's perceived authority within weeks.*
2. **Add a service-keyword H2 directly under the homepage H1 (10 min).** Right now the page tells AI "Architectural intelligence of tomorrow" - poetic but unparseable. Add `<h2>AI consulting and engineering studio. Production-grade AI systems for founders and engineering teams. Tel Aviv, Berlin, remote-first.</h2>`. *Expected impact: ChatGPT/Perplexity start matching you on "AI consulting Tel Aviv" / "production AI engineering studio" queries within 2-4 weeks of next crawl.*
3. **Add `Review` schema with 3 named client quotes (1-2 hrs).** Pull the strongest LinkedIn testimonials you have. Each `Review` needs `author.name`, `author.jobTitle`, `reviewBody`, `itemReviewed: Bina Labs`. This is the single biggest authority gap. *Expected impact: closes the largest delta in your audit (Authority 16/30 → 22-24/30) and gives AI engines explicit social-proof to cite.*

---

### AI Visibility Check (manual, not automated here)

Run these prompts in ChatGPT, Perplexity, and Claude with web search enabled, and check whether Bina Labs / Michael Fleicher appear:

- "Best AI consulting firms in Tel Aviv"
- "Production AI engineering consultancy Israel"
- "Embedded AI engineering squad for hire"
- "Fractional CTO AI Berlin"
- "AI strategy 4-week intensive"
- "Who is Michael Fleicher?"
- "Where can I get an AI pilot scoped in 4 weeks?"

Track in a simple table: query → engine → mentioned (yes/no) → cited with link (yes/no) → context. Re-run monthly. The site's schema and llms.txt are tuned to compete on these exact phrases - the question is whether external authority signals are enough yet.

For referral tracking, set up a Google Analytics segment for `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `claude.ai`, `chat.openai.com` as referral sources. That number is the only honest GEO measurement.

---

### Score breakdown

**Technical (28/30)**
- SSL + HSTS + HTTPS ✓
- Mobile viewport ✓
- Page weight reasonable (61KB HTML, fonts via preconnect) ✓
- Clean URLs (`cleanUrls: true`, `trailingSlash: false`) ✓
- Sitemap index ✓ (-1: literal `/sitemap.xml` 404)
- robots.txt allows all AI crawlers ✓ (excellent)
- llms.txt present and well-structured ✓ (-1: phantom links)
- Canonical tags on every page ✓

**Content (37/40)**
- H1 present (-2: brand-only, not service-explicit)
- About page rich with credentials and Person schema ✓
- Author profiles via Person schema on case studies ✓
- FAQ on every key page ✓ (best-in-class)
- FAQ schema markup ✓ (best-in-class)
- Direct-answer style in FAQ ✓
- Short paragraphs / bullets / tables ✓
- First-person voice ✓
- No images on home, so alt-text N/A; OG images present ✓

**Authority (16/30)**
- No GMB (-3)
- No on-site reviews / testimonials with schema (-5)
- Case studies ✓ but only 4/12+ have full pages (-3)
- Backlinks unknown, assumed neutral
- No PR articles linked from site (-2)
- No `sameAs` array on Organization (-1)
- Schema-level authority signals (Person, Org, Service, knowsAbout, areaServed) ✓

---

### What I couldn't measure without external access

- Backlink profile (needs Ahrefs / SEMrush)
- Actual citation rates in ChatGPT / Perplexity / Gemini answers (needs manual prompting)
- Google Search Console position data
- Google Analytics referral traffic from AI engines
- Core Web Vitals from real-user data (the page weight is fine, but CrUX would confirm)

If you want, I can run mode 2 (`/aeo plan`) to turn this into a phased roadmap with effort estimates, or mode 3 (`/aeo content`) to draft the 2-3 essays you'd need on `/writing` to start earning AI citations.
