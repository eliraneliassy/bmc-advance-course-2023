describe('ui-components', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttoncomponent--primary&args=text:eliran;')
  );
  it('should render the component', () => {
    cy.get('b-button').should('exist');
  });
});
