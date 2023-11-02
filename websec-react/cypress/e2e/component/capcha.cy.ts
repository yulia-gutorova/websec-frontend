/// <reference types="cypress" />

import { get } from 'cypress/types/lodash';
import {loginPageLocators} from '../../support/elementLocators/LoginPageLocators';   

    describe('confirm recapture', () => 
    {

        before(() => {
            cy.navigateToPage("/login");
            cy.log('ignore google recaptcha');
            
        })

        it.skip('reCapture', () => {
          cy.intercept('POST', '**/*google.com/recaptcha/api2/**', { statusCode: 200, body: `["rresp","",null,null,null,""]` });
          cy.elementIsEnabled(loginPageLocators.LoginSubmitButton());   
})

    })
