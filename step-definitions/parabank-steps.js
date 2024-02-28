module.exports = function () {




    this.Given('I am on the ParaBank Website', function () {
        return helpers.loadPage(page.parabank.url);
    });

    this.When('I click on HomeButton', function () {
        return page.a.clickElement('HomeButton');
    });


    this.When(/^I enter username "testuser"$/, function (objKey1) {
        return page.parabank.inputUserName(objKey1);
    });


    this.When(/^I enter password "testpass123"$/, function (objKey1) {
        return page.parabank.inputPassword(objKey1);
        });

        this.When('I click on LoginButton', function () {
                 return page.parabank.clickElement('LoginButton');
             });


         this.Then('I should see ErrorMessage', function () {
            return page.parabank.parasoft.elementExists('ErrorMessage');
         });


        // this.When('I click on RegisterButton', function () {
        //     return page.jootza.clickElement('Register');
        // });

        // this.Then('I should see RegisterHeader', function () {
        //     return page.jootza.elementExists('RegisterHeader');
        // });

        // this.When('I click to OpenAccountButton', function () {
        //     return page.jootza.clickElement('OpenAccount');
        // });


        // this.Then('I should see CustomerRegistrationHeader', function () {
        //     return page.jootza.elementExists('CustomerRegistration');
        // });

        // this.When(/^I scroll to "([^"]*)"$/, function (objectKey) {
        //     driver.sleep(20000)
        //     return page.parabank.parasoft.scrollToElement(objectKey);
        // });

        // this.When('I click on {string}', function (objectKey) {
        //     return page.parabank.parasoft.clickElement(objectKey);
        // });

        // this.When(/^I enter username "([^"]*)"$/, function (objKey1) {
        //     return page.parabank.parasoft.inputUserName(objKey1);
        // });

        // this.When(/^I enter password "([^"]*)"$/, function (objKey1) {
        //     return page.parabank.parasoft.inputPassword(objKey1);
        // });
        // this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        //     return page.parabank.parasoft.elementExists(objectKey);
        // });


        // this.Given(/^I am logged on to the ParaBank portal as "([^"]*)"$/, function (user) {
        //     return page.parabank.parasoft.loginPortal(user);
        // });

        // this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        //     return page.jootza.verifyApproverName(value);
        // });
        // this.When(/^I enter the inputs for login$/, async function (table) {
        //     const fields = table.rows();
        //     for (i = 0; i < fields.length; i++) {
        //         page.parabank.parasoftinputElement(fields[i][0], fields[i][1]);
        //     };
        //     await driver.sleep(50000);
        //     return;
        // });
    };