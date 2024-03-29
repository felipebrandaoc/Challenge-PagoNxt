import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the PATCH resource request with {string} and id {int}', (bodyType, id) => {
  if(bodyType == "valid body") {
    Cypress.config('body', { title: 'doo' ,})
  } else if(bodyType == "invalid body"){
    // body = {title: 'foo', body: 'bar', userId: 1,}
  }
  Cypress.config('path', `${Cypress.config('baseUrl')}/${id}`)
})

When('I send the PATCH request', () => {
  cy.patchRequest(Cypress.config('path'), Cypress.config('body')).then(response => {
    Cypress.config('resp', response)
  })
});

Then('I check the PATCH response body', () => {
  expect(Cypress.config('resp').body.title).to.equal(Cypress.config('body').title)
});
