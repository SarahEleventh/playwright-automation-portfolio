import { test, expect } from '@playwright/test';

const dataParams = ['HTC', 'Apple', 'HP', 'Samsung'];

for (const item of dataParams) {

  test(`Test search: Search ${item}`, async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await page.getByRole('textbox', { name: 'Search For Products' }).click();

    await page.getByRole('textbox', { name: 'Search For Products' }).fill(item);

    await page.getByRole('button', { name: ' Search' }).click();

  });

}