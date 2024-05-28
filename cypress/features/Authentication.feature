Feature: Authentication

    Background:
        Given the user navigates to the login page
    
  #  Scenario: Valid login with correct credentials
  #      When the user enters the username "<username>" and the password "<password>"
  #      And the user clicks the login button
  #      Then the user should be redirected to the homepage
  #  
  #  Examples:
  #      | username                | password      | 
  #      | standard_user           | secret_sauce  |
  #      | performance_glitch_user | secret_sauce  |
  #      | problem_user            | secret_sauce  |
  #      | error_user              | secret_sauce  |
  #      | visual_user             | secret_sauce  |
#
  #  Scenario: Logout functionality
  #      When the user enters the username "<username>" and the password "<password>"
  #      And the user clicks the login button
  #      Then the user should be redirected to the homepage
  #      When the user clicks the logout button
  #      Then the user should be redirected to the login page
#
  #  Examples:
  #      | username                | password      | 
  #      | standard_user           | secret_sauce  |
  #      | performance_glitch_user | secret_sauce  |
  #      | problem_user            | secret_sauce  |
  #      | error_user              | secret_sauce  |
  #      | visual_user             | secret_sauce  |
#
    Scenario: Invalid login with incorrect password
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username                | password    | 
        | standard_user           | abcdefstas  |




