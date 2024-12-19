export default class AuthPom {
    static visitpage () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    }

    static swagLabsLogo () {
        cy.get('.login_logo').should('be.visible')
    }

    static  swagLabsIcon () {
        cy.get('.bot_column').should('be.visible')
    }

    static inputValidUserName () {
        cy.get('#user-name').click().type ('standard_user')
    }

    static inputValidPassword () {
        cy.get('#password').click().type ('secret_sauce')
    }

    static loginButton () {
        cy.get('#login-button').click()
    }

    static productList () {
        cy.get('.inventory_list').should('be.visible')
    }

    static errorMessage () {
    cy.get('[data-test="error"]').should('be.visible')}

    static inputInvalidUserName () {
        cy.get('#user-name').click().type ('standard_user1')
    }

    static inputInvalidPassword () {
        cy.get('#password').click().type ('secret_sauce1')
    }
}