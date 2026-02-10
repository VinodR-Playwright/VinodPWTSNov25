import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";
import { SauceProductsPage } from "../../pages/SauceProductsPage";
import { SauceCartPage } from "../../pages/SauceCartPage";
import { SauceCheckoutPage } from "../../pages/SauceCheckoutPage";
import { TestDataUtils } from "../../utils/TestDataUtils";

let sauceLoginPage: SauceLoginPage;
let sauceProductsPage: SauceProductsPage;
let sauceCartPage: SauceCartPage;
let sauceCheckoutPage: SauceCheckoutPage;

//Test data
const SAUCE_DEMO_URL = "https://www.saucedemo.com/";
const VALID_USERNAME = "standard_user";
const VALID_PASSWORD = "secret_sauce";
const PRODUCT_TO_ADD = "Sauce Labs Backpack";
const SUCCESS_MESSAGE = "Thank you for your order!";

test.beforeEach(
  "Initialize page objects for Sauce Demo test",
  async ({ page }) => {
    sauceLoginPage = new SauceLoginPage(page);
    sauceProductsPage = new SauceProductsPage(page);
    sauceCartPage = new SauceCartPage(page);
    sauceCheckoutPage = new SauceCheckoutPage(page);
  }
);

test("Complete purchase flow - Add Sauce Labs Backpack and checkout with random data", async () => {
  // Step 1: Open the application
  await sauceLoginPage.navigateToLoginPage(SAUCE_DEMO_URL);
  await expect(sauceLoginPage.loginButton).toBeVisible();

  // Step 2: Login with username and password
  await sauceLoginPage.loginWithCredentials(VALID_USERNAME, VALID_PASSWORD);

  // Step 3: Verify successful login - Products page should be visible
  await expect(sauceProductsPage.productItems.first()).toBeVisible();

  // Step 4: Add product to cart
  await sauceProductsPage.addProductToCart(PRODUCT_TO_ADD);

  // Verify product was added to cart (cart badge should show 1)
  await expect(sauceProductsPage.cartBadge).toHaveText("1");

  // Step 5: Open the cart
  await sauceProductsPage.openCart();

  // Verify product is in the cart
  const isProductInCart = await sauceCartPage.isProductInCart(PRODUCT_TO_ADD);
  expect(isProductInCart).toBe(true);

  // Step 6: Click on Checkout button
  await sauceCartPage.proceedToCheckout();

  // Verify checkout form is visible
  await expect(sauceCheckoutPage.firstNameInput).toBeVisible();

  // Step 7: Fill random data in First name, Last name, and Zip code
  const checkoutData = TestDataUtils.generateCheckoutData();
  console.log(
    `Filling checkout data - FirstName: ${checkoutData.firstName}, LastName: ${checkoutData.lastName}, Zip: ${checkoutData.zipCode}`
  );

  await sauceCheckoutPage.fillCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.zipCode
  );

  // Step 8: Click on Continue button
  await sauceCheckoutPage.clickContinueButton();

  // Verify we're on the order review page
  await expect(sauceCheckoutPage.finishButton).toBeVisible();

  // Step 9: Click on Finish button
  await sauceCheckoutPage.clickFinishButton();

  // Step 10: Verify success message
  const successMessage = await sauceCheckoutPage.getSuccessMessage();
  expect(successMessage).toContain(SUCCESS_MESSAGE);

  console.log("Purchase completed successfully!");
});
