import React from 'react'
import ReactDOM from 'react-dom'
import { emptyWrapper, render, cleanup, fireEvent } from '../utils'
import renderer from 'react-test-renderer'

import AddItemModal from '../../src/components/AddItemModal'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<AddItemModal />)
})

describe('todos', () => {
  it('should render default when todos is empty', () => {
    const { getByTestId } = render(<AddItemModal show={true} />)

    expect(getByTestId('select-parent').getElementsByTagName('select')[0].childElementCount).toBe(1)
  })

  it('should render correct number of parents', () => {
    const todos = [{}, {}, {}]

    const { getByTestId } = render(<AddItemModal show={true} todos={todos} />)

    expect(getByTestId('select-parent').getElementsByTagName('select')[0].childElementCount).toBe(
      todos.length + 1
    )
  })
})

describe('onCreate', () => {
  it('should be called when add button clicked', () => {
    const onCreate = jest.fn()
    const leftButton = { button: 0 }
    const { getByTestId } = render(<AddItemModal show={true} onCreate={onCreate} />)

    fireEvent.click(getByTestId('add-todo'), leftButton)

    expect(onCreate.mock.calls.length).toBe(1)
  })
})

ReactDOM.createPortal = (node) => node
it('matches snapshot', () => {
  const todos = [
    { title: 'Item 1', uid: '1' },
    { title: 'Item 2', uid: '2' },
  ]

  const container = document.createElement('div')
  const tree = renderer
    .create(
      <div>
        {ReactDOM.createPortal(emptyWrapper(<AddItemModal show={true} todos={todos} />, container))}
      </div>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
