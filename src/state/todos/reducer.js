import { v4 as uuidv4 } from 'uuid'
import { ADD_TODO, REMOVE_TODO, MARK_TODO } from './types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.payload,
          uid: uuidv4(),
          isDone: false,
        },
      ]
    case REMOVE_TODO:
      return state.reduce((acc, cur) => {
        if (cur.uid !== action.payload) {
          acc.push(cur)
        }
        return acc
      }, [])
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
