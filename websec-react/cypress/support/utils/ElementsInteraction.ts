/// <reference types="cypress" />
import { commonFunctions } from "./CommonFunctions";
class ElementInteractions{

     elementIsVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('be.visible');
    }
    elementIsExist (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('exist');
    }

    elementIsNotVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('not.exist');
    }

    clickOnElement (element : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>) {
        return element.click();
    }

    typeTextInElement (element : Cypress.Chainable<JQuery<HTMLElement>>, text : string) {
        return element.type(text);
    }

    checkElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.check();
    }

    uncheckElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.uncheck();
    }   

    getTextFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.invoke('text');
    }   

    getAttributeFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>, attribute : string) {
        return element.invoke('attr', attribute);
    }

    getCssPropertyFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>, cssProperty : string) {
        return element.invoke('css', cssProperty);
    }  

    clearTextFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.clear();
    }  

    getElementByText (text : string) {
        return cy.contains(text);
    }
    
    fillLoginForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
        username: string, 
        inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
        password: string) {
          
        inputUsername.type(username);
        commonFunctions.waitForTime(2000);
        inputPassword.type(password);
        commonFunctions.waitForTime(2000);
        }

    fillRegisterForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
            username: string, 
            inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
            password: string,
            inputCheckbox : Cypress.Chainable<JQuery<HTMLElement>>,
            checkbox : boolean) {

    inputUsername.type(username);
    commonFunctions.waitForTime(2000);
    inputPassword.type(password);
    commonFunctions.waitForTime(2000);

    if (checkbox) {
    inputCheckbox.check();
    commonFunctions.waitForTime(2000);
    }
    }

    submitForm( button : Cypress.Chainable<JQuery<HTMLElement>>) {
    commonFunctions.waitForTime(2000);
    button.click();
    }

}


export const elementInteractions = new ElementInteractions();