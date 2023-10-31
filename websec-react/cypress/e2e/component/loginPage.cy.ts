/// <reference types="cypress" />

import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   

describe('Visit login page', () => {

    describe('Page elements are visible', () => 
    {

        beforeEach(() => {

            cy.navigateToPage("/login");
        })

        it('visible and not visible elements', () => {

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
            

            //elementInteractions.elementIsNotVisible(loginPageLocators.LoginPasswordErrorMessageWrapper());
           // elementInteractions.elementIsNotVisible(loginPageLocators.LoginUsernameErrorMessageWrapper());

            cy.elementIsExist(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsExist(loginPageLocators.LoginUsernameErrorMessageWrapper());

            cy.elementIsEmty(loginPageLocators.LoginPasswordErrorMessageWrapper());
            cy.elementIsEmty(loginPageLocators.LoginUsernameErrorMessageWrapper());

            //cy.elementIsNotVisible(loginPageLocators.LoginErrorMessagePassword());
            //cy.elementIsNotVisible(loginPageLocators.LoginErrorMessageUsername());

            cy.waitForTime(3000);

        })

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

                cy.waitForTime(2000);

                cy.submitForm(loginPageLocators.LoginSubmitButton());

                cy.waitForTime(2000);

                cy.elementIsExist(loginPageLocators.LoginPasswordErrorMessageWrapper());
                cy.elementIsExist(loginPageLocators.LoginUsernameErrorMessageWrapper());
    
                cy.elementIsNotEmty(loginPageLocators.LoginPasswordErrorMessageWrapper());
                cy.elementIsNotEmty(loginPageLocators.LoginUsernameErrorMessageWrapper());
                
                //elementInteractions.getElementByText(loginPageLocators.LoginErrorMessagePasswordText()); 
                //elementInteractions.getElementByText(loginPageLocators.LoginErrorMessageUsernameText());
                //cy.contains(loginPageLocators.LoginErrorMessagePasswordText()).should('be.visible');
                
                cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessagePasswordText());
                cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessageUsernameText());
            })

        })
})