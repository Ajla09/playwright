import { test, expect } from "@playwright/test";
import RegistrationPage from "../pages/RegistrationPage";
import OpenPage from "../pages/OpenPage";

test("Registration", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  // Perform the opening steps
  await registrationPage.navigateToRegistrationPage();

  // Fill the registration form
  await registrationPage.fillRegistrationForm(
    "Amina",
    "Mujezinovic",
    "aminamujezinovic@gmail.com",
    "056312453",
    "Sarajevo",
    "Paromlinska",
    "55",
    "71000",
    "123123"
  );

  // Submit the registration form
  await registrationPage.submitRegistrationForm();

  // Add assertions for successful registration, e.g., check for a post-registration page element
  await page.waitForSelector(".registration-success-message"); // Adjust this selector based on your application
  const successMessage = await page.$(".registration-success-message");
  expect(successMessage).not.toBeNull();
});
