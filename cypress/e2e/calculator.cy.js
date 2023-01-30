describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(1400, 10000);
  });

  it('should increment and decrement input values', () => {
    cy.get('.calculator__input').first().type('5');
    cy.get('.calculator__increment').first().click();
    cy.get('.calculator__input').first().should('have.value', '6');
    cy.get('.calculator__decrement').first().click();
    cy.get('.calculator__input').first().should('have.value', '5');
  });

  it('should update the fixed and monthly prices when an input value is changed', () => {
    cy.get('.calculator__input').first().type('5');
    cy.get('.calculator__price-fixed')
      .first()
      .should('have.text', '9 950₽ разово');
    cy.get('.calculator__sum').first().should('have.text', '11 850');

    cy.get('.calculator__price-per-month').first().should('have.text', '');
  });

  it('should only allow numbers and certain keys to be entered into the input', () => {
    cy.get('.calculator__input').first().type('abc');
    cy.get('.calculator__input').first().should('have.value', '0');
  });
});
