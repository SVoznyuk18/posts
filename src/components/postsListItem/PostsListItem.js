import './postsListItem.style.css'
import comentsPNG from '../../assets/Comment stroke icon.png';
import DropDownCommentsMenu from '../dropDownCommentsMenu/DropDownCommentsMenu';

import { useState } from 'react';

const PostsListItem = () => {

    const [showCommentsMenu, setShowCommentsMenu] = useState(false);
    return(
        <div className="postsListItem postsListItem_active">
            <div className="postsListItem_header">
                <img className="postsListItem_header_userIcon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt=""/>
                <h4 className="postsListItem_header_userName">Luy Robin</h4>
            </div>
            <h3 className="postsListItem_title">Luy Robin</h3>
            {/* <div className="postsListItem_description_box">
                <h5 className="postsListItem_description_box_text">Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). </h5>
                <div className="postsListItem_description_box_circule">
                    <div className="postsListItem_description_box_amountComents">5</div>
                </div>
            </div> */}
            {/* <h5 className="postsListItem_text">Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum On the Boundaries of Goods and Evils; finibus may also be translated as purposes. </h5>
            <div className="postsListItem_box_amountComents">
                <img src={comentsPNG} className="postsListItem_box_amountComents_img"></img>
                <div className="postsListItem_box_amountComents_amount">10</div>
            </div> */}
            <div className="postsListItem_description_box">
                <h5 className="postsListItem_description_box_text active_text">Most of its text is made up from sections 1.10.323 of Cicero's De finibus bonorum et malorum On the Boundaries of Goods and Evils; finibus may also be translated as purposes. </h5>
                <div className="postsListItem_box_amountComents">
                    <img src={comentsPNG} alt={'a'} className="postsListItem_box_amountComents_img"></img>
                    <div className="postsListItem_box_amountComents_amount">10</div>
                </div>
            </div>
            <button className='postsListItem_btn_showComments active_button' onClick={() => setShowCommentsMenu(!showCommentsMenu)}>Show comments</button>
           

            {showCommentsMenu ? <DropDownCommentsMenu/> : null}
            
  
        </div>
    )
}

export default PostsListItem;