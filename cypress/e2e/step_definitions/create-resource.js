import { When, Then , Given} from "@badeball/cypress-cucumber-preprocessor";

Given('I have the POST resource request with {string}', bodyType => {
  if(bodyType == "valid body") {
    Cypress.config('body', {title: 'foo', body: 'bar', userId: 1,})
  } else if(bodyType == "invalid body"){
    // body = {title: 'foo', body: 'bar', userId: 1,}
  }
})

When('I send the POST request', () => {
  cy.postRequest(Cypress.config('baseUrl'), Cypress.config('body')).then(response => {    
    Cypress.config('resp', response)
  })
});

Then('I check the POST response body', () => {
  expect(Cypress.config('resp').body.title).to.equal(Cypress.config('body').title)
  expect(Cypress.config('resp').body.body).to.equal(Cypress.config('body').body)
  expect(parseInt(Cypress.config('resp').body.userId)).to.equal(Cypress.config('body').userId)
});
