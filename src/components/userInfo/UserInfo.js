import { useDispatch, useSelector } from 'react-redux';
import { showUsersList } from '../usersList/usersListSlice';
import correctionPNG from '../../assets/correction.png';

import './userInfo.style.css';

const UserInfo = () => {

    const {userInfoId} = useSelector(state => state.userInfo);
    const { users, usersListShow } = useSelector(state => state.users);
    const {userId} = useSelector(state => state.singIn);
    const dispatch = useDispatch();

    const getUserInfo = (arr, id) => {
        const userItem = arr.find((item) => (item.id === id))
        return userItem;
    }

    const showCorrectionIcon = (authId, id) => {
        return authId === id;
    }

    const { name, username, img, email, address, phone, website } = getUserInfo(users, userInfoId)

    return (
        <div className="userInfo">
            <div className="userInfo_goBack" onClick={() => dispatch(showUsersList(!usersListShow))}>Go back</div>

            <div className="userInfo_header">
                <img className="userInfo_header_icon" src={img} alt={`img ${name}`} />
                <div className="userInfo_header_info">
                    <h4 className="userInfo_header_info_name">{name}</h4>
                    <h6 className="userInfo_header_info_userName">{username}</h6>
                </div>
            </div>

            <div className="userInfo_info">
                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title name">Name</div>
                    <div className="userInfo_info_box_description">{name}</div>
                    {showCorrectionIcon(userId, userInfoId) ? <img src={correctionPNG} alt="correction_img" className="userInfo_info_box_correction"/> : null}
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title email">Email</div>
                    <div className="userInfo_info_box_description">{email}</div>
                    {showCorrectionIcon(userId, userInfoId) ? <img src={correctionPNG} alt="correction_img" className="userInfo_info_box_correction"/> : null}
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title website">Website</div>
                    <a href={website} className="userInfo_info_box_description">{website}</a>
                    {showCorrectionIcon(userId, userInfoId) ? <img src={correctionPNG} alt="correction_img" className="userInfo_info_box_correction"/> : null}
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Phone</div>
                    <div className="userInfo_info_box_description">{phone}</div>
                    {showCorrectionIcon(userId, userInfoId) ? <img src={correctionPNG} alt="correction_img" className="userInfo_info_box_correction"/> : null}
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Address</div>
                    <div className="userInfo_info_box_description">{`${address.city}, ${address.street}, ${address.suite}`}</div>
                    {showCorrectionIcon(userId, userInfoId) ? <img src={correctionPNG} alt="correction_img" className="userInfo_info_box_correction"/> : null}
                </div>
            </div>
        </div>
    )
}

export default UserInfo;