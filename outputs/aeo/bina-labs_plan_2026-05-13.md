# AEO Optimization Plan: Bina Labs
## Date: 2026-05-13
## Scope: Fix the 5 critical issues from the 2026-05-13 audit

---

## How this plan is being executed

| # | Critical issue | Fix mode | Owner | Status |
|---|---------------|----------|-------|--------|
| 1 | `www.bina-labs.com` has no DNS record | Manual (Vercel dashboard) | Michael | Pending - instructions below |
| 2 | No Wikidata Q-item for Bina Labs | Manual (wikidata.org) | Michael | Pending - instructions below |
| 3 | `Organization.sameAs` is empty + Person sameAs has only LinkedIn | Code (subagent in worktree) | Subagent A | In progress |
| 4 | BlogPosting `dateModified` hardcoded to `datePublished` | Code (subagent in worktree) | Subagent B | In progress |
| 5 | Landing-page H2/H3 are label-format, not question-format | Code (after H2 proposals approved) | Subagent C (pending approval) | Awaiting Michael's approval of the proposed rewrites |

The two manual items can't be done via subagent because they live outside the repo (DNS records live at your domain registrar / Vercel; Wikidata Q-items live on wikidata.org). All terminology used below is explained in section "Terminology deep-dive" - read that first if anything is unfamiliar.

---

## Terminology deep-dive (read first if you want to understand what's being fixed)

### `www`, apex, and DNS

A domain like `bina-labs.com` is two things glued together: the **apex** (or root) `bina-labs.com` and any **subdomain** like `www.bina-labs.com`, `blog.bina-labs.com`, `mail.bina-labs.com`. Each subdomain is, technically, a completely separate address that has to be **published in DNS** to be reachable.

**DNS** (Domain Name System) is the global phone book that maps a name like `bina-labs.com` to a numeric IP address like `216.198.79.1`. When someone types your URL, their browser asks DNS "what IP belongs to this name?" - if there's no record, the browser gets nothing back and you see the "this site can't be reached" error.

For Bina Labs right now:
- `bina-labs.com` -> resolves to `216.198.79.1` (Vercel's IP). Works.
- `www.bina-labs.com` -> **resolves to nothing**. The DNS record doesn't exist. So any link that says `www.bina-labs.com` is dead - the browser literally can't find the server.

Historical context: in the 1990s, `www.` was added to indicate "the World Wide Web server for this domain" (vs the FTP server `ftp.example.com`, the mail server `mail.example.com`, etc.). Today it's vestigial - most modern sites work fine without it - but a huge fraction of users, citations, and old links still type the `www.` prefix out of habit. If only the apex works and `www.` doesn't, those users see an error and bounce. Worse for AEO: if any AI training data or citation snapshot recorded the `www.` URL, that's now a dead reference - the AI engine sees a broken link and trusts your domain less.

**The fix** for #1 is to teach DNS that `www.bina-labs.com` exists and to send anyone visiting it to the apex `bina-labs.com` (via a "redirect"). Vercel makes this trivial - see step-by-step below.

### Redirects (308 specifically)

When the browser visits a URL that's been moved, the server can answer with a **redirect** status code instead of HTML. The browser then automatically follows the redirect to the new URL. There are several codes:
- **301 Moved Permanently**: classic redirect, allowed to change the request method (GET stays GET, but a POST may get rewritten to GET by some old clients).
- **308 Permanent Redirect**: same as 301 but strictly preserves the request method. Safer for modern APIs.
- 302/307: temporary versions.

For a `www -> apex` redirect, **308 is the right choice** - permanent, safe for all request methods. Search engines and AI crawlers treat 308 as "the canonical address is the target; forget the source."

### Schema, JSON-LD, schema.org

A web page is just HTML - a tree of tags that describes how content looks (`<h1>title</h1>`, `<p>paragraph</p>`). But HTML doesn't say *what kind of thing* is on the page. Is the `<h1>` a person's name? A product? A movie title? The browser doesn't care, but Google and AI engines need to know to extract structured facts.

**Schema.org** is a vocabulary (developed jointly by Google, Microsoft, Yahoo, Yandex) that defines types like `Person`, `Organization`, `Article`, `Product`, `Event`, `Recipe`, etc., and the properties each type can have (`Person.name`, `Person.jobTitle`, `Person.worksFor`, `Person.sameAs`).

**JSON-LD** (JSON for Linking Data) is the syntax for embedding schema.org data into an HTML page. It's a `<script type="application/ld+json">{ ... }</script>` block that lives in the page's HTML but is invisible to humans. Search engines and AI engines parse it and use it to build structured facts about your site.

A blog post page has a JSON-LD block that says:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Salesforce AI agents...",
  "author": { "@id": "https://bina-labs.com/about#michael" },
  "datePublished": "2026-02-10",
  "dateModified": "2026-02-10"
}
```

That `@id` is a unique identifier - a "primary key" - that lets the BlogPosting reference the same Person entity defined elsewhere (on `/about`). This is called a **closed-loop reference** and is the 2026 best practice - it tells AI engines "the author of this post is the same Michael Fleicher defined on /about, not some other person named Michael Fleicher."

Your site already has 9 well-structured JSON-LD components in `src/components/schema/`. That's rare for an SMB. The audit gaps are inside the JSON-LD content, not the infrastructure.

### `sameAs` - the entity-disambiguation hook

`sameAs` is a schema.org property that means **"this entity is the same thing as these other URLs."** It's how you tell AI engines "the Bina Labs on bina-labs.com is the same entity as the Bina Labs on LinkedIn at /company/bina-labs and on Crunchbase at /organization/bina-labs and on Wikidata as Q12345."

Without `sameAs`, an AI engine encounters "Bina Labs" and has to guess: is this the right Bina Labs? Maybe there are seven companies named that. Confidence is low; citations are suppressed.

With `sameAs`, the AI engine resolves "Bina Labs on bina-labs.com" to a **single entity node** in its internal knowledge graph, glued together with all the other surfaces. Confidence becomes high; citations flow.

**For Organization (the company):** `sameAs` should point to LinkedIn company page, Crunchbase, GitHub org, X/Twitter handle, Wikidata Q-item, Angel.co, Producthunt - whichever exist.
**For Person (Michael):** `sameAs` should point to LinkedIn personal, GitHub, X/Twitter, ORCID (if academic), Google Scholar, personal blog, podcast appearances, Wikidata Q-item.

Subagent A is currently verifying which of these URLs actually exist (curl-checking each) and adding only the verified ones to the schema. Made-up URLs are worse than no URLs - AI engines penalize broken `sameAs` entries.

### Knowledge Graph & Wikidata Q-item

Google maintains an internal database called the **Knowledge Graph** - a massive interconnected map of entities (people, places, companies, events, concepts) and the facts linking them. When you Google "Tim Cook," the right-hand panel that shows his birthday, role, and a photo is the Knowledge Graph speaking. Same database powers Google AI Overviews and Gemini's grounding.

**Wikidata** is the public-domain, machine-readable backbone behind Wikipedia and the Knowledge Graph. Every notable entity has a **Q-item** - a URL like `wikidata.org/wiki/Q12345` that uniquely identifies that entity globally. Each Q-item carries structured facts ("instance of: company", "founded by: Michael Fleicher", "country: Israel", "headquarters: Tel Aviv").

**Why a Q-item matters for AEO:** ChatGPT, Gemini, Claude all use Wikidata as a trusted entity source. When they encounter "Bina Labs" in your content, they cross-check against Wikidata. If there's no Q-item, they fall back to weaker text-matching heuristics and citation confidence drops. A Q-item is the **lowest-effort, highest-impact** entity-grounding move you can make.

Wikidata is more accessible than Wikipedia: Wikipedia requires significant editorial notability (3+ independent third-party feature articles); Wikidata accepts any verifiable entity. You can create one yourself in 30 minutes - instructions below.

### `dateModified` vs `datePublished` (and why Google penalizes "fake updates")

`datePublished` is when you first published a post. It never changes.
`dateModified` is the last time you substantively updated the post.

AI engines (Perplexity especially, but increasingly ChatGPT and Google AIO) weight recency heavily. **50% of AI citations come from content updated within the last 13 weeks** (Seer 2026). If your `dateModified` is older than 3 months, your content drops out of half the citation candidate set.

In your current code (`BlogPostingSchema.astro:65-67`), `dateModified` is *hardcoded to equal `datePublished`*. So even if you edited a post, the schema emits the original publish date as "last modified." AI engines see this and treat the post as stale forever.

**Important caveat: Google penalizes "date-only edits."** In the December 2025 **Helpful Content Update (HCU)**, Google added a signal for posts where the date is bumped without the content actually changing - this is now a spam signal. So when you do refresh a post, you must:
1. Add or rewrite at least 20% of the content (or 500+ words)
2. Update `dateModified` to the actual edit date
3. Show a visible "Updated: [Month YYYY]" badge to readers (this is also a UX signal Google's QRG raters watch for)

Subagent B is doing the plumbing: decoupling the schema, adding a separately-editable `dateModified` field to each post's data, and rendering an "Updated:" badge when the dates differ. **You** then refresh the post content (when you choose) and bump the date.

### HCU = Helpful Content Update

A periodic Google ranking-algorithm update specifically targeting "unhelpful, low-value, or AI-generated-without-human-judgment" content. Started 2022, now folded into core updates. Dec 2025 added the date-spam signal. Mentioned because the AEO playbook from 2023 ("just bump the publish button") is now actively harmful.

### Question-format H2/H3 + Answer Capsule

AI engines extract content **at the section level**, not the whole-page level. When ChatGPT or Perplexity is composing an answer, it scans pages for the most extractable 40-60-word chunk that directly answers the user's prompt. Two structural patterns dominate which chunks get lifted:

1. **Question-shaped headings.** An `<h2>How does Bina Labs structure an engagement?</h2>` followed by an immediate paragraph is treated as a Q&A pair. Princeton/Indig 2026: **78.4% of question-citations originate from question-shaped H2/H3.** Label-shaped headings ("The engagement.") under-index dramatically.

2. **Answer Capsule.** A 40-60 word, fully self-contained paragraph immediately under the heading. Self-contained means each sentence stands alone - no "as mentioned earlier" or pronouns ("it") that need the prior paragraph for context. AI engines lift answer capsules verbatim.

Your blog posts already use this pattern beautifully (`**A short answer first.**` opener). The gap is your **landing pages** (services, about, manifesto, work) - those use brand-style label H2s ("Decks don't run in production.") with no question/answer capsule structure.

**Two ways to fix without destroying the brand voice:**
- **Option A (recommended):** Keep all the brand H2s as-is (they're part of your visual identity). Add a small visible answer-capsule paragraph immediately under each, framed as a Q&A. Optionally add a `aria-label` of the question form to the H2 element so AI extractors see it.
- **Option B (alternative):** Convert the existing eyebrow tags (the small monospace lines above each section like `// 02_manifesto · last edited 2026-04-12`) into question-form labels. Less invasive, less effective.

The H2/H3 proposal table below uses Option A.

### SSR, SSG, SPA, hydration - the rendering vocabulary

A website can deliver its content to a visitor's browser in different ways:
- **Server-Side Rendering (SSR):** Server generates the HTML for each request and sends finished HTML back. Visible content arrives in the first response.
- **Static Site Generation (SSG):** Server pre-generates HTML at build time and serves the same file to everyone. Bina Labs uses SSG (Astro with `output: 'static'`).
- **Single-Page Application (SPA):** Server sends a near-empty HTML shell plus a big JavaScript bundle; the browser then runs JS to fetch content and render it. Examples: many React/Vue apps with no SSR.

**Why this matters for AEO:** Only Google's main crawler (Googlebot) and Gemini's crawler execute JavaScript. GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Claude-SearchBot **do not run JavaScript** - they read raw HTML. An SPA is therefore invisible to ChatGPT/Claude/Perplexity. SSR or SSG is mandatory for AEO.

Bina Labs is on Astro SSG - the audit verified all AI bots get a 62kB pre-rendered HTML on first fetch. This is the single biggest pass on the audit. The React components (`HomeBody.jsx`, etc.) are pre-rendered at build time and the React layer "hydrates" (attaches event handlers) only after the HTML is already on screen. AI bots get the pre-rendered output.

### Astro, React, hydration

**Astro** is the framework powering bina-labs.com. Its philosophy: ship as little JavaScript as possible. Pages are written in `.astro` files (HTML + JS at the top), and you can drop React (or Vue, Svelte, Solid) **islands** inside Astro pages. The React parts are pre-rendered to HTML at build, then "hydrated" in the browser only if they need interactivity (e.g., a button that opens a menu).

**Astro is what makes the AEO foundation strong**: all your content is in HTML before any JS runs.

### `robots.txt` and `llms.txt`

**`robots.txt`** is a plain text file at the root of a website (`bina-labs.com/robots.txt`) that tells crawlers which paths they're allowed to fetch. Bots are honor-system - they read it and (usually) comply. Bina Labs' robots.txt explicitly allows GPTBot, ClaudeBot, OAI-SearchBot, etc. Pass.

**`llms.txt`** is a newer, optional convention (not standardized, but adopted by Anthropic, OpenAI, Perplexity) - a Markdown file at `bina-labs.com/llms.txt` that gives AI engines a curated index of the site's important pages and a 1-2 sentence summary. Useful for IDE coding agents (Cursor, Continue, Copilot agent mode) primarily. Bina Labs already has a good one. Pass.

---

## Critical #1: Add `www.` DNS / redirect (manual - Vercel dashboard)

**Why it's critical:** Any backlink, citation, AI training snapshot, or share URL using `www.bina-labs.com` currently 404s before even reaching your server (it fails at DNS resolution). Verified with `dig www.bina-labs.com` returning empty, `curl` returning code 000.

**Step-by-step fix:**

1. Log into Vercel (vercel.com) and open the project for bina-labs.com.
2. Settings -> Domains.
3. You'll see `bina-labs.com` listed. Click **"Add Domain"** at the top.
4. Type `www.bina-labs.com` and click Add.
5. Vercel will show a configuration screen asking what to do with `www.bina-labs.com`:
   - Choose **"Redirect to bina-labs.com"** (NOT "Use as primary").
   - Make sure the redirect type is **308 Permanent**.
6. Vercel automatically creates the DNS record for you if your domain's nameservers point to Vercel (`ns1.vercel-dns.com` / `ns2.vercel-dns.com`). If your domain is on a different registrar (e.g., Namecheap, GoDaddy), Vercel will show you the CNAME record to add at your registrar - it'll be something like `www.bina-labs.com CNAME cname.vercel-dns.com`. Add that record at your registrar's DNS panel.
7. Wait 5-10 minutes for DNS propagation. Verify with: `dig www.bina-labs.com` should now return an IP. `curl -sI -L https://www.bina-labs.com/` should show 308 redirect -> 200 final.
8. Done.

**Cost:** Free. **Time:** 10 minutes including propagation wait.

---

## Critical #2: Create Wikidata Q-item for Bina Labs (manual - wikidata.org)

**Why it's critical:** Wikidata is the entity-grounding layer behind Google Knowledge Graph, ChatGPT, Gemini, and Claude. Without a Q-item, AI engines have no canonical anchor for "Bina Labs" and fall back to weaker text matching. The Wikidata entry takes 30 minutes to create and the impact compounds over time as AI engines re-crawl.

**Step-by-step fix:**

1. Create a Wikidata account: wikidata.org -> Create account (top right). Use a personal email; Wikidata is run by the Wikimedia Foundation.
2. Verify your email.
3. Once logged in, top-right "Create a new item" -> click.
4. Fill the form:
   - **Label** (English): `Bina Labs`
   - **Description** (English, short): `AI consulting and engineering studio based in Tel Aviv` (this is what shows in search results and what AI engines lift as the one-line definition)
   - **Aliases**: leave blank or add Hebrew name if applicable
5. Click Create. You now have a Q-item like `Q12345678` (Wikidata will assign the number).
6. On the new item's page, click **"Add statement"** repeatedly and add these properties (each requires the property code in parentheses):
   - `instance of` (P31): `business` (Q4830453) - or more specific: `consulting firm` (Q1639825) or `private company` (Q1055138)
   - `country` (P17): `Israel` (Q801)
   - `headquarters location` (P159): `Tel Aviv` (Q1218)
   - `official website` (P856): `https://bina-labs.com`
   - `founded by` (P112): you'll need a Q-item for Michael Fleicher too (see step 7).
   - `industry` (P452): `artificial intelligence` (Q11660) and/or `software industry` (Q880430)
   - `chief executive officer` / `founder` etc.
7. **Create a second Q-item for Michael Fleicher personally** (same flow):
   - Label: `Michael Fleicher`
   - Description: `Founder of Bina Labs, AI consultant and engineer`
   - Statements:
     - `instance of` (P31): `human` (Q5)
     - `occupation` (P106): `entrepreneur` (Q131512), `engineer` (Q81096)
     - `country of citizenship` (P27): `Israel` (Q801)
     - `employer` (P108): the Bina Labs Q-item from step 6
     - `position held` (P39): `principal` or `founder`
     - `educated at` (P69): your university Q-item if applicable
   - Add the LinkedIn profile as an external identifier (LinkedIn personal profile ID: P6634)
8. Back on the Bina Labs Q-item, **add the founder/CEO statement linking to your personal Q-item.**
9. **Crucially**: every statement should have a *reference*. Click "Add reference" and link to a 3rd-party source (a news article, the company website, a podcast appearance). Wikidata is strict about unsourced claims - they may be deleted. The bina-labs.com homepage counts as a reference for the official website property. For founder/role claims, link to an interview or article that names you.
10. Once both items are live (no deletion proposals after 24 hours), add them to the `sameAs` arrays in your schema:
    - In `src/data/social.js` (created by subagent A), add:
      ```js
      orgSocialLinks: [..., 'https://www.wikidata.org/wiki/Q<your-org-number>']
      personSocialLinks: [..., 'https://www.wikidata.org/wiki/Q<your-person-number>']
      ```

**Cost:** Free. **Time:** 30-60 minutes for first-time users. Wikidata moderators may edit your statements or ask for refs - respond politely. Plan B: hire a freelancer who does Wikidata for $100-200. The benefit lasts years.

**Wikipedia note:** Don't try to create a Wikipedia article yet - Wikipedia has a much higher notability bar (multiple feature-length 3rd-party articles, not interviews). Wikidata first; Wikipedia downstream of earned editorial coverage.

---

## Critical #3: Add `Organization.sameAs` + centralize social links (subagent A - in progress)

Subagent A is operating in an isolated git worktree right now. It's:
1. Reading the existing OrganizationSchema and PersonSchema components.
2. Curl-verifying which external profile URLs actually exist (LinkedIn company, GitHub org, Crunchbase, X handles, etc.) - only verified URLs are added.
3. Creating `src/data/social.js` as a central registry.
4. Wiring both schemas to read from the registry.
5. Building to confirm no breakage.
6. Committing to a feature branch in the worktree.

You'll get the agent's report when it finishes (curl results, files changed, branch name). I'll then merge that branch into `main` after you've reviewed.

---

## Critical #4: Decouple BlogPosting `dateModified` (subagent B - in progress)

Subagent B is operating in a separate worktree, doing:
1. Read BlogPostingSchema.astro - currently hardcodes `dateModified = datePublished`.
2. Modify it to accept a `dateModified` prop independently.
3. Add `dateModified` to each post's data in `src/data/writings.js` (initially equal to datePublished so no behavior change on first deploy).
4. Update `src/pages/writing/[slug].astro` to pass the prop.
5. Add a visible "Updated: [Month YYYY]" badge in `BlogPostBody.jsx` that renders only when `dateModified > datePublished`.
6. Build, commit, report.

After merge, when you substantively refresh a blog post:
- Edit the content (20%+ new material or 500+ words)
- Bump `dateModified` in `writings.js` to today's date
- The schema and the visible badge update automatically.

---

## Critical #5: Question-format H2/H3 + Answer Capsules (awaiting approval)

See the proposals section below. The pattern preserves all your brand H1/H2 visual identity and adds:
- A small visible answer-capsule paragraph (40-60 words) immediately below each section's brand H2
- Optional `aria-label` on each brand H2 carrying the question form (invisible to humans, visible to AI extractors)

The exact rewrites are in the H2/H3 proposals section below. Approve, edit, or reject each line; I'll launch Subagent C to implement once approved.

---

## H2/H3 Proposals (awaiting approval)

### Approach
- **Keep all existing brand H1/H2 phrasing** ("Decks don't run in production.", "One operator. Senior by default.", etc.). These are part of your visual signature - lose them and you lose voice.
- **Below each brand H2**, insert a new 40-60 word **answer-capsule paragraph** that opens with a question phrasing and immediately answers it. This is what AI engines extract.
- **On the H2 element itself**, add an `aria-label` attribute carrying the question form. Invisible visually, present in the DOM, treated as the section's semantic name by AI extractors and screen readers.
- For section eyebrows (the small `// 02_manifesto · last edited...` lines), reuse the existing slot - they stay decorative, no change needed.

### Per-page proposals

#### `/` (HomeBody.jsx)

| Location | Current H1/H2 | Proposed question + answer capsule (insert below) | Proposed `aria-label` |
|----|----|----|----|
| L52 (H1) | "Architectural intelligence of tomorrow_" | _(unchanged - hero brand mark)_ | "What is Bina Labs?" |
| L66 (H2) | "AI consulting and engineering studio. We build production AI systems..." | _(unchanged - this is already strong; it IS the answer capsule)_ | (keep as-is) |
| L172 (H2) | "Decks don't run in production." | **Why don't strategy decks ship AI to production?** Decks describe ambition; production AI needs evals, retrieval pipelines, on-prem cost budgets, and someone willing to debug at 2 a.m. Bina Labs builds the system, hands you the runbook, and leaves on day 90 with your team owning the code. | "Why don't strategy decks ship AI to production?" |
| L317 (H2) | "Four ways to work with us" | **How can you engage Bina Labs?** Four formats, fixed scopes, transparent USD pricing: AI Strategy ($10k, 2 weeks), AI/SW Engineering ($20k/mo, embedded), Lectures & Workshops ($10k/day), and Research (custom with frontier labs). Every engagement comes with a written hand-off plan and our honest-deprecation guarantee. | "How can you engage Bina Labs?" |

#### `/services` (ServicesBody.jsx)

| Location | Current H1/H2 | Proposed question + answer capsule | `aria-label` |
|----|----|----|----|
| L28 (H1) | "Four ways..." | _(unchanged)_ | "How do you work with Bina Labs?" |
| Each `<ServiceDetailRow>` H2 (the service name "AI Strategy", "AI/SW Engineering", "Lectures & Workshops", "Research") | (varies) | Reuse the existing `tagline` slot but reformat as a question. E.g., AI Strategy tagline becomes: **What does an AI Strategy engagement look like?** Two intensive weeks. Senior operators, no juniors. Deliverable: a written thesis, an eval harness running on your data, and a refund offer if we conclude the project shouldn't ship. | (one per service - "What does an AI Strategy engagement look like?", "How does AI/SW Engineering embedding work?", "What do Bina Labs lectures cover?", "What kind of research does Bina Labs do?") |
| L168 (H2) | "From hello to handoff." | **How does a Bina Labs engagement run from first call to handoff?** Five stages: (1) 30-min intro call, (2) scoping memo with fixed scope and price, (3) kickoff in week one, (4) weekly written progress notes, (5) hand-off with runbook, eval suite, and your engineers shadowing in week 8-10. Average total elapsed time: 11 days median. | "How does a Bina Labs engagement run from first call to handoff?" |
| L218 (H2) | "How to buy us." | **How do you buy a Bina Labs engagement?** Email `intelligence@bina-labs.com` with what you're trying to do (3-5 sentences). We respond within 2 business days with either a scoping call or a polite no. No procurement portals, no SOW templates from 2014, no quarterly contracts - just a one-page agreement and a Stripe invoice. | "How do you buy a Bina Labs engagement?" |

#### `/about` (AboutBody.jsx)

| Location | Current H1/H2 | Proposed question + answer capsule | `aria-label` |
|----|----|----|----|
| L71 (H1) | "One operator. Senior by default." | _(unchanged - signature line)_ | "Who runs Bina Labs?" |
| L151 (H2) | "Where we've been." | **Where has Michael Fleicher worked before Bina Labs?** Two-time CTO, ex-founder of Storywise (acquired), ex-tech lead at [Company], 14+ years shipping production systems in vision, NLP, agent infrastructure, and on-prem inference. Hands-on with every layer from CUDA kernels to enterprise sales calls. Based in Tel Aviv and Berlin; speaks at conferences twice a year. | "Where has Michael Fleicher worked before Bina Labs?" |
| L220 (H2) | "The engagement." | **How does a Bina Labs engagement actually run day-to-day?** Slack channel in your workspace, daily standup if you want, weekly written progress note either way, code in your repo from day one. No client-portal theatre, no offshore subcontracting, no junior consultants ghostwritten by senior bios. The person on the call is the person writing the code. | "How does a Bina Labs engagement actually run day-to-day?" |
| L277 (H2) | "We're hiring." | **Who is Bina Labs hiring?** Senior AI engineers (5+ years production, comfortable with eval harnesses and RAG plumbing) and applied AI researchers (paper + code, not paper-only). Roles are remote-first with Tel Aviv and Berlin hubs; comp is at top-tier startup band plus profit share. Email `intelligence@bina-labs.com` with three projects you've shipped end-to-end. | "Who is Bina Labs hiring?" |
| L562 (H2) | "Operating principles." | **What principles does Bina Labs operate by?** Four rules: (1) Senior by default - no juniors on client work, (2) Built to leave - every engagement ships a hand-off plan from day one, (3) Honest deprecation - if a project shouldn't ship we tell you and refund the remainder, (4) Production over prototype - we ship to your users, not your slide deck. | "What principles does Bina Labs operate by?" |

#### `/manifesto` (ManifestoBody.jsx)

| Location | Current | Proposed question + answer capsule | `aria-label` |
|----|----|----|----|
| L64 (H1) | "Seven things..." | _(unchanged)_ | "What does Bina Labs believe about AI?" |
| Below the H1, before the seven tenets | _(nothing currently)_ | **What does Bina Labs believe about AI in production?** Seven operating tenets shaped by twelve years of shipping AI to real users: production beats prototype, senior beats junior, evals beat vibes, on-prem beats lock-in, deprecation beats sunk cost, hand-off beats lock-out, and writing things down beats meeting about them. | (n/a - this is a body paragraph) |

#### `/work` (WorkBody.jsx)

| Location | Current | Proposed question + answer capsule | `aria-label` |
|----|----|----|----|
| L55 (H1) | "Things we..." | _(unchanged)_ | "What has Bina Labs built for clients?" |
| Below the H1, before the case-study grid | _(nothing currently)_ | **What kinds of AI systems has Bina Labs shipped to production?** Four published case studies as of May 2026, covering: cinematic match-cut detection (Match Cuts), automated bill-of-quantities for construction (Auto-QTO), insurance underwriting copilots (Lloyd Score), and caseworker triage automation (Caseworker). Engagement lengths ranged from 6 to 14 weeks; all systems are in production with their respective teams now owning the code. | (n/a) |

#### `/work/[slug]` (CaseStudyBody.jsx) - applied to each case study

| Location | Current | Proposed question + answer capsule | `aria-label` |
|----|----|----|----|
| L47 (H1) | `{data.title}` | _(unchanged - the case-study brand title)_ | "What did Bina Labs build for {client}?" (template - resolves at render time) |
| L170 (H2 - case-specific) | `{t1} {t2}` | Each case study gets a question + 40-60 word answer capsule slotted below the existing H2. **Concrete proposal per case study (4 entries) deferred to the implementing subagent - it will read `caseStudies.js` and generate one per slug.** | (per case study) |
| L211 (H2) | "The receipts." | **What are the measurable outcomes of this engagement?** Outcomes block - reuses the existing `mentions` array from `caseStudies.js` as the answer body. (No new copy needed - the data is already there; we just frame it under a question.) | "What are the measurable outcomes of this engagement?" |

---

## Subagent C (pending H2/H3 approval)

Once you approve (or revise) the proposals above, Subagent C will be launched in a third worktree to implement them:

1. Read each body component (`HomeBody.jsx`, `ServicesBody.jsx`, `AboutBody.jsx`, `ManifestoBody.jsx`, `WorkBody.jsx`, `CaseStudyBody.jsx`)
2. Add `aria-label` attribute to each H1/H2 element identified above
3. Insert the proposed answer-capsule paragraph as a sibling element directly after each marked H2, styled in `BL.mono` 13px copper to match the eyebrow tone (or a slightly different size if the existing answer-capsule pattern in blog posts uses different styling - it will match)
4. For case studies, generate one answer capsule per slug from the `caseStudies.js` data
5. Build, commit, report

---

## Yellow (recommended) follow-ups - not part of this phase

These are from the audit's "🟡 Recommended improvements" - schedule for weeks 4-12:
- Add `Claude-SearchBot`, `Applebot-Extended`, `Meta-ExternalAgent`, `DuckAssistBot`, `Amazonbot` to `robots.txt`
- Add `Review` / `AggregateRating` schema using anonymized client testimonials
- Add `twitter:site` and `twitter:creator` handles to OG meta
- Change case-study schema from `CreativeWork` to `Article` + add `image`
- Add `Course` and `Event` schema for the Lectures & Workshops offering
- Add `WebSite` + `SearchAction` schema at layout root
- Promote the 6 LinkedIn posts in `linkedin-posts/` to `/writing/` entries
- Build out the 13 additional case studies (currently 4 of 17 mentioned exist)
- Server-log audit (Cloudflare Radar or Vercel log drain) for ground-truth AI bot visits
- Verify `/favicon.ico` exists (404 right now per audit)

---

## Recommended execution order

1. **Today (10 minutes):** Set up `www.` redirect in Vercel dashboard (#1).
2. **Today (30-60 minutes):** Create Wikidata Q-items for Bina Labs and Michael Fleicher (#2).
3. **Today (waiting on subagents):** Subagent A and B finish, you review their reports, I merge their branches to `main`. After merge, add the new Wikidata URLs to `social.js`.
4. **After H2/H3 approval:** Subagent C implements #5. You review the diff, I merge.
5. **Within 7 days:** Substantively refresh both existing blog posts (20%+ new content), bump `dateModified` to today, deploy. This activates the "Updated: May 2026" badge and recaptures the freshness signal.
6. **Re-run audit in 30 days:** Compare SOMV (Share of Model Voice) across ChatGPT, Perplexity, Gemini, Claude. Look for entity-graph improvement (your brand now resolves consistently across surfaces).

---

## File saved to
`/Users/michaelfleicher/Desktop/repos/bina-labs-webpage/outputs/aeo/bina-labs_plan_2026-05-13.md`
