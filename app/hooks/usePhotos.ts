import { fetchPhotosAction } from '../actions/photos'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getPhotos,
  getPhotoFetchError,
  getPhotoFetchStatus,
} from '../selectors/photos'
import { IPhoto } from '../models'

type Props = {
  isLoading: boolean
  error: string | null
  photos: IPhoto[]
  retry: () => void
}

const usePhotos = (albumId: number): Props => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getPhotoFetchStatus) === 'loading'
  const error = useSelector(getPhotoFetchError)
  const photos = useSelector(getPhotos)

  // Fetch on first mount
  useEffect(() => {
    dispatch(fetchPhotosAction(albumId))
  }, [dispatch])

  return { isLoading, error, photos, retry: () => dispatch(fetchPhotosAction(albumId))}
}

export default usePhotos
