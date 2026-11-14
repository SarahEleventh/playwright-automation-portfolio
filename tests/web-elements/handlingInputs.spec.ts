import { test, expect } from '@playwright/test';

test('Exercise 6A: Handling Inputs', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').click();

    await page.locator('[data-test="username"]').fill('standard_user');

    await page.locator('[data-test="username"]').press('Tab');

    const pWordValue = page.locator('[data-test="password"]');

    await expect(pWordValue).toHaveAttribute(
        'placeholder',
        'Password'
    );

    await page
        .locator('[data-test="password"]')
        .pressSequentially('secret_sauce');

    await page.locator('[data-test="password"]').press('Tab');

    await page.locator('[data-test="login-button"]').press('Enter');

    await expect(page.getByText('Swag Labs')).toBeVisible();

});