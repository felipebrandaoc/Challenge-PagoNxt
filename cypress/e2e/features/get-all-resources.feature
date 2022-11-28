# Script made by Felipe Brandão Costa
# Brazil, 27/11/2022
# Code Challenge - Cypress API Testing
# https://jsonplaceholder.typicode.com/guide/

# This feature tests an API for all resource listing. (en-US)
# Essa feature  testa umaa API de listagem de todos os recursos. (pt-BR)

Feature: Get Resourse Req
    Scenario: Get Resource Success
        Given I have the GET resources request
        When I send the GET resources request
        Then I check the response status code 200
        And I check the response body
