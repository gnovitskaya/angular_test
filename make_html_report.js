const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Test Environment": "local",
    "Browser": "Chrome or can be switched to healdless"
  }
};

reporter.generate(options);
