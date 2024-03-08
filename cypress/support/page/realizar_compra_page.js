/// <reference types="cypress" />

export default {
    selecionarCarrinho() {        
       cy.get('.wpmenucart-contents')
            .click()    //clicar Carrinho

    },

    confirmarProdutos() {
        cy.get('.product-name > a')
         .should('be.visible')
         .should('have.text', 'Mastering JavaScript');
    },

    confirmarQuantidade(quantity) {
        cy.get('.qty').as('quantidadeInput')
          .should('be.visible')
          .should('have.value', '1')
    },

     informarCodCupom() {
        cy.get('#coupon_code')
           .type('123456')

           cy.get('.coupon').find('.button')
           .click()
     },

     messagemErroCupom() {
        cy.get('.woocommerce-error')
          .should('be.visible')
          .should('have.text', '\n\t\t\tCoupon "123456" does not exist!\n\t');

     },

     clicarCheckout() {
        cy.get('.checkout-button')
          .click()
     },

     detalheCobrança() {
        cy.get('.woocommerce-billing-fields > h3')
          .should('be.visible')
          .should('have.text', 'Billing Details');

     }
}