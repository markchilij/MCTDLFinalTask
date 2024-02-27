import { Page } from './page.js';

class HeaderPage extends Page {
    get searchBox() { return $('#search_query_top'); }
    get searchButton() { return $('button[name="submit_search"]'); }
    get headerCart() { return $('.shopping_cart'); } //[title="View my shopping cart"] .shopping_cart
    get headerCartItemsCount() { return $('.ajax_cart_quantity'); }
    get removeItemButton() { return $('.ajax_cart_block_remove_link'); } //[title="remove this product from my cart"] .remove_link 
}

export default new HeaderPage();
