require('cypress-xpath');
const getData = require('../data/data');
const get = require('../data/environtment');
const testingFrom = require('../data/testCase');

describe('Automated Test Profile pages', () => {
  it(testingFrom.ProfileFlow.TS001, () => {
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
    cy.get('#profile-tab-list > a[data-index="0"]').click()
    cy.wait(1000)
    cy.xpath('//*[@id="field-:re:"]').should('have.value', getData.user8101995.PersonalNumber)
    cy.xpath('//*[@id="field-:re:"]').should('have.attr', 'readonly')
    cy.xpath('//*[@id="field-:rf:"]').should('have.value', getData.user8101995.Email)
    cy.xpath('//*[@id="field-:rf:"]').should('have.attr', 'readonly')
    cy.xpath('//*[@id="field-:rg:"]').should('have.value', getData.user8101995.NamaLengkap)
    cy.xpath('//*[@id="field-:rh:"]').should('have.value', getData.user8101995.Jabatan) //Business Analyst
    cy.xpath('//*[@id="field-:ri:"]').should('have.value', getData.user8101995.NoTelepon)
    cy.xpath('//*[@id="field-:rj:"]').should('have.value', getData.user8101995.Tempatlahir)
    cy.xpath('//*[@id="field-:rk:"]').should('have.value', getData.user8101995.TanggalLahir)
    cy.xpath('//*[@id="field-:rl:"]').should('have.value', getData.user8101995.NoRekeningPayroll)
    cy.xpath('//*[@id="field-:rm:"]').should('have.value', getData.user8101995.UnitKerja) //Nasional
  })

  it(testingFrom.ProfileFlow.TS002, () => {
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
      cy.get('#profile-tab-list > a[data-index="1"]').click()
      cy.wait(3000)
      cy.scrollTo(0, 400)
      cy.wait(1000)
      cy.get('[fill="black"]').should('contain', getData.user8101995.NamaLengkap)
      cy.get('[fill="#11114f"]').should('contain', getData.user8101995.PersonalNumber)
      cy.get('.chakra-button').should('be.enabled')
  })
})