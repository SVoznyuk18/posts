import PostsListItem from "../postsListItem/PostsListItem";

import './postsList.style.css';


const PostsList = () => {
    return(
        <div className="postsList">
            <PostsListItem/>
            <PostsListItem/>
            <PostsListItem/>
            <PostsListItem/>
        </div>
    )
}

export default PostsList;