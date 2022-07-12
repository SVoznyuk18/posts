import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchPosts } from "./postsListSlice";
import { fetchComments, deleteComments } from "../dropDownCommentsMenu/commetsSlice";
import { showUsersList } from '../usersList/usersListSlice';
import { getUserId } from '../userInfo/userInfoSlice';
import { showAddPost } from "../addPost/addPostSlice";
import PostsListItem from "../postsListItem/PostsListItem";
import Spinner from '../spiner/Spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './postsList.style.css';
import { useHttp } from "../../hooks/https.hooks";

const PostsList = () => {

    const dispatch = useDispatch();
    const { request } = useHttp();
    const { comments } = useSelector(state => state.comments);
    const { userId } = useSelector(state => state.singIn);
    const { users, usersListShow } = useSelector(state => state.users);
    const { posts, postsLoadingStatus } = useSelector(state => state.posts);


    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchComments())
        // eslint-disable-next-line
    }, []);

    const createCommentsArr = (id) => {
        const arr = comments.filter(item => item.postId === id);
        return arr;
    };

    const getAuthorInfo = (userId) => {
        const info = users.find(item => item.id === userId);
        return info;
    };

    const showUserInfo = (id) => {
        dispatch(showUsersList(!usersListShow));
        dispatch(getUserId(id));
    };

    const deleteComment = (commentId) => {
        request(`http://localhost:3001/comments/${commentId}`, 'DELETE')
            .then(dispatch(deleteComments(commentId)))
    }



    const renderPostsList = (arr, status) => {
        if (status === 'loading') {
            return <Spinner />
        } else if (status === 'loaded') {
            return arr.map(item => {
                return (
                    <PostsListItem
                        key={item.id}
                        postsItem={item}
                        createCommentsArr={createCommentsArr}
                        getAuthorInfo={getAuthorInfo}
                        handleShowUserInfo={showUserInfo}
                        deleteComment={deleteComment}
                        authUserId={userId}
                    />
                )
            })

        } else if (status === 'error') {
            return <ErrorMessage />
        }
    };

    const elements = renderPostsList(posts, postsLoadingStatus);

    return (
        <div className="postsList">
            <div className="postsList_header">
                <div className="postsList_header_title">Posts</div>
                <button className="postsList_btn" onClick={() => dispatch(showAddPost('addPost_active'))}>Add new posts</button>
            </div>
            <div className="postsList_items">
                {elements}
            </div>
        </div>
    )
}

export default PostsList;