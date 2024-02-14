import Card from './Card';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [restaurantListLocal, setRestaurantListLocal] = useState([]);       // Local State Variable
    const [searchResults, setSearchResults] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [searchText, setSearchText] = useState('');
    let onlineStatus = true;
    onlineStatus = useOnlineStatus();
    // const arr = useEffect(restaurantList);
    // const restaurantListLocal = arr[0];          This is just another way we can write useState, since useState returns an array,
    // const setRestaurantListLocal = arr[1];       and we usually use array destructuring, but this is perfectly fine too.

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0529437%26lng%3D77.6315163%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestaurantListLocal(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // Optional Chaining for nullish checks
            setSearchResults(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // Optional Chaining for nullish checks
            setDataLoaded(true);
        } catch (error) {
            console.log('data fetch failed');
        }
    }

    const getTopRatedRest = () => {
        const topRatedRest = restaurantListLocal.filter(restaurant => restaurant.info.avgRating > 4);
        setSearchResults(topRatedRest);
    };
    const fetchSearchedRest = () => {
        let fetchedRestaurant = restaurantListLocal;
        if (searchText !== '') {
            fetchedRestaurant = fetchedRestaurant.filter(restaurant => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
        }
        setSearchResults(fetchedRestaurant);
    }
    return (
        <div className="body">
            {onlineStatus ? <>
                <div className='search'>
                    <div className='search-inner'>
                        <input type='text' placeholder='Search for your favourite dishes' value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                        <button className='filter' id='filter-btn' onClick={fetchSearchedRest}>{'Search'}</button>
                    </div>
                    <button className='filter' id='filter-btn' onClick={getTopRatedRest} >{'Top Rated'}</button>
                </div>
                <div className='rest-card-container'>
                    {/* {!dataLoaded || restaurantListLocal.length === 0 ? */}
                    {!dataLoaded || restaurantListLocal?.length === 0 ?
                        <Shimmer />
                        : searchResults?.map((item) => (
                            <Link className='card-wrapper' to={`/restaurants/${item.info.id}`} key={item.info.id}><Card {...item} id={`userCard_${item.info.id}`} /></Link>
                        ))
                    }
                </div>
            </> : <div className='route-error'>
                <div className='body'>
                    <h2>{'Looks like you are offline. Please connect to Internet to resume browsing'}</h2>
                </div>
            </div>}
        </div>
    )
}

export default Body;