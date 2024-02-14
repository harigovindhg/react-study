// import { HEADER_LOGO } from '../utils/constants';
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
const Logo = () => {
    return (
        <div className='logo'>
            {/* <img src={HEADER_LOGO} alt='CraveIt' /> */}
            <h2>{'Crave It'}</h2>
        </div>
    );
}

const Header = () => {
    const [buttonName, setButtonName] = useState('Login')
    const loginUser = () => {
        buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')
    }
    const onlineStatus = useOnlineStatus();
    return (
        <header id="header" className={`header ${onlineStatus ? 'online' : 'offline'}`}>
            <div className='logo'>
                <h2>{'Crave It'}</h2>
            </div>
            {/* Never use a href in React, instead, use a Link Tag */}
            <div className="navItem">
                <Link to="/">Home</Link>
                <Link to="about">About Us</Link>
                <Link to="profile">Profile</Link>
                <Link to="cart">Cart</Link>
                <Link to="grocery">{'Grocery (NEW!)'}</Link>
                <Link className="login-button" onClick={loginUser}>{buttonName}</Link>
            </div>
            <h4>{`Online Status: ${onlineStatus ? '✅' : '🔴'}`}</h4>
        </header>
    );
}

export default Header;