/// <reference types="cypress" />

class MyPageLocators {

    MyPageLogoutButton() {
         return cy.get('button').contains("Log out");
     }
 }
 
 export const myPageLocators = new MyPageLocators();