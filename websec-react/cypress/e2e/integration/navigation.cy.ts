
import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
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
        commonFunctions.navigateToPage("/");
    })

    it('Navigation between home page, login page and register page ias available', () => {

        elementInteractions.clickOnElement(homePageLocators.homeLogInButton());
        commonFunctions.urlContains("/login");
        commonFunctions.waitForTime(2000);

        elementInteractions.clickOnElement(loginPageLocators.LoginLinkToRegister());
        commonFunctions.urlContains("/registration");
        commonFunctions.waitForTime(2000);

        elementInteractions.clickOnElement(registrationPageLocators.RegisterLinkToLogin());
        commonFunctions.urlContains("/login");
        commonFunctions.waitForTime(2000);
    })

    it('Can not go back to myPage when logged out', () => {

        elementInteractions.clickOnElement(homePageLocators.homeLogInButton());

        commonFunctions.urlContains("/login");
        commonFunctions.waitForTime(2000);


        elementInteractions.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 
                                
        commonFunctions.waitForTime(2000);

        elementInteractions.submitForm(loginPageLocators.LoginSubmitButton() as unknown as Cypress.Chainable<JQuery<HTMLElement>>); 
                
        commonFunctions.waitForTime(10000);

        commonFunctions.urlContains(`/${data[0].username}`); 

        commonFunctions.waitForTime(2000);
        elementInteractions.clickOnElement(myPageLocators.MyPageLogoutButton());

        commonFunctions.urlContains(`/login`);
        commonFunctions.waitForTime(2000);
        
        cy.go("back");

        commonFunctions.urlContains(`/login`);          



    })


})