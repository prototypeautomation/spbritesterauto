const execute = require('../module/function');

describe('template spec', () => {
  it('Login dengan username dan password yang benar', () => {
    
    cy.visit('https://portal-spbri.gundala.io/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      }
  });
    cy.wait(3000)
    cy.get('.css-1hhjdrj > .chakra-link > .chakra-button').click();
    cy.wait(2000)
    // cy.get('[placeholder="Masukan nama lengkap"]').type(execute.createData[0])
    // cy.wait(1000)
    // cy.get('[placeholder="Masukan personal number"]').type(execute.createData[2])
    // cy.wait(1000)
    // cy.get('[placeholder="Masukan alamat email"]').type(execute.createData[1])
    // cy.wait(1000)
    // cy.get('[placeholder="Masukan no handphone"]').type(execute.createData[3])
    cy.wait(1000)
    cy.get('.chakra-input').get('.css-qhakqr').type(execute.createData[4])
    cy.wait(1000)
    cy.setCookie('_GRECAPTCHA', '09APHd1an63QKQ6c47FW6TDZ-mcSayZkS5sJxS243EfhgwFbjd3MiwMDcFMH2aaY4SZRNj1WvoK3APgtoRl2uR3fs')
    cy.wait(4000)
    cy.get('.recaptcha-checkbox-checkmark').type('{enter}')
    // cy.get('.chakra-button').click()
    // cy.wait(3000)
  })
})