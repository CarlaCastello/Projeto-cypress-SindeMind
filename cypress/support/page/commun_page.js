/// <reference types="cypress" />

export default {
    acessarSiteCompra() {
        cy.visit('/')
          .get('#menu-item-40').contains('Shop')
          .click()
         
    }
}