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
    


    //========================== Error Messages ============================================

    LoginErrorMessagePassword() {
        return cy.get("#passwordError")
    }

    LoginErrorMessageUsername() {
            return cy.get("#usernameError");
    } 
    
    LoginErrorMessagePasswordText() {
        return 'Password is required'
    }

    LoginErrorMessageUsernameText() {
            return 'Username is required'
    } 

    LoginErrorMessageUsernameOrPasswordDoNotMatch() {
        return 'Username or password do not match'
} 

    

    LoginInvalidCredentyials() {
        return cy.get("#loginInvalidCredentyials")
    }

    LoginUsernameErrorMessageWrapper() {
        return cy.get('#loginUsernameErrorMessageWrapper')
    }

    LoginPasswordErrorMessageWrapper()  {
        return cy.get('#loginPasswordErrorMessageWrapper')
    }
    }



export const loginPageLocators = new LoginPageLocators();