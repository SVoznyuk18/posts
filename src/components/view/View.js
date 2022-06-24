import PostsList from '../postsList/PostsList';
import UserBlock from '../userBlock/UserBlock';
import './view.style.css';

const View = () => {
    return (
        <section className='section_view' >
            <PostsList />
            <UserBlock />
        </section>
    )
}

export default View;