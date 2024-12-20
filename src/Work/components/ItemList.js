import React from 'react';
import { FOOD_CDN_URL } from "../utils/constants";
import { addItem } from '../utils/slices/cartSlice';
import { useDispatch } from 'react-redux';

const ItemList = (props) => {

    const filteredItems = props?.filteredItems;
    const cartItems = props?.cartItems;

    const dispatch = useDispatch();
    const handleAddItem = (itemDetail) => {
        // dispatch an action
        props.storeRestaurantName();
        dispatch(addItem(itemDetail));
    };

    return (
        <>
            {filteredItems?.map((subCatItem) => {
                const { id, name, imageId, description, price, ratings, isVeg, defaultPrice } = subCatItem?.card?.info;
                return (
                    <div data-testid='rest-item' className="food-details-wrapper rounded-xl transition-all duration-[0.4s]" key={id} >
                        <div className="food-details flex justify-between p-5 m-2 border-b-[1px] border-darkerGray">
                            <div className="food-details-core w-10/12">
                                <div className={isVeg === 1 ? 'icon-veg w-6 h-6 content-veg' : 'icon-non-veg w-6 h-6 content-nonVeg'} />
                                <h4>{name}</h4>
                                <p className="food-description text-darkerGray">{description}</p>
                                {ratings?.aggregatedRating?.rating !== undefined ? <p className={`food-description ${ratings?.aggregatedRating?.rating >= 4 ? 'green text-ratingGreen' : ratings?.aggregatedRating?.rating >= 3 ? 'yellow text-ratingYellow' : ratings?.aggregatedRating?.rating < 3 ? 'red text-ratingOrange' : ''}`}>{`${ratings?.aggregatedRating?.rating}⭐  (${ratings?.aggregatedRating?.ratingCount})`}</p> : ''}
                                <p className="food-price">{`₹ ${price !== undefined ? price / 100 : defaultPrice / 100}`}</p>
                            </div>
                            <div className="food-details-image content-center justify-center flex flex-wrap items-end">
                                {imageId !== undefined ?
                                    <img className="w-44 h-36 object-cover rounded-xl" src={`${FOOD_CDN_URL}${imageId}`} alt={`${name} image`} />
                                    : ''}
                                <button className="absolute bg-gray-800 text-offWhite p-3 rounded-lg w-1/12 transition-all duration-[0.4s] hover:bg-slate-600" onClick={() => handleAddItem(subCatItem?.card?.info)}>{' ADD + '}</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ItemList;