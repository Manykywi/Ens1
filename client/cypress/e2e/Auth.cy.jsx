describe('Home', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('avatar').click();
  });
  it('should render the user panel', () => {
    cy.getByDataCy('user-panel').should('exist');
  });

  it('should authorize', () => {
    cy.getByDataCy('password-input').type('password');
    cy.getByDataCy('email-input').type('email@gmail.com');
    cy.getByDataCy('sign-in-button').click();
    cy.getByDataCy('user-email').should('exist');
  });
  it('should sign out', () => {
    cy.getByDataCy('password-input').type('password');
    cy.getByDataCy('email-input').type('email@gmail.com');
    cy.getByDataCy('sign-in-button').click();
    cy.getByDataCy('sign-out-button').click();
    cy.getByDataCy('user-email').should('not.exist');
  });
});
