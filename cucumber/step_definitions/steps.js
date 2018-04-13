const {Given, When, Then} = require('cucumber');
const assert = require('cucumber-assert');
const page = require('../../page_objects/page');

const DocMenu = element(by.xpath("//a[@href='docs']"));
const APIMenu = element(by.xpath("//a[@href='api']"));
const filterInput = element(by.xpath("//div[@class='form-search']/input"));
const ngModelLink = element(by.xpath("//a[@href='api/forms/NgModel']"));

const ngModelPageUrl = browser.baseUrl + 'api/forms/NgModel';

Given('main page of Angular site is opened', {timeout: 25000}, () => browser.get(browser.baseUrl));

When('user click to DOCS point in header menu', () =>  DocMenu.click());

When('user click to API point in navigation menu', () => {
  browser.waitForAngular();
  return APIMenu.click();
});

When('user type ngModel to Filter input', () => {
  browser.waitForAngular();
  return filterInput.sendKeys('ngModel');
});

Then('there is ngModel in searching results', (done) => {
  browser.sleep(500);
  ngModelLink.isPresent().then((present) => {
    assert.equal(present, true, 'There is no ngModel in searching results').then(done,done);
  })
});

Then('user click on ngModel link', () => ngModelLink.click());

Then('page with info about ngModel was opened', (done) => {
  browser.waitForAngular();
    browser.getCurrentUrl().then((actual_url) => {
    assert.equal(actual_url, ngModelPageUrl, `Current page is not ${ngModelPageUrl} page, but ${actual_url}`).then(done, done);
  });
});