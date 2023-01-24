describe("Handle WebTable Tests", () => {

    beforeEach("Login", () => {

        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get("#input-username").type('demo')
        cy.get("#input-password").type('demo')
        cy.get("button[type='submit']").click()

        cy.get('.btn-close').click()
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    })

    it.skip('Check Number of Rows & Cols', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length', 70)
    })

    it.skip('Check cell data on specific row & col', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("princytrainings4@gmail.com")
    })

    it.skip('read all rows & cols data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text())
                    })
                })
            })
    })

    it('Pagination Table', () => {
        // Find Total Number of pages
        let totalPages
        cy.get(".col-sm-6.text-end").then((e) => {
            let pageNumText = e.text() //Showing 1 to 10 of 9380 (938 Pages)
            totalPages = pageNumText.substring(pageNumText.indexOf("(") + 1, pageNumText.indexOf("Pages") - 1)
            cy.log("Total Pages in a table : " + totalPages)
        })

        // Get the Data from each page
        totalPages = 5
        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log("Active Page is : " + p)
                cy.get(".pagination>li:nth-child(" + p + ")").click
                cy.wait(2000)
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get("td:nth-child(3)").then((e) => {
                                cy.log("Email is : " + e.text()) //Email
                            })
                        })
                    })
            }
        }
    })
})