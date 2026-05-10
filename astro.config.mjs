import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bina-labs.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
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
