/// <reference types="cypress" />

import { registrationPageLocators } from '../../support/elementLocators/RegistrationPageLocators';
import data from '../../fixtures/example.json';

//================================================================================
describe('Visit registration page', () => {

    //================================================================================
    describe('Check url', () => 
    {
        before(() => 
        {
            cy.navigateToPage("/registration");
        })

        it('url is right', () => 
        {
            cy.urlContains('/registration');
        })

    })

    //================================================================================
    describe('Page elements are visible', () => 
    {

        before(() => 
        {
            cy.navigateToPage("/registration");
        })

        it('visible elements', () => 
        {

            cy.waitForTime(1000);

            cy.elementIsVisible(registrationPageLocators.RegisterFormHeader());
            cy.elementIsVisible(registrationPageLocators.RegisterForm());

            cy.elementIsVisible(registrationPageLocators.RegisterFormUsernameLabel());
            cy.elementIsVisible(registrationPageLocators.RegisterFormPasswordLabel());
            cy.elementIsVisible(registrationPageLocators.RegisterFormCheckboxLabel());

            cy.elementIsVisible(registrationPageLocators.RegisterFormUsernameInput());
            cy.elementIsVisible(registrationPageLocators.RegisterFormPasswordInput());
            cy.elementIsVisible(registrationPageLocators.RegisterFormCheckboxInput());

            cy.elementIsVisible(registrationPageLocators.RegisterLinkToLogin());
            cy.elementIsVisible(registrationPageLocators.RegisterText());
            cy.elementIsVisible(registrationPageLocators.RegisterSubmitButton());
        })

        it('not visible elements', () => 
        {

            //cy.elementIsNotExist(registrationPageLocators.RegisterErrorMessagePassword());
            //cy.elementIsNotExist(registrationPageLocators.RegisterErrorMessageUsername());
            //cy.elementIsNotExist(registrationPageLocators.RegisterErrorMessageCheckbox());
            //cy.elementIsNotExist(registrationPageLocators.RegisterErrorUnexpectedError());

        })
    })

        //================================================================================
        describe('Check error messages', () => 
        {

            beforeEach(() => 
            {
                //const url = Cypress.env('TEST_BASE_URL')+'/registration';
                //commonFunctions.navigateToPage(url);
                cy.navigateToPage("/registration");
            })

            it('error messages are visivle when submitting empty form', () => 
            {

                cy.waitForTime(1000);
                cy.submitForm(registrationPageLocators.RegisterSubmitButton());
                cy.waitForTime(1000);

                cy.elementIsVisible(registrationPageLocators.RegisterErrorMessageUsername());
                cy.elementIsVisible(registrationPageLocators.RegisterErrorMessagePassword());
                cy.elementIsVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            })

        })
        //====


})    
//================================================================================
