import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', h1: 'We experiment first. Then we drop it for you.' },
  { path: '/services/', h1: 'Agents, voice and software. Proven before they’re built.' },
  { path: '/lab/', h1: 'We find out if it works before you pay for it to be built.' },
  { path: '/company/', h1: 'Researchers who ship.' },
  { path: '/contact/', h1: 'Tell us what you want to build.' },
];

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} mode`, () => {
    test.use({ colorScheme });

    for (const { path, h1 } of pages) {
      test(`${path} renders without errors and has no accessibility violations`, async ({
        page,
      }) => {
        const errors: string[] = [];
        page.on('pageerror', (e) => errors.push(e.message));
        page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

        await page.goto(path);
        await expect(page.getByRole('heading', { level: 1 })).toHaveText(h1, {
          useInnerText: true,
        });

        const results = await new AxeBuilder({ page }).analyze();
        expect(results.violations).toEqual([]);
        expect(errors).toEqual([]);
      });
    }
  });
}

test('unknown pages get the custom 404', async ({ page }) => {
  const res = await page.goto('/no-such-page/');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
});

test('service cards link to their section on the services page', async ({ page }) => {
  await page.goto('/');
  await page
    .getByRole('link', { name: /Voice agents/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/services\/#voice-agents$/);
  await expect(page.locator('#voice-agents-title')).toBeVisible();
});
