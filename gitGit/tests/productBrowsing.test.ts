import { expect, test } from "@playwright/test";
import OpeningPage from "../pages/openingPage";
import ProductBrowsingPage from "../pages/productBrowsingPage";

test("Product Browsing", async ({ page }) => {
  const openingPage = new OpeningPage(page);
  const productBrowsingPage = new ProductBrowsingPage(page);

  // Open the page and perform necessary steps
  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();

  // Navigate to the product browsing section
  await productBrowsingPage.hoverOnCategory("MUŠKARCI");
  await productBrowsingPage.clickSubCategory("OBUĆA OBUĆA");
  await productBrowsingPage.clickBrand("Reebok");

  const expectedUrl =
    "https://www.buzzsneakers.ba/obuca/za-muskarce+unisex/reebok/za-odrasle";
  const currentUrl = page.url();
  expect(currentUrl).toBe(expectedUrl);
});
