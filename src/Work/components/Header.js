// import { HEADER_LOGO } from '../utils/constants';
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// const Logo = () => {
//     return (
//         <div className='logo'>
//             {/* <img src={HEADER_LOGO} alt='CraveIt' /> */}
//             <h2>{'Crave It'}</h2>
//         </div>
//     );
// };

const Header = () => {
    const [buttonName, setButtonName] = useState('Login');
    const loginUser = () => {
        buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login');
    };
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const cart = useSelector((store) => store.cart.items);

    return (
        <header id="header" className={`header ${onlineStatus ? 'online' : 'offline shadow-offline hover:shadow-offlineHover'} flex flex-row bg-offWhite/50 flex-wrap content-evenly items-center fixed top-4 left-1/2 -translate-x-1/2 z-10 backdrop-blur-sm rounded-full w-3/5 h-20 justify-evenly transition-all duration-splitsec`}>
            <div className='logo w-full contents transition-all duration-1000 font-uzicute '>
                <h2 className="text-[1.5em] transition-transform duration-[0.3s] ease-[cubic-bezier(.215,0.61,0.355,1)] hover:scale-110">{'Crave It'}</h2>
            </div>
            {/* Never use a href in React, instead, use a Link Tag */}
            <div className="navItem transition-opacity duration-[1s]">
                <Link to="/" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">Home</Link>
                <Link to="about" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">About Us</Link>
                <Link to="contact" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">Contact</Link>
                <Link to="grocery" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full">{'Grocery (NEW!)'}</Link>
                <a className="login-button transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full" onClick={loginUser}>{buttonName}</a>
                <Link to="cart" className="transition-all duration-splitsec relative py-4 px-8 rounded-md hover:bg-hoverLink hover:rounded-full inline-flex w-28">{'🛒'}<div className="bg-red-500 rounded-full w-full h-full flex justify-center text-white">{cart.length}</div></Link>
            </div>
            <h3>{`Online: ${onlineStatus ? '✅' : '🔴'}`}</h3>
            {buttonName === 'Logout' && <h3>{`Welcome ${data?.loggedInUser}`}</h3>}
        </header>
    );
};

export default Header;