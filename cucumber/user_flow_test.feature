Feature: Checking correct behaviour of links
  As a user
  In order to find useful materials
  I want to be sure that I can use menu, submenu, searching inputs to achive the goal

  Scenario:
    Given main page of Angular site is opened
    When user click to DOCS point in header menu
    And user click to API point in navigation menu
    And user type ngModel to Filter input
    Then there is ngModel in searching results
    And user click on ngModel link
    And page with info about ngModel was opened
