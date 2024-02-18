import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL, FOOD_CDN_URL } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantDetails = () => {
  const [filterVeg, setFilterVeg] = useState(false);
  const { restId } = useParams();
  const restData = useRestaurantMenu(restId);


  const filterVegetarian = () => {
    setFilterVeg(!filterVeg);
  }

  renderRestaurantDetails = () => {
    const { name, avgRating, costForTwoMessage, totalRatingsString, sla, feeDetails, veg } = restData?.data?.cards[0]?.card?.card?.info;
    const itemList = restData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
      <div className="restaurant-data">
        <div className="restaurant-primary-data bg-no-repeat bg-contain flex items-center flex-wrap ">
          <div className="rest-core-image w-[10%] ">
            <img className="rounded-xl w-full" src={`${CDN_URL}${restData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}`} alt={`${name} Image`} />
          </div>
          <div className="restaurant-name-and-details ml-[10px] w-4/5">
            <h2>{name}</h2>
            <p className="rest-rating">{`⏱️${sla?.slaString}`}</p>
            <hr />
            <p className="rest-rating">{`${feeDetails?.message}`}</p>
            <p className="rest-rating">{`${costForTwoMessage}`}</p>
            <p className="rest-rating">{`${avgRating}⭐ (${totalRatingsString})`}</p>
          </div>
        </div>
        <hr style={{ borderTopStyle: 'dashed' }} />
        <div className="veg-only-filter flex items-center">
          <h3 className={`${veg ? 'vegetarian rounded-full border-vegBorder  border-x-0 border-l-0 border-r-2 bg-vegBg' : ''} mr-3 py-3 pr-3 pl-0`}>{veg ? 'Pure Veg 🌿' : 'Veg Only'}</h3>
          {!veg ? <label className="switch relative inline-block w-16 h-9" >
            <input className="opacity-0 w-0 h-0" type="checkbox" checked={filterVeg} onChange={() => filterVegetarian()} />
            <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] duration-[0.4s] before:absolute before:content-[''] before:h-8 before:w-8 before:left-[2px] before:bottom-[2px] before:bg-white before:duration-[0.4s] rounded-lg before:rounded-md "></span>
          </label> : ''}
        </div>
        {itemList?.map((item, index) => {
          if (index != 0) {
            const { title, type, itemCards } = item?.card?.card;
            let filteredItems = itemCards;
            if (filterVeg) {
              filteredItems = filteredItems?.filter(item => {
                return item?.card?.info?.isVeg === 1;
              })
            }
            return (
              <div className="sub-type" key={`${title}_${type}`}>
                {title !== undefined && filteredItems?.length > 0 ? <><h2>{`${title} (${filteredItems?.length})`}</h2>
                  {filteredItems?.map((subCatItem) => {
                    const { id, name, imageId, description, price, ratings, isVeg, defaultPrice } = subCatItem?.card?.info;
                    return (
                      <div className="food-details-wrapper" key={id} >
                        <div className="food-details flex justify-between bg-offWhiteDarker rounded-xl p-5">
                          <div className="food-details-core">
                            <div className={isVeg === 1 ? 'icon-veg w-6 h-6 content-veg' : 'icon-non-veg w-6 h-6 content-nonVeg'} />
                            <h4>{name}</h4>
                            <p className="food-description text-darkerGray">{description}</p>
                            {ratings?.aggregatedRating?.rating !== undefined ? <p className={`food-description ${ratings?.aggregatedRating?.rating >= 4 ? 'green text-ratingGreen' : ratings?.aggregatedRating?.rating >= 3 ? 'yellow text-ratingYellow' : ratings?.aggregatedRating?.rating < 3 ? 'red text-ratingOrange' : ''}`}>{`${ratings?.aggregatedRating?.rating}⭐  (${ratings?.aggregatedRating?.ratingCount})`}</p> : ''}
                            <p className="food-price">{`₹ ${price !== undefined ? price / 100 : defaultPrice / 100}`}</p>
                          </div>
                          {imageId !== undefined ? <div className="food-details-image content-center flex flex-wrap">
                            <img className="w-44 h-36 object-cover rounded-xl" src={`${FOOD_CDN_URL}${imageId}`} alt={`${name} image`} />
                          </div> : ''}
                        </div>
                        <hr />
                      </div>
                    )
                  })}</> : ''}
              </div>
            );
          }
        })}
      </div>
    )
  }

  return (
    <div className="body restaurant-data-main mx-[5%] my-0 p-[1%] bg-offWhite rounded-xl relative h-full flex flex-col backdrop-blur-[5px] top-28">
      {restData === null || restData === undefined ? (
        <Shimmer isRestaurantShimmer={true} />
      ) : (
        renderRestaurantDetails()
      )}
    </div>
  );
};

export default RestaurantDetails;
