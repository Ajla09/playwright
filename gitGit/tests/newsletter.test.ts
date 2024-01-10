// newsletter.test.ts
const { test } = require("@playwright/test");
import { Page } from "playwright";
import OpeningPage from "../pages/openingPage";
import NewsletterPage from "../pages/newsletterPage";

test("Newsletter", async ({ page }: { page: Page }) => {
  const openingPage = new OpeningPage(page);
  const newsletterPage = new NewsletterPage(page);

  // Open the Buzz Sneakers website
  await openingPage.openPage("https://www.buzzsneakers.com/");
  await openingPage.performAgreementSteps();

  // Open the newsletter popup
  await newsletterPage.openNewsletterPopup();

  // Fill and submit the newsletter form
  await newsletterPage.fillNewsletterForm("aminaaajla@gmail.com");
  await newsletterPage.submitNewsletterForm();
});
