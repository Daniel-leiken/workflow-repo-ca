import { test, expect } from '@playwright/test';

test.describe('Venue Tests', () => {
  test('User can navigate to the venue details page', async ({ page }) => {
    // Navigate to the home page
    await page.goto('http://127.0.0.1:5500'); 

    // Wait for the venue list to load
    await page.waitForSelector('#venue-container .venue-item', { timeout: 60000 }); 

    // Click the first venue
    await page.click('#venue-container .venue-item:first-child .venue-link');

    // Wait for the venue details page to load
    await page.waitForSelector('#venue-container', { timeout: 60000 });  // Assuming the venue details page has an h2 element

    // Verify that the venue details page contains the words "Venue Details" in the heading
    const heading = await page.locator('h2');
    await expect(heading).toHaveText(/Venue Details/i);  // Adjust the expected text if necessary
  });
});