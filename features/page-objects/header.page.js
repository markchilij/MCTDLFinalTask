import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get searchBox() { return $('#search_query_top'); }
    get searchButton() { return $('button[name="submit_search"]');}
}

export default new HeaderPage();
