import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Form, Modal, Button } from 'react-bootstrap'

const AddItemModal = ({ todos, onCreate, ...rest }) => {
  const [parents, setParents] = useState([])
  const [parent, setParent] = useState()
  const [title, setTitle] = useState('')

  useEffect(() => {
    setParents([
      { title: 'Не выбрано' },
      ...todos.filter((todo) => getParentCount(todos, todo.uid) < 2),
    ])
  }, [todos])

  return (
    <Modal {...rest} animation={false} centered>
      <Modal.Header>
        <Modal.Title>Добавить элемент</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
          }}>
          <Form.Group controlId='parent-todo' data-testid='select-parent'>
            <Form.Row>
              <Col>
                <Form.Label>Родительский элемент</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as='select'
                  value={parent}
                  onChange={(e) => {
                    setParent(e.target.value)
                  }}>
                  {parents.map((todo, i) => {
                    return (
                      <option value={todo.uid} key={todo.uid ?? i}>
                        {todo.title}
                      </option>
                    )
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId='title'>
            <Form.Row>
              <Col>
                <Form.Label>Заголовок</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="input'"
                  defaultValue=''
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          className='w-100'
          onClick={() => {
            rest.onHide?.call()
            onCreate?.call(undefined, title, parent)
            setParent(undefined)
          }}
          data-testid='add-todo'>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

function getParentCount(todos, uid) {
  const parentUid = todos.find((todo) => todo.uid === uid)?.parentUid
  if (parentUid) {
    return 1 + getParentCount(todos, parentUid)
  } else {
    return 0
  }
}

AddItemModal.propTypes = {
  todos: PropTypes.array,
  onCreate: PropTypes.func,
}

AddItemModal.defaultProps = {
  todos: [],
  onCreate: () => {},
}

export default AddItemModal
