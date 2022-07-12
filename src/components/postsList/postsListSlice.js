import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/https.hooks";

const initialState = {
    posts: [],
    postsLoadingStatus: ''
};

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { request } = useHttp();
        return await request('http://localhost:3001/posts')
    }
);

const postsListSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPost: (state, action) => {
            state.posts.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.postsLoadingStatus = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postsLoadingStatus = 'loaded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.postsLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
});

const { reducer, actions } = postsListSlice;
export default reducer;
export const { addNewPost } = actions;

