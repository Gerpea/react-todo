import * as actions from '../../../src/state/todos/actions'
import * as types from '../../../src/state/todos/types'

it('should create action to add todo', () => {
  const title = 'Item'
  const expected = {
    type: types.ADD_TODO,
    payload: { title },
  }

  expect(actions.addTodo(title)).toEqual(expected)
})

it('should create action to add todo with parent', () => {
  const title = 'Item'
  const parentUid = '1'
  const expected = {
    type: types.ADD_TODO,
    payload: { title, parentUid },
  }

  expect(actions.addTodo(title, parentUid)).toEqual(expected)
})

it('should create action to remove todo', () => {
  const uid = '1'
  const expected = {
    type: types.REMOVE_TODO,
    payload: uid,
  }

  expect(actions.removeTodo(uid)).toEqual(expected)
})

it('should create action to done/undone todo', () => {
  const uid = '1'
  const isDone = true
  const expected = {
    type: types.MARK_TODO,
    payload: { uid, isDone },
  }

  expect(actions.markTodo(uid, isDone)).toEqual(expected)
})
