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
