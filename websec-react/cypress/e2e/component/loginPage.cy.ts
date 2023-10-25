/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   

describe('Visit login page', () => {

    describe('Page elements are visible', () => {

        before(() => {
            //cy.visit(Cypress.env('TEST_BASE_URL'));
            //commonFunctions.navigateToPage(Cypress.env('TEST_BASE_URL'));
            commonFunctions.navigateToPage("/login");
        })

        it('visible elements', () => {

            elementInteractions.elementIsVisible(loginPageLocators.LoginForm()); 
            elementInteractions.elementIsVisible(loginPageLocators.LoginFormHeader());  
            elementInteractions.elementIsVisible(loginPageLocators.LoginFormUsernameLabel());
            elementInteractions.elementIsVisible(loginPageLocators.LoginFormPasswordLabel());   
            elementInteractions.elementIsVisible(loginPageLocators.LoginFormUsernameInput());
            elementInteractions.elementIsVisible(loginPageLocators.LoginFormPasswordInput());
            elementInteractions.elementIsVisible(loginPageLocators.LoginLinkToRegister());
            elementInteractions.elementIsVisible(loginPageLocators.LoginText());
            elementInteractions.elementIsVisible(loginPageLocators.LoginSubmitButton());

            commonFunctions.waitForTime(2000);
        })

        it('not visible elements', () => {

            elementInteractions.elementIsNotVisible(loginPageLocators.LoginErrorMessagePassword());
            elementInteractions.elementIsNotVisible(loginPageLocators.LoginErrorMessageUsername());

            commonFunctions.waitForTime(2000);
        })

    })
})