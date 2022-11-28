# Challenge-PagoNxt

To download this project dependencies just run the command below on your terminal:

```
npm install
```

To run the tests with Cypress in window mode you can run:

```
npx cypress open
```

To run the tests with Cypress in headless mode, just use the command:

```
npx cypress run
```

Tor run tests with allure reports enabled:

```
npm run cypress:run-allure
```

The project is divided in:

**Cypress**<br />
**- Downloads:** Any files downloaded while testing an application's file download feature will be stored in the downloadsFolder which is set to cypress/downloads by default.<br />
**- Fixtures:** Fixtures are used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.<br />
**- e2e:** This folder contains all things related with the test cases (features and step definitions).<br />
**- Features:** Here we have the .feature files, where we describe and document our test scenarios in Gherkin language.<br />
**- Step_Definitions:** In this folder we have the test scripts itself, where cucumber do your magic and make all the test scenarios work based on the BDD description.<br />
**- Support:** The support file is a great place to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files. This file runs before every single spec file.<br />
**- Screenshots:** this folder contains some screenshots taken after each test scenario's run. This can help to evidence <br />
application's behaviour and examine/fix bugs.
**- Videos:** this folder contains some short videos taken after each test scenario's run. This can help to evidence <br />
application's behaviour and examine/fix bugs alongside with Screenshots.

## Improvements to be Done

The API we are working with contains the basic set of functionalities that a service should contain. In the downside, there are many scenarios that we could improve by adding some behaviours in each one of the services.

For example, the resource's creation works very well when we are creating a resource that could really exists. But at the momment, we can also created a resource that wouldn't make sense on the "real world". See example below:

```
Scenario: Create Resource Success
    Given I have the POST resource request with "valid body"
    When I send the POST request
    Then I check the response status code 201
    And I check the POST response body
```

This example works well, because since we have a valid body, the service may create the resource without any problem.

```
Scenario: Create Invalid Resource
    Given I have the POST resource request with "invalid body"
    When I send the POST request
    Then I check the response status code 400 (verify status on documentation)
```

The last example contains the expected behaviour when we have a invalid body. But when we call the create resource service with a invalid body, we have a status code 201 instead.

The same thing happens with some other services, like PATCH and DELETE. This way, would be a huge thing to include scenarios where we don't have always success to improve our application's quality and also our confidence on what we are developing.

That being said, a good improvement on our API and our test scenarios would be to include behaviours that is not always related with success scenarios. For example, when we try to create a resource with a invalid body or any other invalid parameter, the API could treat it and return properly a status code for the situation, this way we can increase our coverage and avoid a lot of issues in the future. 
