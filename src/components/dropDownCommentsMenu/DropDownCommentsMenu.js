import './dropDownCommentsMenu.style.css';

const DropDownCommentsMenu = (props) => {

    const { commentsArr } = props;
    return (
        <ul className="comments_menu">
            {commentsArr.map(item => {
                return (

                    <li key={item.id} className="comments_menu_item">

                        <div className="comments_menu_item_header">
                            <img className="comments_menu_item_header_userIcon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt="" />
                            <h4 className="comments_menu_item_header_userName">{item.email.split('@')[0]}</h4>
                            <h4 className="comments_menu_item_header_email">{item.email}</h4>
                        </div>
                        <h5 className="comments_menu_item_text">{item.body}</h5>
                    </li>
                )
            })}
        </ul>
    )
}

export default DropDownCommentsMenu;