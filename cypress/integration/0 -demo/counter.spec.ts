
describe('The Redux Counter', () => {

  beforeEach(() => {
    cy.visit('/counter');
  });
  it('starts at zero', () => {


    cy.get('[data-counter-current-span]').should('contain.text', 0);
    cy.get('[data-counter-reset-button]').should('be.disabled');
  });
  it('increments', () => {
    cy.get('[data-counter-increment-button]').click();
    cy.get('[data-counter-current-span]').should('contain.text', 1);
    cy.get('[data-counter-increment-button]').click();
    cy.get('[data-counter-current-span]').should('contain.text', 2);
  });

  it('allows you to reset', () => {
    cy.get('[data-counter-increment-button]').click();
    cy.get('[data-counter-increment-button]').click();
    cy.get('[data-counter-reset-button]').click();
    cy.get('[data-counter-current-span]').should('contain.text', 0);
    cy.get('[data-counter-reset-button]').should('be.disabled');
  });
});
