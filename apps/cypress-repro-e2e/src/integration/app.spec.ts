import { getGreeting } from '../support/app.po';

describe('cypress-repro', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to cypress-repro!');
  });
});
