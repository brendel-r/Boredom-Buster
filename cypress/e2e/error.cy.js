it("should display an error if api response is not ok", () => {
  cy.intercept("GET", "http://www.boredapi.com/api/activity", {
    statusCode: 500,
  })
  cy.visit("http://localhost:3000/");
  cy.get(".error-message").contains("Oops! Try again later.");
});

it("should display an error if bad url", () => {
  cy.visit("http://localhost:3000/Potatoe");
  cy.get(".error-message").contains("Oops! Try again later.");
});