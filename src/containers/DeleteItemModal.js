import { connect } from 'react-redux'

import { removeTodo } from '../state/todos/actions'

import DeleteItemModal from '../components/DeleteItemModal'

const mapDispatchToProps = {
  onDelete: (uid) => removeTodo(uid),
}

export default connect(null, mapDispatchToProps)(DeleteItemModal)
