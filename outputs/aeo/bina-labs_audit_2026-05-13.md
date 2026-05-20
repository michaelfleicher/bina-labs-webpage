# AEO Audit: Bina Labs
## URL: https://bina-labs.com (note: `www.bina-labs.com` has no DNS - see Critical #1)
## Market: Global B2B, HQ Tel Aviv / Berlin / remote
## Operator type: Professional services (AI consulting + engineering studio)
## Date: 2026-05-13

---

## Overall AEO score: 62 / 100

| Category | Score | Status |
|----------|-------|--------|
| Technical | 21 / 25 | 🟢 |
| Content | 21 / 30 | 🟡 |
| Authority | 12 / 25 | 🔴 |
| AI Visibility (entity grounding) | 8 / 20 | 🔴 |

This is a well-engineered site with rare-for-an-SMB attention to schema, llms.txt, and SSR delivery. The score lags because the **brand entity is unanchored in the broader knowledge graph** - the foundation is strong, but ChatGPT/Perplexity/Gemini have nothing external to corroborate "Bina Labs" against, which suppresses citation confidence even when content is excellent.

---

## 🟢 What's working well (don't break these)

- **SSR/SSG delivery (Astro static).** Homepage is single-blob 62kB HTML; `grep "<h2"` returns visible content; no JS-required hydration for primary copy. **GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot all fetch identical 62kB payloads** (verified via curl). This is the single most important AEO precondition - many sites fail here.
- **robots.txt explicitly allows AI bots** ([public/robots.txt](public/robots.txt)): GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Bytespider, CCBot. Sitemap reference correct (`sitemap-index.xml`).
- **llms.txt exists** ([public/llms.txt](public/llms.txt)), 4.4kB, well-structured per llmstxt.org (H1 + blockquote + sectioned link lists). Aligned with sitemap (both reference the 4 live case studies). Optional but a credibility signal for the audience that cares (IDE coding agents primarily, but no harm).
- **Schema is extensive and structurally correct.** Every page emits Organization + a context-appropriate schema. Highlights:
  - **Closed-loop author entity**: BlogPosting `author.@id = /about#michael` matches the Person `@id` on /about ([src/components/schema/BlogPostingSchema.astro](src/components/schema/BlogPostingSchema.astro), [src/components/schema/PersonSchema.astro](src/components/schema/PersonSchema.astro)). This is the 2026 best-practice pattern most sites get wrong.
  - **Service + Offer + PriceSpecification in USD** on [/services](src/pages/services.astro) - all 4 service pillars carry transparent pricing ($10k strategy, $20k/mo engineering, $10k lecture day, custom research). AI engines reward this transparency.
  - **ProfessionalService (LocalBusiness-compatible)** on [/contact](src/pages/contact.astro) with Tel Aviv address, IL country, opening hours, bilingual `availableLanguage`.
  - **FAQPage** rendered on home (9 Qs), services (7), about (5), manifesto (5), contact (4), each case study (6). Visible accordion + JSON-LD - dual signal.
- **Answer Capsule pattern in blog posts**: both writing entries open with a bolded "**A short answer first.**" paragraph ([src/data/writings.js](src/data/writings.js) lines 46 and 341). 40-60 word range. Textbook AEO.
- **Author byline + Person link on every content unit**: `Written by Michael Fleicher, Principal at Bina Labs...` callout on blog posts and case studies.
- **Concise, declarative prose** - no AI fingerprint phrases ("delve into", "comprehensive"). Reading level is appropriate (~Grade 7-8). Voice is opinionated and self-contained per sentence.
- **Meta hygiene**: unique title + description per page, canonical tags, OG + Twitter Card, `robots: index, follow, max-image-preview:large`, viewport meta, favicons (SVG + PNG 48/192/512 + apple-touch).

---

## 🔴 Critical issues (fix this week)

| # | Issue | Impact | Fix |
|---|------|--------|-----|
| 1 | **`www.bina-labs.com` has NO DNS record.** `dig www.bina-labs.com` returns empty; curl exits with code 000. The URL you gave me to audit literally doesn't resolve. | Any backlink, citation, share, training-data snapshot, or off-site reference using `www.` is dead. Verified by [Lily Ray Feb 2026](https://moz.com/blog/dropping-organic-rankings-also-lose-ai-citations) that broken canonical surfaces correlate with AI-citation loss. | In Vercel domains: add `www.bina-labs.com` as a redirect to apex (308). 5-minute fix. Then re-test with `curl -sI https://www.bina-labs.com/` - should redirect 308 -> 200. |
| 2 | **No Wikidata Q-item for Bina Labs.** API returns `{"search":[]}` for "Bina Labs". | Wikidata is the machine-readable identity layer for Google Knowledge Graph, ChatGPT, and Gemini grounding. Without a Q-item, AI engines have no canonical "this is the entity" anchor and rely on weak text-matching, which fragments the brand. Plus Wikidata is the prerequisite for Wikipedia. | Create a Wikidata item this week. Properties to fill: P31 (instance of: business), P17 (country: Israel), P159 (HQ: Tel Aviv), P856 (official website: bina-labs.com), P1448 (official name), P1813 (short name), P112 (founded by: Michael Fleicher). Add Michael Fleicher as a separate Person Q-item with P108 (employer: Bina Labs Q-item) and P39 (position: Principal/Founder). Reference each fact to a 3rd-party source (an article, a LinkedIn page is not enough). |
| 3 | **`Organization.sameAs` is empty.** [src/components/schema/OrganizationSchema.astro](src/components/schema/OrganizationSchema.astro) emits Organization without any `sameAs` array. | This is the entity-disambiguation hook AI engines use. Without it, the Org node is an island. Person schema has only LinkedIn ([src/components/schema/PersonSchema.astro:25](src/components/schema/PersonSchema.astro)). | Add `sameAs` to Organization with at minimum: LinkedIn company page URL, Crunchbase URL (create one if absent), GitHub org URL (if any), Wikidata Q-item URL (once #2 is done), X/Twitter handle URL (if any). Extend Person.sameAs similarly: GitHub, X/Twitter, ORCID/Google Scholar if applicable, Wikidata Q-item. |
| 4 | **Blog freshness signal broken.** [src/components/schema/BlogPostingSchema.astro:65-67](src/components/schema/BlogPostingSchema.astro) hardcodes `dateModified = datePublished`. Only 2 posts; most recent is 2026-02-10 - 3 months stale relative to today (2026-05-13). | Seer 2026: 50% of AI citations come from content `<=` 13 weeks old. Perplexity is recency-biased. Both posts are now outside that window. Plus `dateModified === datePublished` gives AI engines zero updated-since signal. | Decouple `dateModified` from `datePublished` in the schema component (read from a separate frontmatter field). Refresh both existing posts with 20%+ new content or 500+ words (Google HCU Dec 2025: date-only edits are now a spam signal - must be substantive). Add a visible "Updated: May 2026" badge on the page. Then commit to a 13-week refresh cycle. |
| 5 | **Question-format H2/H3 missing on all landing pages.** /services, /about, /manifesto, /work, /work/[slug] use label-format heads ("What we see on the ground", "How we work", "The winning formula"). Only the FAQ blocks and the blog FAQs use question shapes. | Princeton GEO + Indig 2026: 78.4% of question-citations originate from question-shaped H2s; cited content is 2x more likely to contain "?". Label heads under-index in retrieval. | Re-cut H2/H3 on /services, /about, /manifesto, /work/[slug] to question shape AND open each section with a 40-60 word answer capsule. Example: "How we work" -> "How does Bina Labs structure an engagement?" with a tight self-contained paragraph immediately under. |

---

## 🟡 Recommended improvements (next 30-60 days)

| Improvement | Priority | Effort |
|-------------|----------|--------|
| Add `Claude-SearchBot`, `Applebot-Extended`, `Meta-ExternalAgent`, `DuckAssistBot`, `Amazonbot`, `cohere-ai`, `Diffbot`, `Timpibot` to [public/robots.txt](public/robots.txt) allow list. | High | 5 min |
| Add Review / AggregateRating schema on /work and /work/[slug] using the 84% repeat-client metric, anonymized client testimonials. Currently zero machine-readable trust signal despite earned metrics. | High | 1 day |
| Add `twitter:site` and `twitter:creator` handles to OG meta in [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro). | High | 5 min |
| Change case-study schema from generic `CreativeWork` to `Article` (more retrieval-friendly) and add `image` property. | Medium | 2 hr |
| Add `Course` and `Event` schema for the Lectures & Workshops offering. | Medium | 2 hr |
| Add `WebSite` schema with `potentialAction: SearchAction` at the root layout level. | Medium | 30 min |
| Build out the missing 13 case studies referenced in the llms.txt's spirit but not yet built (currently only 4 of 17 mentioned in [src/data/caseStudies.js](src/data/caseStudies.js) data exist as actual pages). | Medium | scoped backlog |
| Promote the 6 LinkedIn posts in [linkedin-posts/](linkedin-posts/) to actual `/writing/` entries. There is content on disk that isn't on the web - free freshness signal. | Medium | 2 days |
| Add an `llms-full.txt` companion to llms.txt with the full markdown of core pages (services, about, manifesto, all case studies). Helps Cursor/Copilot/Claude Code surface the brand in dev contexts. | Low | 1 day |
| Add `hreflang` if any Hebrew page is ever published. [LocalBusinessSchema.astro:43](src/components/schema/LocalBusinessSchema.astro) already declares `availableLanguage: [English, Hebrew]` but no Hebrew page exists. Either build one or remove Hebrew from `availableLanguage`. | Low | varies |
| Server-log audit: connect Cloudflare Radar (free) or Vercel log drain to track GPTBot / ClaudeBot / PerplexityBot hit volume vs baseline. Currently no ground-truth bot-traffic visibility. | Medium | 1 hr |
| Verify a `/favicon.ico` file exists (404 right now per agent #1 - the recent PNG-favicon commit didn't include the .ico path). | Low | 5 min |

---

## 3 Quick Wins (do this week - highest impact, evidence-cited)

1. **Add `www.` redirect + `Organization.sameAs` + Wikidata Q-item.** Bundle these three because they all attack the same root cause: the brand entity has nothing for AI engines to anchor to. Expected impact: meaningful lift in entity-disambiguation by ChatGPT/Perplexity/Gemini within 4-8 weeks (re-crawl cycle). Source: Ahrefs 75K-brand study, brand mentions r=0.664 vs backlinks r=0.218; entity grounding via `sameAs` is the on-page hook for that mention graph.
2. **Refresh both blog posts + decouple `dateModified` in [BlogPostingSchema.astro](src/components/schema/BlogPostingSchema.astro).** Substantive 20%+ update (Google HCU Dec 2025 - date-only edits flagged as spam). Add visible "Updated: May 2026". Source: Seer 2026 - 50% of AI citations come from content `<=` 13 weeks old.
3. **Rewrite landing-page H2s to question shape with 40-60-word answer capsules.** Start with /services and /about. Source: Princeton GEO + Indig 2026 - question-shaped headings drive 78.4% of question-citations; answer-first paragraphs cited 67% more.

---

## AI Visibility check (you need to run these)

I can't run live prompts against ChatGPT/Perplexity/Gemini/Claude/Copilot from this session - that's a manual step. Run 10 prompts per engine, 5-10x each for stability:

| Prompt template | Engines to test |
|-----------------|-----------------|
| "What does Bina Labs do?" | All 6 |
| "Who is Michael Fleicher?" | All 6 |
| "Best AI consulting firms in Tel Aviv" | All 6 |
| "AI engineering studio for B2B production systems" | All 6 |
| "Who builds production AI agents for enterprise?" | All 6 |
| "AI strategy consultancy with fixed-price engagements" | ChatGPT, Perplexity, Claude |
| "Bina Labs vs [competitor]" - pick 2-3 real competitors | All 6 |
| "What is the 99% gap in Salesforce AI agents?" (your own thesis) | ChatGPT, Perplexity - does your blog post get cited? |
| "Architectural intelligence" | All 6 |
| "Two-time CTO AI consulting Israel" | All 6 |

For each, record: (a) is Bina Labs mentioned? (b) with a link? (c) in what context (favorable / neutral / "alternatives" list / wrong)? Tabulate SOMV per engine.

**Per-engine prediction based on this audit:**

| Engine | Backend | Expected current SOMV | Why |
|--------|---------|-----------------------|-----|
| ChatGPT | Bing | Low-moderate | Bing crawls fine, but Bina Labs has no Wikipedia/Wikidata anchor and weak entity graph. The Salesforce post might be cited for that specific query. |
| Perplexity | Hybrid | Low | DA likely <40 (new domain); Perplexity weights DA 6x. Reddit absence hurts (Perplexity up to 46.5% Reddit). |
| Google AIO | Gemini 3 | Very low | Requires top-10 organic; brand-new domain unlikely to rank for category queries yet. |
| Claude (web) | Brave | Low | Brave indexes the site but no editorial coverage exists to corroborate. |
| Copilot | Bing + LinkedIn | Moderate (for branded queries) | Strong LinkedIn presence for Michael Fleicher helps; Bina Labs company page unclear (verify manually - LinkedIn returned 999 anti-bot to curl). |
| Gemini | Google index | Very low | Same as AIO. |

---

## Market-specific notes (Israel + global B2B)

- **Israeli context exists in the schema** (Tel Aviv address, IL country, Hebrew in availableLanguage) but **no Hebrew content surface and no `hreflang`**. Israel is the highest-AI-usage country per capita (Anthropic AI Usage Index 4.9x expected). If any portion of your B2B target is Israeli buyers, **publish at least the home + services + about in Hebrew** with `hreflang` correctly set. Israeli buyers conversing in Hebrew to ChatGPT will not find an English-only site.
- **Hebrew tokenization**: GPT-4 tokenizer is 3x less efficient on Hebrew; keep Hebrew versions tighter than English.
- **Israeli AI citation surfaces missing**: No Yad2/Zap presence (those are ChatGPT citation surfaces in IL, not just SEO). Less critical for high-end B2B than for SMB local services, but worth a presence for "AI consulting Tel Aviv" type queries.
- **Global B2B**: For US/EU buyers, the bigger gaps are G2 / Capterra / Trustpilot (zero presence detected) and the absence of editorial PR coverage. Submit to Qwoted, Featured.com, Help a B2B Writer - low-effort earned-mention generators.

---

## Per-engine summary table

| Engine | Likely current status | Top fix to move the needle |
|--------|----------------------|----------------------------|
| ChatGPT | Reachable, not cited for category | Wikidata Q-item + Organization.sameAs |
| Perplexity | Reachable, recency-blocked | Blog refresh + DA via earned mentions |
| Google AIO | Reachable, not ranking | Standard SEO depth (more cornerstone content, more backlinks) |
| Google AI Mode | Same as AIO | Same |
| Claude (web) | Reachable, no editorial corroboration | Earned PR + 3rd-party mentions |
| Copilot | Reachable, LinkedIn-friendly | LinkedIn company page (verify exists) + Michael's exec presence (looks good) |
| Gemini | Same as AIO | Same |

---

## Evidence appendix

- Live fetch sizes (homepage): anonymous=62kB, GPTBot=62kB, ClaudeBot=62kB, PerplexityBot=62kB, OAI-SearchBot=62kB - **no UA discrimination**.
- `dig www.bina-labs.com` -> empty. `dig bina-labs.com` -> 216.198.79.1 (Vercel).
- `curl -sI https://www.bina-labs.com/` -> exits with code 000 (DNS failure).
- Sitemap URLs (13 total): /, /about, /contact, /manifesto, /services, /work, /work/auto-qto, /work/caseworker, /work/lloyd-score, /work/match-cuts, /writing, /writing/gladbites..., /writing/salesforce... - confirmed against [src/data/caseStudies.js](src/data/caseStudies.js) (4 case studies).
- llms.txt: 4426 bytes, references 4 case studies (aligned with sitemap - no over-promise).
- Wikidata API: `{"search":[]}` for "Bina Labs".
- Schema component inventory: 9 schema components in [src/components/schema/](src/components/schema/) - well-organized.
- robots.txt: explicit Allow for 12 AI bots; references `https://bina-labs.com/sitemap-index.xml`.

---

## File saved to

`/Users/michaelfleicher/Desktop/repos/bina-labs-webpage/outputs/aeo/bina-labs_audit_2026-05-13.md`

## Next mode

When ready, run `/aeo plan bina-labs` to convert these findings into a sequenced 12-week roadmap with effort estimates, or `/aeo content [topic]` for a question-formatted content brief on a specific service line.
