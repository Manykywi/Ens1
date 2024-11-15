describe('Products', () => {
  beforeEach(() => {
    cy.visitApp();
    cy.getByDataCy('products-link').click();
  });
  it('should render top sellers section', () => {
    cy.getByDataCy('top-sellers').should('be.visible');
  });

  it('should render discount section', () => {
    cy.getByDataCy('discount-section').should('be.visible');
  });
});
