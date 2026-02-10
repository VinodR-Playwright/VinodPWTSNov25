//Locators and methods related to Sauce Demo Products page
import { Locator, Page } from "Playwright";

export class SauceProductsPage {
  page: Page;
  productItems: Locator;
  cartBadge: Locator;
  cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productItems = this.page.locator('[data-test="inventory-item"]');
    this.cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = this.page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCart(productName: string) {
    const productCount = await this.productItems.count();

    for (let i = 0; i < productCount; i++) {
      const nameElement = this.productItems.nth(i).locator('[data-test="inventory-item-name"]');
      const productText = await nameElement.textContent();

      if (productText?.trim() === productName.trim()) {
        const addButton = this.productItems
          .nth(i)
          .locator('button[data-test*="add-to-cart"]');
        await addButton.click();
        break;
      }
    }
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartItemCount() {
    try {
      const count = await this.cartBadge.textContent();
      return parseInt(count || "0");
    } catch {
      return 0;
    }
  }
}
