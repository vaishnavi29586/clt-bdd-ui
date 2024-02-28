const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'http://www.tesla.com/',

    elements: {
        
        //ShopAvailable: '//*[@id="block-tesla-frontend-content"]/div/section/div/div/div[1]/section/a[1]',
        Vehicles: '//*[@id="dx-nav-item--vehicles"]',
        // InventoryLink: '//*[@id="dx-nav-item--undefined"]/span',
        InventoryLink: '//*[@id="mega-menu"]/div/dialog/div[1]/div[1]/div[3]/ul/li[1]/a',
        InventoryHeader: '//*[@id="iso-container"]/div/div[1]/section/h1',
        
    },

    
    
    
    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        console.log('The objectKey is: '+objectKey)
        const selector = page.tesla.elements[objectKey];
        console.log('The Xpath expression is: '+selector)
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
    },
    
    
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        const selector = page.tesla.elements[objectKey];

        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector));
    },
    
};