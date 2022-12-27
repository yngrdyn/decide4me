describe('new option', () => {

  before(() => {
    cy.visit('https://yngrdyn.github.io/decide4me/#/')
  })

  describe('empty list', () => {  
    it('should add new option', () => {
      cy.get('[name = "option"]').type('works')
      cy.get('[class = "button"]').click()
      cy.get('div[class = "option"]').should("have.length", 1)
    })
  })

  describe('not empty list', () => {  
    
    before(() => {
      cy.visit('https://yngrdyn.github.io/decide4me/#/')
    })

    beforeEach(() => {
      cy.visit('https://yngrdyn.github.io/decide4me/#/')
      cy.get('[name = "option"]').type('works')
      cy.get('[class = "button"]').click()
      cy.get('[name = "option"]').type('hello')
      cy.get('[class = "button"]').click()
    })

    it('should remove an option', () =>{
      cy.get('div[class = "option"]').first().find('[class = "button__link"]').click()
      cy.get('div[class = "option"]').should("have.length", 1)
    })

    it('Should delete all items on the list', () => {
      cy.get('[class = "button__link"]').first().click()
      cy.get('div[class = "option"]').should("have.length", 0)
    })

    it('Should select a random option', () => {
      cy.get('[class = "big-button"]').click()
      cy.get('.modal').then((e) => {
        cy.wrap(e).should('exist')
      })
    })
  })
})
