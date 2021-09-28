import { createSlice } from '@reduxjs/toolkit'

export const stateSlice = createSlice({
    name: 'states',
    initialState: {
        islogin: false,
        user: {},
        token: '',
    },
    reducers: {
        login: (state) => {
            state.islogin = true;
        },
        logout: (state) => {
            state.islogin = false;
        },
        settoken: (state, action) => {
            state.token = action.payload;
        },
        setuser: (state, action) => {
            state.user = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, settoken, setuser } = stateSlice.actions

export default stateSlice.reducer