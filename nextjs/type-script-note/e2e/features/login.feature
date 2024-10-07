Feature: User Login

  Scenario: Successful login
    Given the user is on the login page
    When the user enters correct email and password
    Then the user should see a success message

  Scenario: Unsuccessful login
    Given the user is on the login page
    When the user enters incorrect email or password
    Then the user should see an error message
