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
        return await request('http://localhost:3001/comments');
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addNewComments: (state, action) => {
            state.comments.push(action.payload);
        },
        deleteComments: (state, action) => {
            state.comments = state.comments.filter(item => item.id !== action.payload);
        }
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
export const { addNewComments, deleteComments } = actions;
export default reducer;


