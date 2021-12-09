import api from '../controllers/API'
import { IAlbum } from '../models'
import { formatGroupResponse } from '../utils/utils'


export const fetchAlbumsByUserId = async (
    userId: number
): Promise<
    IAlbum[] | undefined
> => {
    const response = await api.get<IAlbum[]>(
        `/albums?userId=${userId}`,
    )
    return formatGroupResponse(response)
}
