

import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'


export let store = configureStore({
  reducer: {
    postReducer : postReducer
  }
})