import { Page, expect } from "@playwright/test";

class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToRegistrationPage() {
    await this.page.goto("https://www.buzzsneakers.com/");
    await this.page.waitForLoadState("networkidle");
    await expect(this.page.url()).toContain("sneakers");
    await this.page.getByTitle("Bosnian/Croatian/Serbian").click();
    await this.page.locator("#onload_modal").getByText("×").click();
    await this.page.locator("button").filter({ hasText: "Slažem se" }).click();

    // Navigate to the registration page
    await this.page.getByRole("link", { name: "Registrujte se" }).click();
    await this.page.waitForLoadState("networkidle");
  }

  async fillRegistrationForm(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    city: string,
    street: string,
    streetNumber: string,
    postalCode: string,
    password: string
  ) {
    await this.page.locator('input[placeholder="Ime"]').first().fill(firstName);
    await this.page.locator('input[placeholder="Prezime"]').fill(lastName);
    await this.page.getByRole("textbox", { name: "Email:" }).fill(email);
    await this.page.locator('input[placeholder="Telefon"]').fill(phoneNumber);
    await this.page.getByLabel("Grad:").fill(city);
    await this.page.getByPlaceholder("Ulica").fill(street);
    await this.page.getByPlaceholder("Broj ulice").fill(streetNumber);
    await this.page.getByPlaceholder("Unesite poštanski broj").fill(postalCode);
    await this.page.getByRole("textbox", { name: "Lozinka: " }).fill(password);
    await this.page.getByPlaceholder("Ponovite lozinku").fill(password);
    await this.page.locator('label[for="reg_gender_2"]').click();
    await this.page.locator(".icheckbox_flat").first().click();
  }

  async submitRegistrationForm() {
    await this.page.getByRole("button", { name: "Registracija" }).click();
    await this.page.waitForTimeout(7000); // Adjust timeout as needed
  }
}

export default RegistrationPage;
