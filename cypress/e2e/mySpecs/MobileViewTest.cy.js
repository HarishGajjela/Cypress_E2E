
describe('Mobile View Tests', () => {
    beforeEach('Navigate to URl', () => {
        cy.viewport('ipad-2')
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')

    })
    it('Test1 with correct login details', () => {
        cy.get("#txt-username").type("John Doe")
        cy.get("#txt-password").type("ThisIsNotAPassword")
        cy.get("#btn-login").click()
        cy.url().should('contain','#appointment')
    })

    it('Test1 with Incorrect login details', () => {
        cy.get("#txt-username").type("Test")
        cy.get("#txt-password").type("Test")
        cy.get("#btn-login").click()
        cy.get('.text-danger').should('contain', 'Login failed!')
        cy.url().should('not.contain','#appointment')
    })
})