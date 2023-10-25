/// <reference types="cypress" />

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

    clearTextFromElement (element : Cypress.Chainable<JQuery<HTMLElement>>) {
        return element.clear();
    }  
    
    fillLoginForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
        username: string, 
        inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
        password: string) {
          
        inputUsername.type(username);
        inputPassword.type(password);
        }

    fillRegisterForm(inputUsername : Cypress.Chainable<JQuery<HTMLElement>>, 
            username: string, 
            inputPassword : Cypress.Chainable<JQuery<HTMLElement>>, 
            password: string,
            inputCheckbox : Cypress.Chainable<JQuery<HTMLElement>>,
            checkbox : boolean) {

    inputUsername.type(username);
    inputPassword.type(password);

    if (checkbox) {
    inputCheckbox.check();
    }
    }

    submitForm( button : Cypress.Chainable<JQuery<HTMLElement>>) {
    button.click();
    }

}


export const elementInteractions = new ElementInteractions();