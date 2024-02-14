import { useState, useEffect } from 'react';

const useRestaurantList = () => {
    const [restList, setRestList] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        fetchRestList();
    }, []);

    const fetchRestList = async () => {
        try {
            const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0529437%26lng%3D77.6315163%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
            const json = await data.json();
            setRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);     // Optional Chaining for nullish checks
            setDataLoaded(true);
        } catch (error) {
            console.log('data fetch failed');
        }
    }
    return { restList, dataLoaded };
}

export default useRestaurantList;