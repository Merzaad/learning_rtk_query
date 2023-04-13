import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from './src/features/rtk-query/api'
import counterReducer from './src/features/rtk/counter/counterSlice'

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  counter: counterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)
