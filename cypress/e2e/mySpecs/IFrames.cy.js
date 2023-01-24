import 'cypress-iframe'

describe("IFrame Tests", () => {

    it("Approach 1", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap) //returns Iframe

        iframe.clear().type("welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()

    })

    it("Approach 2 Using Custom Command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type("welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()

    })

    it("Approach 3 Using Iframe Plugin", () => {
        //npm install -D cypress-iframe
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').clear().type("welcome {ctrl+a}")
        cy.get("button[title='Bold']").click()

    })
})