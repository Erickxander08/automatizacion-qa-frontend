import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('continúa al checkout', async function (this: CustomWorld) {
  await this.cartPage.checkout();
  await this.checkoutPage.expectInformationStep();
});

When(
  'completa el formulario con nombre {string}, apellido {string} y código postal {string}',
  async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
    await this.checkoutPage.completeInformation(firstName, lastName, postalCode);
  },
);

When('finaliza la compra', async function (this: CustomWorld) {
  await this.checkoutPage.finish();
});

Then('ve la confirmación {string}', async function (this: CustomWorld, message: string) {
  await expect(this.checkoutPage.confirmation).toHaveText(message);
});
