describe('completed activity', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.visit('http://localhost:3000/completed');
  });
  
  it('should have a completed activiy list', () => {
    cy.fixture('completedFixture.json').then((data) => {
      expect(data).to.be.an('array');
      expect(data).to.have.lengthOf(3);
      expect(data[0]).to.equal('Example Activity1');
      expect(data[1]).to.equal('Example Activity2'); 
    });
  });

  it('logo', () => {
    // cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });
    cy.get('img').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('return button', () => {
    // cy.intercept('GET', 'http://www.boredapi.com/api/activity', { fixture: 'activityFixture1.json' });

    cy.get('.return-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});