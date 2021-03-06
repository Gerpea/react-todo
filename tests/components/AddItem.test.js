import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AddItem from '../../src/components/AddItem'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<AddItem />, div)
})

describe('todos', () => {
  it('should render empty select by default', () => {
    const { getByTestId } = render(<AddItem />)

    expect(
      getByTestId('select-parent').getElementsByTagName('select')[0].hasChildNodes()
    ).toBeFalsy()
  })

  it('should render correct number of parents', () => {
    const todos = [{}, {}, {}]

    const { getByTestId } = render(<AddItem todos={todos} />)

    expect(getByTestId('select-parent').getElementsByTagName('select')[0].childElementCount).toBe(
      todos.length
    )
  })
})
