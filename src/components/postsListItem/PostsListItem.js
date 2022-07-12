import { useState } from 'react';

import './postsListItem.style.css'
import comentsPNG from '../../assets/comments.png';
import DropDownCommentsMenu from '../dropDownCommentsMenu/DropDownCommentsMenu';
import AddNewComment from '../addNewComment/AddNewComment';

const PostsListItem = (props) => {

    const { title, body, id, userId } = props.postsItem;
    const { createCommentsArr, getAuthorInfo, handleShowUserInfo, deleteComment, authUserId } = props;
    const [showCommentsMenu, setShowCommentsMenu] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);

    return (
        <div className={`postsListItem ${showCommentsMenu ? "postsListItem_active" : null}`}>
            <div onClick={() => handleShowUserInfo(userId)} className="postsListItem_header">
                <img className="postsListItem_header_userIcon" src={getAuthorInfo(userId).img} alt={`${getAuthorInfo(userId).name} img`} />
                <h4 className="postsListItem_header_userName">{getAuthorInfo(userId).name}</h4>
            </div>
            <h3 className="postsListItem_title">{title}</h3>
            <div className="postsListItem_description_box">
                <h5 className={`postsListItem_description_box_text ${showCommentsMenu ? "active_text" : null}`}>{body}</h5>
                <div className="postsListItem_box_amountComents">
                    <img src={comentsPNG} alt={'a'} className="postsListItem_box_amountComents_img"></img>
                    <div className="postsListItem_box_amountComents_amount">{createCommentsArr(id).length}</div>
                </div>
            </div>

            <div className='postsListItem_btn_btn_box'>
                <button
                    className={`postsListItem_btn_showComments ${showCommentsMenu ? "active_button" : null}`}
                    onClick={() => {
                        setShowCommentsMenu(!showCommentsMenu);
                        if (showAddComment) {
                            setShowAddComment(!showAddComment);
                        }
                    }}
                >
                    {`${showCommentsMenu ? "Hide comments" : "Show comments"}`}
                </button>

                <button
                    className={`postsListItem_btn_addComments ${showCommentsMenu ? "active_button" : null}`}
                    onClick={() => {
                        setShowAddComment(!showAddComment);
                        if (showCommentsMenu) {
                            setShowCommentsMenu(!showCommentsMenu);
                        }

                    }}
                >
                    Add New Comment
                </button>
            </div>

            {showCommentsMenu ? <DropDownCommentsMenu commentsArr={createCommentsArr(id)} getAuthorInfo={getAuthorInfo} deleteComment={deleteComment} authUserId={authUserId} /> : null}
            {showAddComment ? <AddNewComment postId={id} setShowAddComment={setShowAddComment} /> : null}
        </div>
    )
}

export default PostsListItem;

