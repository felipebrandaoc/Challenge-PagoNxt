# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for resource patching. (en-US)
# Essa feature  testa umaa API de alteração de recurso. (pt-BR)

Feature: Patch Resourse Req
    Scenario: Patch Resource Success
        Given I have the PATCH resource request with "valid body" and id 12
        When I send the PATCH request
        Then I check the response status code 200
        And I check the PATCH response body

# Scenario: Patch Invalid Resource
#     Given I have the PUT resource request with "valid body" and id 101
#     When I send the PUT request
#     Then I check the response status code 500