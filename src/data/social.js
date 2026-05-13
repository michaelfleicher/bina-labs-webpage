// Central registry of external profile URLs for JSON-LD `sameAs` entries.
//
// Why this exists:
//   AI engines (ChatGPT, Perplexity, Gemini) use `sameAs` to disambiguate
//   "Bina Labs" / "Michael Fleicher" from other entities with similar names.
//   Without `sameAs`, the brand/person is an island in the knowledge graph.
//
// Rules for adding entries:
//   1. Verify the URL returns a non-404 response (use `curl -sI -A "Mozilla/5.0" -L`).
//      LinkedIn often returns 999/405 to bots; that still counts as "exists" if
//      the profile is real. Twitter/X and Crunchbase hard-block with 403 -
//      verify the profile through a real browser before adding.
//   2. Prefer canonical capitalisation that the host actually redirects to.
//   3. Never add a placeholder, guess, or unverified URL. AI engines penalise
//      broken `sameAs` links and treat them as a signal of low-quality data.
//
// When you create a new profile (Crunchbase, X/Twitter, Mastodon, YouTube,
// company LinkedIn, etc.), append the verified URL to the matching array
// below - no other code change is required.

export const orgSocialLinks = [
  // Verified 2026-05-13: GitHub org "bina-Labs" returns 200 with the org page.
  'https://github.com/bina-labs',
  // Wikidata Q-item for Bina Labs (created 2026-05-13).
  'https://www.wikidata.org/wiki/Q139782974',
  // TODO: add verified company LinkedIn URL when the page is published
  //   (https://www.linkedin.com/company/<slug> - both bina-labs and binalabs
  //   currently 404).
  // TODO: add verified X/Twitter handle when claimed.
  // TODO: add verified Crunchbase URL once the org page is live.
];

export const personSocialLinks = [
  // Verified 2026-05-13: LinkedIn rejects HEAD with 405 but the profile is the
  // canonical one Michael links from this site.
  'https://www.linkedin.com/in/michaelfleicher',
  // Verified 2026-05-13: GitHub profile resolves to "michaelfleicher (Michael Fleicher)".
  'https://github.com/michaelfleicher',
  // Wikidata Q-item for Michael Fleicher (created 2026-05-13).
  'https://www.wikidata.org/wiki/Q139782987',
  // TODO: add verified X/Twitter handle when claimed
  //   (https://x.com/michaelfleicher currently hard-blocks bots with 403 - do
  //   not add until confirmed in a browser).
  // TODO: add verified personal site / Mastodon / Bluesky when available.
];
