import 'cypress-xpath'

describe("Data Driven Tests", () => {

    it('Test1', () => {
        cy.fixture('orangehrm2').then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username)
                cy.get("input[placeholder='Password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                if (userdata.username == 'Admin' && userdata.password == 'admin123') {
                    cy.xpath("//span[normalize-space()='PIM']").should('have.text',userdata.expected)
                    cy.get(".oxd-userdropdown-tab").click()
                    cy.xpath("//a[normalize-space()='Logout']").click()
                }
                else {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
            });

        })
    })
})