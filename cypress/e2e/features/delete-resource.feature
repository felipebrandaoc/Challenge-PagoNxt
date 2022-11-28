# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for resource deletion. (en-US)
# Essa feature  testa umaa API de deleção de recurso. (pt-BR)

Feature: Delete Resourse Req
    Scenario: Delete Resource Success
        Given I have the DELETE resource request with id 1
        When I send the DELETE request
        Then I check the response status code 200

# Scenario: Delete Invalid Resource
#     Given I have the DELETE resource request with id -1
#     When I send the DELETE request
#     Then I check the response status code 400 (verify status on documentation)