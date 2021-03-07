import React from 'react'
import renderer from 'react-test-renderer'

import { emptyWrapper, render, cleanup, fireEvent } from '../utils'
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
    const todos = [{ uid: '1' }, { uid: '2' }, { uid: '3' }]

    const { getByTestId } = render(<TodoList todos={todos} />)

    expect(getByTestId('todo-list').childElementCount).toBe(todos.length)
  })

  it('should render correct number of todos with subtodo', () => {
    const todos = [
      { title: 'Item1', uid: '1' },
      { title: 'Item2', uid: '2', parentUid: '1' },
      { title: 'Item3', uid: '3', parentUid: '2' },
    ]

    const { queryAllByTestId } = render(<TodoList todos={todos} />)

    expect(queryAllByTestId(/[123]/)).toHaveLength(todos.length)
  })

  it('should renders correctly', () => {
    const todo = {
      title: 'Item',
      uid: '1',
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
