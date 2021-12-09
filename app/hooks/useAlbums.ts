import { fetchAlbumsAction } from '../actions/albums'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getAlbums,
  getAlbumFetchError,
  getAlbumFetchStatus,
} from '../selectors/albums'
import { IAlbum } from '../models'

type Props = {
  isLoading: boolean
  error: string | null
  albums: IAlbum[]
  retry: () => void
}

const useAlbums = (userId: number): Props => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getAlbumFetchStatus) === 'loading'
  const error = useSelector(getAlbumFetchError)
  const albums = useSelector(getAlbums)

  // Fetch on first mount
  useEffect(() => {
    dispatch(fetchAlbumsAction(userId))
  }, [dispatch])

  return { isLoading, error, albums, retry: () => dispatch(fetchAlbumsAction(userId))}
}

export default useAlbums
