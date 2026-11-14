import { test, expect } from '@playwright/test';

test('My 1st Manually Created Test', async ({ page }) => {


    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await page.getByText('My account', { exact: true }).hover();

    await page.getByRole('link', { name: 'Login' }).click();

    await expect(page).toHaveTitle('Account Login');

    await page.getByRole('textbox', { name: 'E-Mail Address' })
        .fill('playwrightacn@gmail.com');

    await page.locator('#input-password').fill('Test123456');

    await page.getByRole('button', { name: 'Login' }).click();

    const myAccountLabel =
        page.locator("//h2[text()='My Account']");

    await expect(myAccountLabel).toBeVisible();
    
});
    test('My 2nd Manually Created Test with soft assertion', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await page.getByText('My account', { exact: true }).hover();

    await page.getByRole('link', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'E-Mail Address' })
    .fill('invalid@gmail.com');

    await page.locator('#input-password')
    .fill('Password123');

    await page.getByRole('button', { name: 'Login' }).click();

    const invalidLogin = page.locator("//h2[text()='My Account']");
    await expect.soft(invalidLogin).toBeVisible();

    await page.getByRole('textbox', { name: 'E-Mail Address' })
    .fill('playwrightacn@gmail.com');

    await page.locator('#input-password')
    .fill('Test123456');

    await page.getByRole('button', { name: 'Login' }).click();

    const myAccountLabel = page.locator("//h2[text()='My Account']");
    await expect(myAccountLabel).toBeVisible();

});

test('My 3rd manually created test with Test to Fail scenario and custom expected result logging', async ({ page }) => {

    test.setTimeout(60000);
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await page.getByText('My account', { exact: true }).hover();

    await page.getByRole('link', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'E-Mail Address' })
        .fill('invalid@gmail.com');

    await page.locator('#input-password')
        .fill('Password123');

    await page.getByRole('button', { name: 'Login' }).click();

    const successfulLogin = page.locator("//h2[text()='My Account']");

    await expect(successfulLogin).not.toBeVisible();

    await page.getByRole('textbox', { name: 'E-Mail Address' })
        .fill('playwrightacn@gmail.com');

    await page.locator('#input-password')
        .fill('Test123456');

    await page.getByRole('button', { name: 'Login' }).click();

    const validLogin = page.locator("//h2[text()='My Account']");

    await page.waitForSelector("//h2[text()='My Account']");

    await expect(
        validLogin,
        'User should be able to login successfully.'
    ).toBeVisible();

});