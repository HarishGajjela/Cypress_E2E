describe('My Test Suite', () => {

        it('Verify title-positive test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
        })

        it('Verify title-negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
        })
})