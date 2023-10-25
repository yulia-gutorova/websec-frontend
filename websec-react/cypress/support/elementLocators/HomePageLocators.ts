/// <reference types="cypress" />

class LoginPageLocators {

   homeLogInButton() {
        return cy.get('#goToLoginPageButton');
    }
}

export const homePageLocators = new LoginPageLocators();