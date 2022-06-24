import { useSelector } from 'react-redux';

import UsersList from '../usersList/UsersList';
import UserInfo from '../userInfo/UserInfo'
import './userBlock.style.css';

const Userblock = () => {

    const { usersListShow } = useSelector(state => state.users);

    return (
        <div className='userBlock'>
            {usersListShow ? <UsersList /> : <UserInfo />}
        </div>
    )
}

export default Userblock;