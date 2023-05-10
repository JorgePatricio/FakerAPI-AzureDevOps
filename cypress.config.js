const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    FakerAPI: 'https://fakerestapi.azurewebsites.net/api/v1/' //BaseUrl para o FakerAPI
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
