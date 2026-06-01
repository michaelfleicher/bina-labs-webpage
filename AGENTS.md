# 1. after each code change - make sure to see it the readmy should by adjusted/updated accirdinglly.
# 2. each edit should be fixed on both mobile and desktop (unless you've specific asked to edit just one of them)
# 3. every page's meta description (the `description` passed to BaseLayout) MUST be between 25 and 160 characters. Search engines (Google/Bing) flag anything outside this range.
#    - for static pages: keep the hardcoded `description` const within 25-160 chars.
#    - for new writing posts in src/data/writings.js: ALWAYS add a `metaDescription` field (25-160 chars). The on-page `description`/`tagline` is usually too long; writing/[slug].astro prefers `metaDescription` for the meta tag.
#    - for new case studies in src/data/caseStudies.js: keep the field used for the meta description within 25-160 chars.
#    - after adding/editing any page, verify with: npm run build, then check that no built page's <meta name="description"> exceeds 160 chars.