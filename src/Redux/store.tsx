import { configureStore } from '@reduxjs/toolkit'
import authReducer from './store/auth'
import productsReducer from './store/products'
import usersReducer from './store/users'
import collectionsReducer from './store/collections'
const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        users: usersReducer,
        collections: collectionsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store