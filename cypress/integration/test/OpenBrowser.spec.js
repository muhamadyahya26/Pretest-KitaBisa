describe('Open Browser Kita Bisa' , function(){
    it('Open Browser Kita Bisa', function(){
        cy.visit('https://kitabisa.com/')
        cy.title().should('eq', 'Kitabisa.com - Indonesia\'s Fundraising Platform') // verifikasi title 
        cy.location('protocol').should('eq', 'https:') // verifikasi https
        
    })
})

