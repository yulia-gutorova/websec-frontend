/// <reference types="cypress" />

import { registrationPageLocators } from '../../support/elementLocators/RegistrationPageLocators';
import data from '../../fixtures/example.json';
import { homePageLocators } from '../../support/elementLocators/HomePageLocators';
import { loginPageLocators } from '../../support/elementLocators/LoginPageLocators';

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

        beforeEach(() => 
        {
            cy.navigateToPage("/registration");

        })

        it.skip('visible elements and not visible elements', () => 
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

            cy.elementIsExist(registrationPageLocators.RegisterPasswordErrorMessageWrapper());
            cy.elementIsExist(registrationPageLocators.RegisterUsernameErrorMessageWrapper());

            cy.elementIsVisible(registrationPageLocators.RegisterConsentToCookieButton());

            cy.elementIsEmty(registrationPageLocators.RegisterPasswordErrorMessageWrapper());
            cy.elementIsEmty(registrationPageLocators.RegisterUsernameErrorMessageWrapper());
        })

        it('Consent is visible', () => {

            cy.elementWithTextIsVisible(registrationPageLocators.RegisterConsentToCookieText());
            cy.elementIsVisible(registrationPageLocators.RegisterConsentToCookieButton());
            cy.elementIsVisible(registrationPageLocators.RegisterConsentBunner());
            cy.elementIsVisible(registrationPageLocators.RegisterConsentMoreButton());
            cy.elementIsVisible(registrationPageLocators.RegisterConsentYesButton());              
        })

        it('submit button is disabled', () => 
        {
            cy.elementIsDisabled(registrationPageLocators.RegisterSubmitButton());
        })

        it('submit button is enabled', () => 
        {
            cy.clickOnElement(registrationPageLocators.RegisterConsentYesButton());
            cy.elementIsEnabled(registrationPageLocators.RegisterSubmitButton());

        })

    })

    //================================================================================
    describe('Check error messages', () => 
    {

        before(() => 
        {
            cy.navigateToPage("/registration");
        })
        it('error messages are visivle when submitting empty form', () => 
        {
            cy.clickOnElement(registrationPageLocators.RegisterConsentYesButton());
            cy.clickOnElement(registrationPageLocators.RegisterSubmitButton());
            cy.elementIsVisible(registrationPageLocators.RegisterErrorMessageUsername());
            cy.elementIsVisible(registrationPageLocators.RegisterErrorMessagePassword());
            cy.elementIsVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
            cy.getCssPropertyFromElement(registrationPageLocators.RegisterErrorMessageUsername(), 'color', 'rgb(255, 69, 0)');
        })

    })
    //====


})    
//================================================================================
