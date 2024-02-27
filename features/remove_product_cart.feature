# Test Case 4
Feature: Remove product

    @Test4
    Scenario: User can remove items from the cart and see emptry cart
        Given I am on the home page
        When I select "Dresses -> Casual Dresses" menu item
        And I click on a product
        And I select M size
        And I click on the Add to Cart
        And I click Continue shopping
        And I return to home page
        And I click on remove item
        Then I see empty card