import { createSelector, EntityState } from '@reduxjs/toolkit'
import { photosAdapter} from '../reducers/photos'
import { RootState } from '../store/configureStore'
import { LoadingStatus } from '../utils/types'
import { IPhoto } from '../models'

export const photoStateSelector = ({
  photos,
}: RootState): EntityState<IPhoto> & LoadingStatus => photos

export const {
  selectAll: getPhotos,
  selectById: getPhotoById,
} = photosAdapter.getSelectors(photoStateSelector)

export const getPhotoFetchStatus = createSelector(
    photoStateSelector,
  (state) => state.status,
)

export const getPhotoFetchError = createSelector(
    photoStateSelector,
  (state) => state.error,
)

