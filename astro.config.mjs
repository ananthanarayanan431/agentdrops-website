// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/site.ts';

// Old addresses, forwarded to where that content lives now: { '/old/': '/new/' }.
/** @type {Record<string, string>} */
const redirects = {};

/**
 * Write the redirects as a Cloudflare `_redirects` file, so the host answers
 * with a real 301 rather than serving Astro's meta-refresh page.
 * @type {import('astro').AstroIntegration}
 */
const cloudflareRedirects = {
  name: 'cloudflare-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const rules = Object.entries(redirects).map(([from, to]) => `${from} ${to} 301`);
      await writeFile(new URL('_redirects', dir), rules.length ? `${rules.join('\n')}\n` : '');
    },
  },
};

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  // Keep the whitespace between inline elements, so text reads with its spaces
  // intact in copy and paste and to screen readers.
  compressHTML: false,
  integrations: [react(), mdx(), sitemap(), cloudflareRedirects],
  // Fetch the next page while the visitor hovers or focuses a link.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  redirects,
  vite: {
    plugins: [tailwindcss()],
  },
});
