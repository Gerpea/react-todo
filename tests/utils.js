import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../src/state/todos/reducer'

function render(
  ui,
  { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

function emptyWrapper(children) {
  return <Provider store={createStore(reducer, [])}>{children}</Provider>
}

export * from '@testing-library/react'
export { render, emptyWrapper }
