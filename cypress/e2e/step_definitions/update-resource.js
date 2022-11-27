import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the PUT resource request with {string} and id {int}', (bodyType, id) => {
  if(bodyType == "valid body") {
    Cypress.config('body', {id: id, title: 'foo', body: 'bar', userId: 1,})
  } else if(bodyType == "invalid body"){
    // body = {title: 'foo', body: 'bar', userId: 1,}
  }
  Cypress.config('path', `${Cypress.config('baseUrl')}/${id}`)
})

When('I send the PUT request', () => {
  cy.putRequest(Cypress.config('path'), Cypress.config('body')).then(response => {
    Cypress.config('resp', response)
  })
});

// Then('I check the PUT response status code {int}', statusCode => {
//   expect(Cypress.config('resp').status).to.equal(statusCode)
// });

Then('I check the PUT response body', () => {
  expect(Cypress.config('resp').body.id).to.equal(Cypress.config('body').id)
  expect(Cypress.config('resp').body.title).to.equal(Cypress.config('body').title)
  expect(Cypress.config('resp').body.body).to.equal(Cypress.config('body').body)
  expect(parseInt(Cypress.config('resp').body.userId)).to.equal(Cypress.config('body').userId)
});
