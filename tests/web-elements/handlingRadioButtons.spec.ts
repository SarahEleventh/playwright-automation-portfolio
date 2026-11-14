import { test, expect } from '@playwright/test';

test('Exercise 6C: Handling RadioButtons', async ({ page }) => {

    await page.goto(
        'https://ecommerce-playground.lambdatest.io/',
        { waitUntil: 'domcontentloaded' }
    );

    await page.getByText('My account', { exact: true }).hover();

    await page.goto(
        'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
        { waitUntil: 'domcontentloaded' }
    );

    // Step 5: Enter valid credentials
    await page.getByRole('textbox', {
        name: 'E-Mail Address'
    }).fill('playwrightacn@gmail.com');

    await page.locator('#input-password').fill('Test123456');

    // Step 6: Login
    await page.getByRole('button', {
        name: 'Login'
    }).click();

    // Step 7: Validate My Account page
    await expect(
        page.getByRole('heading', {
            name: 'My Account'
        })
    ).toBeVisible();

    // Step 8: Modify Address Book
    await page.getByRole('link', {
        name: /Modify your address book entries/i
    }).click();

    // Step 9: Add New Address
    await page.getByRole('link', {
        name: /New Address/i
    }).click();

    // Step 10: Populate mandatory fields
    await page.locator('#input-firstname').fill('Sarah');

    await page.locator('#input-lastname').fill('Test');

    await page.locator('#input-address-1').fill(
        '123 Test Address'
    );

    await page.locator('#input-city').fill('Cebu City');

    await page.locator('#input-postcode').fill('6000');

    // Select Country
    await page.locator('#input-country').selectOption({
        label: 'Philippines'
    });

    // Wait until Region/State is available after selecting country
    await expect(
        page.locator('#input-zone')
    ).toBeEnabled();

    // Select a valid Region/State
    // If "Cebu" is not available in the current dropdown,
    // select the applicable option shown on the page.
    await page.locator('#input-zone').selectOption({
        label: 'Cebu'
    });

    // Steps 11–13: Default Address radio buttons

    const defaultYes = page.locator(
        'input[name="default"][value="1"]'
    );

    const defaultNo = page.locator(
        'input[name="default"][value="0"]'
    );

    // Step 11: Set Default Address to Yes
    await defaultYes.check();

    // Step 12: Validate Yes is selected
    await expect(defaultYes).toBeChecked();

    // Step 13: Validate No is NOT selected
    await expect(defaultNo).not.toBeChecked();

});