// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getRequest', (path) => {
    return cy.request({
        method: 'GET',
        url: path, // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        failOnStatusCode: false
      })
});

Cypress.Commands.add('postRequest', (path, body) => {
    return cy.request({
        method: 'POST',
        url: path, // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: body,
        failOnStatusCode: false
      })
});

Cypress.Commands.add('putRequest', (path, body) => {
    return cy.request({
        method: 'PUT',
        url: path, // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: body,
        failOnStatusCode: false
      })
});

Cypress.Commands.add('patchRequest', (path, body) => {
    return cy.request({
        method: 'PATCH',
        url: path, // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: body,
        failOnStatusCode: false
      })
});

Cypress.Commands.add('deleteRequest', (path, body) => {
    return cy.request({
        method: 'DELETE',
        url: path, // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        failOnStatusCode: false
      })
});
