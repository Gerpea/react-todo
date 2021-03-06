import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import TodoItem from '../../src/components/TodoItem'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<TodoItem />, div)
})

describe('title', () => {
  it('renders correctly', () => {
    const expected = 'Item'

    const { queryByText } = render(<TodoItem title={expected} />)

    expect(queryByText(expected)).not.toBeNull()
  })
})

describe('isDone', () => {
  it('should render unchecked by default', () => {
    const { getByTestId } = render(<TodoItem />)

    expect(getByTestId('item')).toHaveAttribute('value', 'false')
  })

  it('should render checked when true', () => {
    const expected = true

    const { getByTestId } = render(<TodoItem isDone={expected} />)

    expect(getByTestId('item')).toHaveAttribute('value', expected.toString())
  })

  it('should render unchecked when false', () => {
    const expected = false

    const { getByTestId } = render(<TodoItem isDone={expected} />)

    expect(getByTestId('item')).toHaveAttribute('value', expected.toString())
  })
})

describe('delete link', () => {
  it('should not render delete link when isDone is false', () => {
    const { queryByTestId } = render(<TodoItem isDone={false} />)

    expect(queryByTestId('delete-link')).toBeNull()
  })

  it('should render delete link when isDone is true', () => {
    const { queryByTestId } = render(<TodoItem isDone={true} />)

    expect(queryByTestId('delete-link')).not.toBeNull()
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(<TodoItem isDone={true} title='Item' />).toJSON()

  expect(tree).toMatchSnapshot()
})
