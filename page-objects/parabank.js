const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://parabank.parasoft.com',

    elements: {
        HomeButton: '//*[@id="headerPanel"]/ul[2]/li[1]/a',
        LoginButton: '//*[@id="loginPanel"]/form/div[3]/input',
        // //LoginHeader: '/html/body/mdb-root/main/div/app-login/header/section/div/div/div/div/div/div/div[1]/h2/strong',
         username: by.name('username'),
         password: by.name('password'),
        // //LoginBtn: '//*[@id="btn-login"]/button',
        ErrorMessage: '/html/body/div[1]/div[3]/div[2]/h1',
        // PasswordVal: 'testpass123',
        // submitBtn: '',
        // approverName: '//*[@id="info"]/div[1]/div[3]/div/input',
        // Register: '//*[@id="bs-example-navbar-collapse-1"]/ul/li[1]/a',
        // RegisterHeader: '/html/body/mdb-root/main/div/app-signup/header/section/div/div/div/div/div/div/h2/strong',
        // OpenAccount: '//*[@id="open-account-btn"]',
        // customerRegistrationHeader: '/html/body/mdb-root/main/div/app-customer-signup/header/section/div/div/div/div/div/div/h2/strong',
        // createAccountButton: '//*[@id="open-account-btn"]',
        // invalidEmailMessage: '//*[@id="main"]/div[7]/div/div/form/div[2]',
        // Subscribe: '//*[@id="main"]/div[7]/div/div/form/div[1]/input[2]',
        // registerHeader: '/html/body/mdb-root/main/div/app-customer-signup/header/section/div/div/div/div/div/div/div/div/div',
        // CustomerSignup: '/html/body/mdb-root/main/div/app-customer-signup/header/section/div/div/div/div/div/div/h2/strong',
        // StarterPlan: '//*[@id="pricing"]/div/div/div[2]/div/div[2]/button',
        // StartNow: '//*[@id="pricing"]/div/div/div[2]/div/div[2]/button',
    },

    // content: {
    //     'Adams, Jimmy': 'Adams, Jimmy',
    //     'ADMIN, CLT': 'ADMIN, CLT'
    // },
    // scrollToElement: async function (objectKey) {
    //     console.log('objectkey= ' + objectKey)
    //     var selector = page.parabank.elements[objectKey];
    //     console.log('selector= ' + selector)
    //     await driver.sleep(250000);
    //     return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    // },
    clickElement: async function (objectKey) { //oginButton
        // eslint-disable-next-line no-console
        const selector = this.elements[objectKey]; 
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    // inputUserName: async function (val) {
    //     var selector = page.parabank.parasoft.elements['username'];
    //     await driver.sleep(2000);
    //     return driver.findElement(selector).sendKeys(val);

    // },
    // inputPassword: async function (val) {
    //     var selector = page.parabank.parasoft.elements['password'];
    //     await driver.sleep(2000);
    //     return driver.findElement(selector).sendKeys(val);

    // },
    // inputElement: async function (name, val) {
    //     var selector = page.parabank.parasoft.elements[name];
    //     await driver.sleep(2000);
    //     return driver.findElement(selector).sendKeys(val);

    // },
    elementExists: async function (objectKey) {
        // eslint-disable-next-line no-console
        var selector = this.elements[objectKey];

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },
    // loginPortal: async function (username) {
    //     await helpers.loadPage("https://parabank.parasoft.com/");
    //     await this.inputUserName(username)
    //     await this.inputPassword(page.parabank.parasoft.elements['PasswordVal'])
    //     await this.clickElement('LoginButton')
    //     await driver.sleep(2000);
    //     return;
    // },
    // verifyApproverName: async function (val) {
    //     var selector = page.parabank.elements['approverName'];
    //     var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
    //     assert.equal(page.parabank.content[val], result);
    // }

};
