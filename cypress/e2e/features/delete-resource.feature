Feature: Delete Resourse Req
    Scenario: Delete Resource Success
        Given I have the DELETE resource request with id 1
        When I send the DELETE request
        Then I check the response status code 200

# Scenario: Delete Invalid Resource
#     Given I have the DELETE resource request with id -1
#     When I send the DELETE request
#     Then I check the response status code 400 (verify status on documentation)