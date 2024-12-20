export default class AddToCartPom {

    static addBackPackToCart () {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    }

    static addBikeLightToCart () {
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    }

    static addBoltShirtToCart () {
        cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
    }

    static addFleeceJacketToCart () {
        cy.get(':nth-child(4) > .pricebar > .btn_primary').click()
    }

    static addOnesieToCart () {
        cy.get(':nth-child(5) > .pricebar > .btn_primary').click()
    }

    static addTestAllThingsToCart () {
        cy.get(':nth-child(6) > .pricebar > .btn_primary').click()
    }

    static cartIcon () {
        cy.get('.shopping_cart_container').click()
    }
}