import PostsList from '../postsList/PostsList';
import UserBlock from '../userBlock/UserBlock';
import NavBarLogOut from '../navBar/navBarLogOut/NavBarLogOut';
import './view.style.css';

const View = () => {
    return (
        <section className='view' >
            <NavBarLogOut />
            <div className='view_content'>
                <PostsList />
                <UserBlock />
            </div>

        </section>
    )
}

export default View;