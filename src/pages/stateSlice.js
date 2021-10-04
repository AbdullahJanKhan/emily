import { createSlice } from '@reduxjs/toolkit'

export const stateSlice = createSlice({
    name: 'states',
    initialState: {
        islogin: true,
        user: {},
        token: '',
        name: "",
        id: ""
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
            state.name = action.payload.fname + " " + action.payload.lname;
            state.id = action.payload._id
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, settoken, setuser } = stateSlice.actions

export default stateSlice.reducer