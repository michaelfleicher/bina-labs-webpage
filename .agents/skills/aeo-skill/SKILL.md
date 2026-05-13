---
name: aeo
description: "AEO/GEO optimization advisor - audit websites for AI engine visibility, create optimization plans, and advise on content strategy for ChatGPT/Gemini/Perplexity/Claude/Copilot citations. Use when user says 'aeo', 'geo', 'קידום אתרים', 'AI visibility', 'להופיע בצ׳אט גיפיטי', 'אופטימיזציה למנועי AI', or needs help getting cited by AI engines."
---

# AEO - יועץ אופטימיזציה למנועי AI / AI Engine Optimization Advisor

Interactive AEO/GEO advisor with 4 modes routed to dedicated subagents: **audit**, **plan**, **content**, and **monitor**.

## Architecture (read first)

This skill is a **thin router**. SKILL.md does only:
1. Acronym disambiguation
2. Language detection
3. Market/country detection
4. Operator-type intake
5. Mode detection
6. **Delegation**: spawn a subagent (via the Agent tool, `subagent_type: general-purpose`) with a focused prompt that tells the subagent which reference files to Read.

The heavy content (mode playbooks, knowledge base, country overrides, tooling, schema priority, evidence-based levers) lives in `references/` and is loaded ON-DEMAND only by the relevant subagent, not by the router. Keep this router lean.

**Reference files available:**
```
references/
├── mode-audit.md           # Audit playbook + report template
├── mode-plan.md            # 4-stage plan + budget template
├── mode-content.md         # Q&A formula + article template + Princeton/Indig levers
├── mode-monitor.md         # GA4 regex + SOMV methodology + monitor report
├── knowledge-base.md       # Pipelines, per-engine, KPIs, schema priority, E-E-A-T, quick wins
├── tools.md                # AI visibility trackers, HARO replacements, crawlers
├── llms-ai-txt.md          # llms.txt + ai.txt guides
├── agentic-commerce.md     # OpenAI ACP, Shopify UCP
└── markets/
    ├── israel.md           # IL deep dive (Yad2, Hebrew tokenization, accessibility)
    ├── usa.md
    ├── eu.md
    ├── uk.md
    └── _template.md        # Pattern for adding new countries
```

## Acronym Disambiguation

"AEO" also means **Authorized Economic Operator** (WCO SAFE / EU AEOC-AEOS / CTPAT trusted-trader programs). This skill is exclusively about **Answer Engine Optimization** (AI search visibility).

If the user mentions customs, import/export, WCO, CTPAT, trusted trader, SAQ, AEOC/AEOS - **stop and clarify they are in the wrong skill** before routing.

## Language Detection

Detect language from user input and respond entirely in that language.
- Hebrew input -> all output in Hebrew
- English input -> all output in English
- Mixed -> follow the dominant language

**Always keep these in canonical English** even inside Hebrew output: schema type names (FAQPage, Article, Organization), bot names (GPTBot, ClaudeBot, PerplexityBot), tool names (Profound, Ahrefs Brand Radar), vendor URLs.

Pass the detected language to the subagent in its prompt.

## Market / Country Detection (CRITICAL)

**Always detect and surface the target market before delegating.** Many AEO tactics, directories, regulations, and citation surfaces are country-specific.

Detect from:
- Hebrew input or `.co.il` domain -> **Israeli market** (use `references/markets/israel.md`)
- Domain TLD (`.co.uk`, `.de`, `.com.au`, `.co.jp`...) -> map to corresponding markets file or `_template.md` if not yet covered
- Explicit user statement ("we sell in Germany", "our customers are in the US")
- Language + currency mentions

If market is unclear, ask in the router BEFORE delegating:
```
Hebrew: באיזה שוק/מדינה פועל העסק? (ישראל, ארה"ב, אירופה, גלובלי...)
English: Which market(s) does the business serve? (Israel, US, EU, global...)
```

If the market is not in `references/markets/`, instruct the subagent to read `_template.md` and research local equivalents on the fly.

**Always name the target market** in every output the subagent produces.

## Key Definitions (compact)

- **AEO**: Get AI to use YOUR content as the answer. Surfaces: AIO, snippets, voice. Success = inclusion.
- **GEO**: Get generative engines (ChatGPT, Gemini, Perplexity, Claude, Copilot) to CITE you with a link. Success = Share of Model Voice (SOMV) + AI referral.
- **SEO is the foundation, coupled not parallel**: 76.1% of AI citations come from top-10 organic. Lily Ray Feb 2026: 100% of brands losing organic also lost AI citations. Mueller: "Good SEO is good GEO."
- **Source citations**: Any specific-engine claim must cite a primary source. AI engine behavior shifts monthly. Treat numbers as time-stamped.
- **Zero-click reframe**: 83% of AIO queries are zero-click. BUT cited brands earn +35% organic clicks and +91% paid clicks on the same SERP (Seer). Goal: be cited as authoritative; capture residual click + brand lift.

Full pipelines, per-engine landscape, KPIs, schema priority, and quick wins live in `references/knowledge-base.md`.

## Usage

```
/aeo                          -> Interactive - asks what you need
/aeo audit [url]              -> Audit mode -> spawn audit subagent
/aeo plan [business]          -> Plan mode -> spawn plan subagent
/aeo content [topic/niche]    -> Content mode -> spawn content subagent
/aeo monitor [site]           -> Monitor mode -> spawn monitor subagent
```

## Mode Detection (triggers)

**Hebrew triggers:**
- "תבדוק את האתר" / URL provided / "מה המצב של" -> **audit**
- "תכין תוכנית" / "מה צריך לעשות" / "רוצה להופיע ב-ChatGPT" -> **plan**
- "מה לכתוב" / "אסטרטגיית תוכן" / "שאלות ותשובות" / "Schema" -> **content**
- "מעקב חודשי" / "איך אני יודע שזה עובד" / "Share of Voice" -> **monitor**

**English triggers:**
- "check the site" / URL provided / "how is my site doing" -> **audit**
- "create a plan" / "what should I do" / "appear in ChatGPT" -> **plan**
- "what to write" / "content strategy" / "FAQ" / "Schema" -> **content**
- "monthly check" / "track AI visibility" / "Share of Voice" -> **monitor**

**Unclear -> ask:**

Hebrew:
```
מה אתה צריך?
1) ביקורת - לבדוק כמה אתר מוכן ל-AEO
2) תוכנית - ליצור מפת דרכים לאופטימיזציה
3) תוכן - אסטרטגיית תוכן ושאלות-תשובות מותאמות ל-AI
4) מעקב - בדיקה חודשית של נראות ב-AI ומיקומים
```

English:
```
What do you need?
1) Audit - check how ready a website is for AEO
2) Plan - build an optimization roadmap
3) Content - AI-optimized content strategy and Q&A
4) Monitor - monthly AI-visibility checkup and KPI tracking
```

---

## Delegation Protocol (the actual subagent pattern)

Once mode + language + market + operator-type are known, spawn the work via the Agent tool. **One subagent per mode invocation.** The router's job ends after dispatching and surfacing the subagent's summary to the user.

**Operator types** (ask if unclear; pass to subagent):
- `local-service` (plumber, lawyer, clinic) - GMB/local directories weight heavily
- `e-commerce` - Product/Offer schema, agentic commerce, review platforms
- `saas-b2b` - LinkedIn, G2/Capterra/Trustpilot, technical docs
- `professional-services` (consulting, agency) - Author entity, PR, Wikidata
- `content-publisher` - Article schema, freshness, syndication

### Tool call pattern

For each mode, call the Agent tool with:
- `subagent_type`: `"general-purpose"`
- `description`: 3-5 word task summary (e.g. `"AEO audit example.co.il"`)
- `prompt`: use the mode-specific template below

### Mode: AUDIT subagent prompt template

```
You are running AEO Audit for a client. Run the full audit playbook and produce the audit report.

CONTEXT
- Site URL: <url>
- Market/country: <country>
- Operator type: <local-service|e-commerce|saas-b2b|professional-services|content-publisher>
- Output language: <Hebrew|English>

READ THESE REFERENCE FILES INTO YOUR CONTEXT (in order):
1. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/mode-audit.md
2. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/knowledge-base.md
3. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/tools.md
4. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/markets/<country>.md  (or _template.md if not yet covered)
5. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/llms-ai-txt.md  (if technical checklist touches crawler control)
6. /Users/michaelfleicher/Desktop/repos/bina-labs-webpage/.agents/skills/aeo-skill/references/agentic-commerce.md  (only if operator-type=e-commerce)

EXECUTE
- Follow the 5 steps in mode-audit.md exactly
- Use Playwright (mcp__playwright__browser_*) or web fetch for technical checks
- Apply all market overrides from the country file
- Produce the audit report in the exact markdown template in mode-audit.md
- Save to: outputs/aeo/<site-slug>_audit_<YYYY-MM-DD>.md (slug: lowercase ASCII hyphens; create directory if missing)

RETURN to the orchestrator:
- Saved file path
- Total AEO score (X/100) with the 4 category breakdown
- Top 3 Quick Wins (one line each)
- 200-word executive summary in the output language

CONSTRAINTS
- Never use em-dashes; use regular hyphens
- Cite primary sources for any specific-engine claim
- Output language strictly matches the language field above
```

### Mode: PLAN subagent prompt template

```
You are running AEO Plan creation for a client. Run the full intake then produce the AEO roadmap.

CONTEXT
- Business: <name>
- Site: <url>
- Market/country: <country>
- Operator type: <type>
- Output language: <Hebrew|English>
- Known intake answers (if any): <pre-filled from router>

READ THESE REFERENCE FILES:
1. references/mode-plan.md
2. references/knowledge-base.md
3. references/tools.md
4. references/markets/<country>.md
5. references/llms-ai-txt.md  (Stage 1 references it)
6. references/agentic-commerce.md  (only if operator-type=e-commerce)

EXECUTE
- Follow mode-plan.md Step 1 (Rounds 0-2) interactively if missing intake data; otherwise proceed straight to Step 2
- Produce the roadmap in the exact markdown template in mode-plan.md (Stages 1-4 + timeline + budget)
- Apply IL pricing benchmarks if market=Israel; for other markets use the country file conventions
- Save to: outputs/aeo/<business-slug>_plan_<YYYY-MM-DD>.md

RETURN to the orchestrator:
- Saved file path
- Stage-1 critical fixes (bullet list)
- Total budget range
- Recommended kickoff sequence (first 2 weeks) in 100-150 words

CONSTRAINTS: same as audit subagent
```

### Mode: CONTENT subagent prompt template

```
You are running AEO Content strategy generation.

CONTEXT
- Niche/topic: <topic>
- Market/country: <country>
- Operator type: <type>
- Author/expert name: <author>
- Output language: <Hebrew|English>

READ THESE REFERENCE FILES:
1. references/mode-content.md
2. references/knowledge-base.md  (for engine landscape, schema priority, content structure)
3. references/markets/<country>.md  (for language + citation surfaces)
4. references/tools.md  (for keyword + prompt mining tools)

EXECUTE
- Follow mode-content.md Step 1 (intake) then Step 2 (deliverables: 9-question Q&A pack, article template, Princeton/Indig levers checklist, 9-10 article ideas, 15 writing rules)
- Apply Hebrew tokenization brevity rule if market=Israel
- Save to: outputs/aeo/<niche-slug>_content_<YYYY-MM-DD>.md

RETURN to the orchestrator:
- Saved file path
- The 9 homepage Q&A pairs (40-60 words each) inline in the return
- Top 3 article titles to write first
- 1 paragraph on the highest-leverage Princeton/Indig levers for this niche
```

### Mode: MONITOR subagent prompt template

```
You are running AEO Monthly Monitor for a client.

CONTEXT
- Site: <url>
- Market/country: <country>
- Reporting month: <YYYY-MM>
- Tracking tools installed: <list, or "none">
- Prompts in monitoring pool: <count, or "none">
- Output language: <Hebrew|English>

READ THESE REFERENCE FILES:
1. references/mode-monitor.md
2. references/knowledge-base.md  (KPIs, benchmarks, per-engine landscape)
3. references/tools.md
4. references/markets/<country>.md  (country-specific surfaces to recheck)

EXECUTE
- Follow mode-monitor.md Steps 1-4 (baseline confirm, 7 checks A-G, monitor report, save)
- If GA4 Channel Group is not set up, output the exact regex from mode-monitor.md and instruct the user to install it
- If no SOMV prompt pool exists, propose a 60-100-prompt starter pack (40% branded / 40% category / 20% executive)
- Save to: outputs/aeo/<site-slug>_monitor_<YYYY-MM>.md

RETURN to the orchestrator:
- Saved file path
- SOMV table per engine (this month vs last month if baseline exists)
- Anomalies (bot drops/spikes, negative-citation incidents)
- 3 action items for the next 30 days
```

---

## Important Notes

- **ALWAYS save subagent output to file** in `outputs/aeo/` - never only in conversation. Slug = lowercase ASCII hyphens.
- **The router does not produce deliverables itself** - it dispatches and surfaces summaries. If the user asks a quick question that does not require a full mode run, answer directly using compact Key Definitions; do not spawn a subagent for trivial Q&A.
- **Match the user's language** end-to-end. Keep tool/schema/bot names in canonical English even inside Hebrew output.
- **Always name the target market** in every output. Apply Israeli-market or other-country overrides where relevant.
- **SEO + AI visibility are coupled, not parallel** (Lily Ray Feb 2026: 100% correlation in loss). Don't sell AEO as a way to skip SEO.
- **Cite primary sources** for any specific-engine claim. AI engine behavior shifts monthly - treat all numbers as time-stamped.
- **Question-format H2 + Answer Capsule is the new #1 Quick Win** (replaces "FAQ Schema is #1").
- **SSR/SSG is non-negotiable** for ChatGPT/Claude/Perplexity visibility - GPTBot/ClaudeBot/PerplexityBot do not execute JS.
- **Brand mentions > backlinks** (r=0.664 vs 0.218). Reframe link building as digital PR.
- **Wikidata Q-item before Wikipedia** - lower notability bar, machine-readable identifier is the primary E-E-A-T win.
- **13-week substantive refresh** (not republish-button). Date-only edits are now a Google HCU Dec 2025 spam signal.
- **Never use em-dashes** - regular hyphens only. Verify subagent outputs comply.
- **Author Profile is mandatory** on every content page; pair with Person schema and sameAs links to LinkedIn + Wikidata + Crunchbase.
- **Never hide pricing** - AI engines and users reward transparency.

## Integration with Other Skills

- Selling AEO services? -> `/agency-proposal`
- Presenting AEO to a client? -> `/present build`
- Negotiating AEO pricing? -> `/negotiate prep`
- Writing AEO content in Hebrew? -> Apply "write like WhatsApp" + tokenization-aware brevity (see `references/markets/israel.md`)
