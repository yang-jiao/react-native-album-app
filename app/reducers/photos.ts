import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchPhotosAction } from '../actions/photos'
import { IPhoto } from '../models'
import { LoadingStatus } from '../utils/types'

export const photosAdapter = createEntityAdapter<IPhoto>({
  selectId: (photo) => photo.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

const initialState = photosAdapter.getInitialState({
  status: 'idle',
  error: null,
} as LoadingStatus)

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosAction.pending, (state) => {
        state.status = 'loading'
        state.error = null
        photosAdapter.setAll(state, [])
      })
      .addCase(fetchPhotosAction.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        state.error = null
        photosAdapter.setAll(state, payload || [])
      })
      .addCase(fetchPhotosAction.rejected, (state, { payload }) => {
        state.status = 'failed'
        state.error = payload?.message || 'Unable to fetch photos'
        photosAdapter.setAll(state, [])
      })
  },
})

const { reducer } = photoSlice

// Export the reducer, either as a default or named export
export default reducer

