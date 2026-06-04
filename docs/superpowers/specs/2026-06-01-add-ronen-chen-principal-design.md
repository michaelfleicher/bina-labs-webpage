# Add Ronen Chen as a Second Principal - Design Spec

**Date:** 2026-06-01
**Status:** Draft - awaiting final inputs (see Open Inputs)

## Goal

Add Ronen Chen as a second, equal principal of Bina Labs across the website. Today the
entire brand is architected around one operator (Michael Fleicher). This spec reframes the
studio as a **two-principal partnership** and adds Ronen's distinct business line
(innovation & funding consulting) as a new service.

## Decisions (locked)

- **A. Positioning:** Keep "One operator" as the **engagement model**, not a headcount claim.
  Michael and Ronen each run their own engagements solo, so every client still works with a
  single senior operator end to end - the promise "the person you meet is the person who
  builds" stays intact. The studio simply now has **two** operators you can engage, split by
  domain (Michael: AI & engineering; Ronen: innovation & grant strategy). Equal visual and
  narrative standing; do NOT use "equal billing", "partnership", or "two principals" framing.
  - Hero headline `One operator. / Senior by default.` is **kept**.
  - Hero intro reframed to introduce both operators and make the one-per-engagement promise
    explicit: "Bina Labs is two senior operators - Michael Fleicher and Ronen Chen. You work
    with one of them, directly, end to end. Different problem, different operator - never a
    committee, never a junior. The person you meet is the person who builds."
  - Recurring singular "the principal / work directly with the principal" copy stays singular
    (true per engagement); reads as "your principal" where natural.
- **B. Services:** Ronen's funding/innovation work becomes a **new 5th service line**
  ("Innovation & Grant Strategy"), added everywhere services are defined. "Four ways we engage"
  becomes "Five."
- **C. Org schema:** `founder` becomes an array of both people (both presented as founders/principals).

## Ronen Chen - source profile (distilled)

- **Name:** Ronen Chen
- **Role/title (site):** Principal. Both Michael and Ronen are principals (equal). Michael
  keeps "Founder & Principal" (he founded the studio); Ronen is "Principal". Both captioned
  as principals of Bina Labs.
- **One-line:** AI & deep-learning expert, innovation strategist, and funding advisor -
  20+ years bridging advanced technology and commercial success.
- **Schema description:** "AI and deep-learning expert, innovation strategist, and funding
  advisor with 20+ years bridging advanced technology and commercial success. Helps
  startups, SMEs, and research organizations secure competitive funding (Horizon Europe,
  EIC Accelerator, Eurostars, BIRD Foundation, Israel Innovation Authority) and turn
  breakthrough ideas into funded, scalable ventures."
- **knowsAbout:** Artificial Intelligence, Deep Learning, Machine Learning, Data Science,
  Innovation Management, Grant & Funding Strategy, Horizon Europe, EIC Accelerator,
  Technology Due Diligence, Commercialization Strategy, Deep Tech, International Partnerships.
- **Receipts (parallel to Michael's RECEIPTS array):**
  - `20+ yrs` - AI · Deep Learning · innovation management - `[craft]`
  - `EU funding` - Horizon Europe · EIC · Eurostars · BIRD · IIA - `[ventures]`
  - `Advisor` - Deep Tech · Cyber · Digital Health · Climate · FinTech - `[craft]`
  - `Strategy` - commercialization · due diligence · consortia - `[leadership]`

## New service line - "Innovation & Grant Strategy"

Added to ServicesBody (detail card), HomeBody (preview), ServiceSchema (JSON-LD), and a
new SERVICES_FAQS entry.

- **tagline:** "Turn breakthrough tech into funded ventures."
- **outcome:** "A funded roadmap and an investor-ready story."
- **deliverables:**
  - Grant & funding strategy (Horizon Europe, EIC Accelerator, Eurostars, BIRD, IIA)
  - Proposal writing & submission support
  - Business plans & commercialization strategy
  - Technology due diligence & evaluation
  - International partnerships & consortium building
  - R&D planning & technology roadmapping
- **best:** "Startups, SMEs, and research organizations seeking competitive funding and a
  credible path to market."

## Work breakdown

### 1. Image asset
- Move `Ronen.png` (repo root) → `src/assets/ronen.png`. Already 1239×1269 and B&W; matches
  Michael's portrait dimensions and the 4:5 grayscale `PortraitFrame` treatment. No resize.
- Remove the root-level `Ronen.png`.

### 2. About page (`AboutBody.jsx`, `about.astro`)
- Hero headline `One operator. / Senior by default.` is **kept** (engagement-model promise).
- Hero intro: rewrite to introduce both operators + the one-per-engagement promise (copy in
  Decision A). Eyebrow `// about · the operator` → `// about · the operators`.
- Refactor `PortraitFrame` to take `src` / `label` / `alt` / `objectPosition` props; render
  two portraits (Michael + Ronen) side by side, each with a domain caption (Michael: "AI &
  engineering"; Ronen: "Innovation & grant strategy"). Both captioned principals of Bina Labs.
- Refactor `OperatorReceipts` to render Michael's receipts AND a parallel Ronen receipts
  block, each with its own intro paragraph and LinkedIn link.
- `BenchBlurb` + Discovery phase copy stay singular ("work directly with your principal").
- Update `about.astro` `<title>` and meta description to name both operators (keep <=160
  chars per AGENTS.md meta rule).

### 3. Positioning copy elsewhere
- `ManifestoBody.jsx` line 143: signature → "Signed by Michael Fleicher & Ronen Chen · 2025".
- `manifesto.astro` schema author: keep Michael as author OR switch to Organization author
  (default: keep as-is unless the manifesto is jointly authored - confirm).
- Homepage hero/tagline: verify no "one operator" contradiction remains.

### 4. Services (5th line)
- `ServicesBody.jsx` (services array): add Innovation & Funding card.
- `HomeBody.jsx` (HomeServices array): add svc.05; update "Four ways we engage" → "Five".
- `ServiceSchema.astro`: add JSON-LD entry (serviceType "Innovation & Funding Consulting";
  price `null`/custom unless specified).
- `faqs.js` SERVICES_FAQS: add 1–2 funding/grant FAQs.

### 5. Structured data / SEO
- New `RonenPersonSchema.astro` mirroring `PersonSchema.astro` (id `#ronen`).
- Render Ronen's PersonSchema on the about page alongside Michael's.
- `OrganizationSchema.astro`: `founder` → `[Michael, Ronen]` array.
- `social.js`: add `ronenSocialLinks` (LinkedIn at minimum).
- `CaseStudySchema.astro` / `BlogPostingSchema.astro`: make `sameAs` author-aware (derive
  from author/lead rather than hardcoding Michael's LinkedIn) so Ronen-attributed content
  links correctly. Falls back to Michael when unknown.

### 6. FAQs (`faqs.js`)
- Add "Who is Ronen Chen?" to ABOUT_FAQS (parallel to Michael's).
- Contact response FAQ (line 124): drop the named person. Reword so no individual is named
  (e.g. "Within one business day, a written reply - no assistants, no auto-responders, no
  qualification gates. Office hours every Thursday 14 to 16 IST.").

### 7. Footer (`Chrome.jsx`)
- Add Ronen's LinkedIn to the social column (or make principal social data-driven).

### 8. Case-study bylines (`CaseStudyBody.jsx`)
- Derive the byline profile anchor from `team.lead` (`#michael` / `#ronen`) instead of
  hardcoding `#michael`. No content change to existing studies unless Ronen led them.

## Out of scope (YAGNI)
- No new `/team` or `/about/ronen` page - both principals live on the existing `/about`.
- No billing/pricing/ownership detail for the partnership.
- No rewrite of existing case studies (Michael remains lead on all four current ones).
- No GitHub/X/Mastodon for Ronen unless provided (LinkedIn only).

## Inputs (resolved)
- **LinkedIn:** https://www.linkedin.com/in/ronen-chen/ (receipts link, `ronenSocialLinks`,
  PersonSchema `sameAs`, footer).
- **Email:** omitted from Ronen's PersonSchema (optional field; not displayed on page).
- **Title:** "Principal" (Michael stays "Founder & Principal").
- **Service line:** "Innovation & Grant Strategy".
- **Contact FAQ:** names no individual.

## Verification
- `npm run build` succeeds; about & services pages render two principals / five services.
- JSON-LD validates (two Person schemas, Organization with two founders, five Service entries).
- No remaining singular "one operator / the principal / by Michael" copy except where intentional.
