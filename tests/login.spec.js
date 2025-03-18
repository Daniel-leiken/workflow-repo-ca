import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file located in the tests directory
dotenv.config({ path: path.resolve(__dirname, '.env') });

test.describe('Login Tests', () => {
  test('User can successfully log in with valid credentials from environment variables', async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://127.0.0.1:5500/login');

    // Fill the login form using environment variables
    await page.fill('input[name="email"]', process.env.LOGIN_USERNAME);
    await page.fill('input[name="password"]', process.env.LOGIN_PASSWORD);

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for the page to load and check for a successful login
    await expect(page).toHaveURL('http://127.0.0.1:5500/login/'); 
  });

  test('User sees an error message with invalid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('http://127.0.0.1:5500/login');
  
    // Fill in invalid credentials
    await page.fill('input[name="email"]', 'invalid_email@example.com');
    await page.fill('input[name="password"]', 'invalid_password');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    try {
      // Wait for the error message to appear in the message container
      await page.waitForSelector('#message-container', { timeout: 60000 });
      
      // Locate the error message and check its text
      const errorMessage = await page.locator('#message-container');
      await expect(errorMessage).toHaveText('Please enter a noroff.no or stud.noroff.no email address.');  // Adjust the expected text
    } catch (error) {
      // Log the page content to check for the error message
      const pageContent = await page.content();
      console.log(pageContent);
      throw error;
    }
  });
});