
describe("Alerts Tests", () => {

    it("JS Alerts", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it("JS Confirm Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        //cy.get("#result").should('have.text', 'You clicked: Ok')
        cy.on('window:confirm', (t) => false); // to cancel
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

    it("JS Prompt Alert", () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get("#result").should('have.text', 'You entered: welcome')
    })

    it("Authenticated Alert", () => {
        //Approach-1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {auth : {username :"admin",password:"admin"}})

        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
        cy.wait(2000)
        //Approach-2
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('have.contain', 'Congratulations')
    })
})