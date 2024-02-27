import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';
import { parseMenuExpression } from '../utils/utils.js';

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I select {string} menu item', async function(menuExpression) {
    const menuItems = parseMenuExpression(menuExpression);
    await menuPage.selectMenuItem(menuItems);
});