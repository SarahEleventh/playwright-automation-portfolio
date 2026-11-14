import { Page, Locator, expect } from '@playwright/test';

export class CheckoutInfoPage {

    readonly page: Page;
    readonly firstNameTextBox: Locator;
    readonly lastNameTextBoxa: Locator;
    readonly zipCodeTextBox: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameTextBox = page.locator('#first-name');
        this.lastNameTextBox = page.locator('#last-name');
        this.zipCodeTextBox = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async enterCheckoutInformation(
        firstName: string,
        lastName: string,
        zipCode: string
    ) {

        await this.firstNameTextBox.fill(firstName);
        await this.lastNameTextBox.fill(lastName);
        await this.zipCodeTextBox.fill(zipCode);

        // Verify the values before clicking Continue
        await expect(this.firstNameTextBox)
            .toHaveValue(firstName);

        await expect(this.lastNameTextBox)
            .toHaveValue(lastName);

        await expect(this.zipCodeTextBox)
            .toHaveValue(zipCode);

        await this.continueButton.click();

        // Verify that checkout successfully moved
        // to the overview page
        await expect(this.page)
            .toHaveURL(/checkout-step-two/);
    }
}