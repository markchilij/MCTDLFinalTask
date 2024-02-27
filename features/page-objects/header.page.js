import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get searchBox() { return $('#search_query_top'); }
    get searchButton() { return $('button[name="submit_search"]');}
    get headerCart() { return $('.shopping_cart');}
    get headerCartItemsCount() { return $('.ajax_cart_quantity');} 
}

export default new HeaderPage();
