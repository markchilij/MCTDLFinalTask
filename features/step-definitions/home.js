import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';
import { parseMenuExpression } from '../utils/utils.js';
import headerPage from '../page-objects/header.page.js';
import productsPage from '../page-objects/products.page.js';
import { browser } from '@wdio/globals';
import assert from 'assert'; // for failed test

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I select {string} menu item', async function(menuExpression) {
    const menuItems = parseMenuExpression(menuExpression);
    await menuPage.selectMenuItem(menuItems);
});

When('I enter {string} in search field', async function(text) {
   await headerPage.searchBox.setValue(text);
});

When('I click search button', async function() {
    await headerPage.searchButton.click();
});

When ('I see only searched products', async function(){
    const searchTitles = await productsPage.prodcutsTitles;
    const searchedText = await headerPage.searchBox.getValue();
    
    // Check all product to contain serhed text
    for (const result of searchTitles) {
        const resultText = await result.getText();
        if(!resultText.toLowerCase().includes(searchedText.toLowerCase())){
            assert.fail(`Search title: "${resultText}" doesn't contain the searched text`); // if product doesn't containing text from search, test should not passed
        }
        expect(resultText.toLowerCase()).toHaveText(searchedText.toLowerCase());
    }
   // await browser.pause(3000);

});