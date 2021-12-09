import { ALBUM_LIST, PHOTO_GRID } from "./constants"

export type LoadingStatus = {
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

export type ParamList = {
    [ALBUM_LIST]: {
        userId: number
    }
    [PHOTO_GRID]: {
        albumId: number
    }
    [key: string]: any
}
