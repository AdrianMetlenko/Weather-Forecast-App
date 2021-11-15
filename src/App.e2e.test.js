import puppeteer from "puppeteer";

describe("App.js", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    test("contains the title text", async () => {
        await page.goto("http://localhost:8000");
        await page.waitForSelector(".MuiTypography-h2");
        const text = await page.$eval(".MuiTypography-h2", (e) => e.textContent);
        expect(text).toContain("Weather Forecast");
    });

    test("api data is fetched", async () => {
        await page.waitForSelector("[id=CityName]");
        const text = await page.$eval("[id=CityName]", (e) => e.textContent);
        expect(text).toContain("Sydney");
    });

    afterAll(() => browser.close());
});