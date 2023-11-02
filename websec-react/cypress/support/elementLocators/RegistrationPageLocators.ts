/// <reference types="cypress" />

class RegistrationPageLocators {

    RegisterForm() {
        return cy.get('#registerForm');
    }

    RegisterFormHeader() {
        return cy.get('#registerFormHeader');
    }

    RegisterFormUsernameLabel() {
        return cy.get("label[for='username']");
    }

    RegisterFormUsernameInput() {
        return cy.get("input[id='username']");
    }   

    RegisterFormPasswordLabel() {
        return cy.get("label[for='password']");
    }   

    RegisterFormPasswordInput() {
        return cy.get("input[id='password']");
    }

    RegisterFormCheckboxLabel() {
        return cy.get("label[for='checkbox']");
    }

    RegisterFormCheckboxInput() {
        return cy.get("input[id='checkbox']");
    }

    RegisterFormSubmitButton() {
        return cy.get("button[type='submit']");
    }   

    RegisterLinkToLogin() {
       return cy.get("span").contains('< Go back');
    }

    RegisterText() {
        return cy.get("span").contains("Already have an account?");
    }

    RegisterSubmitButton() {     
        return cy.get("button[type='submit']");
    }

    //========================== Consent ============================================
    RegisterConsentToCookieButton() {     
        return cy.get('button').contains("I want to consent to cookies");
    }

    RegisterConsentBunner() {
        return cy.get('.rhc-banner');
    }

    RegisterConsentMoreButton() {     
        return cy.get('button').contains("More");
    }

    RegisterConsentYesButton() {     
        return cy.get('button').contains("Yes");
    }

    RegisterConsentNoButton() {     
        return cy.get('button').contains("No");
    }


    //========================== Error Messages ============================================
    RegisterErrorMessagePassword() {
        return cy.get("#passwordError")
    }

    RegisterErrorMessageUsername() {
            return cy.get("#usernameError");
    }
    
    RegisterErrorMessageCheckbox() {
        return cy.get("#checkboxError");
    }

    RegisterErrorUnexpectedError() {
        return cy.get("#unexpectedError");
    }

    //========================== Error Messages Wrappers ============================================
    
    RegisterUsernameErrorMessageWrapper() {
        return cy.get('#registerUsernameErrorMessageWrapper')
    }

    RegisterPasswordErrorMessageWrapper()  {
        return cy.get('#registerPasswordErrorMessageWrapper')
    }

    RegisterCheckboxErrorMessageWrapper()  {
        return cy.get('#registerCheckboxErrorMessageWrapper')
    }

    RegisterConsentToCookieErrorWrapper() {     
        return cy.get('#registerCookieConsentErrorWrapper');
    }


    //========================== Get element by Text ============================================
    RegisterSuccessMessage() {
        return cy.get("span").contains("Registration successful!");
    }

    RegisterMessageUserAlredyExists() {
        return cy.get("span").contains("User already exist");
    }

    RegisterConsentToCookieText() {     
        return "I want to consent to cookies";
    }

    RegisterConsentBunnerText() {     
        return "Can we use cookies and external services according to our";
    }


    
}

export const registrationPageLocators = new RegistrationPageLocators();