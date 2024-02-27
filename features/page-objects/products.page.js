import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get firstProductPhoto() { return $('.product-container .product-image-container'); }
    get prodcutsTitles() { return $$('.product-container .product-name'); }
}

export default new ProductsPage();