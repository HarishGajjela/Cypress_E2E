import 'cypress-xpath'

class Login{
    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password)
    }
    clickLogin()
    {
        cy.get("button[type='submit']").click()
    }
    verifyLogin()
    {
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text','Dashboard')
    }
}

export default Login