/// <reference types="cypress" />
import { loginPageLocators } from "../../support/elementLocators/LoginPageLocators";
import "cypress-iframe";

// Define a custom Cypress command for solving Google reCAPTCHA
/* Cypress.Commands.add("solveGoogleReCAPTCHA", () => {
  cy.visit("/login");

  cy.get("iframe")
    .first()
    .its("0.contentDocument.body")
    .find(".recaptcha-checkbox")
    .should("exist")
    .click();
}); */

describe("confirm reCAPTCHA", () => {

  it("should solve reCAPTCHA", () => {
    cy.solveGoogleReCAPTCHA();
  });

});
