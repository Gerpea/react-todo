import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly'

import { rootReducer } from './state/rootReducer'
import App from './App'

const store = createStore(rootReducer, devToolsEnhancer())

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
