import { Page } from "playwright";

class ProductBrowsingPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async hoverOnCategory(categoryName: string) {
    await this.page.getByRole("link", { name: categoryName }).hover();
  }

  async clickSubCategory(subCategoryName: string) {
    await this.page.getByRole("link", { name: subCategoryName }).click();
  }

  async clickBrand(brandName: string) {
    await this.page
      .locator("li")
      .filter({ hasText: `${brandName} (13)` })
      .locator("div")
      .click();
  }
}

export default ProductBrowsingPage;
