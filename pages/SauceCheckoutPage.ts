//Locators and methods related to Sauce Demo Checkout page
import { Locator, Page } from "Playwright";

export class SauceCheckoutPage {
  page: Page;
  firstNameInput: Locator;
  lastNameInput: Locator;
  zipCodeInput: Locator;
  continueButton: Locator;
  finishButton: Locator;
  successMessage: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = this.page.locator('input[data-test="firstName"]');
    this.lastNameInput = this.page.locator('input[data-test="lastName"]');
    this.zipCodeInput = this.page.locator('input[data-test="postalCode"]');
    this.continueButton = this.page.locator('input[data-test="continue"]');
    this.finishButton = this.page.locator('button[data-test="finish"]');
    this.successMessage = this.page.locator('[data-test="complete-header"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
