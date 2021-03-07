import { ADD_TODO, REMOVE_TODO, MARK_TODO } from './types'

export function addTodo(title, parentUid) {
  return {
    type: ADD_TODO,
    payload: { title, parentUid },
  }
}

export function removeTodo(uid) {
  return {
    type: REMOVE_TODO,
    payload: uid,
  }
}

export function markTodo(uid, isDone) {
  return {
    type: MARK_TODO,
    payload: { uid, isDone },
  }
}
