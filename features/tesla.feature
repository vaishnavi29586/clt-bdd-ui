Feature: As a tesla customer, I want to be able to navigate to Inventory page so that I can view product information

  @tesla @teslaHome
  Scenario: Customer is displayed with tesla.com home page
    Given I am on the "TeslaWebsite" website
    When I click on "VehiclesButton"
    # And I click on "InventoryLink"
    # Then I should see Inventory Header
