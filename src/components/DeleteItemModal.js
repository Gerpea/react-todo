import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const DeleteItemModal = ({ ...rest }) => {
  return (
    <Modal {...rest} animation={false}>
      <Modal.Header>
        <Modal.Title>Вы уверены, что хотите удалить элемент?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant='primary'>Да</Button>
        <Button variant='secondary'>Нет</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteItemModal
