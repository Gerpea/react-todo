import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, REMOVE_TODO, MARK_TODO } from './types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.payload.title,
          parentUid:
            getParentCount(state, action.payload.parentUid) < 2
              ? action.payload.parentUid
              : undefined,
          uid: uuidv4(),
          isDone: false,
        },
      ]
    case REMOVE_TODO:
      return removeTodo(state, action.payload)
    case MARK_TODO:
      return state.map((todo) => {
        if (todo.uid === action.payload.uid) {
          todo.isDone = action.payload.isDone
        }

        return todo
      })
    default:
      return state
  }
}

function removeTodo(state, uid) {
  const children = getChildren(state, uid)

  let withoutChild = state
  children.forEach((child) => {
    withoutChild = removeTodo(state, child.uid)
  })

  return withoutChild.reduce((acc, cur) => {
    if (cur.uid !== uid) {
      acc.push(cur)
    }
    return acc
  }, [])
}

function getChildren(state, uid) {
  return state.filter((item) => item.parentUid === uid)
}

function getParentCount(state, uid) {
  const parentUid = state.find((item) => item.uid === uid)?.parentUid
  if (parentUid) {
    return 1 + getParentCount(state, parentUid)
  } else {
    return 0
  }
}

export default todosReducer
