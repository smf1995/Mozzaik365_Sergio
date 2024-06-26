import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import authentication from "../page-objects/authenticationPage";

Given("the user navigates to the login page", () => {
  authentication.goToHomePage();
});

When(
  "the user enters the username {string} and the password {string}",
  (username, password) => {
    if (username) {
      authentication.fillTheUsernameField(username);
    }
    if (password) {
      authentication.fillThePasswordField(password);
    }
  }
);

When("the user clicks the login button", () => {
  authentication.submitLogin();
});

Then("the user should be redirected to the login page", () => {
  authentication.verifyLoginForm();
});

Then("the user should see an error message saying {string}", (text) => {
  authentication.verifyErrorMessage(text);
});
