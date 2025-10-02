describe('Launches Portal', () => {
  it('navigates to launches (simulates login flow)', () => {
    cy.visit('/');
    cy.contains('View Launches').click();
    cy.url().should('include', '/launches');
    cy.contains('Launches Catalog').should('be.visible');
  });
});