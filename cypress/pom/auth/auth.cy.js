export default class AuthPom {
    static visitpage () {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    }

    static inputUserName () {
        cy.get('#user-name').click()
    }

    static inputPassword () {
        cy.get('#password').click()
    }

    static loginButton () {
        cy.get('#login-button').click()
    }
}