import {Page,expect} from "@playwright/test";
import "dotenv/config";

export class SmokeTest {
    constructor(private page: Page) {}
    async HomePage() {
        await this.page.goto(process.env.HomePageURL!);
    }
    async servicePage() {
        await this.page.goto(process.env.ServicePageURL!);
    }
    async careerPage() {
        await this.page.goto(process.env.CareerPageURL!);
    }
    async blogPage() {
        await this.page.goto(process.env.BlogPageURL!);
    }
}