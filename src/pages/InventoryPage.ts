import { expect, type Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator = this.page.getByTestId('title');
  private readonly cartBadge: Locator = this.page.getByTestId('shopping-cart-badge');
  private readonly cartLink: Locator = this.page.getByTestId('shopping-cart-link');

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(name: string): Promise<void> {
    await this.page.getByTestId(`add-to-cart-${this.productSlug(name)}`).click();
  }

  cartCount(): Locator {
    return this.cartBadge;
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  private productSlug(name: string): string {
    return name.toLowerCase().replaceAll(' ', '-');
  }
}
