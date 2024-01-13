import Card from './Card';
import restaurantList from '../utils/restaurantList.json';
import { useState } from 'react';

const Body = () => {
    const [restaurantListLocal, setRestaurantListLocal] = useState(restaurantList);       // Local State Variable

    // const arr = useEffect(restaurantList);
    // const restaurantListLocal = arr[0];          This is just another way we can write useState, since useState returns an array,
    // const setRestaurantListLocal = arr[1];       and we usually use array destructuring, but this is perfectly fine too.


    const getTopRatedRest = () => {
        const topRatedRest = restaurantListLocal.filter(restaurant => restaurant.info.avgRating > 4);
        setRestaurantListLocal(topRatedRest);
    };
    const fetchSearchedRest = (event) => {
        const searchText = event.target.value;
        let fetchedRestaurant = restaurantList;
        if (searchText !== '') {
            fetchedRestaurant = fetchedRestaurant.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
        }
        setRestaurantListLocal(fetchedRestaurant);
    }
    return (
        <div className="body">
            <div className='search'>
                <input type='search' placeholder='Search for your favourite dishes' onKeyUp={fetchSearchedRest}/>
                <button className='filter' id='filter-btn' onClick={getTopRatedRest} >{'Get Top Rated Restaurants'}</button>
            </div>
            <div className='rest-card-container'>
                {restaurantListLocal.map((item) => (
                    <Card {...item} key={item.info.id} id={`userCard_${item.info.id}`} />
                ))}
            </div>
        </div>
    )
}

export default Body;