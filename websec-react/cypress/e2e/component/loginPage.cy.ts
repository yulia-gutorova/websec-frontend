/// <reference types="cypress" />

import {navigateToPage} from '../../support/utils/CommonFunctions';   
import {elementInteractions} from '../../support/utils/ElementsInteraction';
import {homePageLocators} from '../../support/elementLocators/LoginPageLocators';   

describe('Visit login page', () => {

    describe('Page elements are visible', () => {

        before(() => {
            navigateToPage.navigateToPage('/');
        })

        it('visible elements', () => {

            elementInteractions.elementIsVisible(homePageLocators.LoginForm()); 
            elementInteractions.elementIsVisible(homePageLocators.LoginFormHeader());  
            elementInteractions.elementIsVisible(homePageLocators.LoginFormUsernameLabel());
            elementInteractions.elementIsVisible(homePageLocators.LoginFormPasswordLabel());   
            elementInteractions.elementIsVisible(homePageLocators.LoginFormUsernameInput());
            elementInteractions.elementIsVisible(homePageLocators.LoginFormPasswordInput());
            elementInteractions.elementIsVisible(homePageLocators.LoginLinkToRegister());
            elementInteractions.elementIsVisible(homePageLocators.LoginText());
            elementInteractions.elementIsVisible(homePageLocators.LoginSubmitButton());
        })

        it('not visible elements', () => {

            elementInteractions.elementIsNotVisible(homePageLocators.LoginErrorMessagePassword());
            elementInteractions.elementIsNotVisible(homePageLocators.LoginErrorMessageUsername());
        })


    })
})