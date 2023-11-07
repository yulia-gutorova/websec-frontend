/// <reference types="cypress" />

import "cypress-iframe";

describe("confirm reCAPTCHA", () => {

  it("should solve reCAPTCHA", () => {
    cy.visit("/login");
    cy.waitForTime(5000);
    cy.solveGoogleReCAPTCHA();
  });

});
