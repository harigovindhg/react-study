// import { HEADER_LOGO } from '../utils/constants';
import { useState } from "react";
const Logo = () => {
    return (
        <div className='logo'>
            {/* <img src={HEADER_LOGO} alt='CraveIt' /> */}
            <h2>{'Crave It'}</h2>
        </div>
    );
}

const NavItem = () => {
    return (
        <div className="navItem">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Profile</a>
            <a href="#">Cart</a>
            <a className="login-button">Login</a>
        </div>
    );
}

const Header = () => {
    const [buttonName, setButtonName] = useState('Login')
    const loginUser = () => {
        buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
    }
    return (
        <header id="header" className='header'>
            <div className='logo'>
                <h2>{'Crave It'}</h2>
            </div>
            <div className="navItem">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Profile</a>
                <a href="#">Cart</a>
                <a className="login-button" onClick={loginUser}>{buttonName}</a>
            </div>
        </header>
    );
}

export default Header;