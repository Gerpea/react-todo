import React, { Suspense } from 'react'

import './App.scss'
const TodoList = React.lazy(() => import('./containers/TodoList'))
const Container = React.lazy(() => import('react-bootstrap/Container'))

const App = () => {
  return (
    <Suspense fallback={<></>}>
      <Container fluid='md' className='h-100 pt-2 pb-3'>
        <TodoList />
      </Container>
    </Suspense>
  )
}

export default App
