const { test, expect } = require('@playwright/test');

test('Navigate to home page, wait for venue list, click first venue, verify venue details', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://127.0.0.1:5500/');

  // Wait for the venue list to load
  await page.waitForSelector('#venue-container a');

  // Click the first venue
  await page.click('#venue-container a:first-child');

  // Verify that the venue details page loads with the heading "Loading venue..."
  const heading = (await page.textContent('h1')).trim();
  expect(heading).toBe('Loading venue...');
});
