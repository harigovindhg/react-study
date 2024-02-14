import { useEffect, useState } from 'react';
import { REST_MENU_API } from "../utils/constants";

const useRestaurantMenu = (restId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchRestData();
    }, []);

    const fetchRestData = async () => {
        try {
            const data = await fetch(
                `${REST_MENU_API}${restId}`
            );
            const json = await data.json();
            setRestInfo(json);
        } catch (error) {
            console.log("restaurant details not available");
        }
    }
    return restInfo;
}

export default useRestaurantMenu;