import 'cypress-xpath'

class Login {

    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblMsg = "//h6[normalize-space()='Dashboard']";

    setUserName(username) {
        cy.get(this.txtUserName).type(username)
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    clickLogin() {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin() {
        cy.xpath(this.lblMsg).should('have.text', 'Dashboard')
    }
}

export default Login