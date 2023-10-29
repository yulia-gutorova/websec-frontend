export class CommonFunctions {

    navigateToPage(pageName: string) {
        cy.visit(pageName);
    }

    urlContains(url: string) {
        cy.url().should('include', url);
    }
   
    waitForTime(time: number) {
        cy.wait(time);
    }   

}

export const commonFunctions= new CommonFunctions();