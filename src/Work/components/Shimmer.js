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
  }
  const restaurantMenuSkeleton = () => {
    return (
      <div className="restaurant-data">
        <div className="restaurant-primary-data">
          <div className="rest-core-image skeleton">
            <img />
          </div>
          <div className="restaurant-name-and-details">
            <h2 className="skeleton"></h2>
            <p className="rest-rating skeleton"></p>
            <hr />
            <p className="rest-rating skeleton"></p>
            <p className="rest-rating skeleton"></p>
            <p className="rest-rating skeleton"></p>
          </div>
        </div>
        <hr style={{ borderTopStyle: 'dashed' }} />
        <div className="veg-only-filter">
          <h3 className="skeleton"></h3>
          <label className="switch" >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="sub-type">
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
  }
  const { isRestaurantShimmer } = props;
  return isRestaurantShimmer === true ? (
    restaurantMenuSkeleton()
  ) : (
    restaurantListSkeleton()
  );
};

export default Shimmer;
