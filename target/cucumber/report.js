$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankCashNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "               and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCash"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCashMenu\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccountMenu\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters description as \"\u003cdescription\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Phone as \"\u003cPhone\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters internetBankingUrl as \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submitButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "sav",
        "asdafafdaf",
        "2000",
        "200",
        "Jackie",
        "243",
        "http://www.bank.com"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2668718900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "               and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCash"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCashMenu\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccountMenu\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters accountTitle as \"sav\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters description as \"asdafafdaf\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters initialBalance as \"2000\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters accountNumber as \"200\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters contactPerson as \"Jackie\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters Phone as \"243\" in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters internetBankingUrl as \"http://www.bank.com\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submitButton\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 1417064900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3172465700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3093829000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4444263400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 3010266000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCashMenu",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 98682600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccountMenu",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 957749600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sav",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountTitle_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3108152600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdafafdaf",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3141047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3152868600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3131605400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jackie",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3115163400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "243",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3130748000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.bank.com",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_internetBankingUrl_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3160936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitButton",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 894115500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 3260420200,
  "status": "passed"
});
formatter.after({
  "duration": 811253000,
  "status": "passed"
});
});