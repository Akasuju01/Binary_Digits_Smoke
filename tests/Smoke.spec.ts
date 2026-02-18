
import {test,expect} from "@playwright/test";
import {SmokeTest} from "../Pages/smoke";

test.describe("Smoke Test",()=>{
    test("Home Page",async({page})=>{
        const smokeTest = new SmokeTest(page);
        await smokeTest.HomePage();
        await expect(page).toHaveURL(process.env.HomePageURL!);
        
    });
})
