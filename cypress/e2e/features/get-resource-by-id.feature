# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for resource listing by id. (en-US)
# Essa feature  testa umaa API de listagem de recurso por id. (pt-BR)

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