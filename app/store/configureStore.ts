import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'

import users from '../reducers/users'
import albums from '../reducers/albums'
import photos from '../reducers/photos'
import { StoreEnhancer } from 'redux'

export const rootReducer = combineReducers({
  users,
  albums,
  photos,
})

export type RootState = ReturnType<typeof rootReducer>

let enhancers: StoreEnhancer[] | undefined

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (defaultState?: Partial<RootState>) => {
  const store = configureStore({
    ...(defaultState ? { preloadedState: defaultState } : {}),
    devTools: true,
    reducer: rootReducer, // to work around type error
    enhancers,
  })

  return {
    store,
  }
}
