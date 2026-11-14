import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {

    readonly page: Page;
    readonly finishButton: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.finishButton = page.locator('#finish');

        this.confirmationMessage =
            page.getByText('Thank you for your order!');
    }

    async finishOrder() {

        await expect(this.page)
            .toHaveURL(/checkout-step-two/);

        await expect(this.finishButton)
            .toBeVisible();

        await this.finishButton.click();
    }
}