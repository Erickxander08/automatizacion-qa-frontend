module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['src/support/**/*.ts', 'src/steps/**/*.ts'],
    requireModule: ['tsx/cjs'],
    format: ['progress', 'html:reports/cucumber.html'],
    formatOptions: { snippetInterface: 'async-await' },
  },
};
