import { Page, Locator } from "playwright";
import { expect } from "playwright/test";

class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openRegistrationPage() {
    await this.page.goto("https://www.buzzsneakers.com/");
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.url()).toContain("sneakers");
    await this.page.getByTitle("Bosnian/Croatian/Serbian").click();
    await this.page.locator("#onload_modal").getByText("×").click();
  }

  async navigateToRegistrationForm() {
    await this.page.getByRole("link", { name: "Registrujte se" }).click();
  }

  async fillRegistrationForm(userData: any) {
    await this.page
      .locator('input[placeholder="Ime"]')
      .first()
      .fill(userData.firstName);
    await this.page
      .locator('input[placeholder="Prezime"]')
      .fill(userData.lastName);
    await this.page
      .getByRole("textbox", { name: "Email:" })
      .fill(userData.email);
    await this.page
      .locator('input[placeholder="Telefon"]')
      .fill(userData.phoneNumber);
    await this.page.getByLabel("Grad:").fill(userData.city);
    await this.page.getByPlaceholder("Ulica").fill(userData.street);
    await this.page.getByPlaceholder("Broj ulice").fill(userData.streetNumber);
    await this.page
      .getByPlaceholder("Unesite poštanski broj")
      .fill(userData.postalCode);
    await this.page
      .getByRole("textbox", { name: "Lozinka: " })
      .fill(userData.password);
    await this.page
      .getByPlaceholder("Ponovite lozinku")
      .fill(userData.passwordConfirmation);
    await this.page.locator('label[for="reg_gender_2"]').click();
    await this.page.locator(".icheckbox_flat").first().click();

    // New code for selecting the option with value "5"!
    const selectLocator = "select#antispam";
    await this.page.selectOption(selectLocator, { value: "5" });
  }

  // ... (other methods)

  async submitRegistrationForm() {
    await this.page.getByRole("button", { name: "Registracija" }).click();
  }
}

export default RegistrationPage;
