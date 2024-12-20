import AuthPom from "../../pom/auth/auth.cy.js";
import AddToCartPom from "../../pom/addToCart/addToCart.cy.js";

describe("Add To Cart Feature", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
    AuthPom.inputValidUserName();
    AuthPom.inputValidPassword();
    AuthPom.loginButton();
  });


  it ("Add 1 product to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add 1 product to Cart');
  })

  it ("Add 2 products to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add 2 products to Cart');

  })

  it ("Add 3 products to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add 3 products to Cart');

  })

  it ("Add 4 products to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add 4 products to Cart');

  })

  it ("Add 5 products to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.addOnesieToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add 5 products to Cart');

  })

  it ("Add all products to Cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.addOnesieToCart();
    AddToCartPom.addTestAllThingsToCart();
    AddToCartPom.cartIcon();
    cy.screenshot('Add all products to Cart');

  })

});