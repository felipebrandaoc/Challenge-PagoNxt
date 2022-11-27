import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the GET resource request with id {int}', id => {
  Cypress.config('path', `${Cypress.config('baseUrl')}/${id}`)
})

When('I send the GET request', () => {
  cy.getRequest(Cypress.config('path')).then(response => {
    Cypress.config('resp', response)
  })
});

// Then('I check the GET response status code {int}', statusCode => {
//   expect(Cypress.config('resp').status).to.equal(statusCode)
// });

Then('I check the response body id {int}', postId => {
  expect(Cypress.config('resp').body.id).to.equal(postId)  
});
