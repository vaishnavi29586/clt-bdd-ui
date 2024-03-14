Feature: As a CollegeBoard student, I want to be able to navigate to signin page

    @CollegeBoard @CollegeBoardHome
    Scenario: Student is displayed with collegeboard home page
        Given I am on the CollegeBoard Website
        When I click on "SignInbutton"
        Then I should see "SignInheader"

    @CollegeBoard @CollegeBoardSignup
    Scenario: Customer is displayed with collegeboard.org signup page
        Given I am on the "CollegeBoard" website
        When I click on "SignInButton"
        And I click on "StudentButton"
        And I enter "username" as "testuser"
        And I click on "NextButton"
        And I enter "password" as "testpass123"
        And I click on "SignInActionButton"
        Then I should see "SignInError"