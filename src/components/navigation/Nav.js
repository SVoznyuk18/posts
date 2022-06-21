import './nav.style.css';

const Nav = () => {
    return (
        <nav className="navigation">
            <div className="navigation_logo">
                <img src="" alt="" className="navigation_logo_img"/>
                <div className="navigation_logo_text">ООО ГИЦ "ИНФОСИТИ"</div>
            </div>

            <h2 className="navigation_header">Меню</h2>

            <div className="navigation_menu">
                <div className="navigation_menu_block">
                    <img src="" alt="" className="navigation_menu_icon"/>
                    <div className="navigation_menu_title">Администрирование</div>
                    <img src="" alt="" className="navigation_menu_arow"/>
                </div>
                <ul className="navigation_menu_list">
                    <li className="navigation_menu_list_item navigation_menu_list_item-active">Пользователи</li>
                    <li className="navigation_menu_list_item">Организации</li>
                    <li className="navigation_menu_list_item">Должности</li>
                    <li className="navigation_menu_list_item">Роли</li>
                </ul>
            </div>
        </nav>
    )
    
}

export default Nav;

            

            