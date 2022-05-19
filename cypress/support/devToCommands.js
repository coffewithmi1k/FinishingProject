Cypress.Commands.add('searchBySpecifiedTag', (tag) => {
    cy.visit(`t/${tag}`);
});