// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This will populate all cy commands across all files --
/// <reference types="cypress" /> 

// -- This will populate cy xpath commands across all files --
/// <reference types="cypress-xpath" /> 
/// <reference types="cypress-iframe" /> 
/// <reference types="@4tw/cypress-drag-drop" /> 
/// <reference types="cypress-file-upload" /> 
import "@cypress-audit/lighthouse/commands";

// -- This will gets Iframe across all files --
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap) //returns Iframe
})
// Clicking on link using label
Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})
// Overwrite Contains
// Cypress.Commands.overwrite("contains", (originalFn, subject, filter, text, options = {}) => {
//     //determine if a filter argument passed
//     if (typeof text == 'object') {
//         options = text
//         text = filter
//         filter = undefined
//     }
//     options.matchCase = false
//     return originalFn(subject, filter, text, options)
// })
// Login App
Cypress.Commands.add("LoginApp",(email,password)=>{
    cy.get('#Email').type(email)
    cy.get('#Password').type(email)
    cy.get('.button-1.login-button').click()
})

// Custom ommand for AXE-CORE Logging

Cypress.Commands.add("customCheckAlly", () => {
    const severityIndicatorIcons = {
      minor: "⚪",
      moderate: "🌕",
      serious: "⭕",
      critical: "⛔",
    };
  
    function callback(violations) {
      violations.forEach((violation) => {
        const nodes = Cypress.$(
          violation.nodes.map((node) => node.target).join(",")
        );
  
        Cypress.log({
          name: `${severityIndicatorIcons[violation.impact]} AllY`,
          consoleProps: () => violation,
          $el: nodes,
          message: `[${violation.help}](${violation.helpUrl})`,
        });
  
        violation.nodes.forEach(({ target }) => {
          Cypress.log({
            name: "ℹ▶",
            consoleProps: () => violation,
            $el: Cypress.$(target.join(",")),
            message: target,
          });
        });
      });
    }
  
    cy.checkA11y(null, null, callback);
  });
  