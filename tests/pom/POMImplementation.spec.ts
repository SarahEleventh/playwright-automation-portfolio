import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';

import fs from 'fs';
import { parse } from 'csv-parse/sync';


// Read CSV test data
const records = parse(
    fs.readFileSync('utils/POMImplementation.csv'),
    {
        columns: true,
        skip_empty_lines: true
    }
);


// Iterate through each CSV record
records.forEach((CSVrow: any) => {

    test.describe(
        'CSV Test Suite - Record ID: ' + CSVrow.RecordID,
        () => {

            /*
             * Step 35:
             * Navigation is placed inside beforeEach.
             */
            test.beforeEach(async ({ page }) => {

                const ologinPage = new LoginPage(page);

                await ologinPage.openURL(CSVrow.URL);
            });


            /*
             * LOGIN TEST
             */
            test(
                'TC-Import CSV-Function: Testing login functionality for record ID: ' +
                CSVrow.RecordID,
                async ({ page }) => {

                    const ologinPage = new LoginPage(page);

                    await ologinPage.login(
                        CSVrow.Username,
                        CSVrow.Password
                    );

                    await expect(
                        page.getByText('Swag Labs')
                    ).toBeVisible();
                }
            );


            /*
             * CHECKOUT TEST
             */
            test(
                'TC-Import CSV-Function: Testing successful checkout functionality for record ID: ' +
                CSVrow.RecordID,
                async ({ page }) => {

                    // Instantiate Page Objects
                    const ologinPage =
                        new LoginPage(page);

                    const productsPage =
                        new ProductsPage(page);

                    const cartPage =
                        new CartPage(page);

                    const checkoutInfoPage =
                        new CheckoutInfoPage(page);

                    const checkoutOverviewPage =
                        new CheckoutOverviewPage(page);


                    // Login
                    await ologinPage.login(
                        CSVrow.Username,
                        CSVrow.Password
                    );


                    // Add item to cart
                    await productsPage.addProductToCart();


                    // Open cart
                    await productsPage.openCart();


                    // Checkout
                    await cartPage.clickCheckout();


                    // Enter checkout information
                    await checkoutInfoPage.enterCheckoutInformation(
                        CSVrow.Firstname,
                        CSVrow.Lastname,
                        CSVrow.Zipcode
                    );


                    // Finish order
                    await checkoutOverviewPage.finishOrder();


                    // Validate successful checkout
                    await expect(
                        checkoutOverviewPage.confirmationMessage
                    ).toBeVisible();
                }
            );

        }
    );

});