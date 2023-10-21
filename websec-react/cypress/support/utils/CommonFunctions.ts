export class CommonFunctions {

    navigateToPage(pageName: string) {
        cy.visit(pageName);
    }

    fillLoginForm(username: string, password: string) {
        cy.get("input[id='username']").type(username);
        cy.get("input[id='password']").type(password);
    }

    fillRegisterForm(username: string, password: string, checkbox: boolean) {
        cy.get("input[id='username']").type(username);
        cy.get("input[id='password']").type(password);
        if (checkbox) {
            cy.get("input[id='checkbox']").check();
        }
    }

    submitForm() {
        cy.get("button[type='submit']").click();
    }

    urlIsRight(url: string) {
        cy.url().should('include', url);
    }

    waitForTime(time: number) {
        cy.wait(time);
    }   

}

export const commonFunctions= new CommonFunctions();