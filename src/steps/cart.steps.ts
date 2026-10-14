import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

async function addProduct(this: CustomWorld, productName: string): Promise<void> {
  await this.inventoryPage.addProduct(productName);
}

When('agrega el producto {string} al carrito', addProduct);
Given('agregó el producto {string} al carrito', addProduct);
Given('que agregó el producto {string} al carrito', addProduct);

Then('el icono del carrito muestra {int} producto', async function (this: CustomWorld, count: number) {
  await expect(this.inventoryPage.cartCount()).toHaveText(String(count));
});

When('abre el carrito de compras', async function (this: CustomWorld) {
  await this.inventoryPage.openCart();
  await this.cartPage.expectLoaded();
});

Then('ve el producto {string} en el carrito', async function (this: CustomWorld, productName: string) {
  await expect(this.cartPage.product(productName)).toBeVisible();
});
