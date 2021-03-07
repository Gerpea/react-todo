import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'

import { rootReducer } from './state/rootReducer'
import App from './App'

const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const render = (Component) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Component />
      </Provider>
    </React.StrictMode>,
    document.querySelector('#root')
  )
}

render(App)
