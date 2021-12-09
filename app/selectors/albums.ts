import { createSelector, EntityState } from '@reduxjs/toolkit'
import { albumsAdapter} from '../reducers/albums'
import { RootState } from '../store/configureStore'
import { LoadingStatus } from '../utils/types'
import { IAlbum } from '../models'

export const albumStateSelector = ({
  albums,
}: RootState): EntityState<IAlbum> & LoadingStatus => albums

export const {
  selectAll: getAlbums,
  selectById: getAlbumById,
} = albumsAdapter.getSelectors(albumStateSelector)

export const getAlbumFetchStatus = createSelector(
    albumStateSelector,
  (state) => state.status,
)

export const getAlbumFetchError = createSelector(
    albumStateSelector,
  (state) => state.error,
)

