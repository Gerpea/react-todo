import React from 'react'
import PropTypes from 'prop-types'

import { Modal, Button, Col, Row, Container } from 'react-bootstrap'

const DeleteItemModal = ({ todo, onDelete, onHide, ...rest }) => {
  return (
    <Modal {...rest} animation={false} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Вы уверены, что хотите удалить элемент?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Container>
          <Row>
            <Col>
              <Button
                className='w-100'
                variant='primary'
                onClick={() => {
                  onHide?.call(undefined)
                  onDelete?.call(undefined, todo.uid)
                }}
                data-testid='delete-todo'>
                Да
              </Button>
            </Col>
            <Col>
              <Button
                className='w-100'
                variant='secondary'
                onClick={() => onHide?.call(undefined)}
                data-testid='not-delete-todo'>
                Нет
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  )
}

DeleteItemModal.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onHide: PropTypes.func,
}

DeleteItemModal.defaultProps = {
  todo: {},
  onDelete: () => {},
  onHide: () => {},
}

export default DeleteItemModal
