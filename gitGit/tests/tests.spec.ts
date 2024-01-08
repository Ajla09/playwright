//VJEZBA
// tests.ts
import { test, Page } from "@playwright/test";
import {
  MainPage,
  LoginPage,
  NewsletterPage,
  FavoriteProductPage,
  SearchPage,
} from "../tests-examples/pageObjects";

test("Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.loginUser();
});

test("Log out", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.loginUser();
  await loginPage.logoutUser();
});

test("Newsletter", async ({ page }) => {
  const mainPage = new MainPage(page);
  const newsletterPage = new NewsletterPage(page);

  await mainPage.open();
  await mainPage.closeModal();
  await mainPage.acceptCookies();

  await newsletterPage.subscribeToNewsletter("aminaajla@gmail.com");
});

test("Favorite Product", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const favoriteProductPage = new FavoriteProductPage(page);

  await loginPage.loginUser();
  await favoriteProductPage.addToFavorites();
});

test("Search", async ({ page }) => {
  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.open();
  await searchPage.search("Nike");
  await searchPage.search("adudas");
});
