/// <reference types="cypress" />

import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';  
import  data  from "../../fixtures/example.json";


 //================================================================================
 describe('Fill in form with existing user credentials', () => {

    beforeEach(() => {
        cy.navigateToPage("/login");
    })

    it('Login with invalid credentials', () => {
        cy.waitForTime(1000);   

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[1].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[1].password); 
                                
        cy.waitForTime(5000);
        cy.solveGoogleReCAPTCHA();
        cy.clickOnElement(loginPageLocators.LoginConsentYesButton());
        cy.submitForm(loginPageLocators.LoginSubmitButton()); 
        cy.waitForTime(5000);
        cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessageUsernameOrPasswordDoNotMatch());
        
         
    })

    it('Login with valid credentials', () => {

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 
                                
        cy.waitForTime(5000);
        cy.solveGoogleReCAPTCHA();
        cy.clickOnElement(loginPageLocators.LoginConsentYesButton());
        cy.submitForm(loginPageLocators.LoginSubmitButton()); 
        cy.waitForTime(1000);
        cy.urlContains(`/${data[0].username}`);   
    })


})