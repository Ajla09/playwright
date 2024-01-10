// agreementPage.ts
import { Page } from "playwright";

class AgreementPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async acceptTerms() {
    await this.page.locator("button").filter({ hasText: "Slažem se" }).click();
  }
}

export default AgreementPage;
