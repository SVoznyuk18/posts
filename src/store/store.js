import { configureStore } from "@reduxjs/toolkit";
import posts from '../components/postsList/postsListSlice'
import comments from '../components/dropDownCommentsMenu/commetsSlice';
import users from '../components/usersList/usersListSlice';
import userInfo from '../components/userInfo/userInfoSlice';
import addPost from '../components/addPost/addPostSlice';

const store = configureStore({
    reducer: { posts, comments, users, userInfo, addPost },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;