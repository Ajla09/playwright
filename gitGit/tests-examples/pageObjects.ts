// pageObjects.ts
import { Page } from "@playwright/test";

export class MainPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("https://www.buzzsneakers.com/");
    await this.page.waitForLoadState("networkidle");
  }

  async selectLanguage() {
    await this.page.getByTitle("Bosnian/Croatian/Serbian").click();
  }

  async closeModal() {
    await this.page.locator("#onload_modal").getByText("×").click();
  }

  async acceptCookies() {
    await this.page.locator("button").filter({ hasText: "Slažem se" }).click();
  }
}

export class LoginPage {
  constructor(private page: Page) {}

  async loginUser() {
    const mainPage = new MainPage(this.page);

    await mainPage.open();
    await mainPage.selectLanguage();
    await mainPage.closeModal();

    await this.page.getByRole("link", { name: "Prijavi se" }).click();
    await this.page
      .getByRole("textbox", { name: "Email:" })
      .fill("amina.mujzin02@gmail.com");
    await this.page
      .getByRole("textbox", { name: "Lozinka:" })
      .fill("Nejra310803");
    await this.page
      .getByRole("button", { name: "Prijava", exact: true })
      .click();
  }

  async logoutUser() {
    await this.page.getByRole("link", { name: "Odjava" }).click();
  }
}

export class NewsletterPage {
  constructor(private page: Page) {}

  async subscribeToNewsletter(email: string) {
    const mainPage = new MainPage(this.page);

    await mainPage.open();
    await mainPage.closeModal();
    await mainPage.acceptCookies();

    await this.page.getByRole("button", { name: "Newsletter prijava" }).click();
    await this.page.getByPlaceholder("Unesite email").fill(email);
    await this.page.getByRole("button", { name: "Newsletter prijava" }).click();
  }
}

export class FavoriteProductPage {
  constructor(private page: Page) {}

  async addToFavorites() {
    const mainPage = new MainPage(this.page);
    const loginPage = new LoginPage(this.page);

    await loginPage.loginUser();

    await this.page.getByRole("link", { name: "MUŠKARCI" }).hover();
    await this.page
      .getByRole("link", { name: "Nike Air Max", exact: true })
      .click();
    await this.page.locator(".img-wrapper > a").first().click();
    await this.page.locator(".product-favorite").click();

    const linkHref = "https://www.buzzsneakers.ba/omiljeno/product";
    await this.page.locator(`a[href="${linkHref}"]`).click();

    await this.page.getByRole("link", { name: "ŽENE" }).hover();
    await this.page.getByRole("link", { name: "Torbica" }).click();
    await this.page
      .getByRole("link", { name: "NIKE Torbica Heritage" })
      .first()
      .click();
    await this.page.locator(".product-favorite").click();
    await this.page.locator("#miniFavContent").click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(".icon-heart-f").click();
    await this.page.getByRole("button", { name: "OK" }).click();
  }
}

export class SearchPage {
  constructor(private page: Page) {}

  async search(query: string) {
    const mainPage = new MainPage(this.page);

    await mainPage.open();
    await this.page.getByTitle("Pretraži sajt").click();
    await this.page.getByPlaceholder("Pretraži sajt").fill(query);
    await this.page.keyboard.press("Enter");
  }
}
