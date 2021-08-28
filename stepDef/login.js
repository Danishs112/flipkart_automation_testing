const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { page } = require('./page.js');
const { loginDetails } = require('./page.js');

Given(/^User go the Homepage$/, async () => {
    try {
        page.visitPage();
    } 
    catch(error){
       throw(error);
    }
})

Given(/^User go to the Login Page$/, async () => {
    try {
        page.loginPage();
    }
    catch(error){
        throw(error);
    }
})

Given(/^User fill the mobileNo (.*)$/, async (mNo) =>{
    try {
        await loginDetails.inputfield1(mNo);
    }
    catch(error){
        throw(error)
    }
});

Given(/^User fill the password (.*)$/, async (pword) => {
    try {
      await loginDetails.inputfield2(pword);
    }
    catch(error){
        throw(error);
    }
})

When(/^User click on login button$/, async () => {
    try {
    const mybutton = await loginDetails.loginButton();
    await mybutton.click();
    }
    catch(error){
        throw(error);
    }
})

Then(/^User successfully go the user Homepage$/, async () => {
     try {
       await browser.pause(3000);
       const pageText =  await page.pageContent();
       assert(pageText.includes("My Account"));
     }
     catch(error){
         throw(error);
     }
})


Then(/^User see a (.*)$/, async (message) => {
    try {
        const pageText =  await page.pageContent();
        assert(pageText.includes(message));
        driver.close();
    }
    catch(error){
        throw(error);
    }
})