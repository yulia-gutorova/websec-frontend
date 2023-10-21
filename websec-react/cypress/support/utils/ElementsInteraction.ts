/// <reference types="cypress" />

class ElementInteractions{

     elementIsVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('be.visible');
    }

    elementIsNotVisible (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.should('not.exist');
    }
}


export const elementInteractions = new ElementInteractions();