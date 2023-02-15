const getData = require('../data/data');
const get = require('../data/environtment');
const testingFrom = require('../data/testCase');

describe('Automated Test Login Flow', () => {
  it(testingFrom.LoginFlow.TS001, () => {
    cy.visit(get.env.STAGING_WEB_PORTAL);
    cy.wait(3000)
    cy.get('.css-13jvj27 > .chakra-button').click();
    cy.wait(2000)
    cy.get('[placeholder="Enter personal number"]').type(getData.user8101995.PersonalNumber)
    cy.wait(1000)
    cy.get('[placeholder="Enter your password"]').type(getData.user8101995.Password)
    cy.wait(1000)
    cy.get('.chakra-button').click()
    cy.wait(5000)
    cy.get('.css-1mqnc8z').should('contain','Fatoni 4')
    cy.get('.css-slxsd6 > :nth-child(1) > .chakra-text').should('contain',getData.user8101995.Email)
    cy.get('.css-slxsd6 > :nth-child(2) > .chakra-text').should('contain',getData.user8101995.NoTelepon)
    cy.get('.css-wjqyts').should('contain','Business Analyst')
  })

  it(testingFrom.LoginFlow.TS002, () => {
    cy.visit(get.env.STAGING_WEB_PORTAL);
    cy.wait(3000)
    cy.get('.css-13jvj27 > .chakra-button').click();
    cy.wait(2000)
    cy.get('[placeholder="Enter personal number"]').type(getData.user8101995.PersonalNumber)
    cy.wait(2000)
    cy.get('.chakra-button').should('be.disabled')    
  })

  it(testingFrom.LoginFlow.TS003, () => {
    cy.visit(get.env.STAGING_WEB_PORTAL);
    cy.wait(3000)
    cy.get('.css-13jvj27 > .chakra-button').click();
    cy.wait(2000)
    cy.get('[placeholder="Enter your password"]').type(getData.user8101995.Password)
    cy.wait(2000)
    cy.get('.chakra-button').should('be.disabled')    
  })

  it(testingFrom.LoginFlow.TS004, () => {
    cy.visit(get.env.STAGING_WEB_PORTAL);
    cy.wait(3000)
    cy.get('.css-13jvj27 > .chakra-button').click();
    cy.wait(2000)
    cy.get('[placeholder="Enter personal number"]').type(getData.user8101995.PersonalNumber)
    cy.wait(1000)
    cy.get('[placeholder="Enter your password"]').type('salahinput')
    cy.wait(1000)
    cy.get('.chakra-button').click()
    cy.wait(3000)
    cy.get('.chakra-alert__desc').get('.css-k4g5t4').should('contain','Personal number or password is incorrect.')
  })

  it(testingFrom.LoginFlow.TS005, () => {
    cy.visit(get.env.STAGING_WEB_PORTAL);
    cy.wait(3000)
    cy.get('.css-13jvj27 > .chakra-button').click();
    cy.wait(2000)
    cy.get('[placeholder="Enter personal number"]').type('salahinput')
    cy.wait(1000)
    cy.get('[placeholder="Enter your password"]').type(getData.user8101995.Password)
    cy.wait(1000)
    cy.get('.chakra-button').click()
    cy.wait(3000)
    cy.get('.chakra-alert__desc').get('.css-k4g5t4').should('contain','Personal number or password is incorrect.')
  })
})