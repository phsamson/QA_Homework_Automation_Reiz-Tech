import { test, expect } from '@playwright/test';

// Import the LoginPage class
import { LoginPage } from '../pages/loginPage';
// Import the profilePage class
import { ProfilePage } from '../pages/profilePage';

// This hook runs before each test in this file
// and is used to visit the login page each test
test.beforeEach(async ({ page }) => {
    // BaseURL is set in playwright.config.ts
    // so we can just use .goto('/') to navigate to the main/login page
    await page.goto('/'); // Navigate to the Login page
});

test.afterEach(async ({ page }) => {
    // Create an instance of the ProfilePage class
    const profilePage = new ProfilePage(page);
    // Cleanup: reset the form
    await profilePage.resetAdditionalInfoForm();
});

test('should successfully update the Address and Hobby in the Addtional Info form', async ({ page }) => {
    test.setTimeout(60_000); // Set a timeout of 60 seconds for this test
    // Create an instance of the LoginPage class
    const loginPage = new LoginPage(page);
    // Login with valid credentials
    await loginPage.login('wodahs', 'Android12345!');
    await loginPage.profileLink.click();

    // Create an instance of the ProfilePage class
    const profilePage = new ProfilePage(page);

    await profilePage.fillAdditionalInfoForm(); // Fill the Additional Info form

    // Verify the success message and the updated values
    await expect(profilePage.additionalForm).toContainText('The profile has been saved successful'); // Check if the success message is displayed
    await expect(profilePage.addressInput).toHaveValue('123 Test Address'); // Check if the address is updated
    await expect(profilePage.hobbyInput).toHaveValue('Reading'); // Check if the hobby is updated
});