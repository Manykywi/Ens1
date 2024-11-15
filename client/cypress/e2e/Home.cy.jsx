describe('Home', () => {
  beforeEach(() => {
    cy.visitApp();
  });
  it('should render the main page banner', () => {
    cy.getByDataCy('banner').should('exist');
  });

  it('should visible products list', () => {
    cy.getByDataCy('product-list').should('be.visible');
  });
});
