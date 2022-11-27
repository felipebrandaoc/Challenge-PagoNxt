Feature: Get Resourse Req
    Scenario: Get Resource Success
        Given I have the GET resource request with id 1
        When I send the GET request
        Then I check the response status code 200
        And I check the response body id 1

    Scenario: Get Resource Not Found
        Given I have the GET resource request with id 101
        When I send the GET request
        Then I check the response status code 404

    Scenario: Get Invalid Resource
        Given I have the GET resource request with id -1
        When I send the GET request
        Then I check the response status code 404