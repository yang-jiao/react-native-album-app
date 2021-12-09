import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchUsersAction } from '../actions/users'
import { IUser } from '../models'
import { LoadingStatus } from '../utils/types'

export const usersAdapter = createEntityAdapter<IUser>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialState = usersAdapter.getInitialState({
  status: 'idle',
  error: null,
} as LoadingStatus)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAction.pending, (state) => {
        state.status = 'loading'
        state.error = null
        usersAdapter.setAll(state, [])
      })
      .addCase(fetchUsersAction.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        state.error = null
        usersAdapter.setAll(state, payload || [])
      })
      .addCase(fetchUsersAction.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload?.message || 'Unable to fetch users'
        usersAdapter.setAll(state, [])
      })
  },
})

const { reducer } = userSlice

// Export the reducer, either as a default or named export
export default reducer

