import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator('#user-name');
    this.passwordTextBox = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async openURL(url: string) {
    await this.page.goto(url);
  }

  async login(userNameVal: string, passwordVal: string) {
    await this.usernameTextBox.fill(userNameVal);
    await this.passwordTextBox.fill(passwordVal);
    await this.loginButton.click();
  }
}