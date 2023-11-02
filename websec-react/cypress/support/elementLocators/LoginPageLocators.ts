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

    LoginConsentToCookieButton() {     
        return cy.get('button').contains("I want to consent to cookies");
    }

    LoginConsentBunner() {
        return cy.get('.rhc-banner');
    }

    LoginConsentMoreButton() {     
        return cy.get('button').contains("More");
    }

    LoginConsentYesButton() {     
        return cy.get('button').contains("Yes");
    }

    LoginConsentNoButton() {     
        return cy.get('button').contains("No");
    }
    
    
    
    //========================== Error Messages ============================================

    LoginErrorMessagePassword() {
        return cy.get("#passwordError")
    }

    LoginErrorMessageUsername() {
            return cy.get("#usernameError");
    } 

    LoginUsernameErrorMessageWrapper() {
        return cy.get('#loginUsernameErrorMessageWrapper')
    }

    LoginPasswordErrorMessageWrapper()  {
        return cy.get('#loginPasswordErrorMessageWrapper')
    }

    LoginConsentToCookieErrorWrapper() {     
        return cy.get('#loginCookieConsentErrorWrapper');
    }

    //========================== Error Messages Text ========================================
    LoginErrorMessagePasswordText() {
        return 'Password is required'
    }

    LoginErrorMessageUsernameText() {
            return 'Username is required'
    } 

    LoginErrorMessageUsernameOrPasswordDoNotMatch() {
        return 'Username or password do not match'
    } 

    LoginErrorMessageConsentIsRequired() {
        return 'Consent for essential cookies is required'
    } 

    LoginConsentToCookieText() {     
        return "I want to consent to cookies";
    }

/*     LoginInvalidCredentials() {
        return cy.get("#loginInvalidCredentials")
    } */
    LoginConsentBunnerText() {     
        return "Can we use cookies and external services according to our";
    }
     

}



export const loginPageLocators = new LoginPageLocators();