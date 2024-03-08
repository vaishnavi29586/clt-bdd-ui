const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    ParaBank: 'https://parabank.parasoft.com/',
    url: 'https://parabank.parasoft.com/',

    elements: {

        HomeButton: '//*[@id="headerPanel"]/ul[2]/li[1]/a',
        AboutUsLink: '//*[@id="headerPanel"]/ul[1]/li[2]/a',
        ServicesLink: '//*[@id="headerPanel"]/ul[1]/li[3]/a',
        ParaSoftDemoWebsiteHeader:'//*[@id="rightPanel"]/h1',
        CustomerLoginDetails: '//*[@id="loginPanel"]/form/div[1]',
        LoginActionButton: '//*[@id="loginPanel"]/form/div[3]/input',
        ErrorMessage: '//*[@id="rightPanel"]/p',
        name: by.name('username'),
        pwd: by.name('password'),
        ForgotLogin: '//*[@id="loginPanel"]/p[1]/a',
        CustomerLookuppage: '//*[@id="rightPanel"]/h1',
        LoginInfo: '//*[@id="lookupForm"]/table/tbody/tr[8]/td[2]/input',
        Customernotfound: '//*[@id="rightPanel"]/p',
        fstname: by.name('firstName'),
        lstname: by.name('lastName'),
        address: by.name('address.street'),
        city: by.name('address.city'),
        state: by.name('address.state'),
        zipcode: by.name('address.zipCode'),
        ssn: by.name('ssn'),
        RegisterButton: '//*[@id="loginPanel"]/p[2]/a',
        RegisterActionButton: '//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input',
        RegistrationSuccessful:'//*[@id="rightPanel"]/h1',
        firstname: by.name('customer.firstName'),
        lastname: by.name('customer.lastName'),
        address1: by.name('customer.address.street'),
        city1: by.name('customer.address.city'),
        state1: by.name('customer.address.state'),
        zipcode1: by.name('customer.address.zipCode'),
        phonenumber: by.name('customer.phoneNumber'),
        ssn1: by.name('customer.ssn'),
        username: by.name('customer.username'),
        password: by.name('customer.password'),
        confirm: by.name('repeatedPassword'),

    },

    clickElement: async function (objectKey) {
        //     // eslint-disable-next-line no-console
        //console.log('The objectKey is: ' + objectKey)
        const selector = page.parabank.elements[objectKey];
        console.log('The Xpath expression is: ' + selector)
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) {
        const selector = page.parabank.elements[inputname];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },

    inputUserName: async function (val) {
        var selector = page.parabank.elements['name'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function (val) {
        var selector = page.parabank.elements['pwd'];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    elementExists: async function (objectKey) {
        //     // eslint-disable-next-line no-console
        const selector = page.parabank.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    

}
