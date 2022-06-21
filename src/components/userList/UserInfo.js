import './userInfo.style.css';


const UserInfo = () => {
    return(
        <div className="userInfo">
            <div className="userInfo_header">
                <img className="userInfo_header_icon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt="" />
                <div className="userInfo_header_info">
                    <h4 className="userInfo_header_info_name">Leanne Graham</h4>
                    <h6 className="userInfo_header_info_userName">Bret</h6>
                </div>
                
            </div>
            <div className="userInfo_info">
                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title name">Name</div>
                    <div className="userInfo_info_box_description">Leanne Graha</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title email">Email</div>
                    <div className="userInfo_info_box_description">Sincere@april.biz</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title website">Website</div>
                    <a href='www.hildegard.org' className="userInfo_info_box_description">hildegard.org</a>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Phone</div>
                    <div className="userInfo_info_box_description">1-770-736-8031 x56442</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Address</div>
                    <div className="userInfo_info_box_description">Gwenborough, Kulas Light, Apt. 556</div>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;