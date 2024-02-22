import React from 'react';
import ItemList from './ItemList';
import { useSelector } from 'react-redux';

const RestaurantItemAccordion = ({ card, isVegFilter, showItems, handleAccordionCollapse, storeRestaurantName }) => {
    const { title, type, itemCards } = card?.card;
    const filterVeg = isVegFilter;
    let filteredItems = itemCards;
    const cartItems = useSelector(store => store.cart.items);
    if (filterVeg) {
        filteredItems = filteredItems?.filter(item => {
            return item?.card?.info?.isVeg === 1;
        });
    }
    const handleAccordion = () => {
        handleAccordionCollapse();
    };
    return (
        <div className="sub-type mb-2 mt-2 p-2 rounded-xl border-2 transition-accordion ease-in-out duration-[0.4s]" key={`${title}_${type}`}>
            {title !== undefined && filteredItems?.length > 0 ? <>
                <div className="expanded w-full h-14 flex justify-between transition-accordion ease-in-out duration-[0.4s] items-center cursor-pointer" onClick={() => handleAccordion()}>
                    <h2>{`${title} (${filteredItems?.length})`}</h2>
                    <strong className="m-1 indicator">{showItems ? "🔻" : "🔺"}</strong>
                </div>
                <div className="transition-accordion ease-in-out duration-[0.4s] expanded">
                    {showItems && <ItemList filteredItems={filteredItems} cartItems={cartItems} storeRestaurantName={storeRestaurantName} />}
                </div>
            </> : ''}
        </div>
    );
};

export default RestaurantItemAccordion;