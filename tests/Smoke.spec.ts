
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
    });
    test("Career Page", async ({ page }) => {
        await smokeTest.careerPage();
        await expect(page).toHaveURL(process.env.CareerPageURL!);
    });
    test("Blog Page", async ({ page }) => {
        await smokeTest.blogPage();
        await expect(page).toHaveURL(process.env.BlogPageURL!);
    });
});

test("Verify brochure download functionality", async ({ page }) => {
    await smokeTest.HomePage();
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Brochure' }).click()
    ]);
    // Suggest a local save path
    const filePath = path.join(process.cwd(), 'downloads', download.suggestedFilename());

    // Save locally
    await download.saveAs(filePath);

    // Validate file exists
    const fs = require('fs');
    expect(fs.existsSync(filePath)).toBeTruthy();

    // Validate file size > 0
    const stats = fs.statSync(filePath);
    expect(stats.size).toBeGreaterThan(1000); // not empty PDFconst path = await download.path();
    expect(path).not.toBeNull();
});
