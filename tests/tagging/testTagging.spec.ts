import { test, expect } from '@playwright/test';


// ======================================================
// TEST SUITE 1: Lambda Test Suite
// ======================================================

test.describe('Lambda Test Suite', () => {

    test(
        'My 1st Manually Created Test',
        { tag: ['@SmokeTest'] },
        async ({ page }) => {

            await page.goto('https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );

        }
    );

    test(
        'My 2nd Manually Created Test with soft assertion',
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );

        }
    );

    test(
        'My 3rd manually created test with Test to Fail scenario and custom expected result logging',
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );

        }
    );

});


// ======================================================
// TEST SUITE 2: Lambda Test Suite - Release 1
// ======================================================

test.describe('Lambda Test Suite - Release 1', () => {

    test(
        'My 1st Manually Created Test',
        { tag: ['@SmokeTest', '@Release 1', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );


        }
    );

    test(
        'My 2nd Manually Created Test with soft assertion',
        { tag: ['@SmokeTest', '@Release 1', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );


        }
    );

    test(
        'My 3rd manually created test with Test to Fail scenario and custom expected result logging',
        { tag: ['@SmokeTest', '@Release 1', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );


        }
    );

});

// ======================================================
// TEST SUITE 3: Lambda Test Suite - Release 2
// ======================================================

test.describe('Lambda Test Suite - Release 2', () => {

    test(
        'My 1st Manually Created Test',
        { tag: ['@SmokeTest', '@Release 2', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );


        }
    );

    test(
        'My 2nd Manually Created Test with soft assertion',
        { tag: ['@SmokeTest', '@Release 2', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );

        

        }
    );

    test(
        'My 3rd manually created test with Test to Fail scenario and custom expected result logging',
        { tag: ['@SmokeTest', '@Release 2', '@UAT'] },
        async ({ page }) => {

            await page.goto(
                'https://ecommerce-playground.lambdatest.io/',
                { waitUntil: 'domcontentloaded' }
            );

         
        }
    );

});