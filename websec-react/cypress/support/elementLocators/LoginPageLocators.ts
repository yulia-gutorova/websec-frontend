/// <reference types="cypress" />

class LoginPageLocators {

    LoginForm() {
        return cy.get('#loginForm');
    }

    LoginFormHeader() {
        return cy.get('#loginFormHeader');
    }

    LoginFormUsernameLabel() {
        return cy.get("label[for='username']");
    }

    LoginFormUsernameInput() {
        return cy.get("input[id='username']");
    }   

    LoginFormPasswordLabel() {
        return cy.get("label[for='password']");
    }   

    LoginFormPasswordInput() {
        return cy.get("input[id='password']");
    }

    LoginFormSubmitButton() {
        return cy.get("button[type='submit']");
    }   

    LoginLinkToRegister() {
       return cy.get("span").contains('< Register');
    }

    LoginText() {
        return cy.get("span").contains("Don't have an account?");
    }

    LoginSubmitButton() {     
        return cy.get("button[type='submit']");
    }

    LoginErrorMessagePassword() {
        return cy.get("#passwordError")
    }

    LoginErrorMessageUsername() {
            return cy.get("#usernameError");
    }    

}

export const homePageLocators = new LoginPageLocators();