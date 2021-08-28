Feature: Login and Logout function testing

    Scenario: Login with valid credentials
        Given User go the Homepage
        And User go to the Login Page
        And User fill the mobileNo <mobileNo>
        And User fill the password <password>
        When User click on login button
        Then User successfully go the user Homepage
        

        Examples:
            | mobileNo    | password    | 
            | 7006643126  | incorrect1# |

    Scenario: Login with invalid credentials
        Given User go the Homepage
        And User go to the Login Page
        And User fill the mobileNo <mobileNo>
        And User fill the password <password>
        When User click the login button
        Then User see a <message>
        

        Examples:
            | mobileNo    | password    | message                                   |
            | 9596492447  | incorrect1# | Please enter valid Email ID/Mobile number |



            
