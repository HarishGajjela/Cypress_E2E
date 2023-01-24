describe('My Loctors Tests', () => {

    it('CSS Locator Test', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts")
        cy.get("[name='submit_search']").click()
        cy.get(".lighter").contains("T-Shirts")

    })

    //npm install -D cypress-xpath
    it('Xpath Locator Test', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']//li").should('have.length', 6)
    })

    it('Chained Xpath Locator Test', () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.xpath("//a[normalize-space()='Best Sellers']").click()
        cy.xpath("//ul[@id='blockbestsellers']").xpath("//li").should('have.length', 6)
    })
})
