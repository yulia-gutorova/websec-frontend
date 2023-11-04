

import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import {loginPageLocators } from '../../support/elementLocators/LoginPageLocators';
import {homePageLocators} from '../../support/elementLocators/HomePageLocators';
import data from "../../fixtures/example.json"
import { myPageLocators } from '../../support/elementLocators/MyPageLocators';
 //================================================================================
 

describe('Testing navigation between pages', () => {

    beforeEach(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        cy.navigateToPage("/");
    })

    it('Navigation between home page, login page and register page ias available', () => {

        cy.clickOnElement(homePageLocators.homeLogInButton());
        cy.urlContains("/login");
        cy.waitForTime(2000);

        cy.clickOnElement(loginPageLocators.LoginLinkToRegister());
        cy.urlContains("/registration");
        cy.waitForTime(2000);

        cy.clickOnElement(registrationPageLocators.RegisterLinkToLogin());
        cy.urlContains("/login");
        cy.waitForTime(2000);
    })

    it.skip('Can not go back to myPage when logged out', () => {

        cy.clickOnElement(homePageLocators.homeLogInButton());

        cy.urlContains("/login");
        cy.waitForTime(2000);

        cy.solveGoogleReCAPTCHA();
        cy.clickOnElement(loginPageLocators.LoginConsentYesButton()); 

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 
                                
        cy.waitForTime(2000);

        //cy.clickOnElement(loginPageLocators.LoginC);

        cy.submitForm(loginPageLocators.LoginSubmitButton()); 
                
        cy.waitForTime(10000);

        cy.urlContains(`/${data[0].username}`); 

        cy.waitForTime(2000);
        cy.clickOnElement(myPageLocators.MyPageLogoutButton());

        cy.urlContains(`/login`);
        cy.waitForTime(2000);
        
        cy.go("back");

        cy.urlContains(`/login`);          



    })


})