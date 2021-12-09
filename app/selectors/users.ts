import { createSelector, EntityState } from '@reduxjs/toolkit'
import { usersAdapter} from '../reducers/users'
import { RootState } from '../store/configureStore'
import { LoadingStatus } from '../utils/types'
import { IUser } from '../models'

export const userStateSelector = ({
  users,
}: RootState): EntityState<IUser> & LoadingStatus => users

export const {
  selectAll: getUsers,
  selectById: getUserById,
} = usersAdapter.getSelectors(userStateSelector)

export const getUserFetchStatus = createSelector(
    userStateSelector,
  (state) => state.status,
)

export const getUserFetchError = createSelector(
    userStateSelector,
  (state) => state.error,
)

