/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  

import data from '../../fixtures/example.json';
console.log(data);

 //================================================================================
        describe('Check messages User already exist ', () => {


            before(() => {
                const url = Cypress.env('TEST_BASE_URL')+'/registration';
                commonFunctions.navigateToPage(url);
            })

            it.skip('error messages are not visible when submitting filled form', () => {

                elementInteractions.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                                'test', 
                                                registrationPageLocators.RegisterFormPasswordInput(), 
                                                'test', 
                                                 registrationPageLocators.RegisterFormCheckboxInput(),
                                                 true);
    
                                                 elementInteractions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
               
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })
    
            it('error messages are visivle when submitting empty form', () => {
    
                elementInteractions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
               
               elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageUsername());
               elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
               elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })
        })