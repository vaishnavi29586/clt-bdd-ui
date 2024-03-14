Feature: As a ParaBank customer, I want to be able to navigate to landing page

    @parabank @parabankHome
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "HomeButton"
        Then I should see "CustomerLoginDetails"

    @parabank @parabankCustomerLogin
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "HomeButton"
        And I enter username as "Tom"
        And I enter password as "testpass"
        And I click on "LoginActionButton"
        Then I should see "ErrorMessage"

    @parabank @parabankForgotLogin
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "ForgotLogin"
        Then I should see "CustomerLookuppage"

    @parabank @parabankCustomerLookup
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "ForgotLogin"
        And I enter the inputs for Customer
            | inputname | inputvalue |
            | fstname   | diana      |
            | lstname   | paul       |
            | address   | 12 main st |
            | city      | sunnyvale  |
            | state     | CA         |
            | zipcode   | 01234      |
            | ssn       | 123456     |
        And I click on "LoginInfo"
        Then I should see "Customernotfound"

    @parabank @parabankRegister
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "RegisterButton"
        And I enter the inputs for Customer
            | inputname   | inputvalue  |
            | firstname   | diana       |
            | lastname    | paul        |
            | address1    | 123 main st |
            | city1       | newyork     |
            | state1      | NY          |
            | zipcode1    | 08820       |
            | phonenumber | 12345689    |
            | ssn1        | 12345678    |
            | username    | Tom         |
            | password    | testpass    |
            | confirm     | testpass    |
        And I click on "RegisterActionButton"
        Then I should see "RegistrationSuccessful"


    @parabank @parabankAboutUs
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "AboutUsLink"
        Then I should see "ParaSoftDemoWebsiteHeader"

    @parabank @parabankServices
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "ServicesLink"
        Then I should see "SOAPservicesHeader"

    @parabank @parabankProducts
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "ProductsLink"
        Then I should see "ProductsPage"

    @parabank @parabankOpenNewAccount
    Scenario Outline: Customer is displayed with Open new account page
        Given I am logging into the ParaBank Website as "<custUsername>" and "<custPassword>"
        When I click on "OpenNewAccount"
        And I click on "Checking"
        And I click on "Amount"
        And I click on "OpenNewAccountButton"
        Then I should see "AccountOpenedPage"
        Examples:
            | custUsername | custPassword |
            | vaish        | demo123      |

    @parabank @parabankTransferFunds
    Scenario: Customer is displayed with parabank home page
        Given I am on the ParaBank Website
        When I click on "TransferFunds"
        And I enter the inputs for amount
            | inputname | inputvalue |
            | account#  | 15342      |
            | account#  | 15343      |

        And I click on "Transfer"
        Then I should see "TransferComplete"











