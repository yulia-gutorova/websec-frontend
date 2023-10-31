/// <reference types="cypress" />

import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';  
import  data  from "../../fixtures/example.json";


 //================================================================================
 describe('Fill in form with existing user credentials', () => {

    beforeEach(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        cy.navigateToPage("/login");
    })

    it('Login with invalid credentials', () => {

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[1].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[1].password); 
                                
        cy.waitForTime(2000);

        cy.submitForm(loginPageLocators.LoginSubmitButton()); 

        cy.waitForTime(10000);
        cy.elementWithTextIsVisible(loginPageLocators.LoginErrorMessageUsernameOrPasswordDoNotMatch());
        
         
    })

    it('Login with valid credentials', () => {

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 
                                
        cy.waitForTime(2000);

        cy.submitForm(loginPageLocators.LoginSubmitButton()); 
        
        cy.waitForTime(10000);

        cy.urlContains(`/${data[0].username}`);   
    })


})