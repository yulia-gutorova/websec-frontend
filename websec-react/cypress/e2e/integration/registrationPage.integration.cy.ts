/// <reference types="cypress" />
 
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import data from '../../fixtures/example.json';

 //================================================================================
 

describe('Fill in form with existing user credentials', () => {

    before(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        cy.navigateToPage("/registration");
    })

    it('error messages User already exist is visible', () => {

        cy.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                        data[0].username, 
                                        registrationPageLocators.RegisterFormPasswordInput(), 
                                        data[0].password, 
                                        registrationPageLocators.RegisterFormCheckboxInput(),
                                        true);
        cy.waitForTime(2000);

        cy.submitForm(registrationPageLocators.RegisterSubmitButton()); 
        cy.waitForTime(2000);
       
        //cy.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
        //cy.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
        //cy.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox())
        cy.elementIsVisible(registrationPageLocators.RegisterMessageUserAlredyExists());

        cy.waitForTime(2000);
    })
  

})