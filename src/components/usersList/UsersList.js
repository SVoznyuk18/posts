import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers, showUsersList } from './usersListSlice';
import { getUserId } from '../userInfo/userInfoSlice';

import UsersListItem from '../usersListItem/UsersListItem';
import Spinner from '../spiner/Spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './usersList.style.css';


const UsersList = () => {
    const dispatch = useDispatch();
    const { users, usersListShow, usersLoadingStatus } = useSelector(state => state.users);

  /*   useEffect(() => {
        dispatch(fetchUsers());
    }, []); */

    const showUserInfo = (id) => {
        dispatch(showUsersList(!usersListShow));
        dispatch(getUserId(id));
    }

    const renderUserList = (arr, status) => {
        if (status === 'loading') {
            return <Spinner />
        } else if (status === 'loaded') {
            return arr.map(item => {
                return (
                    <UsersListItem key={item.id} user={item} handleShowUserInfo={showUserInfo} />
                )
            });
        } else if (status === 'error') {
            return <ErrorMessage />
        }
    }

    const elements = renderUserList(users, usersLoadingStatus)

    return (
        <div className="usersList">
            <div className='usersList_header'>Users</div>
            {/* {users.users.map(item => {
                return(
                    <UsersListItem key={item.id} user={item} handleShowUserInfo={showUserInfo}/>
                )
            })} */}
            {elements}
        </div>
    );
}

export default UsersList;