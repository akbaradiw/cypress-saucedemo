import AuthPom from "../../pom/auth/auth.cy.js";

describe ("Login Feature", () => {
    beforeEach(() => {
        AuthPom.visitpage()
    })
})

it ("Login with valid credentials", () => {
    AuthPom.inputUserName().type ('standard_user')
    AuthPom.inputPassword().type ('secret_sauce')
    AuthPom.loginButton()
})