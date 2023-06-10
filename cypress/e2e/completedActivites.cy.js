describe('completed activity', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000/completed');
  });
  
  it('should have a completed activity list', () => {
    cy.fixture('completedFixture.json').then((data) => {
      expect(data).to.be.an('array');
      expect(data).to.have.lengthOf(3);
      expect(data[0]).to.equal('Example Activity1');
      expect(data[1]).to.equal('Example Activity2'); 
    });
  });

  it('logo will return you to the main page', () => {
    cy.get('img').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('return button will return you to the main page', () => {
    cy.get('.return-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('displays "No completed activities" when there are none', () => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.fixture('emptyFixture.json').as('completedData');
  
    cy.visit('http://localhost:3000/completed');
    
    cy.get('.completed-activities-container').contains('No completed activities');
  });
});