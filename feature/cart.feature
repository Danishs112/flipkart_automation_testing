Feature: Checking the add to cart functionality

    Scenario Outline: As a user, I can add item to add to cart 
        Given User go the webpage 
        And User search the item <pro_name>
        When User will select the first product
        And Check user go to the add to cart page
        Then Click on add to cart button
        And Check the product is added to add to cart
      

        Examples:
            | pro_name  | 
            | pendrive  |

