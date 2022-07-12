import { NavLink } from 'react-router-dom'
import './navbarLogIn.style.css'

const NavBarLogIn = () => {
    return (
        <nav className="navBarLogIn">
            <ul className="navBarLogIn_container">
                <li className="navBarLogIn_item">
                    <NavLink to='/' className={({ isActive }) => isActive ? "navBarLogIn_item_link navBarLogIn_item_active" : "navBarLogIn_item_link"}    >Sing In</NavLink>
                </li>
                <li className="navBarLogIn_item">
                    <NavLink to='singUp' className={({ isActive }) => isActive ? "navBarLogIn_item_link navBarLogIn_item_active" : "navBarLogIn_item_link"} href="">Sing Up</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBarLogIn;