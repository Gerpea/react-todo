import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Form, Modal } from 'react-bootstrap'

const AddItem = ({ todos }) => {
  const [parent, setParent] = useState()

  useEffect(() => {
    if (todos.length > 0) {
      setParent(todos[0].uid)
    }
  }, [])

  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Добавить элемент</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='parent-todo' data-testid='select-parent'>
            <Form.Row>
              <Col>
                <Form.Label>Родительский элемент</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as='select'
                  value={parent}
                  onSelect={(e) => setParent(e.target.value)}>
                  {todos.map((todo, i) => {
                    return (
                      <option value={todo.uid} key={todo.uid ?? i}>
                        {todo.title}
                      </option>
                    )
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Label htmlFor='title'>Заголовок</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="input'"
                  id='title'
                  defaultValue=''
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary'>Добавить</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

AddItem.propTypes = {
  todos: PropTypes.array,
}

AddItem.defaultProps = {
  todos: [],
}

export default AddItem
