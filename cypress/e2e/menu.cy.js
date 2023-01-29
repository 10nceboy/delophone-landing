describe('Test menu scrolling', () => {
  it('scrolls to section when clicked on menu link', () => {
    cy.visit('http://localhost:3000');

    cy.get('.menu-link').first().click();
    cy.get('.header').should('not.have.class', 'header_active');
    cy.get('.header__burger').should('not.have.class', 'header__burger_hidden');
  });

  it('toggles header and burger button when clicked on menu link on touch device', () => {
    cy.visit('http://localhost:3000');

    cy.viewport('iphone-6');
    cy.get('.menu-link').first().click();
    cy.wait(300);
    cy.get('.header').should('not.have.class', 'header_active');
    cy.get('.header__burger').should('not.have.class', 'header__burger_hidden');
  });
});
