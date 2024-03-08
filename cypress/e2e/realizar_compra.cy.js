/// <reference types="cypress" />

import commun_page from "../support/page/commun_page"
import realizar_compra_page from "../support/page/realizar_compra_page"
import selecionar_produto_page from "../support/page/selecionar_produto_page"

describe ('Realizar Pedido', () => {
    
    beforeEach ('Acessar site de compra', () => {
        commun_page.acessarSiteCompra()

    })

    it('Pedido de compra com numero de cupom inexistente', () => {
        selecionar_produto_page.selecionarProdutoCompra()
        realizar_compra_page.selecionarCarrinho()
        realizar_compra_page.confirmarProdutos()
        realizar_compra_page.confirmarQuantidade()
        realizar_compra_page.informarCodCupom()
        realizar_compra_page.messagemErroCupom()
       
    })
   
    it('Pedido de compra sem cupom', () => {
        selecionar_produto_page.selecionarProdutoCompra()
        realizar_compra_page.selecionarCarrinho()
        realizar_compra_page.confirmarProdutos()
        realizar_compra_page.confirmarQuantidade()
        realizar_compra_page.clicarCheckout()
        realizar_compra_page.detalheCobrança()
        
    })
})
