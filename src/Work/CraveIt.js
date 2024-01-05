// Food Delivery portal
import React from 'react'
import ReactDom from 'react-dom/client'
import Header from '../Work/components/Header.js';
import Body from '../Work/components/Body.js';

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
function resizeHeaderOnScroll() {
    const distanceY = window.scrollY || document.documentElement.scrollTop,
        shrinkOn = 10,
        headerElement = document.getElementById('header');

    if (distanceY > shrinkOn) {
        headerElement.classList.add("widen");
    } else {
        headerElement.classList.remove("widen");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);

const AppContainer = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<AppContainer />);