describe('The Home Page', () => {
  before(() => {
    cy.visit('/login');
    cy.typeLogin({ email: 'ashraf@gmail.com', password: '123456789' });
    cy.contains('Submit').click();
  });

  it('pathname should be dashboard', () => {
    cy.location('pathname').should('eq', '/dashboard');
  });

  it('go for creating a post', () => {
    cy.contains('DUCSU').click();
    cy.location('pathname').should('eq', '/feedWithPost');
  });

  it('creating a post with some text', () => {
    cy.get('textarea').type('DUCSU is a very good platform');
    cy.contains('Submit').click();
  });
});
