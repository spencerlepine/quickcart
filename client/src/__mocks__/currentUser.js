const currentUser = {
  uid: 'k3nQJ2a9fMcDIku6wBZObXMjpYo1',
  displayName: 'John Doe',
  email: 'johndoe@gmail.com',
};

jest.mock('currentUser', () => ({
  mockCurrentUser: () => currentUser,
}));

export default currentUser;