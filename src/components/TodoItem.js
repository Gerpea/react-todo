import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Card, Form, Row, Col } from 'react-bootstrap'

import DeleteItemModal from '../containers/DeleteItemModal'

const TodoItem = ({ todo, markTodo }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Card body data-testid='todo-item'>
        <Row>
          <Col>
            <Form.Check
              data-testid='item'
              type='checkbox'
              label={todo.title}
              value={todo.isDone || false}
              onClick={() => {
                markTodo?.call(undefined, todo.uid, !todo.isDone)
              }}
            />
          </Col>
          <Col>
            {todo.isDone && (
              <Card.Link
                data-testid='delete-link'
                onClick={() => {
                  setShow(true)
                }}>
                Удалить
              </Card.Link>
            )}
          </Col>
        </Row>
      </Card>
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
