import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, Form } from 'react-bootstrap'
import DeleteItemModal from './DeleteItemModal'

const TodoItem = ({ isDone, title }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Card body data-testid='todo-item'>
        <Form.Check data-testid='item' type='checkbox' label={title} value={isDone} />
        {isDone && (
          <Card.Link
            data-testid='delete-link'
            onClick={() => {
              setShow(true)
            }}>
            Удалить
          </Card.Link>
        )}
      </Card>
      <DeleteItemModal show={show} onHide={() => setShow(false)} />
    </>
  )
}

TodoItem.propTypes = {
  isDone: PropTypes.bool,
  title: PropTypes.string,
}

TodoItem.defaultProps = {
  isDone: false,
  title: '',
}

export default TodoItem
