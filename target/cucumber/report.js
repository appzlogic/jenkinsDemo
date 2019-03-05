$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SampleFB/src/test/resources/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "LOGIN FOR ALL SCENARIOS",
  "description": "",
  "id": "login-for-all-scenarios",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Verify I am on the facebook sigin page�",
  "description": "",
  "id": "login-for-all-scenarios;verify-i-am-on-the-facebook-sigin-page�",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@today"
    },
    {
      "line": 4,
      "name": "@rbs"
    },
    {
      "line": 5,
      "name": "@searchLayout"
    },
    {
      "line": 6,
      "name": "@search"
    },
    {
      "line": 7,
      "name": "@regression"
    },
    {
      "line": 8,
      "name": "@smokeee"
    },
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# Given I am on the login page"
    }
  ],
  "line": 12,
  "name": "I open browser",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter the url",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter first name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter last name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep.i_open_browser()"
});
formatter.result({
  "duration": 4362546728,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_enter_the_url()"
});
formatter.result({
  "duration": 1707560095,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_enter_first_name()"
});
formatter.result({
  "duration": 431278656,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_enter_last_name()"
});
formatter.result({
  "duration": 60560490,
  "status": "passed"
});
});