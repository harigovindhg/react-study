// import { HEADER_LOGO } from '../utils/constants';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
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
    const data = useContext(UserContext);
    return (
        <header id="header" className={`header ${onlineStatus ? 'online' : 'offline shadow-offline hover:shadow-offlineHover'} flex flex-row bg-offWhite/50 flex-wrap content-evenly items-center fixed top-4 left-1/2 -translate-x-1/2 z-10 backdrop-blur-sm rounded-full w-3/5 h-20 justify-evenly transition-all duration-splitsec`}>
            <div className='logo w-full contents transition-all duration-1000 font-uzicute '>
                <h2 className="text-[1.5em] transition-transform duration-[0.3s] ease-[cubic-bezier(.215,0.61,0.355,1)] hover:scale-110">{'Crave It'}</h2>
            </div>
            {/* Never use a href in React, instead, use a Link Tag */}
            <div className="navItem transition-opacity duration-[1s]">
                <Link to="/" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">Home</Link>
                <Link to="about" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">About Us</Link>
                <Link to="profile" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">Profile</Link>
                <Link to="cart" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">Cart</Link>
                <Link to="grocery" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">{'Grocery (NEW!)'}</Link>
                <a className="login-button transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full" onClick={loginUser}>{buttonName}</a>
            </div>
            <h4>{`Online: ${onlineStatus ? '✅' : '🔴'}`}</h4>
            {buttonName === 'Logout' && <h4>{`Welcome ${data?.loggedInUser}`}</h4>}
        </header>
    );
}

export default Header;