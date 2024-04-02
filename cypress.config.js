const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j2df47',
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
