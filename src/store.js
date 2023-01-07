import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './slice/loginSlice'
import productSlice from './slice/productSlice'

export const store = configureStore({
    reducer: {
        LoginSlice,
        productSlice
    },
})