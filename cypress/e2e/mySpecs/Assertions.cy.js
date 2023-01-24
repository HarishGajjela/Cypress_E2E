describe('Assertion Tests', () => {

    it('Implicit Assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        cy.title().should('include','Orange')
        .should('eq','OrangeHRM')
        .should('contain','HRM')

        cy.get('.orangehrm-login-branding')
        .should('be.visible').and('exist')

        cy.xpath("//a").should('have.length',1)

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should('have.value','Admin')

    })

    it('Implicit Assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        
        let expName = "Paul Collings";
        cy.get(".oxd-userdropdown-name").then( (x) =>{
            let accName=x.text()

            //BDD Style
            expect(accName).to.equal(expName)
            expect(accName).to.not.equal(expName)
            //TDD Style
            assert.equal(accName,expName)
            assert.notEqual(accName,expName)


        })
    })
})