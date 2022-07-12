import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../singIn/singInSlice';

import LogOutsvg from '../../../assets/svg/LogOutSvg';
import './navBarLogOut.style.css';

const NavBarLogOut = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    const { userId } = useSelector(state => state.singIn);

    const getUserInfo = (arr, id) => {
        const userInfo = arr.find(item => item.id === id);
        return userInfo;
    }

    const { img, name } = getUserInfo(users, userId);

    return (
        <nav className="navBarLogOut">
            <ul className="navBarLogOut_container">
                <li className="navBarLogOut_item">
                    <div className='navBarLogOut_userInfo'>
                        <img className='navBarLogOut_userInfo_img' src={img} alt={`img ${img}}`} />
                        <div className='navBarLogOut_userInfo_name'>{name}</div>
                    </div>
                </li>
                <li className="navBarLogOut_item" onClick={() => dispatch(logOut())}>
                    <LogOutsvg />
                </li>
            </ul>
        </nav>
    )
}
export default NavBarLogOut;