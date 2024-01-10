import { test } from "@playwright/test";
// Import chai dynamically
const { expect } = await import("chai");

import LoginPage from "../pages/pageLogin";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Perform the login using the loginPage methods
  await loginPage.login("amina.mujzin02@gmail.com", "Nejra310803");

  // Add assertions for successful login, e.g., presence of user-specific element
  await page.waitForSelector(".user-dashboard"); // Adjust this selector based on your application
  const dashboardElement = await page.$(".user-dashboard");
  expect(dashboardElement).to.not.be.null;
});
