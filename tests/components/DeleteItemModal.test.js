import React from 'react'
import ReactDOM from 'react-dom'
import { cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

import DeleteItemModal from '../../src/components/DeleteItemModal'

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<DeleteItemModal />, div)
})

ReactDOM.createPortal = (node) => node
it('matches snapshot', () => {
  const container = document.createElement('div')
  const tree = renderer
    .create(ReactDOM.createPortal(<DeleteItemModal show={true} />, container))
    .toJSON()

  expect(tree).toMatchSnapshot()
})
