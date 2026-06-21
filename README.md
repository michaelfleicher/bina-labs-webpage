# bina-labs.com
https://www.bina-labs.com

Marketing site for Bina Labs — architectural intelligence of tomorrow.

Built with **Astro 6 + React 18** (static-site generation). Migration in
progress on the `astro-migration` branch from a Vite SPA to per-route static
HTML so AI crawlers (ClaudeBot, PerplexityBot, GPTBot, Bytespider, CCBot) can
read every page without executing JavaScript. See
[plan-the-astro-nextjs-you-jazzy-dolphin.md](../../.claude/plans/plan-the-astro-nextjs-you-jazzy-dolphin.md)
for the full migration plan.

Pages: home, services, work (filterable), case-study (slug-driven), about,
manifesto, writing (coming-soon banner), contact.

The visual system (`src/system/bl.js`) mirrors the design handoff: navy ground,
cyan-bone surface, lime + teal accents. Geist for sans display, Fraunces for
serif italics, JetBrains Mono for technical type.

## Run locally

```bash
npm install
npm run dev
```

The Astro dev server listens on http://localhost:5173.

## Build

```bash
npm run build       # outputs to dist/
npm run preview     # serves the built output
```

The output is a static site — deployable to any static host (Vercel, Netlify,
Cloudflare Pages, S3+CloudFront).

## Forms (Web3Forms)

The contact form (`#contact`) and the careers apply modal (`#about`) submit to
[Web3Forms](https://web3forms.com) - a static-friendly form-to-email relay.

1. Create a free Web3Forms account at https://web3forms.com.
2. Add `intelligence@bina-labs.com` as the destination address; verify it.
3. Copy the access key shown on the dashboard.
4. Locally: `cp .env.example .env.local` and paste the key into
   `PUBLIC_WEB3FORMS_KEY`.
5. On the host (Vercel/Netlify/etc.): set `PUBLIC_WEB3FORMS_KEY` as an
   environment variable and redeploy.

Without the key, both forms show a graceful fallback pointing users to email.

## Analytics (Google Analytics 4)

Page views are sent to GA4 when `PUBLIC_GA_ID` is
configured. [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) imports
[src/system/analytics.js](src/system/analytics.js) and wires `initAnalytics()`
plus a `setupRouteTracking()` listener that fires `page_view` on initial load
and on every Astro `astro:after-swap` view-transition navigation.

1. Sign in at https://analytics.google.com.
2. **Admin → Create → Account** (e.g. `Bina Labs`).
3. **Create Property** for `bina-labs.com`, set timezone + currency.
4. Add a **Web data stream** for `https://bina-labs.com`. Leave **Enhanced
   measurement** on - it captures scrolls, outbound clicks, and downloads for
   free.
5. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
6. Locally: paste it into `PUBLIC_GA_ID` in `.env.local`.
7. On the host: set `PUBLIC_GA_ID` as an environment variable and redeploy.

Without the ID, the GA script never loads (zero network/runtime cost). Custom
events can be sent via `trackEvent(name, params)` from
[src/system/analytics.js](src/system/analytics.js).

## SEO / AEO

Static files served from the `public/` root and copied verbatim into `dist/`:

- [public/robots.txt](public/robots.txt) - explicitly allows GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended and other AI crawlers; points to the sitemap.
- [public/sitemap.xml](public/sitemap.xml) - lists the home page plus the hash
  routes (services, work, about, manifesto, contact, and the four featured case
  studies).
- [public/llms.txt](public/llms.txt) - Markdown summary read by Anthropic,
  OpenAI, and Perplexity crawlers. Format follows
  [llmstxt.org](https://llmstxt.org).
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) - per-page
  `<title>`, `<meta description>`, `<link rel="canonical">`, Open Graph and
  Twitter Card tags, font preconnects, the global `Organization` JSON-LD, and
  a `<slot name="head" />` that each route uses to inject page-specific schema
  blocks (FAQ, Person, Service, ProfessionalService, BreadcrumbList,
  CreativeWork, ItemList).
- [src/components/schema/OrganizationSchema.astro](src/components/schema/OrganizationSchema.astro) -
  global Organization JSON-LD on every route.
- [src/components/schema/PersonSchema.astro](src/components/schema/PersonSchema.astro) -
  Michael Fleicher Person JSON-LD with `sameAs` (LinkedIn) and `knowsAbout`.
  The `fullBio` prop expands the schema with `hasOccupation`, `alumniOf`, and
  `address` for the about page.
- [src/components/schema/ServiceSchema.astro](src/components/schema/ServiceSchema.astro) -
  emits a `Service` JSON-LD per offering on the services page, each with an
  `Offer` and `PriceSpecification` (USD).
- [src/components/schema/LocalBusinessSchema.astro](src/components/schema/LocalBusinessSchema.astro) -
  `ProfessionalService` JSON-LD on the contact page with Tel Aviv address,
  opening hours, and contact point.
- [src/components/schema/ItemListSchema.astro](src/components/schema/ItemListSchema.astro) -
  `ItemList` of `CreativeWork` references on the work index for case studies.
- [src/components/schema/FAQSchema.astro](src/components/schema/FAQSchema.astro) -
  `FAQPage` JSON-LD; takes a `faqs` prop. Wired on home, services, about,
  manifesto, contact, and every case study page.
- [src/components/schema/CaseStudySchema.astro](src/components/schema/CaseStudySchema.astro) -
  `CreativeWork` JSON-LD per case study route with `author` (Michael Fleicher,
  Person), `datePublished`, `mentions` (outcomes), and `contributor`.
- [src/components/schema/BreadcrumbSchema.astro](src/components/schema/BreadcrumbSchema.astro) -
  `BreadcrumbList` JSON-LD on every non-home route.
- [src/data/faqs.js](src/data/faqs.js) - the canonical FAQ banks
  (`HOME_FAQS`, `SERVICES_FAQS`, `ABOUT_FAQS`, `MANIFESTO_FAQS`,
  `CONTACT_FAQS`, `CASE_STUDY_FAQS` per slug). Same source feeds the visible
  Q&A and the FAQPage JSON-LD.
- [src/components/react/FAQSection.jsx](src/components/react/FAQSection.jsx) -
  renders the visible accordion of Q&A inside each React body so the answers
  land in the static HTML for AI crawlers, with microdata fallbacks
  (`itemprop="mainEntity"`, `itemprop="acceptedAnswer"`, `itemprop="text"`).
- Case study `team` and `datePublished` metadata in
  [src/data/caseStudies.js](src/data/caseStudies.js) drive a "By Michael
  Fleicher · Principal" byline below each case study hero, linking to
  `/about#michael`.

Phase 5 (AEO content additions) is complete: every high-leverage route now
ships an `FAQPage` JSON-LD with matching visible Q&A (home 9, services 7,
about 5, manifesto 5, contact 4, every case study 6). Author signals are
wired (Person JSON-LD with `sameAs` + `knowsAbout` on home, about, manifesto,
case studies; case-study `author` is a `Person` referencing `/about#michael`,
not the Organization). Services emits a `Service` block per offering with
`Offer` + `PriceSpecification`; contact emits `ProfessionalService` with Tel
Aviv address and office hours; the work index emits `ItemList` of
`CreativeWork` references; every non-home route ships `BreadcrumbList`.
A "By Michael Fleicher · Principal" byline links from each case study hero
to `/about#michael`.

Phase 4 (navigation rewrite) is complete: `BLNav`, `BLFooter`, every CTA, every
work card, and every related-case-study tile now render real `<a href="/path">`
anchors in the SSR HTML. The `navigate(page)` shim
(`src/system/navigate.js`) and the legacy `App.jsx` / `main.jsx` SPA entry
points are gone. Phase 3 (page migration) is also complete: every route
renders full crawlable HTML at build time. The 8 React page bodies live in
[src/components/react/](src/components/react/) and hydrate as islands inside
their matching `.astro` route in [src/pages/](src/pages/).

## Layout

```
astro.config.mjs           # Astro config: site URL, React + sitemap integrations
src/
  layouts/
    BaseLayout.astro       # <head>, SEO meta, Organization JSON-LD, ClientRouter, GA4
  components/
    Chrome.jsx             # BLNav, BLFooter, BLEyebrow, BLPillButton, BLPillLink, BLMarquee
    react/                 # React page-body islands hydrated by .astro routes
      HomeBody.jsx
      ServicesBody.jsx
      WorkBody.jsx
      CaseStudyBody.jsx        # also renders the author byline
      AboutBody.jsx
      ManifestoBody.jsx
      WritingBody.jsx
      ContactBody.jsx
      FAQSection.jsx           # visible Q&A accordion shared by all bodies
    schema/
      OrganizationSchema.astro  # global Organization JSON-LD
      PersonSchema.astro        # Person (Michael Fleicher) - default + fullBio
      ServiceSchema.astro       # Service x4 + Offer + PriceSpecification
      LocalBusinessSchema.astro # ProfessionalService for /contact
      ItemListSchema.astro      # ItemList of CreativeWork for /work
      FAQSchema.astro           # FAQPage JSON-LD from a faqs prop
      CaseStudySchema.astro     # CreativeWork JSON-LD per case study
      BreadcrumbSchema.astro    # BreadcrumbList JSON-LD
  pages/
    index.astro            # /
    services.astro         # /services
    about.astro            # /about
    manifesto.astro        # /manifesto
    writing.astro          # /writing
    contact.astro          # /contact
    work/
      index.astro          # /work
      [slug].astro         # /work/<slug> (getStaticPaths over CASE_STUDIES)
  data/
    caseStudies.js         # slug-keyed case study content (with team + datePublished)
    faqs.js                # FAQ banks (HOME_FAQS, SERVICES_FAQS, ABOUT_FAQS, etc.)
  system/
    bl.js                  # design tokens (BL)
    analytics.js           # GA4 init + astro:after-swap page_view dispatch
  styles.css               # global resets, animations, link/cursor utilities
  assets/michael.png       # principal portrait
```

## Routing

Astro's file-based routing replaces the old hash router. Each `.astro` file in
`src/pages/` is a real URL with its own static HTML, `<title>`, canonical, and
JSON-LD. The 8 page bodies are React islands in
[src/components/react/](src/components/react/), hydrated via `client:load` from
their matching `.astro` route. Case studies are statically generated for every
slug in [src/data/caseStudies.js](src/data/caseStudies.js) via `getStaticPaths`
in [src/pages/work/[slug].astro](src/pages/work/[slug].astro). View Transitions
(`<ClientRouter />` in BaseLayout) preserve the SPA-feel between navigations.

All in-app navigation uses real `<a href="/path">` anchors emitted in the SSR
HTML. View Transitions (`<ClientRouter />` in BaseLayout) intercept the click
and animate the swap, so the experience stays SPA-fast while crawlers see a
real link graph. The legacy `navigate('page')` shim has been removed.
[Chrome.jsx](src/components/Chrome.jsx) ships a `BLPillLink` component as the
anchor variant of `BLPillButton` for navigational call-to-actions; the button
form stays around for form submits.
