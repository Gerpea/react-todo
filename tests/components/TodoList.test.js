import React from 'react'
import { emptyWrapper, render, cleanup, fireEvent } from '../utils'
import renderer from 'react-test-renderer'

import TodoList from '../../src/components/TodoList'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<TodoList />)
})

describe('todos', () => {
  it('should render empty list by default', () => {
    const { getByTestId } = render(<TodoList />)

    expect(getByTestId('todo-list').hasChildNodes()).toBeFalsy()
  })

  it('should render correct number of todos', () => {
    const todos = [{}, {}, {}]

    const { getByTestId } = render(<TodoList todos={todos} />)

    expect(getByTestId('todo-list').childElementCount).toBe(todos.length)
  })

  it('should renders correctly', () => {
    const todo = {
      title: 'Item',
    }

    const { queryByText } = render(<TodoList todos={[todo]} />)

    expect(queryByText(todo.title)).toBeInTheDocument()
  })
})

describe('add item', () => {
  it('should render button corectly', () => {
    const { queryByTestId } = render(<TodoList />)

    expect(queryByTestId('add-item')).not.toBeNull()
  })

  it('should render add item modal when button clicked', () => {
    const leftClick = { button: 0 }

    const { getByTestId, queryByTestId } = render(<TodoList />)
    fireEvent.click(getByTestId('add-item'), leftClick)

    expect(queryByTestId('modal')).not.toBeNull()
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(emptyWrapper(<TodoList />)).toJSON()

  expect(tree).toMatchSnapshot()
})
