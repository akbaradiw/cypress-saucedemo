import AuthPom from "../../pom/auth/auth.cy.js";
import ProductPom from "../../pom/product/product.cy.js";

describe("Filter Product", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
    AuthPom.inputValidUserName();
    AuthPom.inputValidPassword();
    AuthPom.loginButton();  
    AuthPom.productList();
  });
  it("Filter product A to Z", () => {
    ProductPom.filterZtoA();
    ProductPom.filterAtoZ();
  });

  it("Filter product Z to A", () => {
    ProductPom.filterZtoA();
  });

  it ("Filter product low to high", () => {
    ProductPom.filterLowToHigh();
  });

  it ("Filter product high to low", () => {
    ProductPom.filterHighToLow();
  });
});
