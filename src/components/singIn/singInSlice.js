import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    userId: ''
}

const singInSlice = createSlice({
    name: 'singIn',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.auth = true;
            state.userId = action.payload;
        },
        logOut: (state) => {
            state.auth = false;
            state.userId = null;
        }
    },
});

const { reducer, actions } = singInSlice;
export default reducer;
export const { logIn, logOut } = actions;