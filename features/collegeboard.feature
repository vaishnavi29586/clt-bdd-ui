Feature: As a CollegeBoard student, I want to be able to navigate to landing page so that I can view product information



    @CollegeBoard @CollegeBoardSignup
    Scenario: Customer is displayed with collegeboard.org signup page
        Given I am on the "CollegeBoard" website
        When I click on "SignInButton"
        When I click on "StudentButton"
        And I enter "emailaddress" as "testuser"
        And I enter "password" as "testpass123"
        And I click on "LoginActionButton"
        Then I should see "ErrorMessage"