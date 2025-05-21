import { type Locator, type Page } from '@playwright/test';

export class ProfilePage {
    readonly page: Page;
    readonly addressInput: Locator;
    readonly hobbyInput: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addressInput = page.getByRole('textbox', { name: 'Address' });
        this.hobbyInput = page.getByLabel('Hobby')
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async fillAdditionalInfoForm() {
        await this.addressInput.fill('123 Test Address');
        await this.hobbyInput.selectOption('Reading');
        await this.saveButton.click();
    }
}
