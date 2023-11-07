/// <reference types="cypress" />
 
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import data from '../../fixtures/example.json';

 //================================================================================
 

describe('Fill in form with existing user credentials', () => {

    beforeEach(() => {
        cy.navigateToPage("/registration");
    })

    it('error messages User already exist is visible', () => {

        cy.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                        data[0].username, 
                                        registrationPageLocators.RegisterFormPasswordInput(), 
                                        data[0].password, 
                                        registrationPageLocators.RegisterFormCheckboxInput(),
                                        true);
        cy.clickOnElement(registrationPageLocators.RegisterConsentYesButton());
        cy.submitForm(registrationPageLocators.RegisterSubmitButton()); 
        cy.elementIsVisible(registrationPageLocators.RegisterMessageUserAlredyExists());
    })
})