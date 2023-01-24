import 'cypress-xpath'

describe("Screenshots Videos Tests", () => {

    it('Screenshots', () => {
        cy.visit('https://demo.opencart.com/')
        cy.screenshot('homepage')
        cy.wait(3000)
        cy.get("img[title='Your Store']").screenshot('logo')

    })

    it('Screenshots Automatically', () => {

        //Capture S & V Automatically on failure - when you execute thru terminal
        cy.visit('https://demo.opencart.com/')
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text', 'Tablets')

    })
})