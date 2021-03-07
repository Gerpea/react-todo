import { addTodo, markTodo, deleteTodo } from './utils'

describe('smoke tests', () => {
  it('add single todo', () => {
    cy.visit('/')

    addTodo('Item1')

    cy.get('.list-group-item').should('have.length', 1)
  })

  it('add multiple todo', () => {
    cy.visit('/')

    addTodo('Item1')
    addTodo('Item2')

    cy.get('.list-group-item').should('have.length', 2)
  })

  it('add subtodo', () => {
    cy.visit('/')

    addTodo('Item1')
    addTodo('Item1', 'Item2')

    cy.get('.list-group-item > :first').children().should('have.length', 1)
  })

  it('should move marked todo to end of the list', () => {
    cy.visit('/')

    addTodo('Item1')
    addTodo('Item2')
    markTodo('Item1')

    cy.get('.list-group-item > :last .form-check-label').should('have.text', 'Item1')
  })

  it('should delete todo', () => {
    cy.visit('/')

    addTodo('Item1')
    addTodo('Item2')

    deleteTodo('Item1')

    cy.get('.list-group-item').should('not.contain', 'Item1')
  })

  it('should delete todo with subtodos', () => {
    cy.visit('/')

    addTodo('Item1')
    addTodo('Item1', 'Item11')
    addTodo('Item2')
    deleteTodo('Item1')

    cy.get('.list-group-item').should('not.contain', 'Item1')
    cy.get('.list-group-item').should('not.contain', 'Item11')
  })
})
