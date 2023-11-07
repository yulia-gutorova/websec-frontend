/// <reference types="cypress" />

import { homePageLocators } from '../../support/elementLocators/HomePageLocators';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   

describe('Visit login page', () => 
{
    //================================================================================
    describe('Page elements are visible', () => 
    {

        beforeEach(() => 
        {
            cy.navigateToPage("/login");
        })

        it('visible and not visible elements', () => 
        {

            cy.elementIsVisible(loginPageLocators.LoginForm()); 
            cy.elementIsVisible(loginPageLocators.LoginForm()); 
            cy.elementIsVisible(loginPageLocators.LoginFormHeader());  
            cy.elementIsVisible(loginPageLocators.LoginFormUsernameLabel());
            cy.elementIsVisible(loginPageLocators.LoginFormPasswordLabel());   
            cy.elementIsVisible(loginPageLocators.LoginFormUsernameInput());
            cy.elementIsVisible(loginPageLocators.LoginFormPasswordInput());
            cy.elementIsVisible(loginPageLocators.LoginLinkToRegister());
            cy.elementIsVisible(loginPageLocators.LoginText());
            cy.elementIsVisible(loginPageLocators.LoginSubmitButton());
            
            cy.elementIsExist(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsExist(loginPageLocators.LoginUsernameErrorMessageWrapper());
            cy.elementIsExist(loginPageLocators.LoginConsentToCookieErrorWrapper());
            cy.elementIsEmty(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsEmty(loginPageLocators.LoginUsernameErrorMessageWrapper());

            cy.waitForTime(2000);
            cy.elementWithTextIsVisible(loginPageLocators.LoginConsentToCookieText());


        })

        it('submit button is disabled', () => 
        {
            cy.elementIsDisabled(loginPageLocators.LoginSubmitButton());
        })  

        it('Consent bunner elements are visible', () => 
        {
            cy.waitForTime(2000);
            cy.elementWithTextIsVisible(loginPageLocators.LoginConsentToCookieText());
            cy.waitForTime(2000);
            cy.elementIsVisible(loginPageLocators.LoginConsentToCookieButton());
            cy.waitForTime(2000);
            cy.elementIsVisible(loginPageLocators.LoginConsentBunner());
            cy.elementIsVisible(loginPageLocators.LoginConsentMoreButton());
            cy.elementIsVisible(loginPageLocators.LoginConsentYesButton());
               
        })

        it('reCaptca is visible', () => 
        {
            cy.waitForTime(5000);
            cy.elementIsVisible(loginPageLocators.LoginReCaptcha());         
        })

        it('Submit button is enabled', () => 
        {
            cy.waitForTime(2000);
            cy.solveGoogleReCAPTCHA();
            cy.clickOnElement(loginPageLocators.LoginConsentYesButton()); 
            cy.waitForTime(2000);
            cy.elementIsEnabled(loginPageLocators.LoginSubmitButton());

        });

    })

    
    //================================================================================
    describe('Check error messages', () => 
    {

        before(() => 
        {
            cy.navigateToPage("/login");
        })

        it('error messages are visible when submitting empty form', () => 
        {

            cy.waitForTime(5000);
            cy.solveGoogleReCAPTCHA();
            cy.clickOnElement(loginPageLocators.LoginConsentYesButton());

            cy.submitForm(loginPageLocators.LoginSubmitButton());

            cy.waitForTime(2000);

            cy.elementIsExist(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsExist(loginPageLocators.LoginUsernameErrorMessageWrapper());

            cy.elementIsNotEmty(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsNotEmty(loginPageLocators.LoginUsernameErrorMessageWrapper());
            
            cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessagePasswordText());
            cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessageUsernameText());
        })

    })
})