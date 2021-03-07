import React from 'react'
import { Container } from 'react-bootstrap'

import './App.scss'
import TodoList from './containers/TodoList'

const App = () => {
  return (
    <Container fluid='md' className='vh-100 pt-2 pb-3'>
      <TodoList />
    </Container>
  )
}

export default App
