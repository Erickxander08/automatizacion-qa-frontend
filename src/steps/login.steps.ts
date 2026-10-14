import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { users } from '../support/test-data';
import { CustomWorld } from '../support/world';

Given('que el usuario está en la página de login', async function (this: CustomWorld) {
  await this.loginPage.open();
});

Given('que el usuario {string} ha iniciado sesión', async function (this: CustomWorld, username: string) {
  const password = users[username];
  if (!password) {
    throw new Error(`No hay contraseña definida para el usuario ${username}`);
  }
  await this.loginPage.open();
  await this.loginPage.login(username, password);
  await this.inventoryPage.expectLoaded();
});

When(
  'inicia sesión con el usuario {string} y la contraseña {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  },
);

Then('ve el catálogo de productos', async function (this: CustomWorld) {
  await this.inventoryPage.expectLoaded();
});

Then('ve el mensaje de error {string}', async function (this: CustomWorld, message: string) {
  await expect(this.loginPage.error).toHaveText(message);
});
