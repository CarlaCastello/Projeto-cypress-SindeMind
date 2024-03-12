const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'djp1os',
  e2e: {
    baseUrl: 'https://practice.automationtesting.in', 
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
