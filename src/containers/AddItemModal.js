import { connect } from 'react-redux'

import { addTodo } from '../state/todos/actions'

import AddItemModal from '../components/AddItemModal'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  onCreate: (title) => addTodo(title),
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal)
