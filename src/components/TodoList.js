import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'
import { Button } from 'react-bootstrap'

const TodoList = ({ todos }) => {
  return (
    <>
      <div data-testid='todo-list'>
        {todos.map((todo, i) => {
          return <TodoItem isDone={todo.isDone} title={todo.title} key={todo.uid ?? i} />
        })}
      </div>
      <Button data-testid='add-item' variant='primary'>
        Добавить элемент
      </Button>
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
