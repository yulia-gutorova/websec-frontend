
/// <reference types="cypress" />

import { get } from 'cypress/types/lodash';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   
import {homePageLocators} from '../../support/elementLocators/HomePageLocators';

    describe('Consent', () => 
    {

        beforeEach(() => {   
            cy.navigateToPage("/registration");  
        })

        it('Consent is visible', () => {
            cy.waitForTime(2000);
            cy.elementWithTextIsVisible(loginPageLocators.LoginConsentToCookieText());;
            cy.elementIsVisible(loginPageLocators.LoginConsentToCookieButton());
            cy.elementIsVisible(loginPageLocators.LoginConsentBunner());
            cy.elementIsVisible(loginPageLocators.LoginConsentMoreButton());
            cy.elementIsVisible(loginPageLocators.LoginConsentYesButton());
            cy.clickOnElement(loginPageLocators.LoginConsentNoButton());    
    })
})