import { connect } from 'react-redux'

import { addTodo } from '../state/todos/actions'

import AddItemModal from '../components/AddItemModal'

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = {
  onCreate: (title, parentUid) => addTodo(title, parentUid),
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemModal)
