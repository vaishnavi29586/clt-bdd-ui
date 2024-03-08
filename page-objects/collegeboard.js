const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.collegeboard.org//',
    CollegeBoard: 'http://www.collegeboard.org/',
    

    elements: {
        SignInbutton: '//*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a',
        SignInheader: '//*[@id="content"]/div/div[1]/div/div/h2',
    },

    // clickElement: async function (objectKey) {
    //     //     // eslint-disable-next-line no-console
    //     //console.log('The objectKey is: ' + objectKey)
    //     const selector = page.collegeboard.elements[objectKey];
    //     console.log('The Xpath expression is: ' + selector)
    //     await driver.sleep(2000);
    //     return driver.findElement(By.xpath(selector)).click();
    // },

    // inputElement: async function (inputname, inputvalue) {
    //     const selector = page.collegeboard.elements[inputname];
    //     await driver.sleep(2000);
    //     return driver.findElement(selector).sendKeys(inputvalue);
    // },

    // elementExists: async function (objectKey) {
    //     //     // eslint-disable-next-line no-console
    //     const selector = page.collegeboard.elements[objectKey];

    //     await driver.sleep(5000);
    //     return driver.findElement(By.xpath(selector));
    // },


    

};