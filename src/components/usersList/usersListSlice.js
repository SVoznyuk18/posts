import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/https.hooks';

const initialState = {
    users: [],
    usersLoadingStatus: 'idle',
    usersListShow: true
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const { request } = useHttp();
        return await request('http://localhost:3001/users')
    }
)

const userListSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        showUsersList: (state, action) => {
            state.usersListShow = action.payload
        },
        addNewUser: (state, action) => {
            state.users.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.usersLoadingStatus = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.usersLoadingStatus = 'loaded';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.usersLoadingStatus = 'error';
            })
            .addDefaultCase(() => { })
    }
})

const { reducer, actions } = userListSlice;
export default reducer;
export const { showUsersList, addNewUser } = actions;