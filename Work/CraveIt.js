// Food Delivery portal
import React from 'react'
import ReactDom from 'react-dom/client'
/**
 * - Header
 *  - Logo
 *  - NavItems
 * - Body
 *  - Search
 *  - CardContainer
 *    - Card
 * - Footer
 *  - Copyright
 *  - Links
 *  - Address
 */
const Logo = () => {
    return (
        <div className='logo'>
            <img src="" alt='CraveIt'/>
        </div>
    );
}

const NavItem = () => {
    return (
        <div className="navItem">
            <a href="#">About</a>
            <a href="#">Support</a>
            <a href="#">Profile</a>
            <a href="#">Cart</a>
        </div>
    );
}

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <NavItem />
        </div>
    );
}
const AppContainer = () => {
    return (
        <div className="App">
            <Header />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppContainer />);