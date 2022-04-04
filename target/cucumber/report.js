$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios billing Login Functionality Validation",
  "description": "",
  "id": "techfios-billing-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2368552900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1082354700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to login with valid credentials from Database",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials-from-database",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@TF_login2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User enters \"username\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters \"password\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3599587800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3116813200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4471965000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 3223805900,
  "status": "passed"
});
formatter.after({
  "duration": 720029600,
  "status": "passed"
});
});