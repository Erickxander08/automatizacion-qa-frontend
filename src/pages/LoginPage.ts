import { type Locator } from '@playwright/test';
import { BASE_URL } from '../support/test-data';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator = this.page.getByTestId('username');
  private readonly passwordInput: Locator = this.page.getByTestId('password');
  private readonly loginButton: Locator = this.page.getByTestId('login-button');
  readonly error: Locator = this.page.getByTestId('error');

  async open(): Promise<void> {
    await this.page.goto(BASE_URL);
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
