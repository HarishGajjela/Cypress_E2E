import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
import 'cypress-xpath'

describe("Handle Mouse Events Tests", () => {

    it('Mouse Hover', () => {
        cy.visit('https://demo.opencart.com/')
        cy.xpath("//a[normalize-space()='Desktops']").trigger('mousehover').click()
        cy.get("div[class='dropdown-menu show'] li:nth-child(2) a:nth-child(1)").should('be.visible')
    })

    it('Right Click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        //Approach-1
        cy.get('.context-menu-one').trigger('contextmenu')
        cy.get('.context-menu-icon-copy > span').should('be.visible')
        cy.get('.context-menu-icon-copy > span').click()
        //Approach-2
        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it('Double Click', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded("[id='iframeResult']")
        //Approach - 1
        cy.iframe("[id='iframeResult']").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("[id='iframeResult']").find('#field2').should('have.value', 'Hello World!')
        //Approach - 2
        cy.iframe("[id='iframeResult']").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("[id='iframeResult']").find('#field2').should('have.value', 'Hello World!')
    })

    it('Drag & Drop using plug in', () => {
        // npm install --save-dev @4tw/cypress-drag-drop
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.wait(2000)
        cy.get('#box6').drag('#box106', { force: true })
    })

    it('Scroll Page', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        //Scroll Up
        cy.xpath("//td[normalize-space()='India']").scrollIntoView({ duration: 2000 })
        cy.xpath("//td[normalize-space()='India']").should('be.visible')

        cy.xpath("//td[normalize-space()='Australia']").scrollIntoView({ duration: 2000 })
        cy.xpath("//td[normalize-space()='Australia']").should('be.visible')

        cy.xpath("//div[@id='footer']").scrollIntoView()
    })
})