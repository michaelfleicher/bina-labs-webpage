# AEO Skill - Knowledge Base

> Loaded on-demand alongside any mode file. Contains pipelines, per-engine citation landscape, KPIs, schema priority, E-E-A-T, and quick wins. Engine behavior shifts monthly - treat numbers as time-stamped to the SKILL.md cutoff.

## The Two AI Pipelines (understand before recommending)

| Pipeline | Engines | What it rewards | Implication |
|---|---|---|---|
| **Authority-driven (Google AIO + AI Mode)** | Google AIO, AI Mode (Gemini 3 since Jan 27 2026) | Top-10 organic ranking, domain authority, E-E-A-T, YouTube (#1 cited at 18.2%) | Classic SEO is the gatekeeper |
| **Real-time RAG** | ChatGPT (Bing), Perplexity, Claude (Brave), Copilot (Bing+LinkedIn) | Paragraph-level chunks, structure, answer capsules, recency, brand mentions | Structure + freshness + per-chunk extractability |

Only **11% of cited domains appear across multiple AI platforms** - per-engine targeting is meaningful.

## Per-Engine Citation Landscape

| Engine | Backend | Top citation sources | Notes |
|---|---|---|---|
| ChatGPT | Bing | Wikipedia ~13-26%, Reddit ~12%, top-10 domains = 46% | 87.4% of all AI referral traffic. Free tier hides referrer (40-60% misclassified as Direct) |
| Google AIO | Gemini 3 | YouTube 18.2%, then top-10 organic | Appears in 16-48% of queries |
| Google AI Mode | Gemini 3 | Wikipedia 28.9% | 4x longer responses, only 3% lack citations |
| Perplexity | Hybrid (BM25 + dense) | Reddit up to 46.5%, 7+ citations/response | Heavy DA weight; DA 40+ cited 6x more |
| Claude (web) | Brave Search | RTINGS, TechRadar dominant | Rarely Reddit/YouTube |
| Copilot | Bing + LinkedIn | LinkedIn 14.3%, B2B-heavy | Strong B2B/SaaS surface |
| Meta AI | Licensed publishers | CNN, Fox, People Inc | Licensing-gated |

**Volatility caveat:** ChatGPT's Reddit share collapsed 60% -> 10% in two weeks Sept 2025. Re-verify quarterly.

### AEO vs GEO vs SEO
| | SEO | AEO | GEO |
|---|-----|-----|-----|
| **מטרה** | דירוג בגוגל | הופעה כתשובת AI (snippets, AIO, voice) | ציטוט + קישור מ-AI generative engines |
| **מדידה** | מיקום | אזכורים ב-AIO/voice/snippets | SOMV + AI referral + citations |
| **מיקוד** | מילות מפתח | שאלות + structured answers | סמכותיות + brand mentions + E-E-A-T |
| **תוכן** | ארוך, מקיף | תשובה ישירה בהתחלה | answer capsules + stats + entity density |

### The AEO Pyramid (סדר עדיפויות)
1. **בסיס - SEO + רינדור צד שרת:** SSL, מהירות, מובייל, ניווט, sitemap, **SSR/SSG** (קריטי!), bot access
2. **שכבה 2 - מבנה תוכן:** H1 ברור, question-format H2s, Answer Capsules, FAQPage, Person/Article/Org schema
3. **שכבה 3 - סמכותיות + מותג:** E-E-A-T, GBP, ביקורות, **brand mentions** (3x backlinks), Wikidata, YouTube, G2/Reddit/LinkedIn
4. **שכבה 4 - מעקב + רענון:** AI Traffic in GA4, server logs, SOMV, 13-week refresh, incident response

### KPIs Dashboard (2026)

| KPI | מה זה מודד | יעד / Benchmark |
|---|---|---|
| **Share of Model Voice (SOMV)** | % פרומפטים שמזכירים את המותג | מדידה ראשונית + מגמה חודשית |
| **AI Citation Frequency** per topical query | ציטוטים נטו | 5-10x repetition per prompt |
| **Answer Inclusion Rate** | % מהשאלות בהן המותג מופיע (גם בלי קישור) | track separately per engine |
| **AI referral traffic (GA4)** | sessions מ-AI channel | Industry IT 2.8%, Consumer Staples 1.9% (Conductor 2026) |
| **AI conv premium** | conv rate AI vs organic | AI 14.2% vs organic 2.8% (Ahrefs 5.1x premium) |
| **Bot visits (server logs)** | crawler ground truth | GPTBot ~4,200/d, ClaudeBot ~1,800, PerplexityBot ~980 |
| **Brand-to-Links Ratio (BLR)** | brand mentions / backlinks | >1.0 |
| **Q&A Schema coverage** | % עמודים עם FAQPage | high % on service pages |
| **Author Profile coverage** | % עמודים עם byline + Person schema | 100% on content |
| **Content refresh velocity** | % עמודים עודכנו ב-13 שבועות אחרונים | >50% of top-cited |
| **YouTube paired content** | % cornerstone articles with paired video | aim 100% |

### Engine-Specific Citation Strategy Summary
- **ChatGPT (87.4% of all AI referral traffic)**: Bing-ranked + Wikipedia + Reddit + top-10 domains
- **Google AIO / AI Mode**: top-10 organic + YouTube + Wikipedia
- **Perplexity**: Reddit + DA 40+ + recency + structured chunks
- **Claude (web)**: Brave Search + tech publishers (RTINGS, TechRadar)
- **Copilot**: Bing + LinkedIn (B2B)
- **Meta AI**: licensed publishers only

### Q&A Formula (9 Questions, 40-60 words each)
- **3 ייחודיות:** What makes THIS business special
- **3 נישתיות:** What customers commonly ask in this industry
- **3 חיפוש:** Based on actual search queries (GSC + AI prompt mining + keyword research)

### Schema Priority Table (2026)
| Priority | Schema | Use case |
|---|---|---|
| **Critical** | Organization + sameAs + contactPoint | Every site |
| **Critical** | Person + sameAs (LinkedIn + Wikidata Q-item + Crunchbase) + knowsAbout + hasCredential | Every author/expert |
| **Critical** | Article/NewsArticle with author->Person @id closed-loop + dateModified | Every content page |
| **Critical** | Product + Offer (price/availability/GTIN) | E-commerce |
| **Critical** | VideoObject | Every YouTube-paired page |
| **High** | LocalBusiness + geo + areaServed | Local operators |
| **High** | Review / AggregateRating | Customer-facing |
| **Medium** | BreadcrumbList | Navigation |
| **Medium** | FAQPage / QAPage | AI extraction signal (no SERP feature since May 7 2026) |
| **Medium** | HowTo | Step-by-step content |

**Caveat:** Ahrefs May 11 2026 study (1,885 pages) found adding JSON-LD produced AIO -4.6% (significant decline), AI Mode +2.4% (noise), ChatGPT +2.2% (noise). **Schema is infrastructure (entity disambiguation + closed-loop graphs), not a citation lever.**

### Content Structure for AI
```
[Answer Capsule - 40-60 words, standalone, definitive language] <- AI grabs this
[Expansion with question-format H2s + lists + tables]
[Stats every 150-200 words, .gov/.edu citations]
[Attributed expert quote in blockquote]
[Q&A section with FAQPage Schema, 40-60 word answers]
[Author Profile + Person schema]
```

### E-E-A-T Checklist (with 2025 QRG updates)
- **Experience:** Show real work - case studies, portfolio, years
- **Expertise:** Credentials, certifications, hasCredential schema
- **Authoritativeness:** Brand mentions (r=0.664) > backlinks (r=0.218), PR, Wikidata, Wikipedia
- **Trustworthiness:** SSL, clear policies, real contact info, testimonials, transparent pricing

**Google QRG updates relevant:**
- Jan 23, 2025 - formal generative AI definition; AI content judged by same quality criteria; "Lowest" rating for scaled content abuse
- Sept 11, 2025 - evaluation criteria added for AI Overviews; YMYL expanded to government/elections/civic trust

### Quick Win Tricks (Evidence-Based 2026)
- **Question-format H2s + Answer Capsules** - the new #1 quick win (replaces FAQ Schema framing)
- **Person + Wikidata Q-item** - achievable in 1 week, foundation for all E-E-A-T
- **SSR/SSG verification** - if SPA, this is the single highest-impact fix
- **Bot access audit** (robots.txt + Cloudflare) - 30 minutes, often a critical own-goal
- **Add hyperlinked stats every 150-200 words** - +41% citations (Princeton)
- **Add 1 attributed expert blockquote per article** - +28%
- **Cite 1-2 .gov/.edu sources per article** - +30-40%
- **13-week substantive refresh + visible "Updated"** (NOT republish-button - that's now spam signal)
- **YouTube video paired with cornerstone article + on-page transcript** - YouTube = #1 AIO citation source
- **Precise pricing** in content (₪4,850 not "around 5K") - AI engines reward transparency

### Demoted from previous Quick Wins
- **llms.txt** - 5 studies show no AI citation impact; keep only as optional hedge or for IDE-coding-agent traffic
- **FAQ Schema as "#1 Quick Win"** - FAQ rich results died May 7 2026; FAQPage is now AI-extraction signal only
- **Republish trick** - date-only edits flagged as spam by Google HCU Dec 2025
