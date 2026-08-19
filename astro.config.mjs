import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { WRITINGS } from './src/data/writings.js';
import { CASE_STUDIES } from './src/data/caseStudies.js';

// Per-URL lastmod from real content dates; static pages fall back to build date.
const BUILD_DATE = new Date();
const LASTMOD = new Map();
for (const w of Object.values(WRITINGS)) {
  const d = w.dateModified || w.datePublished;
  if (d) LASTMOD.set(`/writing/${w.slug}`, new Date(d));
}
for (const c of Object.values(CASE_STUDIES)) {
  const d = c.dateModified || c.datePublished;
  if (d) LASTMOD.set(`/work/${c.slug}`, new Date(d));
}

export default defineConfig({
  site: 'https://bina-labs.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      // /feedback is an unlisted client-only page: keep it out of the sitemap.
      filter: (page) => !new URL(page).pathname.startsWith('/feedback'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
        item.lastmod = (LASTMOD.get(path) ?? BUILD_DATE).toISOString();
        return item;
      },
    }),
  ],
  server: {
    port: 5173,
    host: true,
  },
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com', '.ngrok-free.app', '.ngrok.io', 'localhost'],
    },
  },
});
