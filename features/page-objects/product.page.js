import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {

    get productSizeSelect() { return $('//select[@id="group_1"]'); }
    get productColor() { return $('#color_to_pick_list'); }
    get addToCartButton() { return $('//button/span[text()="Add to cart"]'); }
   // productSizeSelectItems(sizeNumber) { return $(`//select/option[@value="${sizeNumber}"]`);}; 
    productSizeSelectItems(size) { return $(`//select/option[@title="${size}"]`);}; 
  //  get proceedCheckout() { return $('[title="Proceed to checkout"]');} //.button-container [title="Proceed to checkout"]
  //  get confirmCheckout() { return $('//div[@id="center_column"]//span[contains(text(), "Proceed to checkout")]');}
}

export default new ProductPage();