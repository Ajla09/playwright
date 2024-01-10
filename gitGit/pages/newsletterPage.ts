// newsletterPage.ts
import { Page } from "playwright";

class NewsletterPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openNewsletterPopup() {
    await this.page.getByRole("button", { name: "Newsletter prijava" }).click();
  }

  async fillNewsletterForm(email: string) {
    await this.page.getByPlaceholder("Unesite email").fill(email);
  }

  async submitNewsletterForm() {
    await this.page.getByRole("button", { name: "Newsletter prijava" }).click();
    //await this.page.waitForLoadState("networkidle");
  }
}

export default NewsletterPage;
