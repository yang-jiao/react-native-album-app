import { AnyAction, EntityState } from '@reduxjs/toolkit'
import { fetchUsersAction } from '../../app/actions/users'
import { IUser } from '../../app/models'
import { LoadingStatus } from '../../app/utils/types'

import reducer from '../../app/reducers/users'

const initialState: EntityState<IUser> & LoadingStatus = {
  entities: {},
  ids: [],
  status: 'idle',
  error: null,
}

const data: IUser[] = [
  { name: 'Leanne Graham', id: 1, username: 'Leanne',email:'email' },
  { name: 'Ervin Howell', id: 2, username: 'Ervin', email: 'email2' },
]

const normalised = {
  1: { name: 'Leanne Graham', id: 1, username: 'Leanne',email:'email' },
  2: { name: 'Ervin Howell', id: 2, username: 'Ervin', email: 'email2' },
}

const pendingAction = { type: fetchUsersAction.pending.type }
const successfulAction = {
  type: fetchUsersAction.fulfilled.type,
  payload: data,
}
const error = new Error('Our caught exception')
const failedAction = {
  type: fetchUsersAction.rejected.type,
  payload: error,
}

describe('users reducer', () => {
  it('should return the initial state when no action is matching', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState)
  })

  it('should handle a successful request', () => {
    expect(reducer({ ...initialState }, successfulAction)).toEqual({
      entities: normalised,
      ids: [2, 1],
      status: 'succeeded',
      error: null,
    })
  })

  it('should set loading as true when thunk is pending', () => {
    expect(reducer({ ...initialState }, pendingAction)).toEqual({
      entities: {},
      ids: [],
      status: 'loading',
      error: null,
    })
  })

  it('should set error with string from exception', () => {
    expect(reducer({ ...initialState }, failedAction)).toEqual({
      entities: {},
      ids: [],
      status: 'failed',
      error: 'Our caught exception',
    })
  })
})
