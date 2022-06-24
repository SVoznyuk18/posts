import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchComments } from "../dropDownCommentsMenu/commetsSlice";

import './postsListItem.style.css'
import comentsPNG from '../../assets/Comment stroke icon.png';
import DropDownCommentsMenu from '../dropDownCommentsMenu/DropDownCommentsMenu';

const PostsListItem = (props) => {

    const { title, body, id, userId } = props.postsItem;
    const { createCommentsArr, getUserName, handleShowUserInfo } = props;
    const [showCommentsMenu, setShowCommentsMenu] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className={`postsListItem ${showCommentsMenu ? "postsListItem_active" : null}`}>
            <div onClick={() => handleShowUserInfo(userId)} className="postsListItem_header">
                <img className="postsListItem_header_userIcon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt="" />
                <h4 className="postsListItem_header_userName">{getUserName(userId)}</h4>
            </div>
            <h3 className="postsListItem_title">{title}</h3>
            <div className="postsListItem_description_box">
                <h5 className={`postsListItem_description_box_text ${showCommentsMenu ? "active_text" : null}`}>{body}</h5>
                <div className="postsListItem_box_amountComents">
                    <img src={comentsPNG} alt={'a'} className="postsListItem_box_amountComents_img"></img>
                    <div className="postsListItem_box_amountComents_amount">{createCommentsArr(id).length}</div>
                </div>
            </div>
            <button
                className={`postsListItem_btn_showComments ${showCommentsMenu ? "active_button" : null}`}
                onClick={() => {
                    setShowCommentsMenu(!showCommentsMenu);
                    dispatch(fetchComments());
                }}
            >
                {`${showCommentsMenu ? "Hide comments" : "Show comments"}`}
            </button>

            {showCommentsMenu ? <DropDownCommentsMenu commentsArr={createCommentsArr(id)} /> : null}
        </div>
    )
}

export default PostsListItem;

