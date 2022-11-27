Feature: Put Resourse Req
    Scenario: Update Resource Success
        Given I have the PUT resource request with "valid body" and id 12
        When I send the PUT request
        Then I check the response status code 200
        And I check the PUT response body

    Scenario: Update Invalid Resource
        Given I have the PUT resource request with "valid body" and id 101
        When I send the PUT request
        Then I check the response status code 500