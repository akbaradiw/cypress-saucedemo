import AuthPom from "../../pom/auth/auth.cy.js";

describe("Login Feature", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
  });

  it ("Login with valid credentials", () => {
      AuthPom.inputValidUserName()
      AuthPom.inputValidPassword()
      AuthPom.loginButton()
      AuthPom.productList
  })

  it ("Login with empty username and password", () => {
      AuthPom.loginButton()
      AuthPom.errorMessage()

  })

  it("Login with invalid credentials", () => {
    AuthPom.inputInvalidUserName();
    AuthPom.inputInvalidPassword();
    AuthPom.loginButton();
    AuthPom.errorMessage();
  });

  it("Login with valid username and invalid password", () => {
    AuthPom.inputValidUserName();
    AuthPom.inputInvalidPassword();
    AuthPom.loginButton();
    AuthPom.errorMessage();
  });

  it(" Login with valid username and empty password", () => {
    AuthPom.inputValidUserName();
    AuthPom.loginButton();
    AuthPom.errorMessage();
  });

  it(" Login with valid password and empty username", () => {
    AuthPom.inputValidPassword();
    AuthPom.loginButton();
    AuthPom.errorMessage();
  });
});
