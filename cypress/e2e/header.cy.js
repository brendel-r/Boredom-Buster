describe("header", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.boredapi.com/api/activity", {
      fixture: "activityFixture1.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("should have logo", () => {
    cy.get("img").should("have.attr", "alt");
  });

  it("should have a slogan", () => {
    cy.fixture("sloganFixture.json").then((data) => {
      expect(data).to.be.an("array");
      expect(data[0]).to.equal("Boredom, meet your match!");
    });
  });

  it("should switch between light and dark mode", () => {
    
    cy.get(".toggle-btn").should("have.text", "Switch to Light Mode");
    cy.get(".toggle-btn").click();
    cy.get(".toggle-btn").should("have.text", "Switch to Dark Mode");
    cy.get(".toggle-btn").click();
    cy.get(".toggle-btn").should("have.text", "Switch to Light Mode");
  });
});
