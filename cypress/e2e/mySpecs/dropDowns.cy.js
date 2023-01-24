describe("Dropdown Tests", () => {

    it("Dropdown with Select Tag", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Italy').should('have.value', 'Italy')
    })

    it.skip("Dropdown without Select Tag", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type('Italy').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', 'Italy')
    })

    it.skip("Dropdown Auto Suggestion", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("[id='searchInput']").type('Delhi')
        cy.get(".suggestion-title").contains('Delhi University').click()
    })

    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("input[title='Search']").type('cypress automation')
        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length.greaterThan', 10)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })
        cy.get("input[title='Search']").should('have.value', 'cypress automation tutorial')

    })

})