import { Page } from './page.js';
import { browser } from '@wdio/globals';

class OrderPage extends Page {

    get proceedCheckout() { return $('[title="Proceed to checkout"]');} //.button-container [title="Proceed to checkout"]
    get confirmCheckout() { return $('//div[@id="center_column"]//span[contains(text(), "Proceed to checkout")]');}
    get createAccountButton() { return $('#SubmitCreate');}
    get signInButton() { return $('#SubmitLogin');}
}

export default new OrderPage();