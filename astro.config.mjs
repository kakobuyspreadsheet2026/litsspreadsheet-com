import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteOrigin } from './site.config.mjs';

const site = siteOrigin;

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      /** Ensure trailing-slash URLs for routes that need explicit inclusion (must stay crawlable). */
      customPages: [
        new URL('/news/openstar-recruit/', site).href,
        new URL('/promotions/litbuyspreadsheet-may-2026/', site).href,
      ],
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;
        const segs = path.split('/').filter(Boolean);
        if (segs[0] === 'spreadsheet' && segs.length >= 3) {
          return false;
        }
        if (segs.includes('category')) {
          return false;
        }
        return true;
      },
    }),
  ],
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'pt', 'es', 'fr', 'it', 'pl'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  /**
   * Dev on **4789** so it does not collide with `kakobuy-cn-com` (4788) or other Astro stacks on **4321**.
   * Bind to loopback only — `host: true` can trigger `os.networkInterfaces()` bugs on some macOS/Node combos (uv_interface_addresses).
   * Open: `http://127.0.0.1:4789/` (not always reachable as `localhost` if IPv6 is odd — prefer 127.0.0.1).
   */
  server: {
    port: 4789,
    host: '127.0.0.1',
    open: '/',
    headers: {
      'Cache-Control': 'no-store',
    },
  },
});
