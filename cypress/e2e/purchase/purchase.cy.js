import AuthPom from "../../pom/auth/auth.cy.js";
import AddToCartPom from "../../pom/addToCart/addToCart.cy.js";
import PurchasePom from "../../pom/purchase/purchase.cy.js";

describe("Purchase Feature", () => {
  beforeEach(() => {
    AuthPom.visitpage();
    AuthPom.swagLabsLogo();
    AuthPom.swagLabsIcon();
    AuthPom.inputValidUserName();
    AuthPom.inputValidPassword();
    AuthPom.loginButton();
  });

it ("Purchase 1 product from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
})

it ("Purchase 2 products from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
})

it ("Purchase 3 products from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
}) 

it ("Purchase 4 products from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
})

it ("Purchase 5 products from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.addOnesieToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
})

it ("Purchase all products from cart", () => {
    AddToCartPom.addBackPackToCart();
    AddToCartPom.addBikeLightToCart();
    AddToCartPom.addBoltShirtToCart();
    AddToCartPom.addFleeceJacketToCart();
    AddToCartPom.addOnesieToCart();
    AddToCartPom.addTestAllThingsToCart();
    AddToCartPom.cartIcon();
    PurchasePom.checkOutButton();
    PurchasePom.inputFirstName();
    PurchasePom.inputLastName();
    PurchasePom.inputZipCode();
    PurchasePom.continueButton();
    PurchasePom.finishButton();
    PurchasePom.orderSuccess();
})



});
