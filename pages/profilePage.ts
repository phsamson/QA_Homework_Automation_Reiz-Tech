import { type Locator, type Page } from '@playwright/test';

// Page Object Model for the Profile Page
export class ProfilePage {
    readonly page: Page;
    readonly addressInput: Locator;      // Locator for the Address input field
    readonly hobbyInput: Locator;        // Locator for the Hobby dropdown/select
    readonly saveButton: Locator;        // Locator for the Save button
    readonly alertSuccess: Locator;      // Locator for the success alert message
    readonly additionalForm: Locator;    // Locator for the additional info form

    constructor(page: Page) {
        this.page = page;
        this.addressInput = page.getByRole('textbox', { name: 'Address' }); // Finds the Address textbox by its accessible name
        this.hobbyInput = page.getByLabel('Hobby');                        // Finds the Hobby dropdown by its label
        this.saveButton = page.getByRole('button', { name: 'Save' });      // Finds the Save button by its accessible name
        this.alertSuccess = page.locator('.alert-success');                // Finds the success alert by its class
        this.additionalForm = page.locator('form');                        // Finds the form element
    }

    // Fills the additional info form with test data and submits it
    async fillAdditionalInfoForm() {
        await this.addressInput.fill('123 Test Address');
        await this.hobbyInput.selectOption('Reading');
        await this.saveButton.click();
    }

    // Resets the additional info form to default values and submits it
    async resetAdditionalInfoForm() {
        await this.addressInput.fill('');
        await this.hobbyInput.selectOption('Other');
        await this.saveButton.click();
    }
}
