# Test Case 2
Feature: Search

    @Test2
    Scenario: Users should be able to search a product using the search box at the top of the page
        Given I am on the home page
        When I enter "Blouse" in search field
        And I click search button
        And I see only searched products
