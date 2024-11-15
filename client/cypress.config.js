const { defineConfig } = require('cypress');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
    supportFile: './cypress/support/component.js',
    specPattern: ['src/**/*.cy.{js,jsx}'],
    setupNodeEvents(on, config) {
      // component testing node events setup code
      // https://docs.cypress.io/guides/tooling/code-coverage
      require('@cypress/code-coverage/task')(on, config);

      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));

      return config;
    },
  },

  e2e: {
    devServer: {
      command: 'npm run start',
      port: 3000,
      timeout: 120_000,
    },
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx}'],
    supportFile: './cypress/support/e2e.js',
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
