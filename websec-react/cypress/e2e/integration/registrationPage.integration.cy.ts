/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  
import data from '../../fixtures/example.json';

 //================================================================================
 

describe('Fill in form with existing user credentials', () => {

    before(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        commonFunctions.navigateToPage("/registration");
    })

    it('error messages User already exist is visible', () => {

        elementInteractions.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                        data[0].username, 
                                        registrationPageLocators.RegisterFormPasswordInput(), 
                                        data[0].password, 
                                        registrationPageLocators.RegisterFormCheckboxInput(),
                                        true);
        commonFunctions.waitForTime(2000);

        elementInteractions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
        commonFunctions.waitForTime(2000);
       
        elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageUsername());
        elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessagePassword()); 
        elementInteractions.elementIsNotVisible(registrationPageLocators.RegisterErrorMessageCheckbox());
        
        elementInteractions.elementIsVisible(registrationPageLocators.RegisterMessageUserAlredyExists());

        commonFunctions.waitForTime(2000);
    })
  

})