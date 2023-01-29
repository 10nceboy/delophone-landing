describe('Phone number updating', () => {
  it('should update all phone numbers when city is selected', () => {
    cy.viewport(1200, 800);
    cy.visit('http://localhost:3000');
    cy.get('.city').each((cityDropdown) => {
      cityDropdown.click();
      cy.wait(300);
      cy.get('.city[data-value="Москва"]').first().click();
      cy.get('.phone-number a').each((phoneNumber) => {
        cy.wrap(phoneNumber).should('have.text', '8 (495) 286–01–11');
      });
      cityDropdown.click();
      cy.wait(300);
      cy.get('.city[data-value="Санкт-Петербург"]').first().click();
      cy.get('.phone-number a').each((phoneNumber) => {
        cy.wrap(phoneNumber).should('have.text', '8 (812) 409-05-00');
      });
    });
  });
});
