import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

const TodoList = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem isDone={todo.isDone} title={todo.title} key={todo.uid} />
      })}
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
