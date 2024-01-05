import { test } from "@playwright/test";
import RegistrationPage from "../tests-examples/registrationPage";

test("Registration Test", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);

  // Open the registration page
  await registrationPage.openRegistrationPage();
  //example nigdje veze

  // Navigate to the registration form
  await registrationPage.navigateToRegistrationForm();

  // Fill in the registration form with user data.
  const userData = {
    firstName: "Amina",
    lastName: "Mujezinovic",
    email: "aminamujezinovic@gmail.com",
    phoneNumber: "056312453",
    city: "Sarajevo",
    street: "Paromlinska",
    streetNumber: "55",
    postalCode: "71000",
    password: "123123",
    passwordConfirmation: "123123",
  };
  await registrationPage.fillRegistrationForm(userData);

  // Submit the registration form
  await registrationPage.submitRegistrationForm();
});
