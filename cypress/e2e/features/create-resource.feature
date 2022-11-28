# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for resource creation. (en-US)
# Essa feature  testa umaa API de criação de recurso. (pt-BR)

Feature: Post Resourse Req
    Scenario: Create Resource Success
        Given I have the POST resource request with "valid body"
        When I send the POST request
        Then I check the response status code 201
        And I check the POST response body

# Scenario: Create Invalid Resource
#     Given I have the POST resource request with "invalid body"
#     When I send the POST request
#     Then I check the response status code 400 (verify status on documentation)