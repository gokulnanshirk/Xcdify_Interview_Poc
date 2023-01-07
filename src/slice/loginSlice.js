import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
}

export const loginSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.isLoggedIn = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setAuthState } = loginSlice.actions

export default loginSlice.reducer