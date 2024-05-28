# Mozzaik365_Sergio

This reposititory is the result of the technical test - Mozzaik365

## Prerequisites 📖

Have Node 18 installed - https://nodejs.org/en

## Install modules 💻

To get started, simply run:

`npm i`

## To Execute Tests 🚀

You have two options to execute all the tests:

- **Headless mode:**

  `npm test`

- **Headless mode:**

  `npx cypress run`

## Reporting

After executing the tests in headless mode, the HTML report is generated in the reports folder.

## List of scenarios

The main focus of this solution was on the sign-in feature. Here is the list of scenarios that I identified:

- Valid login with correct credentials
- Logout functionality
- Valid login with incorrect password
- Invalid login with incorrect password
- Invalid login with valid password
- Login with case-sensitive credentials
- Attempt to login with SQL injection
- Login with a locked-out user
- Login with empty username and password
- Login with an empty username
- Login with an empty password
