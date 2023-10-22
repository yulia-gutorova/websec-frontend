/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  

describe('Visit registration page', () => {

    describe('Check url', () => {
        before(() => {
            cy.visit('/registration');
        })

        it('url is right', () => {
            commonFunctions.urlIsRight('/registration');
        })

    })

    describe('Page elements are visible', () => {

        before(() => {
            cy.visit('/registration');
        })


        it('visible elements', () => {

            commonFunctions.waitForTime(1000);

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterForm()); 
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormHeader());  

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormUsernameLabel());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormPasswordLabel()); 
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormCheckboxLabel());

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormUsernameInput());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormPasswordInput());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormCheckboxInput());

            elementInteractions.elementIsVisible(registrationPageLocators.LoginLinkToLogin());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterText());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterSubmitButton());
        })

        it('not visible elements', () => {

            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorUnexpectedError());    

        })


        describe('Check error messages', () => {


            beforeEach(() => {
                cy.visit('/registration');
            })

            it('error messages are not visible when submitting filled form', () => {

                commonFunctions.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                                'test', 
                                                registrationPageLocators.RegisterFormPasswordInput(), 
                                                'test', 
                                                 registrationPageLocators.RegisterFormCheckboxInput(),
                                                 true);
    
                commonFunctions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
               
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
                elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })
    
            it('error messages are visivle when submitting empty form', () => {
    
               commonFunctions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
               
               elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageUsername());
               elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
                elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })


        })

    })
})