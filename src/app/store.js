/* eslint-disable import/prefer-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../features/rtk-query/api'
import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
  counter: counterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch)
