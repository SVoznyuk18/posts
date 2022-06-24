import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/https.hooks";

const initialState = {
    comments: [],
    commentsLoadingStatus: ''
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const { request } = useHttp();
        return await request('https://jsonplaceholder.typicode.com/comments')
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state, action) => {
                state.commentsLoadingStatus = 'loading';
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.commentsLoadingStatus = '';
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.commentsLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});

const { reducer, actions } = commentsSlice;
export default reducer;


