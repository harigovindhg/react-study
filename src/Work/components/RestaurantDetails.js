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
        <div className="restaurant-primary-data">
          <div className="rest-core-image">
            <img src={`${CDN_URL}${restData?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}`} alt={`${name} Image`} />
          </div>
          <div className="restaurant-name-and-details">
            <h2>{name}</h2>
            <p className="rest-rating">{`⏱️${sla?.slaString}`}</p>
            <hr />
            <p className="rest-rating">{`${feeDetails?.message}`}</p>
            <p className="rest-rating">{`${costForTwoMessage}`}</p>
            <p className="rest-rating">{`${avgRating}⭐ (${totalRatingsString})`}</p>
          </div>
        </div>
        <hr style={{ borderTopStyle: 'dashed' }} />
        <div className="veg-only-filter">
          <h3 className={`${veg ? 'vegetarian' : ''}`}>{veg ? 'Pure Veg 🌿' : 'Veg Only'}</h3>
          {!veg ? <label className="switch" >
            <input type="checkbox" checked={filterVeg} onChange={() => filterVegetarian()} />
            <span className="slider round"></span>
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
                        <div className="food-details">
                          <div className="food-details-core">
                            <div className={isVeg === 1 ? 'icon-veg' : 'icon-non-veg'} />
                            <h4>{name}</h4>
                            <p className="food-description">{description}</p>
                            {ratings?.aggregatedRating?.rating !== undefined ? <p className={`food-description ${ratings?.aggregatedRating?.rating >= 4 ? 'green' : ratings?.aggregatedRating?.rating >= 3 ? 'yellow' : ratings?.aggregatedRating?.rating < 3 ? 'red' : ''}`}>{`${ratings?.aggregatedRating?.rating}⭐  (${ratings?.aggregatedRating?.ratingCount})`}</p> : ''}
                            <p className="food-price">{`₹ ${price !== undefined ? price / 100 : defaultPrice / 100}`}</p>
                          </div>
                          {imageId !== undefined ? <div className="food-details-image">
                            <img src={`${FOOD_CDN_URL}${imageId}`} alt={`${name} image`} />
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
    <div className="body restaurant-data-main">
      {restData === null || restData === undefined ? (
        <Shimmer isRestaurantShimmer={true} />
      ) : (
        renderRestaurantDetails()
      )}
    </div>
  );
};

export default RestaurantDetails;
