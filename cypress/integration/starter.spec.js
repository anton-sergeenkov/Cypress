/// <reference types="cypress" />

describe('Starter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/index');
    });

    it('Starter', () => {
        cy.contains('Hello');
    });
});
