module.exports = function () {

    this.When('I click on SignInButton', function () {
        return page.collegeboard.clickElement('SignInButton');
    });

  //  this.Then('I should see LoginHeader', function () {
    //    return page.jootza.elementExists('LoginHeader');
    //});

    //this.Given('I am on the Jootza portal', function () {
       // return helpers.loadPage(page.jootza.url);
   // });

    //this.When('I click on RegisterButton', function () {
       // return page.jootza.clickElement('Register');
   // });

    //this.Then('I should see RegisterHeader', function () {
       // return page.jootza.elementExists('RegisterHeader');
    //});

    this.When('I click to OpenAccountButton', function () {
        return page.jootza.clickElement('OpenAccount');
    });


    this.Then('I should see CustomerRegistrationHeader', function () {
        return page.jootza.elementExists('CustomerRegistration');
    });

    this.When(/^I scroll to "([^"]*)"$/, function (objectKey) {
        driver.sleep(500)
        return page.collegeboard.scrollToElement(objectKey);
    });

    this.When('I click on {string}', function (objectKey) {
        return page.collegeboard.clickElement(objectKey);
    });

    this.When(/^I enter username "([^"]*)"$/, function (objKey1) {
        return page.jootza.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function (objKey1) {
        return page.jootza.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.collegeboard.elementExists(objectKey);
    });


    this.Given(/^I am logged on to the Jootza portal as "([^"]*)"$/, function (user) {
        return page.jootza.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.jootza.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.jootza.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(10000);
        return;
    });
};