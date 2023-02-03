describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1400, 10000);
  });

  it('should increment and decrement input values', () => {
    cy.get('.calculator__increment').first().click();
    cy.get('.calculator__input').first().should('have.value', '1');
    cy.get('.calculator__decrement').first().click();
    cy.get('.calculator__input').first().should('have.value', '0');
  });

  it('should change sum value on increment and decrement', () => {
    cy.get('.calculator__increment').first().click();
    cy.get('.calculator__increment').first().click();
    cy.get('.calculator__sum').first().should('have.text', '5880');
    cy.get('.calculator__decrement').first().click();
    cy.get('.calculator__input').first().should('have.value', '3890');
  });
});
