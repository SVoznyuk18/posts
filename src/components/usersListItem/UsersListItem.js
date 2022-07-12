import './usersListItem.style.css';


const UsersListItem = (props) => {
    const { name, email, id, img } = props.user;
    const { handleShowUserInfo } = props;

    return (
        <div className='usersListItem' onClick={() => handleShowUserInfo(id)}>

            <img src={img} alt={`img ${name}`} className='usersListItem_userIcon' />
            <div className='usersListItem_block'>
                <div className='usersListItem_block_name'>{name}</div>
                <div className='usersListItem_block_email'>{email}</div>
            </div>
        </div>
    )
}

export default UsersListItem;