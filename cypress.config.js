const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  env: {
    FakerAPI: 'https://fakerestapi.azurewebsites.net/' //BaseUrl para o FakerAPI
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
