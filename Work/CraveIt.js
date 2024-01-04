// Food Delivery portal
import React from 'react'
import ReactDom from 'react-dom/client'
import restaurantList from '../assets/mock/restaurantList.json';
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
const Logo = () => {
    return (
        <div className='logo'>
            <img src={require('../assets/images/craveitlogo.png')} alt='CraveIt' />
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

const SearchBar = () => {
    return (
        <div className='search'>
            <input type='search' placeholder='Search for your favourite dishes' />
        </div>
    )
}

const Card = (props) => {
    return (
        <div className='rest-card' id={`cardcontainer_${props.id}`}>
            <div className='card-content' key={props.id} style={{ backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId})` }}>
                <div className='rest-details' id={`cardcontainerdetails_${props.id}`} key={`card_   ${props.id}`} >
                    <div className='rest-name'>
                        <h3>{props.name}</h3>
                    </div>
                    <div className='rest-subdetails'>
                        <div style={{ display: 'flex' }}>
                            {`${props.avgRating}`}
                            <div style={{ margin: '-2px 5px 0px 5px' }}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                                    <defs>
                                        <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#21973B">
                                            </stop>
                                            <stop offset="1" stopColor="#128540">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <strong>{` • ${props.sla.deliveryTime} mins`}</strong>
                        </div>
                        <p>{`${(props.cuisines.length > 3) ? `${props.cuisines.slice(0, 3)}, ...` : props.cuisines}`}</p>
                        <p>{`${props.costForTwo}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CardContainer = () => {
    return (
        <div className='rest-card-container'>
            {restaurantList.map((item, index) => {
                return <Card {...item.info} key={`${index}_${item.info.id}`}/>
            })}
            {/* <Card name={'Aattutheeram Kerala restaurant'} rating={'4.7'} cuisine={'Kerala, Seafood, Biryani, Chinese'} image={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ff9cb9c7130ae2c4697f8274e2488795'} /> */}
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <SearchBar />
            <CardContainer />
        </div>
    )
}
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