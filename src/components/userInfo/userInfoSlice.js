import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userId: null
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserId: (state, action) => {
            state.userId = action.payload
        }
    }
})

const { reducer, actions } = userInfoSlice;
export default reducer;
export const { getUserId } = actions;