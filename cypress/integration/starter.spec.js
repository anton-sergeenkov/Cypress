/// <reference types="cypress" />

describe('Starter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081/index');
        cy.injectAxe();
    });

    it('Starter', function () {
        cy.contains('Hello');
        cy.checkA11y();
    });
});
