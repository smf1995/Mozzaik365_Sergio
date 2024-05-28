import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import authentication from "../page-objects/authenticationPage";

Given("the user navigates to the login page", () => {
  authentication.goToHomePage();
});

When(
  "the user enters the username {string} and the password {string}",
  (username, password) => {
    authentication.fillTheUsernameField(username);
    authentication.fillThePasswordField(password);
  }
);

When("the user clicks the login button", () => {
  authentication.submitLogin();
});
