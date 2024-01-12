const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Your project's end-to-end testing settings
    // Replace the following with the contents of your cypress.json file
    baseUrl: 'http://localhost:8080', // Example, set your application's base URL
    supportFile: 'cypress/support/e2e.js',
    integrationFolder: 'cypress/integration',
    // Add other configurations as needed
  },

  // Add any other global configurations
  // For example, if you had "viewportWidth" and "viewportHeight" in cypress.json:
  viewportWidth: 1280,
  viewportHeight: 720,

  // Include other configurations like video, screenshots, etc.
  video: true,
  screenshotsFolder: 'cypress/screenshots',

  // Environment variables can also be included
  env: {
    // Define environment variables here
  },

  // Add plugins configuration if you use any
  setupNodeEvents(on, config) {
    // configure plugins here
  },
})