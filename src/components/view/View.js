import PostsList from '../postsList/PostsList';
import UserInfo from '../userList/UserInfo';
import './view.style.css';



const View = () => {
    return (
        <section className='section_view' >

            <PostsList/>
            <UserInfo/>

            {/* <div className="usersList">User List</div>

            <div className="userInfo"> User Info</div>
 */}
        </section>
    )
}

export default View;