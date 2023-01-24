import 'cypress-xpath'

describe("Fixture Tests", () => {

    it.only('Direct Access', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.xpath("//span[normalize-space()='PIM']").contains(data.expected)
        })

    })

    let userData;
    before(() => {
        cy.fixture('orangehrm').then((data) => {
            userData = data;
        })

        it('Access Thru Hooks', () => {
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.xpath("//span[normalize-space()='PIM']").contains(data.expected)
        })
    })

})