# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for resource updating. (en-US)
# Essa feature  testa umaa API de atualização de recurso. (pt-BR)

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
