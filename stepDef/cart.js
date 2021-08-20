const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const {assertThat, is, contains, containsString} = require('hamjest');
const { createPublicKey } = require('crypto');
const {
        selectProduct,
        addToCart,
        searchContent,
}  = require('./page.js');

const { page } = require('./page.js');
const { searchItem } = require('./page.js');
const { button } = require('./page.js');

Given(/^User go the webpage$/, async () => {
    try  {
        page.visitPage();
    }
    catch(error){
        throw(error);
    }
});

Given(/^User search the item (.*)$/, async (productName) => {
   try {
      await searchItem(productName);
   }
   catch(error) {
       throw(error);
   }
});

When(/^User will select the first product$/, async () => {
   try {
       await selectProduct();
   }
    catch(error){
       throw(error);
   }
});

When(/^Check user go to the add to cart page$/, async () => {
  try {
    const pageText =  await page.pageContent();
    assert(pageText.includes("ADD TO CART"))
  }
  catch(error){
     throw(error);
  }
});

Then(/^Click on add to cart button$/, async () => {
   try {
      const cartButton = await button.cartButton();
      await  cartButton.click();
   }
   catch(error){
       throw(error);
   }
});

Then(/^Check the product is added to add to cart$/, async () => {
   try {
      await browser.pause(3000);
      addToCart();
      searchContent("Flipkart");
      }
   catch(error){
      throw(error);
   }
});