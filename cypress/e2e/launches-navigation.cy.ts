describe('Launch Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/launches');
    cy.contains('Launches Catalog', { timeout: 10000 }).should('be.visible');
  });

  it('should navigate to launch detail and back to launches page', () => {
    cy.get('[class*="cursor-pointer"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0);
    
    cy.get('[class*="cursor-pointer"]').first().click();
    
    cy.url({ timeout: 10000 }).should('include', '/launches/');
    cy.contains('Back to Launches', { timeout: 10000 }).should('be.visible');
    
    cy.contains('Back to Launches').click();
    
    cy.url({ timeout: 10000 }).should('match', /\/launches$/);
    
    cy.wait(2000);
    
    cy.reload();
    
    cy.contains('Launches Catalog', { timeout: 10000 }).should('be.visible');
    
    cy.get('[class*="cursor-pointer"]', { timeout: 10000 })
      .should('have.length.greaterThan', 0);
  });

  it('should display launch details correctly', () => {
    cy.get('[class*="cursor-pointer"]', { timeout: 10000 }).first().click();
    
    cy.contains('Back to Launches', { timeout: 10000 }).should('be.visible');
    
    cy.contains('Date:', { timeout: 10000 }).should('be.visible');
    cy.contains('Success:', { timeout: 10000 }).should('be.visible');
    cy.contains('Rocket:', { timeout: 10000 }).should('be.visible');
  });

  it('should navigate to detail page from launches', () => {
    cy.get('[class*="cursor-pointer"]', { timeout: 10000 }).first().click();
    
    cy.url({ timeout: 10000 }).should('include', '/launches/');
    cy.contains('Back to Launches', { timeout: 10000 }).should('be.visible');
    
    cy.go('back');
    
    cy.url({ timeout: 10000 }).should('match', /\/launches$/);
    cy.contains('Launches Catalog', { timeout: 10000 }).should('be.visible');
  });
});