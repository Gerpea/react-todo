import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Card, Form, Row, Col, Container } from 'react-bootstrap'

import DeleteItemModal from '../containers/DeleteItemModal'

const TodoItem = ({ todo, markTodo }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Container className='d-flex justify-content-start'>
        <Form.Check
          data-testid='item'
          type='checkbox'
          id={todo.uid}
          label={todo.title}
          value={todo.isDone || false}
          className={todo.isDone ? 'marked' : ''}
          onClick={() => {
            markTodo?.call(undefined, todo.uid, !todo.isDone)
          }}
        />
        {todo.isDone && (
          <a
            href='#'
            className='pl-2 link-primary'
            data-testid='delete-link'
            onClick={(e) => {
              e.preventDefault()
              setShow(true)
            }}>
            Удалить
          </a>
        )}
      </Container>
      <DeleteItemModal todo={todo} show={show} onHide={() => setShow(false)} />
    </>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  markTodo: PropTypes.func,
}

TodoItem.defaultProps = {
  todo: {},
  markTodo: () => {},
}

export default TodoItem
