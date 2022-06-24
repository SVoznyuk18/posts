import { useDispatch, useSelector } from 'react-redux';
import { showUsersList } from '../usersList/usersListSlice';
import './userInfo.style.css';

const UserInfo = () => {

    const userId = useSelector(state => state.userInfo.userId);
    const { users, usersListShow } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const getUserInfo = (arr, id) => {
        const userItem = arr.find((item) => (item.id === id))
        return userItem;
    }

    const { name, username, email, address, phone, website } = getUserInfo(users, userId)

    return (
        <div className="userInfo">
            <div className="userInfo_goBack" onClick={() => dispatch(showUsersList(!usersListShow))}>Go back</div>
            <div className="userInfo_header">
                <img className="userInfo_header_icon" src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png" alt="" />
                <div className="userInfo_header_info">
                    <h4 className="userInfo_header_info_name">{name}</h4>
                    <h6 className="userInfo_header_info_userName">{username}</h6>
                </div>

            </div>
            <div className="userInfo_info">
                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title name">Name</div>
                    <div className="userInfo_info_box_description">{name}</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title email">Email</div>
                    <div className="userInfo_info_box_description">{email}</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title website">Website</div>
                    <a href={website} className="userInfo_info_box_description">{website}</a>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Phone</div>
                    <div className="userInfo_info_box_description">{phone}</div>
                </div>

                <div className="userInfo_info_box">
                    <div className="userInfo_info_box_title phone">Address</div>
                    <div className="userInfo_info_box_description">{`${address.city}, ${address.street}, ${address.suite}`}</div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;