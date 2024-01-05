import { HEADER_LOGO } from '../utils/constants';
const Logo = () => {
    return (
        <div className='logo'>
            <img src={HEADER_LOGO} alt='CraveIt' />
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
        </div>
    );
}

const Header = () => {
    return (
        <header id="header" className='header'>
            <Logo />
            <NavItem />
        </header>
    );
}

export default Header;