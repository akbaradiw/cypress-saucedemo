export default class ProductPom {
    static filterZtoA () {
        cy.get(".product_sort_container")
        .select("Name (Z to A)")
    }

    static filterAtoZ () {
        cy.get(".product_sort_container")
        .select("Name (A to Z)")
    }

    static filterLowToHigh () {
        cy.get(".product_sort_container")
        .select("Price (low to high)")
    }

    static filterHighToLow () {
        cy.get(".product_sort_container")
        .select("Price (high to low)")
    }

    static labsBackPack () {
        cy.get('#item_4_title_link > .inventory_item_name').click();
    }

    static labsBikeLight () {
        cy.get('#item_0_title_link > .inventory_item_name').click();
    }

    static labsBoltTShirt () {
        cy.get('#item_1_title_link > .inventory_item_name').click();
    }

    static labsFleeceJacket () {
        cy.get('#item_5_title_link > .inventory_item_name').click();
    }

    static labsOnesie () {
        cy.get('#item_2_title_link > .inventory_item_name').click();
    }

    static testAllThings () {
        cy.get('#item_3_title_link > .inventory_item_name').click();
    }

    static detailInfoProduct () {
        cy.get('.inventory_details_name').should('be.visible')
        cy.get('.inventory_details_desc').should('be.visible')
        cy.get('.inventory_details_price').should('be.visible')
        cy.get ('.inventory_details_img').should('be.visible')
    }
}