/// <reference types="cypress" />

import data from '../../fixtures/example.json';
import { registrationPageLocators } from "../../support/elementLocators/RegistrationPageLocators";



describe('API requests registration page', () => {

    beforeEach(() => {

        cy.navigateToPage("/registration");
    })

    it('API request with  already exist user', () => {
    
        cy.intercept('POST', 'http://localhost:3000/api/register').as('register');
    
        cy.fillRegisterForm(registrationPageLocators.RegisterFormUsernameInput(), 
                                        data[0].username, 
                                        registrationPageLocators.RegisterFormPasswordInput(), 
                                        data[0].password, 
                                        registrationPageLocators.RegisterFormCheckboxInput(),
                                        true);
        cy.waitForTime(2000);
        cy.clickOnElement(registrationPageLocators.RegisterConsentYesButton());
        cy.submitForm(registrationPageLocators.RegisterSubmitButton());  
           
        cy.wait('@register');
        cy.get('@register').then(xhr => {
            const resp : any = xhr;
            expect(resp.response.statusCode).to.equal(409);
            expect(resp.response.body.message).to.equal('User already exist');
            expect(resp.response.statusMessage).to.equal('Conflict');
        })
    
    })
});
