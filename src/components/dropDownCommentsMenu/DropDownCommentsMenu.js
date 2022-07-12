import './dropDownCommentsMenu.style.css';
import deletePNG from '../../assets/delete.png'

const DropDownCommentsMenu = (props) => {

    const { commentsArr, getAuthorInfo, deleteComment, authUserId } = props;


    return (
        <ul className="comments_menu">
            {commentsArr.map(item => {
                return (
                    <li key={item.id} className="comments_menu_item">
                        <div className='comments_menu_item_box'>
                            <div className="comments_menu_item_header">
                                <img className="comments_menu_item_header_userIcon" src={getAuthorInfo(item.userId).img} alt={`img ${getAuthorInfo(item.userId).name}`} />
                                <h4 className="comments_menu_item_header_userName">{getAuthorInfo(item.userId).name}</h4>
                                <h4 className="comments_menu_item_header_email">{getAuthorInfo(item.userId).email}</h4>
                            </div>
                            <h5 className="comments_menu_item_text">{item.body}</h5>
                        </div>
                        <button className={`${authUserId === item.userId ? 'deleteBtn_active' : 'deleteBtn_inActive'}`} onClick={() => deleteComment(item.id)}>
                            <img src={deletePNG} alt='deleteIcon' />
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default DropDownCommentsMenu;