import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAlbum } from '../models'
import { fetchAlbumsByUserId } from '../services/albums'

export const fetchAlbumsAction = createAsyncThunk<
    IAlbum[] | undefined,
    number,
    {
        rejectValue: Error
    }
>(
    'albums/fetchAlbumsByUser',
    async (userId: number, { rejectWithValue }) => {
        try {
            return await fetchAlbumsByUserId(userId)
        } catch (e) {
            return rejectWithValue(e as Error)
        }
    }
)
