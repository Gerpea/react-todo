import React from 'react'
import renderer from 'react-test-renderer'

import { emptyWrapper, render, cleanup } from '../utils'
import TodoItem from '../../src/components/TodoItem'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<TodoItem />)
})

describe('title', () => {
  it('renders correctly', () => {
    const todo = { title: 'Item' }

    const { queryByText } = render(<TodoItem todo={todo} />)

    expect(queryByText(todo.title)).not.toBeNull()
  })
})

describe('isDone', () => {
  it('should render unchecked by default', () => {
    const { getByTestId } = render(<TodoItem />)

    expect(getByTestId('item')).toHaveAttribute('value', 'false')
  })

  it('should render checked when true', () => {
    const expected = true

    const { getByTestId } = render(<TodoItem todo={{ isDone: expected }} />)

    expect(getByTestId('item')).toHaveAttribute('value', expected.toString())
  })

  it('should render unchecked when false', () => {
    const expected = false

    const { getByTestId } = render(<TodoItem todo={{ isDone: expected }} />)

    expect(getByTestId('item')).toHaveAttribute('value', expected.toString())
  })
})

describe('delete link', () => {
  it('should not render delete link when isDone is false', () => {
    const { queryByTestId } = render(<TodoItem todo={{ isDone: false }} />)

    expect(queryByTestId('delete-link')).toBeNull()
  })

  it('should render delete link when isDone is true', () => {
    const { queryByTestId } = render(<TodoItem todo={{ isDone: true }} />)

    expect(queryByTestId('delete-link')).not.toBeNull()
  })

  it('should open delete modal when clicked', () => {})
})

it('matches snapshot', () => {
  const tree = renderer.create(emptyWrapper(<TodoItem todo={{ title: 'Item' }} />)).toJSON()

  expect(tree).toMatchSnapshot()
})
