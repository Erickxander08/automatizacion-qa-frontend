import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, selectors } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from './world';

selectors.setTestIdAttribute('data-test');
setDefaultTimeout(30_000);

Before(async function (this: CustomWorld) {
  const headless = process.env.HEADLESS !== 'false';
  this.browser = await chromium.launch({ headless });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.context?.close();
  await this.browser?.close();
});
