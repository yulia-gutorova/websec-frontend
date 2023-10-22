export class CommonFunctions {

    navigateToPage(pageName: string) {
        cy.visit(pageName);
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

    urlIsRight(url: string) {
        cy.url().should('include', url);
    }

    waitForTime(time: number) {
        cy.wait(time);
    }   

}

export const commonFunctions= new CommonFunctions();