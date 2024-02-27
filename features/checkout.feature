# Test Case 1
Feature: Checkout

    @Test1
    Scenario: Unregistered user, after ordering some item, can first sign in or create an account, before ordering
        Given I am on the home page
        When I select "Dresses -> Casual Dresses" menu item
        And I click on a product
        And I select M size
        And I click on the Add to Cart
        And I click on the Proceed to checkout
        And I confirm, click on Proceed to checkout
        When I see meesage sign in or create account

