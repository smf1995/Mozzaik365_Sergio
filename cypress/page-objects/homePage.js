const config = require("../data/config");

/**
 * Represents the HomePage of the application.
 */
class HomePage {
  constructor() {
    // CSS selector for the inventory list element
    this.inventoryList = '[data-test="inventory-container"]';
    // CSS selector for the menu button element
    this.menuButton = "#react-burger-menu-btn";
    // CSS selector for the logout button element
    this.logoutButton = '[data-test="logout-sidebar-link"]';
  }

  /**
   * Checks if the user is on the homepage.
   */
  checkHomePage() {
    // Construct the inventory URL using the base URL from config
    const inventoryUrl = config.baseUrl + "/inventory.html";
    // Assert that the current URL matches the inventory URL
    cy.url().should("eq", inventoryUrl);
    // Assert that the inventory list element is visible
    cy.get(this.inventoryList).should("be.visible");
    // Assert that the menu button is visible
    cy.get(this.menuButton).should("be.visible");
  }

  /**
   * Logs out from the application.
   */
  logout() {
    // Click on the menu button to open the sidebar
    cy.get(this.menuButton).click();
    // Click on the logout button in the sidebar
    cy.get(this.logoutButton).click();
  }
}

module.exports = new HomePage();
