import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  }
}
const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
