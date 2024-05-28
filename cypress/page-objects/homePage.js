const config = require("../data/config");

class HomePage {
  constructor() {
    this.inventoryList = '[data-test="inventory-container"]';
    this.menuButton = "#react-burger-menu-btn";
    this.logoutButton = '[data-test="logout-sidebar-link"]';
  }

  checkHomePage() {
    const inventoryUrl = config.baseUrl + "/inventory.html";
    cy.url().should("eq", inventoryUrl);
    cy.get(this.inventoryList).should("be.visible");
    cy.get(this.menuButton).should("be.visible");
  }

  logout() {
    cy.get(this.menuButton).click();
    cy.get(this.logoutButton).click();
  }
}

module.exports = new HomePage();
