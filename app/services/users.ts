import api from '../controllers/API'
import { IUser } from '../models'
import { formatGroupResponse } from '../utils/utils'


export const fetchUsers = async (): Promise<
  IUser[] | undefined
> => {
  const response = await api.get<IUser[]>(
    '/users',
  )
  return formatGroupResponse(response)
}
