import { test, expect } from '@playwright/test';

// Import the LoginPage class
import { LoginPage } from '../pages/loginPage';

test('should login successfully with valid credentials and can navigate to the Profile page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('wodahs', 'Android12345!');
    
    // To confirm user is logged in, we can check for elements that are only visible when logged in
    // Check if "Logout" link is visible
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

    // Check if "Profile" link is visible
    await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible();

    // Check if "Hi" + username greeting text is visible
    await expect(page.getByText('Hi, wodahs')).toBeVisible();

    await loginPage.profileLink.click();
    // Check if the user is on the Profile page
    await expect(page).toHaveURL('/profile');
});