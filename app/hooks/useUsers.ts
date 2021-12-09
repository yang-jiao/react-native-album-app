import { fetchUsersAction } from '../actions/users'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getUsers,
  getUserFetchError,
  getUserFetchStatus,
} from '../selectors/users'
import { IUser } from '../models'

type Props = {
  isLoading: boolean
  error: string | null
  allUsers: IUser[]
  retry: () => void
}

const useUsers = (): Props => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getUserFetchStatus) === 'loading'
  const error = useSelector(getUserFetchError)
  const allUsers = useSelector(getUsers)

  // Fetch on first mount
  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  return { isLoading, error, allUsers, retry: () => dispatch(fetchUsersAction()) }
}

export default useUsers
