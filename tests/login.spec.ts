import { test, expect } from '@playwright/test';

// Import the LoginPage class
import { LoginPage } from '../pages/loginPage';

// This hook runs before each test in this file
// and is used to visit the login/Main page each test
test.beforeEach(async ({ page }) => {
    // BaseURL is set in playwright.config.ts
    // so we can just use await page.goto('/') to navigate to the main/login page
    await page.goto('/'); // Navigate to the Login page
});

test('should login successfully with valid credentials and can navigate to the Profile page', async ({ page }) => {
    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);
    // Login with valid credentials
    await loginPage.login('wodahs', 'Android12345!');
    
    // To confirm user is logged in, we can check for elements that are only visible when logged in
    await expect(loginPage.logoutLink).toBeVisible(); // Check if "Logout" link is visible
    await expect(loginPage.profileLink).toBeVisible(); // Check if "Profile" link is visible
    await expect(loginPage.greetingText).toBeVisible(); // Check if "Hi" + username greeting text is visible

    await loginPage.profileLink.click();
    // Check if the user is on the Profile page
    await expect(page).toHaveURL('/profile');
});