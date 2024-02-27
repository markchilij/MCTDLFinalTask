import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import orderPage from '../page-objects/order.page.js';
import { browser } from '@wdio/globals';
import headerPage from '../page-objects/header.page.js';

When('I click on a product', async function () {
    await productsPage.firstProductPhoto.click();
});

When('I select {word} size', async function (size) {
    await productPage.productSizeSelect.click();
    const selectItems = await productPage.productSizeSelectItems(size);
    await selectItems.click();
});

When('I click on the Add to Cart', async function () {
    await productPage.addToCartButton.click();
});

When('I click Continue shopping', async function () {
    const continueButton = await productPage.continueShoppingButton;
    await continueButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Continue Shopping Button is not visible'});
    await continueButton.click();
});

When('I click on the Proceed to checkout', async function () {
    const proceedCheckoutButton = await productPage.proceedCheckoutButton;
    await proceedCheckoutButton.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Proceed checkout Button is not visible'});
    await proceedCheckoutButton.click();
});

When('I confirm, click on Proceed to checkout', async function () {
    await orderPage.confirmCheckout.click();
});

When('I see meesage sign in or create account', async function () {
    await expect(orderPage.createAccountButton).toBeDisplayed();
    await expect(orderPage.signInButton).toBeDisplayed();
});

Then('I see correct count {word} of items in cart', async function (number) {
    const cartItemsCount = await headerPage.headerCartItemsCount;
    const count = await cartItemsCount.getText();
    expect(count).toEqual(number);
});