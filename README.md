# bina-labs.com

Marketing site for Bina Labs — architectural intelligence of tomorrow.

Built with **Vite + React 18**. Single-page app with hash-based routing.
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

The dev server listens on http://localhost:5173.

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
   `VITE_WEB3FORMS_KEY`.
5. On the host (Vercel/Netlify/etc.): set `VITE_WEB3FORMS_KEY` as an
   environment variable and redeploy.

Without the key, both forms show a graceful fallback pointing users to email.

## Analytics (Google Analytics 4)

Page views are sent to GA4 when `VITE_GA_ID` is configured. The site is a
hash-routed SPA, so [src/App.jsx](src/App.jsx) calls `trackPageView` once on
mount and again on every route change.

1. Sign in at https://analytics.google.com.
2. **Admin → Create → Account** (e.g. `Bina Labs`).
3. **Create Property** for `bina-labs.com`, set timezone + currency.
4. Add a **Web data stream** for `https://bina-labs.com`. Leave **Enhanced
   measurement** on - it captures scrolls, outbound clicks, and downloads for
   free.
5. Copy the **Measurement ID** (format `G-XXXXXXXXXX`).
6. Locally: paste it into `VITE_GA_ID` in `.env.local`.
7. On the host: set `VITE_GA_ID` as an environment variable and redeploy.

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
- [index.html](index.html) - includes `<title>`, `<meta description>`, Open
  Graph + Twitter Card tags, `<link rel="canonical">`, and an `Organization`
  JSON-LD block naming Michael Fleicher as founder.

Note: the site is currently a hash-routed client-side SPA. Many AI crawlers do
not execute JavaScript, so the rendered content is invisible to them. The
`llms.txt` summary is the primary mitigation until the site is migrated to a
prerendered / SSG setup (Astro, Next.js, or `vite-plugin-prerender`).

## Layout

```
src/
  App.jsx                  # hash router
  main.jsx                 # React entry
  styles.css               # global resets, animations, link/cursor utilities
  system/bl.js             # design tokens (BL)
  components/Chrome.jsx    # BLNav, BLFooter, BLEyebrow, BLPillButton, BLMarquee
  data/caseStudies.js      # slug-keyed case study content
  pages/
    Home.jsx               # #
    Services.jsx           # #services
    Work.jsx               # #work
    CaseStudy.jsx          # #case-study/<slug>
    About.jsx              # #about
    Manifesto.jsx          # #manifesto
    Writing.jsx            # #writing
    Contact.jsx            # #contact
  assets/michael.png       # principal portrait
```

## Routing

The router reads the URL hash; the base segment selects the page, the rest
(e.g. `case-study/match-cuts`) is consumed by the page itself. `navigate(path)`
updates the hash and scrolls to top. There is no server-side routing — any host
can serve `index.html` for every path.
