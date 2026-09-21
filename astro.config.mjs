// @ts-check
import { defineConfig } from 'astro/config';

// Alpha Shift — a static, low-maintenance site.
// Set `site` to the production domain before deploying (used for canonical URLs / sitemaps).
export default defineConfig({
  // GitHub Pages project site — served under /alpha-shift/
  site: 'https://kalinigam.github.io',
  base: '/alpha-shift/',
});
