import ProductPom from "../../pom/product/product.cy.js";
import AuthPom from "../../pom/auth/auth.cy.js";

describe("Product Detail", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
    AuthPom.inputValidUserName();
    AuthPom.inputValidPassword();
    AuthPom.loginButton();  
    AuthPom.productList();
  }); 

  it ("Show Sauce Labs Backpack Detail", () => {
    ProductPom.labsBackPack();
    ProductPom.detailInfoProduct();
  })

  it ("Show Sauce Labs Bike Light Detail", () => {
    ProductPom.labsBikeLight();
    ProductPom.detailInfoProduct();
  })

  it ("Show Sauce Labs Bolt T-Shirt Detail", () => {
    ProductPom.labsBoltTShirt();
    ProductPom.detailInfoProduct();
  })

  it ("Show Sauce Labs Fleece Jacket Detail", () => {
    ProductPom.labsFleeceJacket();
    ProductPom.detailInfoProduct();
  })

  it ("Show Sauce Labs Onesie Detail", () => {
    ProductPom.labsOnesie();
    ProductPom.detailInfoProduct();
  })

  it ("Show Test.allTheThings() T-Shirt Detail", () => {
    ProductPom.testAllThings();
    ProductPom.detailInfoProduct();
  })


});