import { test, expect } from '@playwright/test';

test('hello world', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Example Domain');
});
