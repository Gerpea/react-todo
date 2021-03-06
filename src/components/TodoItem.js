import React from 'react'
import PropTypes from 'prop-types'
import { Card, Form } from 'react-bootstrap'

const TodoItem = ({ isDone, title }) => {
  return (
    <Card body>
      <Form.Check data-testid='item' type='checkbox' label={title} value={isDone} />
      {isDone && <Card.Link data-testid='delete-link'>Удалить</Card.Link>}
    </Card>
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
