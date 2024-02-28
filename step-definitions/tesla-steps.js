const helpers = require("../runtime/helpers");

module.exports = function () {

    this.Given('I am on the Tesla Website', function (){
        return helpers.loadPage(page.tesla.url);

    })

    // this.When('I click on ShopAvailable button', function(){
    //     return page.tesla.clickElement('ShopAvailable')
    // })

    this.When('I click on Vehicles Button', function(){
        return page.tesla.clickElement('Vehicles')
    })

    this.When('I click on InventoryLink', function(){
        return page.tesla.clickElement('InventoryLink')
    })

    this.Then('I should see Inventory Header', function(){
        return page.tesla.elementExists('InventoryHeader')
    })



    // this.Then('I click on ShopAvailable button', function(){
    //     return page.tesla.clickElement('ShopAvailable')
    // })
    
    ;
}