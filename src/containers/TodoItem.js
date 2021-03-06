import { connect } from 'react-redux'

import { markTodo } from '../state/todos/actions'

import TodoItem from '../components/TodoItem'

const mapDispatchToProps = {
  markTodo: (uid, isDone) => markTodo(uid, isDone),
}

export default connect(null, mapDispatchToProps)(TodoItem)
