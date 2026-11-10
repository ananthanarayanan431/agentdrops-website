import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Serve the production build the way Cloudflare does, with redirects,
    // headers and the 404 page applied. CI builds first and sets E2E_SKIP_BUILD.
    command: `${process.env.E2E_SKIP_BUILD ? '' : 'pnpm build && '}pnpm exec wrangler dev --port 4321`,
    env: { WRANGLER_SEND_METRICS: 'false' },
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
