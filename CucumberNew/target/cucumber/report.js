$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/APITesting/CucumberNew/FNHW-14.feature");
formatter.feature({
  "line": 2,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BDDSTORY-FNHW-14"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BDDTEST-FNHW-15"
    },
    {
      "line": 7,
      "name": "@BDDVER--1"
    },
    {
      "line": 8,
      "name": "@BDDCYC-f28f3188-d199-447b-9a67-66e79747027d"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openBrowser()"
});
formatter.result({
  "duration": 5387071387,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 21210504428,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.check()"
});
formatter.result({
  "duration": 73510,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "duration": 189396771,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@BDDTEST-FNHW-16"
    },
    {
      "line": 17,
      "name": "@BDDVER--1"
    },
    {
      "line": 18,
      "name": "@BDDCYC-f28f3188-d199-447b-9a67-66e79747027d"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.sc()"
});
formatter.result({
  "duration": 149591,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.sc2()"
});
formatter.result({
  "duration": 56546,
  "status": "passed"
});
});