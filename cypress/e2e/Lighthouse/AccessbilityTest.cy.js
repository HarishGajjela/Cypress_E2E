import 'cypress-axe'
// npm install cypress-axe axe-core
//https://github1s.com/qaboxletstest/Cypress-Demo

describe("Accessibility Test Suite", function () {
    before(function () {
      cy.visit("http://127.0.0.1:5500/HelpFolder/cygetcontains.html");
      cy.injectAxe();
    });
  
    it("Accessibility Test Case", function () {
      //   cy.checkA11y();
      // cy.checkA11y("button");
      // cy.checkA11y({ exclude: ["button"] });
      cy.checkA11y(null, {
        rules: {
          "landmark-one-main": { enabled: false },
        },
      });
    });
  
    it.only("Accessibility Test Case - Custom Command", function () {
      cy.customCheckAlly();
    });
  });
  
  