/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';  
import  data  from "../../fixtures/example.json";


 //================================================================================
 describe('Fill in form with existing user credentials', () => {

    beforeEach(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        commonFunctions.navigateToPage("/login");
    })

    it('Login with invalid credentials', () => {

        elementInteractions.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[1].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[1].password); 
                                
        commonFunctions.waitForTime(2000);

        elementInteractions.submitForm(loginPageLocators.LoginSubmitButton()); 

        commonFunctions.waitForTime(10000);
        elementInteractions.getElementByText("Username or password do not match")
        
         
    })

    it('Login with valid credentials', () => {


        elementInteractions.fillLoginForm(loginPageLocators.LoginFormUsernameInput(), 
                                        data[0].username, 
                                        loginPageLocators.LoginFormPasswordInput(), 
                                        data[0].password); 
                                
        commonFunctions.waitForTime(2000);

        elementInteractions.submitForm(loginPageLocators.LoginSubmitButton()); 
        
        commonFunctions.waitForTime(10000);

        commonFunctions.urlContains(`/${data[0].username}`);   
    })


})