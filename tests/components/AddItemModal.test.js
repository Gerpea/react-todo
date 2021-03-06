import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AddItemModal from '../../src/components/AddItemModal'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<AddItemModal />, div)
})

describe('todos', () => {
  it('should render empty select by default', () => {
    const { getByTestId } = render(<AddItemModal show={true} />)

    expect(
      getByTestId('select-parent').getElementsByTagName('select')[0].hasChildNodes()
    ).toBeFalsy()
  })

  it('should render correct number of parents', () => {
    const todos = [{}, {}, {}]

    const { getByTestId } = render(<AddItemModal show={true} todos={todos} />)

    expect(getByTestId('select-parent').getElementsByTagName('select')[0].childElementCount).toBe(
      todos.length
    )
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
      <div>{ReactDOM.createPortal(<AddItemModal show={true} todos={todos} />, container)}</div>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
