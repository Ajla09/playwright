import { test, expect, Page } from "@playwright/test";
import { link } from "fs";

//funkcija da otvori
async function OpeningPage(page: Page) {
  await page.goto("https://www.buzzsneakers.com/");
  await page.waitForLoadState("networkidle");
  await expect(page.url()).toContain("sneakers");
  await page.getByTitle("Bosnian/Croatian/Serbian").click();
  //await page.locator("#onload_modal").getByText("×").click();
  await page.locator("button").filter({ hasText: "Slažem se" }).click();
}

//registracija test
test("Registration", async ({ page }) => {
  await OpeningPage(page);
  await page.getByRole("link", { name: "Registrujte se" }).click();
  await page.locator('input[placeholder="Ime"]').first().fill("Amina");
  await page.locator('input[placeholder="Prezime"]').fill("Mujezinovic");
  await page
    .getByRole("textbox", { name: "Email:" })
    .fill("aminamujezinovic@gmail.com");
  await page.locator('input[placeholder="Telefon"]').fill("056312453");
  await page.getByLabel("Grad:").fill("Sarajevo");
  await page.getByPlaceholder("Ulica").fill("Paromlinska");
  await page.getByPlaceholder("Broj ulice").fill("55");
  await page.getByPlaceholder("Unesite poštanski broj").fill("71000");
  await page.getByRole("textbox", { name: "Lozinka: " }).fill("123123");
  await page.getByPlaceholder("Ponovite lozinku").fill("123123");
  await page.locator('label[for="reg_gender_2"]').click();
  await page.locator(".icheckbox_flat").first().click();
  await page.waitForTimeout(7000);
  await page.getByRole("button", { name: "Registracija" }).click();
});

//login FUNKCIJA
async function login(page: Page) {
  await OpeningPage(page);
  await page.getByRole("link", { name: "Prijavi se" }).click();
  await page
    .getByRole("textbox", { name: "Email:" })
    .fill("amina.mujzin02@gmail.com");
  await page.getByRole("textbox", { name: "Lozinka:" }).fill("Nejra310803");
  await page.getByRole("button", { name: "Prijava", exact: true }).click();
}

//login test
test("Login", async ({ page }) => {
  await login(page);
});

//logout test
test("Log out", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "Odjava" }).click();
});

//newsletter test
test("Newsletter", async ({ page }) => {
  await OpeningPage(page);
  await page.getByRole("button", { name: "Newsletter prijava" }).click();
  await page.getByPlaceholder("Unesite email").fill("aminaajla@gmail.com");
  await page.getByRole("button", { name: "Newsletter prijava" }).click();
});

//fav product test
test("Favorite Product", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "Nike Air Max", exact: true }).click();
  await page.locator(".img-wrapper > a").first().click();
  await page.locator(".product-favorite").click();

  const linkHref = "https://www.buzzsneakers.ba/omiljeno/product";
  await page.locator(`a[href="${linkHref}"]`).click();

  await page.getByRole("link", { name: "ŽENE" }).hover();
  await page.getByRole("link", { name: "Torbica" }).click();
  await page.waitForLoadState("load");
  await page
    .getByRole("link", { name: "NIKE Torbica Heritage" })
    .first()
    .click();
  await page.locator(".product-favorite").click();
  await page.locator(`a[href="${linkHref}"]`).click();
  await page.locator(".icon-heart-f").click();
  await page.getByRole("button", { name: "OK" }).click();
});

//search test
test("Search", async ({ page }) => {
  await OpeningPage(page);
  await page.getByTitle("Pretraži sajt").click();
  await page.getByPlaceholder("Pretraži sajt").fill("Nike");
  await page.keyboard.press("Enter");
  await page.getByTitle("Pretraži sajt").click();
  await page.getByPlaceholder("Pretraži sajt").fill("adudas");
  await page.keyboard.press("Enter");
});

//filtering product
test("Filtering Product", async ({ page }) => {
  await OpeningPage(page);
  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "Dukserica" }).click();
  await page.getByText("Brendovi", { exact: true }).click();
  await page.getByText("NIKE (24)").click();
  await page.getByLabel("Sortiraj").click();
});

//checkout test
test("Check-out", async ({ page }) => {
  await login(page);
  await page.getByText("NIKE Patike AIR FORCE 1 '07").click();
  await page.locator("li").filter({ hasText: "41 26" }).click();
  await page.getByRole("button", { name: " Dodaj u korpu" }).click();
  // await page.getByText("Korpa 1").click();
  const linkHref = "https://www.buzzsneakers.ba/kupovina";
  await page.locator(`a[href="${linkHref}"]`).click();

  await page
    .locator('div.delivery-option-name:has-text("GIFT KARTICA")')
    .click();

  await page.getByLabel("Broj vaučera:").fill("4566666");
  await page.getByLabel("Sigurnosni kod:").fill("1234");
});

//adding item to the cart
test("Adding-item", async ({ page }) => {
  await login(page);
  await page.getByRole("link", { name: "MUŠKARCI" }).hover();
  await page.getByRole("link", { name: "adidas Superstar" }).click();
  await page
    .locator("div:nth-child(10) > .row > .item-data > .img-wrapper > a")
    .click();
  await page.getByText("37 1/").first().click();
  await page.getByRole("button", { name: " Dodaj u korpu" }).click();
});
