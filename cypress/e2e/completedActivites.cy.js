
describe('see activity on page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000/completed');
  });

  it('displays a container for completed activities', () => {
    cy.get('.completed-activities-container').should('be.visible');
    cy.wait(1500);
  });

  it('clicks the return button and returns to home', () => {
    cy.get('.return-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
   