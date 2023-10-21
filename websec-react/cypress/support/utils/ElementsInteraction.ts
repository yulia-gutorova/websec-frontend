/// <reference types="cypress" />

import { type } from "cypress/types/jquery";

class ElementInteractions{

     elementIsVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('be.visible');
    }

    elementIsNotVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('not.exist');
    }

    clickOnElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
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

    submitForm (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.submit();
    }   

    clearTextFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.clear();
    }   

}


export const elementInteractions = new ElementInteractions();