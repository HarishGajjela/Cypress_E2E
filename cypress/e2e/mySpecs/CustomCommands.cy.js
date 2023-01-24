import 'cypress-xpath'

describe("Custom Commands Tests", () => {

    it('Handling Links', () => {
        cy.visit('https://demo.nopcommerce.com/')

        // Without Custom Command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        
        // With Custom Command
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it('Overwriting Existing Command', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('APPLE MACBOOK PRO 13-inch')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch')
    })

    it.only('Login Command', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.LoginApp('testing@gmail.com','test123')
        cy.get('.ico-account').should('have.text','My account')
    })
})