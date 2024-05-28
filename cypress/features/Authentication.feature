Feature: Authentication

    Background:
        Given the user navigates to the login page
    
    Scenario: Login with success
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should be redirected to the homepage
    
    Examples:
        | username                | password      | 
        | standard_user           | secret_sauce  |
        | performance_glitch_user | secret_sauce  |
        | problem_user            | secret_sauce  |
        | error_user              | secret_sauce  |
        | visual_user             | secret_sauce  |


