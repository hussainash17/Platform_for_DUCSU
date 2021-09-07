let fakeUser;

describe('Testing signup', () => {
  beforeEach(() => {
    cy.task('freshUser').then((user) => {
      fakeUser = user;
    });
  });
  context('When a user tries to sign up using credentials', () => {
    it('User should signup and redirect to login page', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:5000/api/users/register',
        body: fakeUser,
      }).should((response) => {
        expect(response.status).eq(200);
      });
    });
  });
});
