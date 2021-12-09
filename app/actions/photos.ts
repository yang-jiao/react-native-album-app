import { createAsyncThunk } from '@reduxjs/toolkit'
import { IPhoto } from '../models'
import { fetchPhotosByAlbumId } from '../services/photos'

export const fetchPhotosAction = createAsyncThunk<
    IPhoto[] | undefined,
    number,
    {
        rejectValue: Error
    }
>(
    'photos/fetchPhotosByAlbum',
    async (albumId: number, { rejectWithValue }) => {
        try {
            return await fetchPhotosByAlbumId(albumId)
        } catch (e) {
            return rejectWithValue(e as Error)
        }
    }
)
