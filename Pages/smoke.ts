import {Page,expect} from "@playwright/test";
import "dotenv/config";

export class SmokeTest {
    constructor(private page: Page) {}
    async HomePage() {
        const HomeURL= await this.page.goto(process.env.HomePageURL!);
        const Herosection_Heading =this.page.getByRole('heading', { name: 'Discover Insights On  Topics From Industry' });
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