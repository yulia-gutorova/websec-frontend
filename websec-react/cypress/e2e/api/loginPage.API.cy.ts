/// <reference types="cypress" />

import data from '../../fixtures/example.json';
import { loginPageLocators } from "../../support/elementLocators/LoginPageLocators";



describe('API requests registration page', () => {

    beforeEach(() => {

        cy.navigateToPage("/login");
    })

    it('login with invalid credentials', () => {
    
        cy.intercept('POST', 'http://localhost:3000/api/login').as('login');
    
        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[1].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[1].password); 

        cy.waitForTime(5000);
        cy.solveGoogleReCAPTCHA();
        cy.waitForTime(2000);
        cy.clickOnElement(loginPageLocators.LoginConsentYesButton());
        cy.waitForTime(2000);
        cy.submitForm(loginPageLocators.LoginSubmitButton());   

        cy.wait('@login');
        cy.get('@login').then(xhr => {
            const resp : any = xhr;
            expect(resp.response.statusCode).to.equal(401);
        })
    
    })

    it('login with valid credentials', () => {
    
        cy.intercept('POST', 'http://localhost:3000/api/login').as('login');
    
        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 

        cy.waitForTime(5000);
        cy.solveGoogleReCAPTCHA();
        cy.waitForTime(2000);
        cy.clickOnElement(loginPageLocators.LoginConsentYesButton());
        cy.waitForTime(2000);
        cy.submitForm(loginPageLocators.LoginSubmitButton());   

        cy.wait('@login');
        cy.get('@login').then(xhr => {
            const resp : any = xhr;
            expect(resp.response.statusCode).to.equal(200);
        })
    
    })
});