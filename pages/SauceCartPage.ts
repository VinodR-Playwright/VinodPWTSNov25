//Locators and methods related to Sauce Demo Cart page
import {Locator, Page} from "Playwright";

export class SauceCartPage {
  page: Page;
  cartItems: Locator;
  checkoutButton: Locator;
  continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = this.page.locator('[data-test="cart-list"] [data-test="inventory-item"]');
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
    this.continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
  }

  async getCartItemsCount() {
    return await this.cartItems.count();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async isProductInCart(productName: string) {
    const itemCount = await this.cartItems.count();
    for (let i = 0; i < itemCount; i++) {
      const nameElement = this.cartItems
        .nth(i)
        .locator('[data-test="inventory-item-name"]');
      const productText = await nameElement.textContent();
      if (productText?.trim() === productName.trim()) {
        return true;
      }
    }
    return false;
  }
}
