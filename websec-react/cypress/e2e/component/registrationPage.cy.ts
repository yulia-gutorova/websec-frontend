/// <reference types="cypress" />

import { commonFunctions } from '../../support/utils/CommonFunctions';
import { elementInteractions } from '../../support/utils/ElementsInteraction';
import { registrationPageLocators } from '../../support/elementLocators/RegistrationPageLocators';
import data from '../../fixtures/example.json';

//================================================================================
describe('Visit registration page', () => {

    //================================================================================
    describe('Check url', () => 
    {
        before(() => 
        {
            //const url = Cypress.env('TEST_BASE_URL')+'/registration';
            //commonFunctions.navigateToPage(url);

            commonFunctions.navigateToPage("/registration");
        })

        it('url is right', () => 
        {
            commonFunctions.urlContains('/registration');
        })

    })

    //================================================================================
    describe('Page elements are visible', () => 
    {

        before(() => 
        {
            //const url = Cypress.env('TEST_BASE_URL')+'/registration';
            //commonFunctions.navigateToPage(url);
            commonFunctions.navigateToPage("/registration");
        })

        it('visible elements', () => 
        {

            commonFunctions.waitForTime(1000);

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterForm());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormHeader());

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormUsernameLabel());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormPasswordLabel());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormCheckboxLabel());

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormUsernameInput());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormPasswordInput());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterFormCheckboxInput());

            elementInteractions.elementIsVisible(registrationPageLocators.RegisterLinkToLogin());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterText());
            elementInteractions.elementIsVisible(registrationPageLocators.RegisterSubmitButton());
        })

        it('not visible elements', () => 
        {

            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorUnexpectedError());

        })
    })

        //================================================================================
        describe('Check error messages', () => 
        {

            beforeEach(() => 
            {
                //const url = Cypress.env('TEST_BASE_URL')+'/registration';
                //commonFunctions.navigateToPage(url);
                commonFunctions.navigateToPage("/registration");
            })

            it('error messages are visivle when submitting empty form', () => 
            {

                commonFunctions.waitForTime(1000);
                elementInteractions.submitForm(registrationPageLocators.RegisterSubmitButton());
                commonFunctions.waitForTime(1000);

                elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageUsername());
                elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessagePassword());
                elementInteractions.elementIsVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })

        })
        //====


})    
//================================================================================
