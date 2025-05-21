import { type Locator, type Page } from '@playwright/test';

// Page Object Model for the Login Page
export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;     // Locator for the username input field
    readonly passwordInput: Locator;     // Locator for the password input field
    readonly loginButton: Locator;       // Locator for the Login button
    readonly logoutLink: Locator;        // Locator for the Logout link (visible after login)
    readonly profileLink: Locator;       // Locator for the Profile link (visible after login)
    readonly greetingText: Locator;      // Locator for the greeting text (e.g., "Hi, username")

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Login' }); // Finds the Login textbox by its accessible name
        this.passwordInput = page.locator('input[name="password"]');       // Finds the password input by its name attribute
        this.loginButton = page.getByRole('button', { name: 'Login' });    // Finds the Login button by its accessible name
        this.logoutLink = page.getByRole('link', { name: 'Logout' });      // Finds the Logout link by its accessible name
        this.profileLink = page.getByRole('link', { name: 'Profile' });    // Finds the Profile link by its accessible name
        this.greetingText = page.getByText(/^Hi, /);                      // Finds the greeting text that starts with "Hi, "
    }

    // Performs the login action with the provided username and password
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
  }
}