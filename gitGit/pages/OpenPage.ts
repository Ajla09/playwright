import { Page, expect } from "@playwright/test";

async function OpeningPage(page: Page) {
  await page.goto("https://www.buzzsneakers.com/");
  await page.waitForLoadState("networkidle");
  await expect(page.url()).toContain("sneakers");
  await page.getByTitle("Bosnian/Croatian/Serbian").click();
  await page.locator("#onload_modal").getByText("×").click();
  await page.locator("button").filter({ hasText: "Slažem se" }).click();
}

export default OpeningPage;
