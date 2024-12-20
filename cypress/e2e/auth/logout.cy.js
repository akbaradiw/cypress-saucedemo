import AuthPom from "../../pom/auth/auth.cy.js";

describe("Logout Feature", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.inputValidUserName();
    AuthPom.inputValidPassword();
    AuthPom.loginButton();
  });

  it("Verify Logout", () => {
    AuthPom.hamburgerMenu();
    AuthPom.logoutButton();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
  });
});
