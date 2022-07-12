import './main.style.css'

import { Outlet } from 'react-router-dom';
import NavBarLogIn from '../navBar/navBarLogIn/NavBarLogIn';

const Main = () => {
    return (
        <div className='main'>
            <NavBarLogIn />
            <Outlet />
        </div>
    )
}

export default Main;