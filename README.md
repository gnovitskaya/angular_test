# angular_test
demo UI tests for site with angular front end

Used tools:
- cucumber.js
- node.js
- protractor

With current config tests will run in Chrome 

####how to run

install nodejs/npm/protractor/cucumber

then :

go to dir with tests

npm install

./node_modules/webdriver-manager/bin/webdriver-manager update

./node_modules/protractor/bin/protractor cucumberConf.js  <-- for tests running

node make_html_report.js <-- for making html report
