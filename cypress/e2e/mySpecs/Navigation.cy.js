import 'cypress-xpath'

describe('Navigation Tests', () => {

    it('GO', () => {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store')
        cy.xpath("//a[@class='nav-link'][normalize-space()='Cameras']").click()
        cy.get("div[id='content'] h2").should('have.text','Cameras')
        
        cy.go('back')
        cy.title().should('eq','Your Store')
        
        cy.go('forward')
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.go(-1)
        cy.title().should('eq','Your Store')

        cy.go(1)
        cy.get("div[id='content'] h2").should('have.text','Cameras')

        cy.reload()

    })
})