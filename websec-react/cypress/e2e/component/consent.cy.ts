
/// <reference types="cypress" />

import { get } from 'cypress/types/lodash';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   
import {homePageLocators} from '../../support/elementLocators/HomePageLocators';

    describe('Consent', () => 
    {

        beforeEach(() => {
            
            cy.navigateToPage("/");  
            cy.clickOnElement(homePageLocators.homeLogInButton());

        })

        it.skip('Consent is visible', () => {
            cy.waitForTime(2000);
            cy.elementWithTextIsVisible(loginPageLocators.LoginConsentToCookieText());
            cy.waitForTime(2000);
            cy.elementIsVisible(loginPageLocators.LoginConsentToCookieButton());
            //cy.clickOnElement(loginPageLocators.LoginConsentToCookieButton());
            cy.waitForTime(5000);
            cy.elementIsVisible(loginPageLocators.LoginConsentBunner());
            cy.elementIsVisible(loginPageLocators.LoginConsentMoreButton());
            cy.elementIsVisible(loginPageLocators.LoginConsentYesButton());
            cy.clickOnElement(loginPageLocators.LoginConsentNoButton());    
})

    })