describe('see activity on page load', () => {

  it('displays the activity on page load', () => {
    cy.intercept('GET', 'https://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000');
    cy.get('.current-activity').should('have.text', 'Example Activity1');
    cy.get('.current-activity-type').should('have.text', "Type: Example1");
    cy.get('.current-activity-people').should('have.text', "Participants: At least 2");
  });

  
  it('skip button', () => {
  
    cy.intercept('GET', 'https://www.boredapi.com/api/activity', { fixture: 'activityFixture2.json' });
    cy.visit('http://localhost:3000');
    cy.get('.skip-button').click();
    cy.get('.current-activity').should('have.text', 'Example Activity2');
    cy.get('.current-activity-type').should('have.text', "Type: Example2");
    cy.get('.current-activity-people').should('have.text', "Participants: At least 4");
  });

  it('completed button', () => {
  
    cy.intercept('GET', 'https://www.boredapi.com/api/activity', { fixture: 'activityFixture3.json' });
    cy.visit('http://localhost:3000');
    cy.get('.completed-button').click();
    cy.get('.current-activity').should('have.text', 'Example Activity3');
    cy.get('.current-activity-type').should('have.text', "Type: Example3");
    cy.get('.current-activity-people').should('have.text', "Participants: At least 6");
  });

  it('completed list button', () => {
  
    cy.intercept('GET', 'https://www.boredapi.com/api/activity', { fixture: 'activityFixture3.json' });
    cy.visit('http://localhost:3000');
    cy.get('.completed-list-button').click();
    cy.url().should('eq', 'http://localhost:3000/completed');
  });
});