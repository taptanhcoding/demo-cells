import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {cartReducer} from './reducer'
export const allReducer = combineReducers({
    cart: cartReducer
})

export const store =configureStore({
    reducer: allReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


