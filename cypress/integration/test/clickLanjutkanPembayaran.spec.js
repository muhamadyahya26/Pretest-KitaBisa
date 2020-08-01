describe('Click Lanjutkan Pemabyaran' , function(){
    it('Click Lanjutkan Pemabyaran', function(){
        cy.visit('https://kitabisa.com/')
        cy.title().should('eq', 'Kitabisa.com - Indonesia\'s Fundraising Platform') // verifikasi title 
        cy.location('protocol').should('eq', 'https:') // verifikasi https
        cy.get(':nth-child(1) > .style__CardContainer-sc-15s6vgf-0 > .style__LargeListContainer-kwu31b-0 > .style__LargeListFigure-kwu31b-1 > .style__LargeListImage-kwu31b-2').click()
        cy.wait(2000)
        cy.get('#campaign-detail_button_donasi-sekarang').click() 
        cy.get('#contribute_inputfield_amount-donation').type('10000')
        cy.get('#contribute_button_lanjutkan-pembayaran').click()
        cy.get(':nth-child(4) > :nth-child(4)').click()
        cy.get(':nth-child(2) > .style__TextFieldInput-sc-12bsx5v-11').type('testing')
        cy.get('[style="margin: 12px 0px 8px;"] > .style__TextFieldInput-sc-12bsx5v-11').type('testingnarasi01@gmail.com')
        cy.get('#contribute_button_lanjutkan-pembayaran').click()

    })
})