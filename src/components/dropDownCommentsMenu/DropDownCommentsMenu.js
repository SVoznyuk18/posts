import './dropDownCommentsMenu.style.css';

const DropDownCommentsMenu = () => {
    return (
        <ul className="comments_menu">
            <li className="comments_menu_item">
               <hr/>
                <div className="comments_menu_item_header">
                    <img className="comments_menu_item_header_userIcon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt=""/>
                    <h4 className="comments_menu_item_header_userName">Luy Robin</h4>
                    <h4 className="comments_menu_item_header_email">Luy Robin</h4>
                </div>
                <h5 className="comments_menu_item_text">Most of its text is made up from sections 1.10.323 of Cicero's De finibus bonorum et malorum On the Boundaries of Goods and Evils; finibus may also be translated as purposes. </h5>
            </li>

            <li className="comments_menu_item">
               <hr/>
                <div className="comments_menu_item_header">
                    <img className="comments_menu_item_header_userIcon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt=""/>
                    <h4 className="comments_menu_item_header_userName">Luy Robin</h4>
                    <h4 className="comments_menu_item_header_email">Luy Robin</h4>
                </div>
                <h5 className="comments_menu_item_text">Most of its text is made up from sections 1.10.323 of Cicero's De finibus bonorum et malorum On the Boundaries of Goods and Evils; finibus may also be translated as purposes. </h5>
            </li>
        </ul>
    )
}

export default DropDownCommentsMenu;