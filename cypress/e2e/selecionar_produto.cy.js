/// <reference types="cypress" />

import commun_page from "../support/page/commun_page"
import selecionar_produto_page from "../support/page/selecionar_produto_page"

describe ('Selecionar produto para compra', () => {
    
    beforeEach('Acessar site de compra', () => {
        commun_page.acessarSiteCompra()

    })

    it('Selecionar categoria do produto', () => {
       selecionar_produto_page.selecionarCategoria()


    })

    it('Selecionar produto a ser comprado', () => {
       selecionar_produto_page.selecionarCategoria()
        selecionar_produto_page.selecionarProduto()

    })

    it('Adicionar produto no carrinho', () => {
      // selecionar_produto_page.selecionarCategoria()
      // selecionar_produto_page.selecionarProduto()
      //  selecionar_produto_page.adicionarCarrinho()
      selecionar_produto_page.selecionarProdutoCompra()

    })
} )