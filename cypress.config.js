const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 100000,
    requestTimeout: 10000,
    baseUrl: 'https://notes-serverless-app.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    viewportWidthBreakpoint: 768,
  },
})
