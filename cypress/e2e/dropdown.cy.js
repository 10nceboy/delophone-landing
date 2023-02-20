describe('Dropdown component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should toggle the active class on click', () => {
    cy.wait(100)
      .get('.dropdown')
      .first()
      .click()
      .should('have.class', 'dropdown_active');
  });

  it('should remove the active class when an item is clicked', () => {
    cy.get('.dropdown').first().click().should('have.class', 'dropdown_active');
    cy.get('.dropdown__menu li').first().click();
    cy.wait(300)
      .get('.dropdown')
      .first()
      .should('not.have.class', 'dropdown_active');
  });
});
