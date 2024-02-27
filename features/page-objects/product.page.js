import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {

    get productSizeSelect() { return $('//select[@id="group_1"]'); }
    get productColor() { return $('#color_to_pick_list'); }
    get addToCartButton() { return $('//button/span[text()="Add to cart"]'); }
    get proceedCheckoutButton() { return $('[title="Proceed to checkout"]'); } //.button-container [title="Proceed to checkout"]
    get continueShoppingButton() { return $('[title="Continue shopping"]'); }
    productSizeSelectItems(size) { return $(`//select/option[@title="${size}"]`); };
}

export default new ProductPage();