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
