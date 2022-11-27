import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then('I check the response status code {int}', statusCode => {
    expect(Cypress.config('resp').status).to.equal(statusCode)
});