import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [{ path: '/', h1: 'AgentDrops' }];

for (const { path, h1 } of pages) {
  test(`${path} renders without errors and has no accessibility violations`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(h1);

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('unknown pages get the custom 404', async ({ page }) => {
  const res = await page.goto('/no-such-page/');
  expect(res?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page not found');
});
