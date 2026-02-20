import { test, expect } from "@playwright/test";
import { SmokeTest } from '../Pages/smoke';
import path from "path";

let smokeTest: SmokeTest;

test.beforeEach(async ({ page }) => {
    smokeTest = new SmokeTest(page);
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
