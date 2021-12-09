import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchAlbumsAction } from '../actions/albums'
import { IAlbum } from '../models'
import { LoadingStatus } from '../utils/types'

export const albumsAdapter = createEntityAdapter<IAlbum>({
  selectId: (album) => album.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const initialState = albumsAdapter.getInitialState({
  status: 'idle',
  error: null,
} as LoadingStatus)

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbumsAction.pending, (state) => {
        state.status = 'loading'
        state.error = null
        albumsAdapter.setAll(state, [])
      })
      .addCase(fetchAlbumsAction.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        state.error = null
        albumsAdapter.setAll(state, payload || [])
      })
      .addCase(fetchAlbumsAction.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload?.message || 'Unable to fetch ablums'
        albumsAdapter.setAll(state, [])
      })
  },
})

const { reducer } = albumSlice

// Export the reducer, either as a default or named export
export default reducer

