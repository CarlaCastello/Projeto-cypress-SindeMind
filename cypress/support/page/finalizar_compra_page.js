/// <reference types="cypress" />

export default {
    logarUsuario() {
        cy.get('.showlogin')
          .click()
    },
      
    informarEmail() {
        cy.get('#username')
          .type('testeemail@gmail.com')

    },

    informarSenha() {
      cy.get('#password')
        .type('!Senha123*')

    },

    clicarLogin() {
      cy.get('.login').find('.button')
        .click()

    },
     
     preencherFormaPagamento() {
      cy.get('#payment_method_cheque')
        .check()

     },

     clicarFazerPedido() {
       cy.get('#place_order')
         .click()
      },

     menssagemSucesso() {
        cy.get('.woocommerce-thankyou-order-received')
          .should('be.visible')
          .should('have.text', 'Thank you. Your order has been received.')

     },

      menssagemFaltaPreencher() {
         cy.get('.woocommerce-error').contains('Billing First Name')
         .should('be.visible')
         .should('have.text', 'Billing First Name')

      },

      preecherNome(nome) {
         cy.get('#billing_first_name')
           .type(nome)

      },

      preecherSobrenome(sobrenome) {
          cy.get('#billing_last_name')
            .type(sobrenome)

      },

      preencherEmail(email) {
          cy.get('#billing_email')
            .type(email)
      },

      preencherTelefone(fone) {
           cy.get('#billing_phone')
             .type(fone)
      },

      preencherEndereço(endereço) {
          cy.get('#billing_address_1')
            .type(endereço)
    },
     
      preencherCidade(cidade) {
           cy.get('#billing_city')
             .type(cidade)
    },

      //() {
          // cy.get('#select2-chosen-2')
           //  .click()
           //  .type('para')

          // cy.get('#select2-result-label-245 > span')
           //  .click()
          
      //},

      preencherCep() {
          cy.get('#billing_postcode')
            .type('66666666')
      }


  }
