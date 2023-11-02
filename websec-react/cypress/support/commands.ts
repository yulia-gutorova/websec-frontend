/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable {
        navigateToPage(pageName : string): Chainable<any>;
        urlContains(url: string): Chainable<any>;
        waitForTime(time: number): Chainable<any>;

        elementIsVisible(element : Cypress.Chainable<JQuery<HTMLElement>> | Cypress.Chainable<JQuery<HTMLButtonElement>>): Chainable<any>;
        elementIsExist(element : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        elementIsNotExist(element : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        elementIsNotVisible(element : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        clickOnElement(element : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>): Chainable<any>;

        typeTextInElement(element : Cypress.Chainable<JQuery<HTMLElement>>, text : string): Chainable<any>;
        getCssPropertyFromElement(element : Cypress.Chainable<JQuery<HTMLElement>>, cssProperty : string): Chainable<any>;


        elementWithTextIsVisible(text : string): Chainable<any>;
        elementIsEmty(element : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        elementIsNotEmty(element : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        
        fillLoginForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
            username: string, 
            inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
            password: string): Chainable<any>;

        fillRegisterForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
            username: string, 
            inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
            password: string,
            inputCheckbox : Cypress.Chainable<JQuery<HTMLElement>>,
            checkbox : boolean): Chainable<any>;

        submitForm(button : Cypress.Chainable<JQuery<HTMLElement>>): Chainable<any>;
        elementIsDisabled(button : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>): Chainable<any>;
        elementIsEnabled(button : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>): Chainable<any>;
        confirmCaptcha(): Chainable<any>;

    }
} 

// Common functions =========================================================================================
Cypress.Commands.add('navigateToPage', (pageName : string) => {
    cy.visit(pageName);
})

Cypress.Commands.add('urlContains', (url: string) => {
    cy.url().should('include', url);
})

Cypress.Commands.add('waitForTime', (time: number) => {
    cy.wait(time);
})


// Element interactions =========================================================================================
Cypress.Commands.add('elementIsVisible', (element : Cypress.Chainable<JQuery<HTMLElement>> | Cypress.Chainable<JQuery<HTMLButtonElement>>) => {
    element.should('be.visible');
})

Cypress.Commands.add('elementIsNotVisible', (element : Cypress.Chainable<JQuery<HTMLElement>>) => {
    element.should('not.visible');
})

Cypress.Commands.add('elementIsExist', (element : Cypress.Chainable<JQuery<HTMLElement>>) => {
     element.should('exist');
})
Cypress.Commands.add('elementIsNotExist', (element : Cypress.Chainable<JQuery<HTMLElement>>) => {
    element.should('not.exist');
})

Cypress.Commands.add('elementIsDisabled', (element : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>) => {
    element.should('be.disabled');
})

Cypress.Commands.add('elementIsEnabled', (element : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>>) => {
    element.should('be.enabled');
})

Cypress.Commands.add('clickOnElement', (element : Cypress.Chainable<JQuery<HTMLElement>>| Cypress.Chainable<JQuery<HTMLButtonElement>> ) => {
    element.click();
})

Cypress.Commands.add('typeTextInElement', (element : Cypress.Chainable<JQuery<HTMLElement>>, text : string) => {
    element.type(text);
})

Cypress.Commands.add('getCssPropertyFromElement', (element : Cypress.Chainable<JQuery<HTMLElement>>, cssProperty : string) => {
    element.invoke('css', cssProperty);
})

Cypress.Commands.add('elementWithTextIsVisible', (text : string) => {
    cy.contains(text).should('be.visible');
})

Cypress.Commands.add('elementIsEmty', (element : Cypress.Chainable<JQuery<HTMLElement>>) => {
    element.should('be.empty');
})

Cypress.Commands.add('elementIsNotEmty', (element : Cypress.Chainable<JQuery<HTMLElement>>) => {
    element.should('not.be.empty');
})

Cypress.Commands.add('fillLoginForm', (inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
    username: string, 
    inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
    password: string) => {

        inputUsername.type(username);
        cy.waitForTime(2000);
        inputPassword.type(password);
        cy.waitForTime(2000);
})

Cypress.Commands.add('fillRegisterForm', (inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
    username: string, 
    inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
    password: string,
    inputCheckbox : Cypress.Chainable<JQuery<HTMLElement>>,
    checkbox : boolean) => {

        inputUsername.type(username);
        cy.waitForTime(2000);
        inputPassword.type(password);
        cy.waitForTime(2000);
    
        if (checkbox) {
        inputCheckbox.check();
        cy.waitForTime(2000);
        }
})

Cypress.Commands.add('submitForm', (button : Cypress.Chainable<JQuery<HTMLElement>>) => {
    cy.waitForTime(2000);
    button.click();
})

Cypress.Commands.add('confirmCaptcha', () => {
        cy.waitForTime(5000);
        cy.get('iframe').then(($iframe) => {cy.wrap($iframe.contents()).find('body').then(($body) => {cy.wrap($body).find('#recaptcha-anchor')})})
})


/* checkElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
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
} */
