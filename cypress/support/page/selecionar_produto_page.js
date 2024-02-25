/// <reference types="cypress" />

export default {
    selecionarCategoria() {
        cy.get('.cat-item-21')
          .click();  //clicar categoria JavaScript

         // cy.get('#content').contains('JavaScript')
         // .should('be.visible')
         // .should('have.text','Home / JavaScript')  //confirmar categoria escolhida
    },

     selecionarProduto() {
        cy.get('#content').contains('Mastering JavaScript')
          .click();  //clicar produto de compra

        cy.get('.entry-title')
          .should('be.visible')
          .should('have.text', 'Mastering JavaScript')

    },

      adicionarCarrinho() {
         cy.get('.single_add_to_cart_button')
           .click()


      }
 }
