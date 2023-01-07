import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productList: [],
    selectedProductDetail: {}
}

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setProductDetail: (state, action) => {
            state.productList = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProductList, setProductDetail } = productSlice.actions

export default productSlice.reducer