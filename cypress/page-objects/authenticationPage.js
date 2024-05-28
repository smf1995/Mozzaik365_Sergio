const config = require("../data/config");

class AuthenticationPage {
  constructor() {
    this.usernameField = '[data-test="username"]';
    this.passwordField = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
    this.loginFrom = '[data-test="login-container"]';
  }

  goToHomePage() {
    cy.visit(config.baseUrl);
    cy.get(this.loginFrom).should("be.visible");
  }

  fillTheUsernameField(username) {
    cy.get(this.usernameField).type(username);
  }

  fillThePasswordField(password) {
    cy.get(this.passwordField).type(password);
  }

  submitLogin() {
    cy.get(this.loginButton).click();
  }
  verifyLoginForm() {
    cy.get(this.loginFrom).should("be.visible");
  }
}

module.exports = new AuthenticationPage();
