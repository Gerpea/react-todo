import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'
import { Button } from 'react-bootstrap'
import AddItemModal from './AddItemModal'

const TodoList = ({ todos }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div data-testid='todo-list'>
        {todos.map((todo, i) => {
          return <TodoItem isDone={todo.isDone} title={todo.title} key={todo.uid ?? i} />
        })}
      </div>
      <Button data-testid='add-item' variant='primary' onClick={() => setShow(true)}>
        Добавить элемент
      </Button>
      <AddItemModal show={show} onHide={() => setShow(false)} data-testid='modal' />
    </>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
}

TodoList.defaultProps = {
  todos: [],
}

export default TodoList
