import React from 'react';
import restaurantList from "../utils/restaurantList.json";

const Shimmer = (props) => {
  const restaurantListSkeleton = () => {
    return (
      restaurantList.map((item, index) => (
        <div className="rest-card max-w-full min-w-[150px] flex-[0_1_16.66%] m-0 p-4" key={`shimmer_cardItem_${index}_${item.id}`}>
          <div className="card-content skeleton p-0 bg-cover bg-no-repeat bg-transparent h-80 rounded-xl transition-all ease-in-out relative overflow-hidden before:absolute before:w-full before:h-full before:bg-glimmer before:top-0 before:left-0 before:content-[''] before:transition-all before:ease-in-out after:w-full after:h-full after:absolute after:top-28 after:left-0 after:bg-cardshadow after:content-['']">
            <div className="rest-details">
              <div className="rest-name skeleton"></div>
              <div className="rest-subdetails skeleton-parent">
                <div className="skeleton"></div>
                <p className="skeleton"></p>
                <p className="skeleton"></p>
              </div>
            </div>
          </div>
        </div >
      ))
    );
  };
  const restaurantMenuSkeleton = () => {
    return (
      <div className="restaurant-data">
        <div className="restaurant-primary-data bg-no-repeat bg-contain flex items-center flex-wrap">
          <div className="rest-core-image skeleton w-[15%] p-0 bg-cover bg-no-repeat bg-transparent h-64 rounded-xl transition-all ease-in-out relative">
            <img className='rounded-xl w-full' />
          </div>
          <div className="restaurant-name-and-details ml-[10px] w-4/5">
            <h2 className="skeleton w-52 p-0 bg-cover bg-no-repeat bg-transparent h-8 rounded-xl transition-all ease-in-out relative"></h2>
            <p className="rest-rating skeleton w-64 p-0 bg-cover bg-no-repeat bg-transparent h-5 rounded-xl transition-all ease-in-out relative"></p>
            <hr />
            <p className="rest-rating skeleton w-64 p-0 bg-cover bg-no-repeat bg-transparent h-5 rounded-xl transition-all ease-in-out relative"></p>
            <p className="rest-rating skeleton w-64 p-0 bg-cover bg-no-repeat bg-transparent h-5 rounded-xl transition-all ease-in-out relative"></p>
            <p className="rest-rating skeleton w-64 p-0 bg-cover bg-no-repeat bg-transparent h-5 rounded-xl transition-all ease-in-out relative"></p>
          </div>
        </div>
        <hr style={{ borderTopStyle: 'dashed' }} />
        <div className="sub-type mb-2 mt-2 p-2 rounded-xl border-2 transition-accordion ease-in-out duration-[0.4s]">
          <h2 className="skeleton"></h2>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  };
  const { isRestaurantShimmer } = props;
  return isRestaurantShimmer === true ? (
    restaurantMenuSkeleton()
  ) : (
    restaurantListSkeleton()
  );
};

export default Shimmer;
