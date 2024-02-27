import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import orderPage from '../page-objects/order.page.js';
import { browser } from '@wdio/globals';
import headerPage from '../page-objects/header.page.js';
import assert from 'assert';

When('I click on a product', async function() {
     await productsPage.firstProductPhoto.click();
 });

 When('I select {word} size', async function(size) {

     await productPage.productSizeSelect.click();
     const selectItems = await productPage.productSizeSelectItems(size);
     await selectItems.click();

        // for(let i = 1; i <= 3; i++){
        //         //await productPage.productSizeSelect.click();
        //         if(await productPage.addToCartButton.isDisplayed()){
        //             await productPage.addToCartButton.click();
        //         await browser.pause(3000);
        //             break;
        //         }
        //         //await browser.pause(3000);
        //       // await productPage.productSizeSelectItems(i).isDisplayed();
        //      // await productPage.productSizeSelect.click();
        //      const selectItems = await productPage.productSizeSelectItems(i);
        //     await selectItems.click();
                
        //     } 

});

When('I click on the Add to Cart', async function() {
    await productPage.addToCartButton.click();
    await browser.pause(3000);
});

When ('I click Continue shopping', async function(){
    await productPage.continueShoppingButton.click();
});

When('I click on the Proceed to checkout', async function() {
    await productPage.proceedCheckoutButton.click();
});

When('I confirm, click on Proceed to checkout', async function() {
    await orderPage.confirmCheckout.click();
});

When('I see meesage sign in or create account', async function() {

    await expect(orderPage.createAccountButton).toBeDisplayed();
    await expect(orderPage.signInButton).toBeDisplayed();
    //await browser.pause(3000);
});

Then('I see correct count {word} of items in cart', async function(number){
    const cartItemsCount = await headerPage.headerCartItemsCount;
    const count = await cartItemsCount.getText();
    expect(count).toEqual(number);
});