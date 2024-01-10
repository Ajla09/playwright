
Buzz Sneakers Automated Tests
This repository contains automated tests for the Buzz Sneakers website using Playwright, a Node.js library for browser automation.

Prerequisites
Node.js
Clone this repository:
git clone <https://github.com/Ajla09/playwright.git>

Install dependencies:
npm install

Running Tests
To run the tests, execute the following command:
npm test

Test Descriptions
Registration Test: Tests the user registration process.
Login Test: Tests user login functionality.
Log Out Test: Tests the user logout functionality.
Newsletter Test: Tests the newsletter subscription functionality.
Product Browsing Test: Tests the navigation through product categories.
Gift Card Test: Tests the interaction with the "BUZZ CREW" section.
Favorite Product Test: Tests the functionality of adding a product to favorites.
Search Test: Tests the search functionality.
Filtering Product Test: Tests the product filtering functionality.
Check-out Test: Tests the product check-out process.
Adding-item Test: Tests the functionality of adding an item to the shopping cart.
Account Settings Test: Tests the user account settings.
Country Change Test: Tests changing the country in user account settings.
Test Structure
openingPage.ts: Contains a function for opening the Buzz Sneakers website.
registrationPage.ts: Defines a class for the registration page with methods to navigate and interact with the registration form.
loginPage.ts: Defines a class for the login page with methods to navigate and interact with the login form.
test suite files (e.g., registrationTest.ts): Contain individual tests using the defined pages and functions.
Contribution
Contributions are welcome! Feel free to open issues or pull requests.
