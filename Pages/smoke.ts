import { Page, expect } from "@playwright/test";
import "dotenv/config";

export class SmokeTest {
    HomeURL: string = process.env.HomePageURL!;
    constructor(private page: Page) { }
    async HomePage() {
        await this.page.goto(this.HomeURL);
        const Herosection_Heading = this.page.getByRole('heading', { name: 'Discover Insights On  Topics From Industry' });
    }
    async servicePage() {
        await this.page.goto(this.HomeURL);
        const serviceLink = this.page.locator(`//span[normalize-space()='Services']`);
        await serviceLink.click();
    }
    async careerPage() {
        await this.page.goto(this.HomeURL);
        const careerLink = this.page.getByText('Career', { exact: true });
        await careerLink.click();

    }
    async blogPage() {
        await this.page.goto(this.HomeURL);
        const blogLink = this.page.getByText('Blog', { exact: true });
        await blogLink.click();
    }
}