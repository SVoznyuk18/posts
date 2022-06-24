import './usersListItem.style.css';


const UsersListItem = (props) => {
    const { name, email, id } = props.user;
    const { handleShowUserInfo } = props;

    return (
        <div className='usersListItem' onClick={() => handleShowUserInfo(id)}>

            <img src='https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png' alt='' className='usersListItem_userIcon' />
            <div className='usersListItem_block'>
                <div className='usersListItem_block_name'>{name}</div>
                <div className='usersListItem_block_email'>{email}</div>
            </div>
        </div>
    )
}

export default UsersListItem;