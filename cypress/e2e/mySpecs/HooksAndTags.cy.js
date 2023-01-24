describe("Hooks And Tags Tests", () => {

    before(()=>{
        cy.log("****** Launch Application ***********")

    })

    after(()=>{
        cy.log("****** Close Application ***********")

    })

    beforeEach(()=>{
        cy.log("****** Login ***********")

    })

    afterEach(()=>{
        cy.log("****** Logout ***********")

    })

    it('Search', () => {
        cy.log("****** Search ***********")
    })

    it('Advanced Search', () => {
        cy.log("****** Advanced Search ***********")
    })

    it('Listing Products', () => {
        cy.log("****** Listing Products ***********")
    })

})