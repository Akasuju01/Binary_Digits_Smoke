
import { test, expect } from "@playwright/test";
import { SmokeTest } from '../Pages/smoke';
import path from "path";

let smokeTest: SmokeTest;

test.beforeEach(async ({ page }) => {
    smokeTest = new SmokeTest(page);
});

test.describe("Navigation Page", () => {
    test("Home Page", async ({ page }) => {
        await smokeTest.HomePage();
        await expect(page).toHaveURL(process.env.HomePageURL!);
        await expect(page.getByText('We Create Innovation.One byte at a time', { exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Our Services', level: 2 })).toBeVisible();
    });
    test("Service Page", async ({ page }) => {
        await smokeTest.servicePage();
        await expect(page).toHaveURL(process.env.ServicePageURL!);
        await expect(page.getByText('We Create Innovation.One byte at a time', { exact: true })).toBeVisible();
    });

    test("Career Page", async ({ page }) => {
        await smokeTest.careerPage();
        await expect(page).toHaveURL(process.env.CareerPageURL!);
        await expect(page.getByText('Unlock Your Potential with Us')).toBeVisible();
    });
    test("Blog Page", async ({ page }) => {
        await smokeTest.blogPage();
        await expect(page).toHaveURL(process.env.BlogPageURL!);
        await expect(page.getByText('Discover Insights On Topics From Industry')).toBeVisible();
    });
});

