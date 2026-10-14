import { expect, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly checkoutButton: Locator = this.page.getByTestId('checkout');

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/cart\.html/);
  }

  product(name: string): Locator {
    return this.page.getByTestId('inventory-item-name').filter({ hasText: name });
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
