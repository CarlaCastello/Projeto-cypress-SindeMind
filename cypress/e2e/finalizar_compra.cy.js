/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commun_page from "../support/page/commun_page"
import selecionar_produto_page from "../support/page/selecionar_produto_page"
import realizar_compra_page from "../support/page/realizar_compra_page"
import finalizar_compra_page from "../support/page/finalizar_compra_page"

describe ('Finalizar Compra', () => {
    
    beforeEach ('Acessar site de compra', () => {
        commun_page.acessarSiteCompra()

    })

    it('Finalizar Compra, sendo cliente da loja', () => {
        selecionar_produto_page.selecionarProdutoCompra()
        realizar_compra_page.selecionarCarrinho()
        realizar_compra_page.confirmarProdutos()
        realizar_compra_page.confirmarQuantidade()
        realizar_compra_page.clicarCheckout()
        realizar_compra_page.detalheCobrança()
        finalizar_compra_page.logarUsuario()
        finalizar_compra_page.informarEmail()
        finalizar_compra_page.informarSenha()
        finalizar_compra_page.clicarLogin()
        finalizar_compra_page.preencherFormaPagamento()
        finalizar_compra_page.clicarFazerPedido()
        finalizar_compra_page.menssagemSucesso()

    })

    it('Finalizar Compra, sendo cliente novo e nao preencher dados de cobrança', () => {
        selecionar_produto_page.selecionarProdutoCompra()
        realizar_compra_page.selecionarCarrinho()
        realizar_compra_page.confirmarProdutos()
        realizar_compra_page.confirmarQuantidade()
        realizar_compra_page.clicarCheckout()
        finalizar_compra_page.clicarFazerPedido()
        finalizar_compra_page.menssagemFaltaPreencher()
    
    })

    it('Finalizar Compra, sendo cliente novo e preenchendo todos os dados de cobrança obrigatorios', () => {
        selecionar_produto_page.selecionarProdutoCompra()
        realizar_compra_page.selecionarCarrinho()
        realizar_compra_page.confirmarProdutos()
        realizar_compra_page.confirmarQuantidade()
        realizar_compra_page.clicarCheckout()
        realizar_compra_page.detalheCobrança()
        finalizar_compra_page.preecherNome(faker.person.firstName())
        finalizar_compra_page.preecherSobrenome(faker.person.lastName())
        finalizar_compra_page.preencherEmail(faker.internet.email())
        finalizar_compra_page.preencherTelefone('99-9988888')
        finalizar_compra_page.preencherEndereço(faker.location.streetAddress())
        finalizar_compra_page.preencherCidade(faker.location.city())
        //finalizar_compra_page.preencherEstado()
        finalizar_compra_page.preencherCep()
        finalizar_compra_page.preencherFormaPagamento()
        finalizar_compra_page.clicarFazerPedido()
        finalizar_compra_page.menssagemSucesso()
    })
})