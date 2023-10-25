/// <reference types="cypress" />

import {commonFunctions} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {registrationPageLocators} from '../../support/elementLocators/RegistrationPageLocators';  


 //================================================================================
 

describe('Fill in form with existing user credentials', () => {

    before(() => {
        //const url = Cypress.env('TEST_BASE_URL')+'/registration';
        //commonFunctions.navigateToPage(url);
        commonFunctions.navigateToPage("/registration");
    })

    it('error messages User already exist is visible', () => {

        elementInteractions.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                        'test', 
                                        registrationPageLocators.RegisterFormPasswordInput(), 
                                        'test', 
                                         registrationPageLocators.RegisterFormCheckboxInput(),
                                         true);
        commonFunctions.waitForTime(2000);

        elementInteractions.submitForm(registrationPageLocators.RegisterSubmitButton()); 
        commonFunctions.waitForTime(2000);
       
        elementInteractions.elementIsVisible(registrationPageLocators.RegisterMessageUserAlredyExists());
    })

})