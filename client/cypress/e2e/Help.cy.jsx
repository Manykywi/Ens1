describe('Help', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('help-link').click();
  });
  it('should render the questions container', () => {
    cy.getByDataCy('questions-container').should('be.visible');
  });

  it('should visible help number', () => {
    cy.getByDataCy('help-number').should('be.visible');
  });
});
