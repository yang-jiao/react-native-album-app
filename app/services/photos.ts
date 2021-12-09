import api from '../controllers/API'
import { IPhoto } from '../models'
import { formatGroupResponse } from '../utils/utils'


export const fetchPhotosByAlbumId = async (
    albumId: number
): Promise<
    IPhoto[] | undefined
> => {
    const response = await api.get<IPhoto[]>(
        `/photos?albumId=${albumId}`,
    )
    return formatGroupResponse(response)
}
