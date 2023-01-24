describe("Handling Tab Tests", () => {

    it("Approach 1", () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").click()

        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        //operations
        cy.go('back')
    })

    it("Approach 2", () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get("a[href='/windows/new']").click()

        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href');
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        //operations
        cy.go('back')
    })
})