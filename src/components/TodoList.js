import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

import TodoItem from '../containers/TodoItem'
import AddItemModal from '../containers/AddItemModal'

const TodoList = ({ todos }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div data-testid='todo-list'>{getTodoList(todos, getChildren(todos, undefined))}</div>
      <Button data-testid='add-item' variant='primary' onClick={() => setShow(true)}>
        Добавить элемент
      </Button>
      <AddItemModal show={show} onHide={() => setShow(false)} data-testid='modal' />
    </>
  )
}

function getTodoList(todos, children) {
  return children.map((todo, i) => {
    const childs = todo.uid && getChildren(todos, todo.uid)
    return (
      <div className='ms-1' key={todo.uid ?? i} data-testid={todo.uid ?? i}>
        <TodoItem isDone={todo.isDone} todo={todo} />
        {childs && getTodoList(todos, childs)}
      </div>
    )
  })
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
