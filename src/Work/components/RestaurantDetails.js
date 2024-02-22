import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantItemAccordion from "./RestaurantItemAccordion";
import { setRestName } from "../utils/slices/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  const [filterVeg, setFilterVeg] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const { restId } = useParams();
  const restData = useRestaurantMenu(restId);
  const dispatch = useDispatch();


  const filterVegetarian = () => {
    setFilterVeg(!filterVeg);
  };

  const handleAccordionCollapse = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const storeRestaurantName = (restName) => {
    dispatch(setRestName(restName));
  }

  const renderRestaurantDetails = () => {
    const restMainData = restData?.data?.cards?.filter((rest) => {
      return rest?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
    });
    const restaurantMenuList = restData?.data?.cards?.filter((rest) => {
      return rest?.groupedCard !== undefined && rest?.groupedCard !== null;
    });
    const { name, avgRating, costForTwoMessage, totalRatingsString, sla, feeDetails, veg, cloudinaryImageId } = restMainData[0]?.card?.card?.info;
    const itemList = restaurantMenuList[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const restaurantData = itemList?.filter(item => {
      return item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    });
    return (
      <div className="restaurant-data">
        <div className="restaurant-primary-data bg-no-repeat bg-contain flex items-center flex-wrap ">
          <div className="rest-core-image w-[15%] ">
            <img className="rounded-xl w-full" src={`${CDN_URL}${cloudinaryImageId}`} alt={`${name} Image`} />
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
        {restaurantData?.map((item, index) => {
          return <RestaurantItemAccordion key={`${item?.card?.card?.title}_${item?.card?.card?.type}`} {...item} isVegFilter={filterVeg} showItems={index === showIndex && true} handleAccordionCollapse={() => handleAccordionCollapse(index)} storeRestaurantName={() => storeRestaurantName(name)} />;
        })}
      </div>
    );
  };

  return (
    <div className="body restaurant-data-main mx-[12%] my-0 p-[1%] bg-offWhite rounded-xl relative h-full flex flex-col backdrop-blur-[5px] top-28">
      {restData === null || restData === undefined ? (
        <Shimmer isRestaurantShimmer={true} />
      ) : (
        renderRestaurantDetails()
      )}
    </div>
  );
};

export default RestaurantDetails;
