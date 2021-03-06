import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import TodoList from '../../src/components/TodoList'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TodoList />, div)
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
})

it('matches snapshot', () => {
  const tree = renderer.create(<TodoList />).toJSON()

  expect(tree).toMatchSnapshot()
})
