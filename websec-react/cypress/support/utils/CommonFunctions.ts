export class NavigateToPage {

    navigateToPage(pageName: string) {
        cy.visit(pageName);
    }

}

export const navigateToPage = new NavigateToPage();