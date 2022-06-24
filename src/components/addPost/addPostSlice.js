import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalActiveClass: ''
}

const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        showAddPost: (state, action) =>{
            state.modalActiveClass = action.payload;
        }
    }
})

const {reducer, actions} = addPostSlice;
export default reducer;
export const {showAddPost} = actions;