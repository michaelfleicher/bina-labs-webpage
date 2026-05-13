# AEO Skill - Mode: Audit

> Loaded on-demand by the AEO skill router when audit mode is detected.
> Read alongside: `references/knowledge-base.md`, `references/tools.md`, and the relevant `references/markets/<country>.md` for the target market.

## MODE 1: AUDIT (ביקורת AEO)

### Step 1: Get the URL + Market

If no URL provided, ask. **Always confirm market/country** (default to detected language, but verify):
```
מה כתובת האתר ובאיזה שוק העסק פועל? (ישראל/ארה"ב/אירופה/גלובלי)
```

### Step 2: Operator Type

Identify the business operator type - this changes which checks weight heavily:
- **Local service** (plumber, lawyer, clinic) -> GMB/local directories critical
- **E-commerce** -> Product/Offer schema, agentic commerce, review platforms
- **SaaS / B2B** -> LinkedIn, G2/Capterra/Trustpilot, technical docs, llms-full.txt
- **Professional services** (consulting, agency) -> Author entity, PR, Wikidata
- **Content publisher / media** -> Article schema, freshness, syndication

### Step 3: Check the Site

Use Playwright or web fetch. Run the checks below.

**Technical AEO Checklist (2026):**
- [ ] **SSL (HTTPS)** - secure site
- [ ] **Mobile responsive** - viewport meta, mobile-first
- [ ] **Page speed** - Core Web Vitals (LCP, INP, CLS)
- [ ] **JavaScript rendering matrix** - Verify content visible WITHOUT JS execution. Only Googlebot/Gemini/AIO/AI Mode execute JS. **GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot do NOT execute JS.** Client-side SPAs are invisible to ChatGPT/Claude/Perplexity. SSR/SSG/pre-rendering is mandatory. JSON-LD must be server-rendered, not JS-injected.
- [ ] **Clean URL structure**
- [ ] **Sitemap.xml** exists
- [ ] **Robots.txt bot access verification** - explicitly test which bots are allowed. Three categories must be controlled independently:
  - **Training crawlers**: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, Bytespider (Bytespider often spoofs UA - block at WAF if blocking training)
  - **Retrieval crawlers** (must be allowed for AEO): OAI-SearchBot, Claude-SearchBot, PerplexityBot, bingbot, Googlebot, Applebot, DuckAssistBot
  - **User-triggered fetchers** (must be allowed): ChatGPT-User, Claude-User, Perplexity-User, MistralAI-User
  - Common own-goal: SEO plugins blocking GPTBot/ClaudeBot by default
- [ ] **Cloudflare AI Crawl Control** - since July 1 2025 Cloudflare blocks AI crawlers by default for new domains. **Many sites unintentionally block themselves.** Check dashboard.
- [ ] **Server log analysis** - GA4 cannot see AI bot traffic (no JS). Use Screaming Frog Log File Analyser, Cloudflare Radar AI bot dashboard (free), Ahrefs Brand Radar free tier. Benchmark medians: GPTBot ~4,200 hits/day, ClaudeBot ~1,800, PerplexityBot ~980.
- [ ] **ai.txt** (optional, EU AI Act signal) - purpose-based crawler controls (No-Training, No-Inference, Allow-RAG)
- [ ] **TDMRep headers** (EU sites only) - Text and Data Mining Reservation Protocol; legally binding under EU AI Act
- [ ] **llms.txt** (optional hedge, not a Quick Win) - 5 independent studies show no measurable AI citation impact (Mueller, SE Ranking 300K, OtterlyAI 0.1% of bot hits, ALLMO 94K, Zyppy 2/10). **Implement only if:** (a) you publish dev docs AND want coding-agent traffic (Cursor/Copilot/Claude Code), OR (b) CMS auto-generates at zero marginal cost. Check format only - don't penalize absence.

**Content AEO Checklist (2026):**
- [ ] **H1 on homepage** - clear, includes name + service
- [ ] **About page** - detailed, with credentials, byline, photo
- [ ] **Author Profile** on every content page (name, role, credentials, photo, sameAs to LinkedIn/Wikidata)
- [ ] **Article schema with `dateModified`** - 50% of AI citations come from content <=13 weeks old (Seer); Perplexity bias toward recency
- [ ] **Person + Organization schema** with `sameAs` to LinkedIn, Wikidata Q-item, Crunchbase, ORCID
- [ ] **Answer-first / BLUF / inverted pyramid** - 2-3 sentence factual answer in first 100 words of every section. Answer-first paragraphs cited 67% more.
- [ ] **Question-format H2/H3** - cited content 2x more likely to contain "?"; 78.4% of question-citations originate from headings
- [ ] **Self-contained sentences** - each sentence must hold meaning if extracted alone; replace pronouns with explicit nouns
- [ ] **Statistic density** - 1 hyperlinked stat every 150-200 words (Princeton: +41% visibility)
- [ ] **Attributed expert quotes** in `<blockquote>` (Princeton: +28%)
- [ ] **External authoritative citations** (.gov/.edu/peer-reviewed) (Princeton: +30-40%)
- [ ] **13+ list sections / tables** - ChatGPT-cited pages avg 13.75 lists vs <1 for Google top results; 78% of AI answers use lists
- [ ] **FAQPage schema** - keep as AI-extraction signal (40-60 word answers). **Note**: FAQ rich results in Google Search ended May 7, 2026; this is now extraction-only, not "#1 Quick Win"
- [ ] **Alt text** - descriptive, contextual, <125 chars, no "image of". **GPT-4o, Gemini Vision, Claude now verify alt against image content** - mismatches are actively harmful.
- [ ] **Reading level** Flesch-Kincaid Grade 6-8
- [ ] **Avoid AI fingerprints** - "delve into", "dives into", "comprehensive", "in today's fast-paced world"

**Authority AEO Checklist (2026):**
- [ ] **Google Business Profile** (GBP, formerly GMB) - full, reviews, posts. WhatsApp Business integration for IL.
- [ ] **Reviews on site** - displayed with Review/AggregateRating schema
- [ ] **Brand mentions vs backlinks** - Ahrefs 75K-brand study: branded web mentions r=0.664 vs backlinks r=0.218 (3x stronger). **Brand-to-Links Ratio (BLR) target >1.0.**
- [ ] **Wikidata Q-item** (achievable; do BEFORE Wikipedia) - infobox, sameAs links
- [ ] **Wikipedia article** (downstream of Wikidata + 2-3 independent editorial features)
- [ ] **G2 / Capterra / Trustpilot** active profile (SaaS/B2B) - each 10% review increase ~+2% citation lift; brands with active profiles 3x more cited in ChatGPT
- [ ] **Reddit presence** in target subreddits (Perplexity up to 46.5%; ChatGPT volatile, was 60% -> 10% in Sept 2025; Gemini barely cites at 0.1%)
- [ ] **LinkedIn** company + executive profiles (Copilot 14.3%, B2B critical)
- [ ] **PR / digital pitch** - HARO replacements: Qwoted, Featured.com, Help a B2B Writer, Source of Sources, #JournoRequest on X/BlueSky (HARO shut Dec 9 2024)
- [ ] **Directory listings** - country-specific (see Knowledge Base; for IL: Yad2 + Zap are ChatGPT citation surfaces, not just SEO)
- [ ] **DA threshold** - DA 40+ domains cited 6x more in Perplexity

**AI Visibility Check (the actual outcome measurement):**
- Run 10 target queries across **ChatGPT, Perplexity, Google AIO, Claude, Copilot, Gemini** (5-10x per query for stability)
- Calculate **Share of Model Voice (SOMV)**: `(brand mentions / total prompts) x 100`
- Check **server logs** for bot visits (not GA4)
- Check **GA4 AI Traffic channel** (see Mode 4 setup)
- Check Google Search Console for AI Overview impressions
- Check Cloudflare Radar AI bot dashboard

### Step 4: Generate Audit Report

```markdown
# ביקורת AEO: [site name]
## URL: [url]
## שוק: [country/market]
## סוג מפעיל: [local service / e-com / SaaS / pro services / publisher]
## תאריך: [YYYY-MM-DD]

---

### ציון AEO כולל: [X/100]

| קטגוריה | ציון | סטטוס |
|----------|------|--------|
| טכני | [X/25] | [🟢/🟡/🔴] |
| תוכן | [X/30] | [🟢/🟡/🔴] |
| סמכותיות | [X/25] | [🟢/🟡/🔴] |
| נראות AI (SOMV + ציטוטים) | [X/20] | [🟢/🟡/🔴] |

---

### 🟢 מה עובד טוב
- [Specific positive finding with evidence]

### 🔴 בעיות קריטיות (לטפל מיד)
| בעיה | השפעה | פתרון |
|------|--------|--------|
| [issue] | [impact on AEO with citation] | [specific fix] |

### 🟡 שיפורים מומלצים (שלב שני)
| שיפור | עדיפות | מאמץ |
|--------|--------|------|

---

### 3 הצעדים הראשונים (Quick Wins מבוססי-ראיות 2026)
1. **[Quick win 1]** - [what to do, expected impact + source]
2. **[Quick win 2]** - [what to do, expected impact + source]
3. **[Quick win 3]** - [what to do, expected impact + source]

### בדיקת נראות ב-AI
| Engine | SOMV | מופיע? | בהקשר |
|--------|------|--------|--------|
| ChatGPT | X% | y/n | ... |
| Perplexity | X% | y/n | ... |
| Google AIO | X% | y/n | ... |
| Claude | X% | y/n | ... |
| Copilot | X% | y/n | ... |
| Gemini | X% | y/n | ... |

### בדיקות לפי שוק
[Country-specific findings - e.g., for IL: Yad2/Zap presence, Hebrew schema, accessibility regulation, GBP review collection post-Oct-2023 limitations]
```

### Step 5: Save

Save to: `outputs/aeo/[site-slug]_audit_[YYYY-MM-DD].md` (slug: lowercase, ascii, hyphens). Create `outputs/aeo/` if missing.
