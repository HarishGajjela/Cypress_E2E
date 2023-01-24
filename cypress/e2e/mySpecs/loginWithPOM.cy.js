import 'cypress-xpath'
import Login from '../../pageObjects/loginPage'

describe("POM Tests", () => {

    before('URL', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    // it.skip('General Approach', () => {
    //     cy.get("input[placeholder='Username']").type('Admin')
    //     cy.get("input[placeholder='Password']").type('admin123')
    //     cy.get("button[type='submit']").click()
    //     cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text', 'Dashboard')
    // })

    // it.skip('Using POM', () => {
    //     const ln = new Login()
    //     ln.setUserName('Admin')
    //     ln.setPassword('admin123')
    //     ln.clickLogin()
    //     ln.verifyLogin()
    // })

    it('Using POM With Fixture', () => {
        cy.fixture('orangehrm').then((data) => {
            const ln = new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickLogin()
            ln.verifyLogin()
        })
    })
})