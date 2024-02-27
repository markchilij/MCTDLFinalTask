import { Page } from './page.js';

class OrderPage extends Page {

    get confirmCheckout() { return $('//div[@id="center_column"]//span[contains(text(), "Proceed to checkout")]'); }
    get createAccountButton() { return $('#SubmitCreate'); }
    get signInButton() { return $('#SubmitLogin'); }
}

export default new OrderPage();