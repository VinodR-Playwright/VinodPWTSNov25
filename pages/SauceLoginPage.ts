//Locators and methods related to Sauce Demo Login page
import { Locator, Page } from "Playwright";

export class SauceLoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = this.page.locator('input[data-test="username"]');
    this.passwordInput = this.page.locator('input[data-test="password"]');
    this.loginButton = this.page.locator('input[data-test="login-button"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async navigateToLoginPage(url: string) {
    await this.page.goto(url);
  }

  async loginWithCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
