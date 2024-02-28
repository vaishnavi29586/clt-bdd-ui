Feature: As a ParaBank customer, I want to be able to navigate to landing page

    @parabank @parabankHome
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on HomeButton 
        And  I enter "username" as "testuser"
        And I enrter "password" as "testpass123"
        And I click on LoginButton
        Then I should see ErrorMessage




# @parabank @parabankLanding1
# Scenario: Customer is displayed with parabank.parasoft.com landing page
#     Given I am on the ParaBank portal
#     When I click on LoginButton
#     Then I should see ErrorMessage

# @parabank @parabankLogin
# Scenario: Customer is displayed with parabank.parasoft.com login page
#     Given I am on the ParaBank portal
#     When I enter "username" as "testuser"
#     When I enter "password" as "testpass123"
#     And I click on LoginButton
#     Then I should see "ErrorMessage"

# @parabank @parabankValidLogin
# Scenario: Customer is able to login to parabank.parasoft
#     Given I am on the ParaBank portal
#     When I click on "LoginButton"
#     And I enter "username" as "testuser"
#     And I enter "password" as "testpass123"
#     And I click on "LoginActionButton"
#     Then I should see "Welcome Message"




