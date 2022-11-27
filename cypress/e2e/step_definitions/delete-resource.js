import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the DELETE resource request with id {int}', id => {
  Cypress.config('path', `${Cypress.config('baseUrl')}/${id}`)
})

When('I send the DELETE request', () => {
  cy.deleteRequest(Cypress.config('path')).then(response => {
    Cypress.config('resp', response)
  })
});
