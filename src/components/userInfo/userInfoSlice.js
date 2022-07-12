import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userInfoId: null
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserId: (state, action) => {
            state.userInfoId = action.payload
        }
    }
})

const { reducer, actions } = userInfoSlice;
export default reducer;
export const { getUserId } = actions;