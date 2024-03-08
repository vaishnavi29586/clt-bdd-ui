const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    //JootzaPortal: 'http://www.jootza.com/',
    TeslaWebsite: 'http://www.tesla.com/',
    CollegeBoard: 'http://www.collegeboard.org/',
    ParaBank: 'https://parabank.parasoft.com/',

    elements:
    {
        
                //College Board Website //

        SignInButton: '//*[@id="block-cborghomepage"]/div/div[1]/div[3]/div/div[2]/div/div/a',
        StudentButton: '//*[@id="content"]/div/div[2]/div/div/a[1]',
        NextButton: '//*[@id="idp-discovery-submit"]',
        SignInActionButton: '//*[@id="okta-signin-submit"]',
        SignInError: '//*[@id="form67"]/div[1]/div[1]/div/div',

                //ParaBank Website //

        SignInheader: '//*[@id="content"]/div/div[1]/div/div/h2',
        emailaddress: by.name('emailaddress'),
        
        
        
        
        
        
        VehiclesButton: '//*[@id="dx-nav-item--vehicles"]/span',
        //HomeButton: '//*[@id="headerPanel"]/ul[2]/li[1]/a',
        username: by.name('username'),
        password: by.name('password'),
        
        
        
    },

    clickElement: async function (objectKey) {
        // eslint-disable-next-line no-console
        console.log('The objectKey is: ' + objectKey)
        const selector = this.elements[objectKey];
        console.log('The Xpath expression is: ' + selector)
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

    inputElement: async function (inputname, inputvalue) {
        const selector = this.elements[inputname];
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(inputvalue);
    },

        elementExists: async function (objectKey) {
            // eslint-disable-next-line no-console
            const selector = this.elements[objectKey];

            await driver.sleep(5000);
            return driver.findElement(By.xpath(selector));
        },

         }
        // elements: {
        //     
        //     //LoginActionButton: '//*[@id="btn-login"]/button',
        //     LoginButton: '/html/body/div[1]/div[3]/div[1]/div/form/div[3]/input',
        //     username: by.name('username'), // '//*[@id="username"]', //*[@id="login-password relate-pos"]
        //     password: by.name('password'),
        //     ErrorMessage: '/html/body/div[1]/div[3]/div[2]/h1',
        //     //WelcomeMessage: '//*[@id="loginPanel"]/form/div[3]/input',

        // },
        // clickElement: async function (objectKey) { // LoginButton
        //     // eslint-disable-next-line no-console
        //     console.log('The objectKey  is: ' + objectKey)
        //     const selector = this.elements[objectKey];
        //     console.log('The xpath expression is: ' + selector)  //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
        //     await driver.sleep(3000);
        //     return driver.findElement(By.xpath(selector)).click();
        // },

        // inputElement: async function (inputname, inputvalue) { // username or password
        //     const selector = this.elements[inputname];
        //     await driver.sleep(3000);
        //     return driver.findElement(selector).sendKeys(inputvalue);
        // },

        // elementExists: async function (objectKey) {
        //     // eslint-disable-next-line no-console
        //     const selector = this.elements[objectKey];
        //     await driver.sleep(1000);
        //     return driver.findElement(By.xpath(selector)); // true // false
        // },

    
