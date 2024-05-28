const config = require("../data/config");

/**
 * Represents the AuthenticationPage of the application.
 */
class AuthenticationPage {
  constructor() {
    // CSS selector for the username input field
    this.usernameField = '[data-test="username"]';
    // CSS selector for the password input field
    this.passwordField = '[data-test="password"]';
    // CSS selector for the login button
    this.loginButton = '[data-test="login-button"]';
    // CSS selector for the login form container
    this.loginFrom = '[data-test="login-container"]';
    // CSS selector for the error message element
    this.errorMessage = '[data-test="error"]';
  }

  /**
   * Navigates to the homepage of the application.
   */
  goToHomePage() {
    // Visit the base URL configured in the application
    cy.visit(config.baseUrl);
    // Assert that the login form is visible
    cy.get(this.loginFrom).should("be.visible");
  }

  /**
   * Fills the username field with the provided username.
   * @param {string} username - The username to fill in the field.
   */
  fillTheUsernameField(username) {
    // Type the provided username into the username field
    cy.get(this.usernameField).type(username);
  }

  /**
   * Fills the password field with the provided password.
   * @param {string} password - The password to fill in the field.
   */
  fillThePasswordField(password) {
    // Type the provided password into the password field
    cy.get(this.passwordField).type(password);
  }

  /**
   * Submits the login form.
   */
  submitLogin() {
    // Click on the login button to submit the form
    cy.get(this.loginButton).click();
  }

  /**
   * Verifies that the login form is visible.
   */
  verifyLoginForm() {
    // Assert that the login form is visible
    cy.get(this.loginFrom).should("be.visible");
  }

  /**
   * Verifies that the error message displayed matches the provided text.
   * @param {string} text - The expected error message text.
   */
  verifyErrorMessage(text) {
    // Assert that the error message text matches the provided text
    cy.get(this.errorMessage).should("have.text", text);
  }
}

module.exports = new AuthenticationPage();
