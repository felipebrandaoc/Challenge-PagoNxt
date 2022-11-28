import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the GET resources request', () => {
  Cypress.config('path', `${Cypress.config('baseUrl')}`)
})

When('I send the GET resources request', () => {
  cy.getRequest(Cypress.config('path')).then(response => {
    Cypress.config('resp', response)
  })
});

Then('I check the response body', () => {
  expect(Cypress.config('resp').body).to.have.length.of.at.most(100)
});
