import Card from './Card';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
    const [restaurantListLocal, setRestaurantListLocal] = useState([]);       // Local State Variable
    const [searchResults, setSearchResults] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [searchText, setSearchText] = useState('');

    // const arr = useEffect(restaurantList);
    // const restaurantListLocal = arr[0];          This is just another way we can write useState, since useState returns an array,
    // const setRestaurantListLocal = arr[1];       and we usually use array destructuring, but this is perfectly fine too.

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0529437&lng=77.6315163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestaurantListLocal(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // Optional Chaining for nullish checks
            setSearchResults(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // Optional Chaining for nullish checks
            setDataLoaded(true);
            console.log(json);
        } catch (error) {
            console.log('data fetch failed');
        }
    }

    const getTopRatedRest = () => {
        const topRatedRest = restaurantListLocal.filter(restaurant => restaurant.info.avgRating > 4);
        setRestaurantListLocal(topRatedRest);
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
                {!dataLoaded || restaurantListLocal.length === 0 ?
                    <Shimmer />
                    : searchResults.map((item) => (
                        <Card {...item} key={item.info.id} id={`userCard_${item.info.id}`} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;