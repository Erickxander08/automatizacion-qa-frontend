import { expect, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  private readonly firstName: Locator = this.page.getByTestId('firstName');
  private readonly lastName: Locator = this.page.getByTestId('lastName');
  private readonly postalCode: Locator = this.page.getByTestId('postalCode');
  private readonly continueButton: Locator = this.page.getByTestId('continue');
  private readonly finishButton: Locator = this.page.getByTestId('finish');
  readonly confirmation: Locator = this.page.getByTestId('complete-header');

  async expectInformationStep(): Promise<void> {
    await expect(this.page).toHaveURL(/\/checkout-step-one\.html/);
  }

  async completeInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
    await expect(this.page).toHaveURL(/\/checkout-step-two\.html/);
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(/\/checkout-complete\.html/);
  }
}
