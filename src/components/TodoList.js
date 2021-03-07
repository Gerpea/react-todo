import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'

import TodoItem from '../containers/TodoItem'
import AddItemModal from '../containers/AddItemModal'

const TodoList = ({ todos }) => {
  const [show, setShow] = useState(false)

  return (
    <Container className='d-flex flex-column justify-content-between h-100'>
      <ListGroup data-testid='todo-list' as='ul'>
        {getTodoList(todos, getChildren(todos, undefined))}
      </ListGroup>
      <Button
        data-testid='add-item'
        variant='primary'
        className='mt-3'
        onClick={() => setShow(true)}>
        Добавить элемент
      </Button>
      <AddItemModal show={show} onHide={() => setShow(false)} data-testid='modal' />
    </Container>
  )
}

function getTodoList(todos, children) {
  return sortTodos(children).map((todo, i) => {
    const childs = todo.uid && getChildren(todos, todo.uid)
    return (
      <div key={todo.uid ?? i} data-testid={todo.uid ?? i}>
        <ListGroup.Item as='li' key={todo.uid ?? i}>
          <TodoItem isDone={todo.isDone} todo={todo} />
        </ListGroup.Item>
        {childs && <div className='ml-3'>{getTodoList(todos, childs)}</div>}
      </div>
    )
  })
}

function sortTodos(todos) {
  return todos.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1))
}

function getChildren(todos, uid) {
  return todos.filter((todo) => todo.parentUid === uid)
}

TodoList.propTypes = {
  todos: PropTypes.array,
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
