import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page-objects/homePage";

Then("the user should be redirected to the homepage", () => {
  HomePage.checkHomePage();
});

When("the user clicks the logout button", () => {
  HomePage.logout();
});
