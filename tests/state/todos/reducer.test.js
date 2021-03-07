import reducer from '../../../src/state/todos/reducer'
import * as types from '../../../src/state/todos/types'
import * as actions from '../../../src/state/todos/actions'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})

describe('ADD_TODO', () => {
  it('should create uid when create', () => {
    const state = reducer([], actions.addTodo('Item'))

    expect(state[0].hasOwnProperty('uid')).toBeTruthy()
  })

  it('should create uniq uid when create', () => {
    const initialState = [
      {
        uid: '1',
      },
    ]

    const state = reducer(initialState, actions.addTodo('Item'))

    expect(state.filter((item, index) => state.indexOf(item) !== index)).toHaveLength(0)
  })

  it('should set isDone to false when create', () => {
    const state = reducer([], actions.addTodo('Item'))

    expect(state.every((item) => item.isDone === false)).toBeTruthy()
  })

  it('should add todo to parent when parent uid specified', () => {
    const initialState = [
      {
        uid: '1',
      },
    ]

    const state = reducer(initialState, actions.addTodo('Item', '1'))

    expect(state.find((item) => item.parentUid === '1')).not.toBeUndefined()
  })

  it('should add todo without parent if it will 3rd generation or greater', () => {
    const initialState = [
      {
        uid: '1',
      },
      {
        uid: '2',
        parentUid: '1',
      },
      {
        uid: '3',
        parentUid: '2',
      },
    ]

    const state = reducer(initialState, actions.addTodo('Item', '3'))

    expect(state.find((item) => item.parentUid === '3')).toBeUndefined()
  })
})

describe('REMOVE_TODO', () => {
  it('should remove todo by uid', () => {
    const initialState = [
      {
        uid: '1',
      },
      {
        uid: '2',
      },
      {
        uid: '3',
      },
    ]

    const state = reducer(initialState, actions.removeTodo('1'))

    expect(state).toEqual(initialState.slice(1))
  })

  it('should remove todo with all childrens', () => {
    const initialState = [
      {
        uid: '1',
      },
      {
        uid: '2',
        parentUid: '1',
      },
      {
        uid: '3',
        parentUid: '2',
      },
    ]

    const state = reducer(initialState, actions.removeTodo('1'))

    expect(state).toHaveLength(0)
  })
})

describe('MARK_TODO', () => {
  it('should set isDone correctly on item', () => {
    const initialState = [
      {
        uid: '1',
        isDone: false,
      },
    ]

    const state = reducer(initialState, actions.markTodo(initialState[0].uid, true))

    expect(state[0].isDone).toBeTruthy()
  })
})
