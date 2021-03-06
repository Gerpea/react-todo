import React from 'react'
import ReactDOM from 'react-dom'
import { emptyWrapper, render, cleanup, fireEvent } from '../utils'
import renderer from 'react-test-renderer'

import DeleteItemModal from '../../src/components/DeleteItemModal'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<DeleteItemModal />)
})

ReactDOM.createPortal = (node) => node
it('matches snapshot', () => {
  const container = document.createElement('div')
  const tree = renderer
    .create(ReactDOM.createPortal(<DeleteItemModal show={true} />, container))
    .toJSON()

  expect(tree).toMatchSnapshot()
})

it('should call onHide when cancel button clicked', () => {
  const onHide = jest.fn()
  const leftButton = { button: 0 }
  const { getByTestId } = render(<DeleteItemModal show={true} onHide={onHide} />)

  fireEvent.click(getByTestId('not-delete-todo'), leftButton)

  expect(onHide.mock.calls.length).toBe(1)
})

describe('onDelete', () => {
  it('should be called when delete button clicked', () => {
    const onDelete = jest.fn()
    const leftButton = { button: 0 }
    const { getByTestId } = render(
      emptyWrapper(<DeleteItemModal show={true} onDelete={onDelete} />)
    )

    fireEvent.click(getByTestId('delete-todo'), leftButton)

    expect(onDelete.mock.calls.length).toBe(1)
  })
})
