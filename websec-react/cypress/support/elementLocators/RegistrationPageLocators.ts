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

    RegisterSuccessMessage() {
        return cy.get("span").contains("Registration successful!");
    }

    RegisterMessageUserAlredyExists() {
        return cy.get("span").contains("User already exist");
    }
    


}

export const registrationPageLocators = new RegistrationPageLocators();