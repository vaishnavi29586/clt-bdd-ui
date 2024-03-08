module.exports = function () {

    this.Given('I am on the ParaBank Website', function () {
        return helpers.loadPage(page.parabank.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.parabank.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.parabank.elementExists(objectKey);
    });


    this.When(/^I enter username as "([^"]*)"$/, function (objKey1) {
        return page.parabank.inputUserName(objKey1);
    });

    this.When(/^I enter the inputs for Customer$/, async function (dataTable) {
        const rows = dataTable.rows()
        for (var i = 0; i < rows.length; i++) {
            var inputname = rows[i][0]
            var inputvalue = rows[i][1]
            console.log('name : ' + inputname + ', val: ' + inputvalue)
            page.parabank.inputElement(inputname, inputvalue)
        };
        console.log('completed')
        await driver.sleep(3000);
        return;
    });


    this.When(/^I enter password as "([^"]*)"$/, function (objKey1) {
        return page.parabank.inputPassword(objKey1);
        });

    
};