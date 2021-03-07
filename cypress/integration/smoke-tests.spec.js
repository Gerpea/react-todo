import context from 'react-bootstrap/esm/AccordionContext'

describe('smoke tests', () => {
  it('add single todo', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item')
    cy.get('[data-testid=add-todo]').click()

    cy.get('.list-group-item').should('have.length', 1)
  })

  it('add multiple todo', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item1')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#title').type('Item2')
    cy.get('[data-testid=add-todo]').click()

    cy.get('.list-group-item').should('have.length', 2)
  })

  it('add subtodo', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item1')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#parent-todo').select('Item1')
    cy.get('#title').type('Item2')
    cy.get('[data-testid=add-todo]').click()

    cy.get('.list-group-item > :first').children().should('have.length', 1)
  })

  it('should move marked todo to end of the list', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item1')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#title').type('Item2')
    cy.get('[data-testid=add-todo]').click()

    cy.get('.list-group-item > :first input[type="checkbox"]').check()

    cy.get('.list-group-item > :last .form-check-label').should('have.text', 'Item1')
  })

  it('should delete todo', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item1')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#title').type('Item2')
    cy.get('[data-testid=add-todo]').click()
    cy.get('.list-group-item > :first input[type="checkbox"]').check()

    cy.get('.list-group-item > :last a').click()

    cy.get('[data-testid=delete-todo]').click()

    cy.get('.list-group-item').should('not.contain', 'Item1')
  })

  it('should delete todo with subtodos', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.get('#title').type('Item1')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#parent-todo').select('Item1')
    cy.get('#title').type('Item11')
    cy.get('[data-testid=add-todo]').click()

    cy.get('button').click()

    cy.get('#title').type('Item2')
    cy.get('[data-testid=add-todo]').click()
    cy.get('.list-group-item > :first input[type="checkbox"]').check()

    cy.get('.list-group-item > :nth-child(1) > a').click()

    cy.get('[data-testid=delete-todo]').click()

    cy.get('.list-group-item').should('not.contain', 'Item1')
    cy.get('.list-group-item').should('not.contain', 'Item11')
  })
})
