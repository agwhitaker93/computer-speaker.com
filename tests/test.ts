import { expect, test } from '@playwright/test'

test('music page has expected h1', async ({ page }) => {
  await page.goto('/music')
  await expect(page.getByRole('heading', { name: 'I make music' })).toBeVisible()
})
