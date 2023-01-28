describe('Dropdown component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should toggle the active class on click', () => {
    cy.get('.dropdown').first().click().should('have.class', 'active');

    cy.get('.dropdown').first().click().should('not.have.class', 'active');
  });

  it('should update the button text and data-value attribute when an item is clicked', () => {
    cy.get('.dropdown__menu li').first().click();
    cy.get('.dropdown__button')
      .first()
      .should('have.text', 'Item 1')
      .and('have.attr', 'data-value', 'item-1');
  });

  it('should remove the active class when an item is clicked', () => {
    cy.get('.dropdown').first().click().should('have.class', 'active');
    cy.get('.dropdown__menu li').first().click();
    cy.get('.dropdown').first().should('not.have.class', 'active');
  });
});
