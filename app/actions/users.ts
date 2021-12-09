import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../models'
import { fetchUsers } from '../services/users'

export const fetchUsersAction = createAsyncThunk<
  IUser[] | undefined,
  void,
  {
    rejectValue: Error
  }
>(
  'users/fetchUsers',
  async (_unknown, { rejectWithValue }) => {
    try {
      const payload = await fetchUsers()
      return payload
    } catch (e) {
      return rejectWithValue(e as Error)
    }
  }
)
