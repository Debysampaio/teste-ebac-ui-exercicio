/// <reference types="cypress" />


context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
    
        cy.get('#username').type('testenovo_20@teste.com')
        cy.get('#password').type('@Teste123')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should('contain' , 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, testenovo_20')
        
       
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('teste_20@teste.com')
        cy.get('#password').type('@Teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')


    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('testenovo_20@teste.com')
        cy.get('#password').type('Teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail testenovo_20@teste.com está incorreta.')

        
        
    });
    
});
