describe('see activity on page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000/');
  });

  it('displays the activity on page load', () => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000/');
    cy.get('.current-activity').should('be.visible');
    cy.get('.current-activity-type').should('be.visible');
    cy.get('.current-activity-people').should('be.visible');
  });
  
  it('skip button', () => {
    
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture2.json' });
    cy.get('.skip-button').click();
    cy.wait(3000);
  });
});