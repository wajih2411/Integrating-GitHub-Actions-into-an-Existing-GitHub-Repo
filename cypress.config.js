module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/healthCheck.spec.cy.js'
  },
  defaultCommandTimeout: 20000,
};