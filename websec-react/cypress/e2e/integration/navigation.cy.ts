
import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import {loginPageLocators } from '../../support/elementLocators/LoginPageLocators';
import {homePageLocators} from '../../support/elementLocators/HomePageLocators';

 //================================================================================
 

describe('Testing navigation between pages', () => {

    before(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        commonFunctions.navigateToPage("/");
    })

    it('navigation', () => {

        elementInteractions.clickOnElement(homePageLocators.homeLogInButton());
        commonFunctions.urlContains("/login");
        commonFunctions.waitForTime(2000);

        elementInteractions.clickOnElement(loginPageLocators.LoginLinkToRegister());
        commonFunctions.urlContains("/registration");
        commonFunctions.waitForTime(2000);

        elementInteractions.clickOnElement(registrationPageLocators.RegisterLinkToLogin());
        commonFunctions.urlContains("/login");

    })

})