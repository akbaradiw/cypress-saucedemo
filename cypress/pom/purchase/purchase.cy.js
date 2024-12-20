export default class PurchasePom {
  static checkOutButton() {
    cy.get('[class="btn_action checkout_button"]').click();
  }

  static inputFirstName() {
    cy.get('#first-name').click().type("John");
  }

  static inputLastName() {
    cy.get("#last-name").click().type("Doe");
  }

  static inputZipCode() {
    cy.get("#postal-code").click().type("12345");
  }

  static continueButton() {
    cy.get('[class="btn_primary cart_button"]').click();
  }
  static finishButton() {
    cy.get('[class="btn_action cart_button"]').click();
  }

  static orderSuccess() {
    cy.get('[class="complete-header"]').should("be.visible");
    cy.get('[class="complete-text"]').should("be.visible");
    cy.get('[class="pony_express"]').should("be.visible");
  }
}
