Feature: Authentication

   Background:
       Given the user navigates to the login page
   
    Scenario: Valid login with correct credentials
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
  
    Scenario: Logout functionality
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should be redirected to the homepage
        When the user clicks the logout button
        Then the user should be redirected to the login page
  
    Examples:
        | username                | password      | 
        | standard_user           | secret_sauce  |
        | performance_glitch_user | secret_sauce  |
        | problem_user            | secret_sauce  |
        | error_user              | secret_sauce  |
        | visual_user             | secret_sauce  |

    Scenario: Valid login with incorrect password
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username                | password    | 
        | standard_user           | abcdefstas  |

    Scenario: Invalid login with incorrect password
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username           | password    | 
        | abasdsad           | abcdefstas  |    

        Scenario: Invalid login with valid password
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username           | password      | 
        | abasdsad           | secret_sauce  |    
    
    Scenario: Login with case-sensitive credentials
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username                | password      | 
        | STANDARD_USER           | SECRET_SAUCE  |

    Scenario: Attempt to login with SQL injection
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username and password do not match any user in this service"

    Examples:
        | username             | password      | 
        | ' OR 1=1; --         | ' OR 1=1; --  |

    Scenario: Login with a locked-out user
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Sorry, this user has been locked out."

    Examples:
        | username             | password         | 
        | locked_out_user      | secret_sauce     |

    Scenario: Login with empty username and password
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username is required"

    Examples:
        | username | password | 
        |          |          |

    Scenario: Login with an empty username 
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Username is required"

    Examples:
        | username | password     | 
        |          | secret_sauce |

    Scenario: Login with an empty password 
        When the user enters the username "<username>" and the password "<password>"
        And the user clicks the login button
        Then the user should see an error message saying "Epic sadface: Password is required"

    Examples:
        | username          | password | 
        | locked_out_user   |          |




