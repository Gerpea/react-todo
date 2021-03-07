import { v4 as uuidv4 } from 'uuid'

import { ADD_TODO, REMOVE_TODO, MARK_TODO } from './types'
import { getParentCount, removeTodo } from './utils'

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

export default todosReducer
