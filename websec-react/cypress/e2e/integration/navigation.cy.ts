/// <reference types="cypress" />

import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import {loginPageLocators } from '../../support/elementLocators/LoginPageLocators';
import {homePageLocators} from '../../support/elementLocators/HomePageLocators';
import data from "../../fixtures/example.json"
import { myPageLocators } from '../../support/elementLocators/MyPageLocators';
 //================================================================================
 

describe('Testing navigation between pages', () => {

    beforeEach(() => {
        cy.navigateToPage("/");
    })

    it('Navigation between home page, login page and register page is available', () => {

        cy.clickOnElement(homePageLocators.homeLogInButton());
        cy.urlContains("/login");

        cy.clickOnElement(loginPageLocators.LoginLinkToRegister());
        cy.urlContains("/registration");

        cy.waitForTime(1000);
        cy.clickOnElement(registrationPageLocators.RegisterLinkToLogin());
        cy.urlContains("/login");
    })

    it('Can not go back to myPage when logged out', () => {

        cy.clickOnElement(homePageLocators.homeLogInButton());

        cy.urlContains("/login");
        cy.waitForTime(5000);

        cy.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 

        cy.clickOnElement(loginPageLocators.LoginConsentYesButton()); 
        cy.solveGoogleReCAPTCHA()
                                
        cy.submitForm(loginPageLocators.LoginSubmitButton()); 

        ;
        cy.waitForTime(5000);

        cy.urlContains(`/${data[0].username}`); 

        cy.clickOnElement(myPageLocators.MyPageLogoutButton());

        cy.urlContains(`/login`);
        
        cy.go("back");
        cy.waitForTime(1000);
        cy.urlContains(`/login`);          



    })


})