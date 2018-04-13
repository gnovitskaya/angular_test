/*
 Basic configuration to run your cucumber
 feature files and step definitions with protractor.
 **/
exports.config = {

  directConnect: true, //to start stop selenium via protractor

  baseUrl: 'https://angular.io/',

  capabilities: {
    browserName:'chrome',
    chromeOptions: {
      args: [ "--disable-gpu" ]
    }
    // chromeOptions: {
    //   args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    // }
  },

  allScriptsTimeout: 20000,

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  specs: [
    './cucumber/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: ['./cucumber/step_definitions/*.js'],  // require step definition files before executing features
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    strict: true,                  // <boolean> fail if there are any undefined or pending steps
    format: 'json:./reports/report.json',            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    'dry-run': false,              // <boolean> invoke formatters without executing steps
    compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },

  onPrepare: function() {
    setTimeout(function() {
      browser.driver.executeScript(function() {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        };
      }).then(function(result) {
        browser.driver.manage().window().setSize(result.width, result.height);
      });
    });
  },
};
