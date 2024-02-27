# Test Case 3
Feature: Add product

    @Test3
    Scenario: User can add multiple items to the cart and see the correct number of items in the cart
        Given I am on the home page
        When I select "Dresses -> Casual Dresses" menu item
        And I click on a product
        And I select M size
        And I click on the Add to Cart
        And I click Continue shopping
        When I select "T-shirts" menu item
        And I click on a product
        And I select M size
        And I click on the Add to Cart
        And I click Continue shopping
        When I see correct count 2 of items in cart