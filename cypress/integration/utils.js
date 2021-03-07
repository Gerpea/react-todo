function addTodo(parent, child) {
  cy.get('button').click()
  if (child) {
    cy.get('#parent-todo').select(parent)
    cy.get('#title').type(child)
    cy.get('[data-testid=add-todo]').click()
  } else {
    cy.get('#title').type(parent)
    cy.get('[data-testid=add-todo]').click()
  }
}

function markTodo(title) {
  cy.contains(title).click()
}

function deleteTodo(title) {
  markTodo(title)
  cy.contains('.list-group-item', title).find('a').click()
  cy.get('[data-testid=delete-todo]').click()
}

export { addTodo, markTodo, deleteTodo }
